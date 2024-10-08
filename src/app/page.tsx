import BrowseDoM from "./atomic/organisms/BrowseDoM";
import Presentation from "./atomic/organisms/Presentation";

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