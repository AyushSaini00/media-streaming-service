"use client";

import Link from "next/link";
import { useState } from "react";

const Page = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const updateProfile = () => {};

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <div className="flex w-full text-xl mb-4 gap-x-2">
          <Link href={`/`}>←</Link>
          <span>edit your profile</span>
        </div>
        <div className="flex flex-col gap-y-5 p-4 border rounded-md">
          <form
            className="flex flex-col gap-y-5"
            onSubmit={(evt) => {
              evt.preventDefault();
              updateProfile();
            }}
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                className="border rounded-sm p-1"
                id="name"
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">Password</label>
              <input
                className="border rounded-sm p-1"
                id="name"
                type="text"
                placeholder="your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="text-sm border border-gray-400 rounded-md py-1 px-2"
              type="submit"
            >
              save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
