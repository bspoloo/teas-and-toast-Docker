import { Popcorn, Martini, Soup } from "lucide-react";
import Card from '@/app/atomic/organisms/Card';
import LinkMenu from "../../atoms/LinkMenu";
import BrowseDoM from "../../organisms/BrowseDoM";
import Presentation from '../../organisms/Presentation'

export default function Page() {
    return (
        //hello
        <main className="flex min-h-screen flex-col items-center justify-between flex-wrap">
            <div className="home-image1 flex flex-row w-full pt-10 pb-10 justify-center items-center">
                <Presentation/>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <BrowseDoM/>
            </div>
        </main>
    )
}