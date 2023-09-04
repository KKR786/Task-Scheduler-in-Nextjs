import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";
import { dbConnection } from "@/app/db/database";

export async function POST (req) {
    try {
        const {name, email, designation, password} = await req.json();

        await dbConnection();

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({name, email, designation, password: hashedPassword});

        return NextResponse.json({message: 'New User Created'}, { status: 201 });

    } catch (error) {
        return NextResponse.json({message: error}, { status: 500 });
    }
}