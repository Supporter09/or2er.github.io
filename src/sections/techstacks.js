import {
    mongodb,
    neo4j,
    nextjs,
    nodejs,
    pytorch,
    redis,
    scikit,
    spring,
    tensorflow,
} from "@/assets/assets.js";

import Image from "next/image";

export default function TechStacks() {
    return (
        <section
            id="#techstack"
            className={`grid grid-cols-1 lg:grid-cols-2 py-12 md:py-24 px-6 lg:px-24 3xl:px-52 overflow-hidden`}
        >
            <div className="flex flex-col">
                <div className="text-left">
                    <h1 className="text-[120px] md:text-[180px] xl:text-[200px] text-[#000000] leading-none font-right_grotesk">
                        OUR TECHSTACK
                    </h1>
                    <h1 className="text-[120px] md:text-[180px] xl:text-[200px] text-primary-red leading-[0.6] font-right_grotesk">
                        AND TOOLS
                    </h1>
                </div>

                <p className="text-xl/normal xl:text-3xl/normal pb-8 xl:pb-16">
                    - 1+ years of client work
                </p>
                <p className="text-xl/normal xl:text-3xl/normal pr-16">
                    Members of Team or2er come from a variety of professional
                    backgrounds. Our tech stack is made up of several
                    cutting-edge framework and tool components working together.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-12 lg:pt-0 ">
                <div className="flex justify-center">
                    <Image
                        src={scikit}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={pytorch}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={tensorflow}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={spring}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={neo4j}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={redis}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={mongodb}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={tensorflow}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
                <div className="flex justify-center">
                    <Image
                        src={nodejs}
                        alt="scikit"
                        className="h-[100%] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
