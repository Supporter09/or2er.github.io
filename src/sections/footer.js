import Image from "next/image";

import { red, linkedin, instagram, facebook } from "@/assets/assets";

export default function Footer() {
    return (
        <section className="footer flex flex-col items-center justify-center border-t border-t-[#E7E7E7]">
            <Image src={red} alt="red" className={"w-[480px] h-auto"} />
            <div className="flex gap-8 pb-4 pt-6">
                <Image src={linkedin} alt="linkedin" className={"w-6 h-6"} />
                <Image src={instagram} alt="instagram" className={"w-6 h-6"} />
                <Image src={facebook} alt="facebook" className={"w-6 h-6"} />
            </div>
            <p className="text-[16px] text-center text-[#979797]">
                ©2024 or2er. All right reserved.
            </p>
        </section>
    );
}
