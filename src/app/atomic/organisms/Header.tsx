import Information from "./Information";
import Title from "../molecules/Title";
import Navigation from "../molecules/NavigationMenu";
import LinkMenu from "../atoms/LinkMenu";

function Header() {
    return <>
        <div>
            <div>
                <Information />
            </div>
            <header className=" flex flex-row  justify-around  items-center flex-wrap">
                <Title />
                <Navigation />
                <LinkMenu url="/Look" className="hidden lg:block text-textColor-primary p-2 hover:bg-[#DBDFD0] border-2 border-black rounded-full" title="Look for a meal"/>
            </header>
        </div>
    </>
}

export default Header;