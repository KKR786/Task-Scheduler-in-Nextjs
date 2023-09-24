import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";
import { dbConnection } from "@/db/database";

export const POST = async (req) => {
    try {
        const { name, email, designation, password } = await req.json();

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        dbConnection();
        
        const user = await User.create({
            name,
            email,
            designation,
            password: hashedPassword,
        });

        return NextResponse.json({
            message: `New user ${user.name} created`,
            user,
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            message: `Something went wrong: ${error.message}`,
        }, { status: 500 });
    }
}