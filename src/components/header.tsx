import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="h-24 flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <Image
          className=""
          src={{
            src: "https://res.cloudinary.com/dsv7usbai/image/upload/f_auto,q_auto/snjhsssrvs0xuan2wosq",
            width: 60,
            height: 60,
          }}
          alt=""
        />
        <h1 className="text-xl font-bold">
          <span>Cric</span>
          <span className="text-red-500">.</span>
          <span>Boost</span>
        </h1>
      </div>

      <div id="navLinks">
        <Link href={"/aboutus"} scroll={false}>
          About Us
        </Link>
      </div>
    </section>
  );
};

export default Header;
