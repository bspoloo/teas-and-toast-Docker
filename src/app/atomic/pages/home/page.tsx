import { Popcorn, Martini, Soup } from "lucide-react";
import Card from '@/app/atomic/organisms/Card'

export default function Page() {
    return (
        //hello
        <main className="flex min-h-screen flex-col items-center justify-between flex-wrap">
            <div className="home-image1 flex flex-row w-full md:h-96 justify-center items-center p-10">
                <div className=" inset-0 flex items-center flex-col ">
                    <div className="space-y-4 mb-14 md:mb-14 lg:mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-center" style={{ fontFamily: 'Playfair Display' }}>
                            Find a lot of <br /> recipes
                        </h2>
                        <h2 className="text-lg text-center">
                            Discover delectable cuisine and unforgettable moments <br />in our welcoming, culinary haven.
                        </h2>
                    </div>
                    <div className="flex lg:ml-5 items-end h-full">
                    </div>
                    <div className="flex gap-x-10 self-center">
                        <button className="bg-[#AD343E] text-white font-bold md:text-xl rounded-full p-4"> Look for a meal </button>
                        <button className="text-black font-bold p-4 border-2 border-black  rounded-full"> Explore meals </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8" style={{ fontFamily: 'Playfair Display' }}>Browse our drinks or meals</h1>
                <div className="flex flex-wrap -mx-4">
                    <Card title="Meals" description="Discover a wide variety of meals that you can use to guide you and prepare the best meals in the world" icon={<Popcorn size={70} />} />
                    <Card title="Drinks" description="Discover a wide variety of drinks that you can use to guide you and prepare the best drinks in the world" icon={<Martini size={70} />} />
                </div>
            </div>
        </main>
    )
}