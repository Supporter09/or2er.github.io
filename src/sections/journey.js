import Image from "next/image";

import { journey } from "@/constants/constants";

export default function Journey() {
    return (
        <section
            className={`min-h-screen flex flex-col justify-center pt-24 px-6 lg:px-24 overflow-hidden`}
        >
            <div className="text-center">
                <h1 className="text-[250px] md:text-[300px] xl:text-[500px] text-primary-red leading-none font-right_grotesk">
                    <span className="text-stroke">OUR</span> JOURNEY
                </h1>
            </div>
            {journey.map((part, index) => (
                <div
                    className={`flex pb-24 xl:pb-52 ${index % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}
                    key={index}
                >
                    <div className="w-1/2 flex justify-end">
                        <p
                            className={`text-xl/normal xl:text-4xl/normal ${index % 2 == 0 ? "pl-16 text-right" : "pr-16 xl:pr-28"}`}
                        >
                            {part.desc}
                        </p>
                    </div>

                    <div className="w-1/2">
                        <Image
                            src={part.img}
                            alt="journey img"
                            className={`aspect-video h-auto object-cover ${index % 2 == 0 ? "mr-auto" : "ml-auto"} `}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
