import Image from "next/image";

import { journey } from "@/constants/constants";

export default function Journey() {
    return (
        <section
            id="#journey"
            className={`min-h-screen flex flex-col justify-center pt-12 md:pt-24 px-6 lg:px-24 3xl:px-52 overflow-hidden`}
        >
            <div className="text-center">
                <h1 className="text-[140px] md:text-[250px] lg:text-[300px] xl:text-[450px] text-primary-red leading-none font-right_grotesk">
                    <span className="text-stroke 3xl:text-black">OUR</span> JOURNEY
                </h1>
            </div>
            {journey.map((part, index) => (
                <div
                    className={`flex pb-24 xl:pb-52 flex-col-reverse ${index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                    key={index}
                >
                    <div className="md:w-1/2 flex justify-end">
                        <p
                            className={`text-xl/normal xl:text-4xl/normal ${index % 2 == 0 ? "md:pl-16 md:text-right" : "md:pr-16 xl:pr-28"}`}
                        >
                            {part.desc}
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <Image
                            src={part.img}
                            alt="journey img"
                            className={`aspect-video h-auto object-cover mb-4 md:p-0 ${index % 2 == 0 ? "mr-auto" : "ml-auto"} `}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}
