"use client";

import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "./icons/UserCircleIcon";
import useSidebar from "../hooks/useSidebar";
import ProfileSidebar from "./ProfileSidebar";
import { useSession } from "next-auth/react";

const Header = (props) => {
  const { data: session } = useSession({
    // required: true,
    // onUnauthenticated() {
    //   redirect("/api/auth/signin?callbackUrl=/client");
    // },
  });

  console.log(session);

  const {
    isSidebarOpen: isProfileSidebarOpen,
    openSidebar: openProfileSidebar,
    dismissSidebar: dismissProfileSidebar,
  } = useSidebar();

  return (
    <>
      <header className="flex justify-between items-center py-5 px-6">
        <div className="flex gap-x-3">
          <Link href={`/`}>media streaming</Link>
          <Link href={`/subscribe`}>subscribe</Link>
          <Link href={`/free`}>free</Link>
          <Link href={`/premium`}>premium</Link>
        </div>
        <div className="flex gap-x-3">
          <div>
            <input
              className="border rounded-md py-1 px-2"
              type="text"
              placeholder="search"
            />
          </div>
          <button
            className="flex items-center justify-center w-8 h-8 relative"
            onClick={openProfileSidebar}
          >
            {!session?.user?.image ? (
              <UserCircleIcon className="w-7 h-7" />
            ) : (
              <Image
                className="w-8 h-8 rounded-full"
                fill={true}
                alt={session.user.name}
                src={session.user.image}
              />
            )}
          </button>
        </div>
      </header>
      <ProfileSidebar
        {...{
          isProfileSidebarOpen,
          dismissProfileSidebar,
          session,
        }}
      />
    </>
  );
};

export default Header;
