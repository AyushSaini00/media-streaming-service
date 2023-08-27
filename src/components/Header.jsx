import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "./icons/UserCircleIcon";

const Header = (props) => {
  const { session } = props;

  return (
    <header className="flex justify-between items-center py-5 px-6">
      <div className="flex gap-x-3">
        <Link href={`/`}>media streaming</Link>
        <Link href={`/subscribe`}>subscribe</Link>
        <Link href={`/free`}>free</Link>
        <Link href={`/premium`}>premium</Link>
      </div>
      <div className="flex gap-x-3">
        <div>
          <input type="text" placeholder="search" />
        </div>
        <button>
          {!session ? <UserCircleIcon /> : <Image alt="user" src={""} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
