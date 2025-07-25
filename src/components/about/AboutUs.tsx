import Image from "next/image";
import aboutUsImageOne from "@/public/placeholders/women_in_tech_event.webp";
import aboutUsImageTwo from "@/public/placeholders/ambiguous.webp";

const AboutUs = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <div className="flex max-w-md flex-col items-center text-center md:w-1/2">
          <Image
            src={aboutUsImageOne}
            alt="Our Values"
            className="mb-4 h-[25vh] w-[80vw] max-w-[300px] rounded-3xl object-cover"
          />
          <p className="mb-2 text-xl font-medium"> Our Values</p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </p>
        </div>
        <div className="flex max-w-md flex-col items-center text-center md:w-1/2">
          <Image
            src={aboutUsImageTwo}
            alt="Our Values"
            className="mb-4 h-[25vh] w-[80vw] max-w-[300px] rounded-3xl object-cover"
          />
          <p className="mb-2 text-xl font-medium"> Our Mission</p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
