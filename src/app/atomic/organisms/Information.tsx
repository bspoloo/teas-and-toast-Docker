import Image from "next/image";
import Contact from "@/app/atomic/molecules/Contact";
import Social from "../molecules/Social";

function Information() {
    return (
        <div className=" flex flex-row gap-x-7 sm:justify-between justify-center items-center w-full h-auto bg-[#474747] pt-2 pb-2 pl-10 pr-10 flex-wrap gap-y-4">
            <Contact></Contact>
            <Social></Social>
        </div>
    );
}

export default Information;