import Image from "next/image";

import { minh_nhat, nhat_quang, ninh_lb } from "@/assets/assets";

export default function Motivation() {
    return (
        <section
            className={`md:min-h-screen flex flex-col justify-center pb-12 md:pb-52 px-6 lg:px-24`}
        >
            <div className="flex justify-center">
                <div className="relative text-black leading-[0.8] pt-8 font-right_grotesk">
                    <span className="text-[80px] md:text-[200px]" >RESTLESS</span> <br />
                    <span className="text-primary-red text-[110px] md:text-[250px] lg:text-[300px] xl:text-[350px]">
                        SOULS NEVER
                    </span>
                    <br />
                    <span className="text-[100px] md:text-[230px] lg:text-[280px] xl:text-[330px]">
                        GIVE UP
                    </span>
                    <Image
                        src={ninh_lb}
                        alt="image of minh and nhat"
                        className=" md:block absolute z-[-1] top-[-5%] md:top-[-5%] xl:top-[-15%] left-[-8%] md:left-[-10%] xl:left-[-15%] w-[24%] md:w-[30%] xl:w-1/3 opacity-60"
                    />
                    <Image
                        src={minh_nhat}
                        alt="image of minh and nhat"
                        className=" md:block absolute z-[-1] top-[-5%] md:top-[-5%] xl:top-[-10%] right-[-4%] md:right-[-8%] xl:right-[-30%] w-[50%] md:w-[60%] xl:w-3/4"
                    />
                    <Image
                        src={nhat_quang}
                        alt="image of nhat and quang"
                        className="md:block absolute z[-1] bottom-[5%] right-[-4%] md:right-[-8%] xl:right-[-30%] w-[38%]"
                    />
                </div>
            </div>
        </section>
    );
}
