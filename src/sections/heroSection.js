import Image from "next/image";

// Team Or2er Images
import dmn from "@/assets/dmn.png";
import kna from "@/assets/kna.png";
import mvnm from "@/assets/mvnm.png";
import ninh from "@/assets/ninh.png";
import pnq from "@/assets/pnq.png";

export default function HeroSection() {
    return (
        <section className="flex justify-center relative pt-24 sm:pt-6 lg:pt-12 2xl:pt-24 overflow-y-hidden">
            <h1 className="text-primary-red font-right_grotesk md:pt-32 xl:pt-52 leading-[0.52] text-[120px] xsm:text-[160px] md:text-[300px] lg:text-[400px] xl:text-[600px] 2xl:text-[720px]">
                TEAM OR2ER
            </h1>

            <div className="flex justify-between w-full absolute bottom-[-10%] left-0 md:px-20 lg:px-16 2xl:px-32">
                <div className="flex justify-between relative w-full">
                    <div className="w-[24%] bottom-0 left-0 flex items-end absolute">
                        <Image src={kna} alt="kna" className="object-contain" />
                    </div>

                    <div className="w-[22%] bottom-0 left-[20%] z-20 flex absolute">
                        <Image src={dmn} alt="dmn" className="object-contain" />
                    </div>

                    <div className="w-[24%] bottom-0 left-[36%] z-50 flex sm:pb-8 items-end absolute">
                        <Image
                            src={mvnm}
                            alt="mvnm"
                            className="object-contain"
                        />
                    </div>

                    <div className="w-[24%] bottom-0 left-[56%] z-20 flex items-end absolute">
                        <Image src={pnq} alt="pnq" className="object-contain" />
                    </div>

                    <div className="w-[24%] bottom-0 left-[75%] flex items-end absolute">
                        <Image
                            src={ninh}
                            alt="ninh"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
