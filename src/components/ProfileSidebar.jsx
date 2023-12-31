import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef } from "react";
import XCircleIcon from "./icons/XCircleIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const ProfileSidebar = (props) => {
  const { isProfileSidebarOpen, dismissProfileSidebar, session } = props;

  const sidebarRef = useRef(null);
  const animation = useSpring({
    transform: isProfileSidebarOpen ? "translateX(0%)" : "translateX(100%)",
  });

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dismissProfileSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <animated.div
      ref={sidebarRef}
      style={{
        ...animation,
        position: "fixed",
        top: 0,
        right: 0,
        height: "100%",
        width: "350px",
        zIndex: 10,
      }}
      className="flex flex-col bg-black text-white py-5 px-4"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">Preferences</div>
        <button onClick={dismissProfileSidebar}>
          <XCircleIcon />
        </button>
      </div>
      <div className="flex flex-col h-full justify-between">
        {session ? (
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4 mb-3">
              {session?.user?.image ? (
                <div className="w-10 h-10 relative">
                  <Image
                    className="rounded-full"
                    fill={true}
                    alt={session.user?.name || "profile"}
                    src={session.user.image}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 relative">
                  <UserCircleIcon className=" w-10 h-10" />
                </div>
              )}

              <div>
                <div>Hi, {session.user.name}</div>
                <div>
                  click here to edit your{" "}
                  <Link
                    className="underline"
                    href={`/profile`}
                    onClick={dismissProfileSidebar}
                  >
                    profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full mb-3">
              <Link
                className="underline"
                href={`/subscribe`}
                onClick={dismissProfileSidebar}
              >
                subscribe
              </Link>
            </div>
            <div className="flex w-full mb-3">
              <button
                className="underline"
                onClick={() => {
                  dismissProfileSidebar();
                  signOut();
                }}
              >
                sign out
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4 mb-3">
              <UserCircleIcon className=" w-10 h-10" />
              <div>
                <div>Hello!!!</div>
                <div>
                  Please{" "}
                  <Link
                    className="underline"
                    href={`/login`}
                    onClick={dismissProfileSidebar}
                  >
                    login
                  </Link>{" "}
                  to continue
                </div>
              </div>
            </div>
            <div>
              <Link
                className="underline"
                href={`/subscribe`}
                onClick={dismissProfileSidebar}
              >
                subscribe
              </Link>
            </div>
          </div>
        )}
        <div>cc : media streaming service</div>
      </div>
    </animated.div>
  );
};

export default ProfileSidebar;
