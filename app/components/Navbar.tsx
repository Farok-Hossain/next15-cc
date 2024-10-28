import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
