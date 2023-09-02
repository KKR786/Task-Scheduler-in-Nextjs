'use client'

import React, {useState} from "react";

function RegistrationComponent() {
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [password, setPassword] = useState('')

    

  return (
    <div>
      <form>
        <p className="mb-4 text-center font-semibold">Registration</p>

        <div className="relative mb-4">
          <input
            type="text"
            className="peer block min-h-[auto] border w-full rounded px-3 py-[0.45rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none placeholder:opacity-0 focus:placeholder:opacity-0 focus:border-2 focus:border-teal-400 caret-teal-400"
            placeholder="Username"
            value={name} onChange={(e) =>setName(e.target.value)} 
            />
          <label className={`pointer-events-none peer-focus:bg-white peer-focus:px-2 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${name ? '-translate-y-[0.9rem] scale-[0.8] bg-white px-2' : ''} motion-reduce:transition-none`}>
            Username
          </label>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            className="peer block min-h-[auto] border w-full rounded px-3 py-[0.45rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none placeholder:opacity-0 focus:placeholder:opacity-0 focus:border-2 focus:border-teal-400 caret-teal-400"
            placeholder="Designation"
            value={designation} onChange={(e) =>setDesignation(e.target.value)} 
            />
          <label className={`pointer-events-none peer-focus:bg-white peer-focus:px-2 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${designation ? '-translate-y-[0.9rem] scale-[0.8] bg-white px-2' : ''} motion-reduce:transition-none`}>
            Designation
          </label>
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            className="peer block min-h-[auto] border w-full rounded px-3 py-[0.45rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none placeholder:opacity-0 focus:placeholder:opacity-0 focus:border-2 focus:border-teal-400 caret-teal-400"
            placeholder="Password"
            value={password} onChange={(e) =>setPassword(e.target.value)} 
          />
          <label className={`pointer-events-none peer-focus:bg-white peer-focus:px-2 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${password ? '-translate-y-[0.9rem] scale-[0.8] bg-white px-2' : ''} motion-reduce:transition-none`}>
            Password
          </label>
        </div>
        <div className="pb-1 pt-1 text-center">
          <button
            className="mb-3 inline-block w-full rounded px-4 py-3 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            style={{
              'background-color': "darkmagenta",
            }}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationComponent;
