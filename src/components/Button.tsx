import Link from "next/link";

interface IButtonProps {
  text: string;
  href: string;
  center?: boolean;
  bgColor: "black" | "gray";
  handlClick?: () => void
}

function Button({ text, href, center, bgColor, handlClick }: IButtonProps) {
  return (
    <Link
      href={href}
      className={` px-6 font-bold py-2 rounded ${
        center ? "mx-auto" : ""
      } ${bgColor == "gray" ? "bg-gray-3 text-black" : "bg-black text-white "} shadow-lg`}
      onClick={handlClick}
    >
      {text}
    </Link>
  );
}

export default Button;
