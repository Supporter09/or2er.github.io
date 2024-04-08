// Sections
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer";
import HeroSection from "@/sections/heroSection";
import People from "@/sections/people";
import Journey from "@/sections/journey";
import TechStacks from "@/sections/techstacks";
import Carousel from "@/sections/carousel";
import Motivation from "@/sections/motivation"

// function HightlightText({ text }) {
//     processed_text = text.split("");
//     console.log("processed text: ", processed_text);

//     return (
//         <div className="block relative text-center">
//             {processed_text.map((char, index) => (
//                 <div
//                     key={index}
//                     className="relative inline-block transform-none rotate-0 "
//                 >
//                     {char}
//                 </div>
//             ))}
//         </div>
//     );
// }

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <People />
            <Journey />
            <Motivation />
            <Carousel />
            <TechStacks />
            <Footer />
        </div>
    );
}
