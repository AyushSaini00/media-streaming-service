"use client";

import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "./icons/UserCircleIcon";
import useSidebar from "../hooks/useSidebar";
import ProfileSidebar from "./ProfileSidebar";

const Header = (props) => {
  const { session } = props;
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
          <button onClick={openProfileSidebar}>
            {!session ? (
              <UserCircleIcon className="w-7 h-7" />
            ) : (
              <Image alt="user" src={""} />
            )}
          </button>
        </div>
      </header>
      <ProfileSidebar
        {...{
          isProfileSidebarOpen,
          dismissProfileSidebar,
        }}
      />
    </>
  );
};

export default Header;
