import Image from "next/image";
import Contact from "@/app/Atomic Design/Molecules/Contact";
import Social from "../Molecules/Social";

function Information() {
    return (
        <div className=" flex flex-row justify-between items-center w-full h-5 bg-[#474747]">
            <Contact></Contact>
            <Social></Social>
        </div>
    );
}

export default Information;