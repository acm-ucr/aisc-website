import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

type Properties = {
  headshot: StaticImageData;
  name: string;
  role: string;
  linkedin: string;
};

const Board = ({ headshot, name, role, linkedin }: Properties) => {
  return (
    <div className="m-10 w-56 flex-col text-center">
      <Image
        src={headshot}
        alt="headshot"
        className="aspect-square rounded-full object-cover object-center"
      />
      <div className="pt-4 text-2xl font-semibold">{name}</div>
      <div className="pt-4 text-2xl">{role}</div>
      <div className="items-center justify-center pt-4">
        <Link href={linkedin}>
          <FaLinkedin className="fill-aisc-blue mx-auto h-15 w-15" />
        </Link>
      </div>
    </div>
  );
};

export default Board;
