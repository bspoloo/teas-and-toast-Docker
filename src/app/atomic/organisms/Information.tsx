import Image from "next/image";
import Contact from "@/app/atomic/molecules/Contact";
import Social from "../molecules/Social";

function Information() {
    return (
        <div className=" flex flex-row justify-between items-center w-full h-5 bg-[#474747]">
            <Contact></Contact>
            <Social></Social>
        </div>
    );
}

export default Information;