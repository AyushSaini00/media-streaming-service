"use client";
import { signIn, providers } from "next-auth/react";
import { useState } from "react";

const Page = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center max-w-xl w-full">
        <div className="flex w-full items-center justify-center text-xl mb-4">
          login to continue
        </div>
        <div className="flex w-full flex-col gap-y-6 p-4 border rounded-md">
          <form
            className="flex flex-col gap-y-5"
            onSubmit={(evt) => {
              evt.preventDefault();
              signIn("credentials", { username, password });
            }}
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="username">username → </label>
              <input
                className="border rounded-sm p-1"
                id="username"
                type="text"
                placeholder="enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">password → </label>
              <input
                className="border rounded-sm p-1"
                id="password"
                type="password"
                placeholder="enter your password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="text-base border border-gray-600 bg-gray-600 text-white rounded-md py-1 px-2"
                type="submit"
              >
                login with credentials
              </button>
            </div>
          </form>
          <div className="text-sm flex w-full justify-center">
            or, you can login with either{" "}
          </div>
          <div className="flex gap-x-3 justify-center">
            <button
              onClick={() => {
                signIn("google");
              }}
              className="flex items-center gap-3 justify-center border border-gray-400 text-black rounded-md py-1 px-2"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_107_355)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.4578 8.73046C20.8057 7.15486 18.6011 6.29651 16.32 6.33178C12.1458 6.33178 8.60074 9.14785 7.33672 12.9399C6.6665 14.927 6.6665 17.0788 7.33671 19.066H7.34258C8.61247 22.8521 12.1517 25.6682 16.3259 25.6682C18.4806 25.6682 20.3304 25.1171 21.7641 24.1436V24.1397C23.4514 23.0226 24.6037 21.2648 24.9623 19.2776H16.32V13.1163H31.4117C31.5998 14.1863 31.688 15.2798 31.688 16.3675C31.688 21.2339 29.9488 25.3483 26.9228 28.135L26.9259 28.1374C24.2744 30.5831 20.6353 32 16.32 32C10.2704 32 4.73814 28.5901 2.02199 23.1872C-0.247334 18.6662 -0.247329 13.3397 2.022 8.81869C4.73815 3.4099 10.2704 -2.04114e-05 16.32 -2.04114e-05C20.2943 -0.0470533 24.1333 1.44624 27.0258 4.16239L22.4578 8.73046Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_107_355">
                    <rect width="32" height="32" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base">google</span>
            </button>
            <button
              onClick={() => {
                signIn("facebook");
              }}
              className="flex items-center gap-3 justify-center border border-blue-500 bg-blue-500 text-white rounded-md py-1 px-2"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3333 16C29.3333 8.64001 23.36 2.66667 16 2.66667C8.64 2.66667 2.66667 8.64001 2.66667 16C2.66667 22.4533 7.25333 27.8267 13.3333 29.0667V20H10.6667V16H13.3333V12.6667C13.3333 10.0933 15.4267 8.00001 18 8.00001H21.3333V12H18.6667C17.9333 12 17.3333 12.6 17.3333 13.3333V16H21.3333V20H17.3333V29.2667C24.0667 28.6 29.3333 22.92 29.3333 16Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-base">facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
