import TextContent from "../atoms/TextContent";
import Logo from "@/app/resources/svg/logo.svg"

function Title(){
    return(
        <div className=" flex flex-row h-20 items-center">
            <Logo width="60px" height="60px"/>
            <TextContent text="Taste & Toast" className="font-semibold italic text-[2.6rem]"/>
            
        </div>
    );
}

export default Title