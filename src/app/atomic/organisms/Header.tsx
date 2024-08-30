import Information from "./Information";
import Title from "../molecules/Title";
import Navigation from "../molecules/NavigationMenu";
import LinkMenu from "../atoms/LinkMenu";

function Header() {
    return <>
        <div>
            <div>
                <Information/>
            </div>
            <header className=" flex flex-row  justify-around items-center flex-wrap bg-[#d7d7d9]">
                <Title />
                <Navigation />
                <LinkMenu url="/look" className="hidden lg:block text-textColor-primary hover:bg-[#DBDFD0] border-2 border-black rounded-full p-4" title="Look for a meal" />
            </header>
        </div>
    </>
}

export default Header;