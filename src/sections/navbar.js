import Image from "next/image";
import or2er_logo from "@/assets/v2.1_black.svg";

import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="grid grid-cols-12 pt-8 px-6">
            <div className="col-span-1">
                <Image
                    src={or2er_logo}
                    alt="or2er logo"
                    width={32}
                    height={32}
                />
            </div>

            <div className="col-span-3">
                <div className="hidden xl:flex flex-col">
                    <h1 className="font-bold text-3xl">AI Engineer</h1>
                    <h1 className="font-bold text-3xl">Backend</h1>
                    <h1 className="font-bold text-3xl">Frontend</h1>
                    <h1 className="font-bold text-3xl underline">
                        <a href="#">CV</a>
                    </h1>
                </div>
            </div>

            <div className="col-span-4">
                <div className="hidden sm:flex flex-row justify-center gap-8 ">
                    <a href="#people">
                        <p className="text-xl">People</p>
                    </a>
                    <a href="#journey">
                        <p className="text-xl">Journey</p>
                    </a>
                    <a href="#projects">
                        <p className="text-xl">Projects</p>
                    </a>
                    <a href="#techstack">
                        <p className="text-xl">Techstack</p>
                    </a>
                </div>
            </div>

            <div className="col-span-3">
                <h1 className="font-bold hidden xl:block text-3xl">
                    My passion is creating meaningful products for the world
                    that solves real problems, delights users and exceeds
                    expectations.
                </h1>
            </div>

            <div className="col-span-1">
                <div className="flex justify-end">
                    <ToggleSwitch
                        className=""
                        checked={toggle}
                        onChange={setToggle}
                    />
                </div>
            </div>
        </div>
    );
}
