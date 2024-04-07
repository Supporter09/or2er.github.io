import Image from "next/image";

// Team Or2er Images
import dmn from "@/assets/dmn.png";
import kna from "@/assets/kna.png";
import mvnm from "@/assets/mvnm.png";
import ninh from "@/assets/ninh.png";
import pnq from "@/assets/pnq.png";

export default function HeroSection() {
  return (
    <section className="flex justify-center relative">
      <h1 className="text-[#F10000] font-right_grotesk leading-none text-[300px] lg:text-[400px] xl:text-[600px] 2xl:text-[720px]">
        TEAM OR2ER
      </h1>

      <div className="flex justify-between w-full absolute bottom-[19%] left-0 px-32">
        <div className="w-1/5 flex overflow-visible">
          <Image
            src={kna}
            alt="kna"
            className="object-contain max-w-[110%]"
          />
        </div>

        <div className="w-1/5 flex">
          <Image
            src={dmn}
            alt="dmn"
            className="object-contain max-w-[110%]"
          />
        </div>

        <div className="w-1/5 flex overflow-visible">
          <Image
            src={mvnm}
            alt="mvnm"
            className="object-contain max-w-[160%]"
          />
        </div>

        <div className="w-1/5 flex">
          <Image
            src={pnq}
            alt="pnq"
            className="object-contain"
          />
        </div>

        <div className="w-1/5 flex">
          <Image
            src={ninh}
            alt="ninh"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
