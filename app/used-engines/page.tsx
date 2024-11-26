import SubHeadComponent from "../components/SubHeadComponent"
import Image from "next/image"
import PhoneIcon from "../components/PhoneIcon"

export const metadata = {
    title: "Revive Your Vehicle's Performance with Reliable Power",
    description: "Revive performance with budget-friendly used engines. Expert guidance, quality assured. Drive confidently and unlock your ride's full potential. Get back on the road confidently.",
    alternates: {
        canonical: 'https://usedautoparts.pro/used-engines'
      }
}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white mt-24">
            <SubHeadComponent title={"Revive Your Vehicle's Performance: Explore Reliable Used Engines"} subTitle={"Unlock Power and Savings with High-Quality Used Engines for Sale"}
                bgImageUrl={'/used engines.webp?q=50'} selectedMake='Choose Your Car' selectedPart='Choose Part'
            />
            <PhoneIcon />

            <div className="mx-auto w-full max-w-screen-xl flex lg:flex-row md:flex-row flex-col my-10">
                <div className="px-5">
                    <h2 className="font-sans text-[#002E5B] text-[28px] font-extrabold ">Unlock the Heart of Performance: Used Engine Assemblies for Sale</h2>
                    <p className="text-text-primary text-[17px] mt-8">Immerse yourself in the symphony of power with our complete <span className="font-bold italic">Engine Assembly</span> offerings. Beyond being just parts, these assemblies encompass a world of potential. Think manifolds, oil pan, timing belts and covers, and fuel injection or carburetor – but here&apos;s the magic: we guarantee only the long block.</p>
                    <p className="text-text-primary text-[17px] mt-8"><span className="font-bold italic">Manifolds</span>, <span className="font-bold italic">gaskets</span>, <span className="font-bold italic">seals</span>, <span className="font-bold italic">hoses</span>, <span className="font-bold italic">oil pan</span>, <span className="font-bold italic">timing belts</span>, and <span className="font-bold italic">covers</span>, along with <span className="font-bold italic">fuel injection</span> or <span className="font-bold italic">carburetor</span>, aren&apos;t in the guarantee. And let&apos;s talk accessories: items like Turbo, Starters, air compressors, alternator, power steering pumps, optical distributors, wiring harnesses, and electrical water pumps typically aren&apos;t part of the deal. They might not dance under the warranty spotlight.</p>
                    <p className="text-text-primary text-[17px] mt-8">Rest easy; engines in our world are more than metal and gears. They&apos;re meticulously inspected and rigorously tested for peak performance. <span className="font-bold italic">Water damage</span>? We&apos;ve got that covered, ensuring you only embrace the finest.</p>
                    <p className="text-text-primary text-[17px] mt-8">Picture this: an engine ready to roar, yet small fixes might be needed. Think water pumps, distributor caps, spark plugs, wires, and the possibility of a timing chain. As for liability, certain high-wear parts fall outside our sphere.</p>
                    <p className="text-text-primary text-[17px] mt-8">Whether you&apos;re dreaming of <span className="font-bold italic">used car engines for sale</span>, hunting for <span className="font-bold italic">junkyard engines for sale</span>, or on the prowl for <span className="font-bold italic">cheap engines for sale</span>, we&apos;re your compass. Engine sales near me? We&apos;re a heartbeat away. Feel the rhythm of a used car engine near me search, punctuated by the beats of a <span className="font-bold italic">junkyard search engine</span> quest and the dance of engine salvage.</p>
                    <p className="text-text-primary text-[17px] mt-8">For those seeking excellence, let <span className="font-bold italic">Used Auto Parts Pro</span> be your guide. Trust the journey; trust the ride. When it comes to <span className="font-bold italic">used engine Houston</span> can rely on, we&apos;re the destination. Ready to revitalize? Discover the future of performance today!</p>
                </div>

                <Image src="/engine.webp" width={203} height={231} alt="used car engines for sale" className="self-start"/>

                {/* <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">Top Quality Used Engines</h2>
                <p className="text-[#686868] text-[17px] mt-8">Your mechanic has called to inform you that you require an engine! Please relax, we’ll lead you to get rid of this situation. We deliver one of the finest quality used engines on the market. Best of all, we’ll save you a lot of money! To get started, check out our used engine list below, and we will contact you with bids on the used engines you require.</p>
                <p className="text-[#686868] text-[17px] mt-8">When you buy a used engine from us, you obtain an engine which would be gauranteed to work. We take great delight in supporting every client with whom we talk. We will not only ensure that you can “drive that additional mile”, but we will also go the extra mile for you in terms of service and happiness! Quality Mileage Used Engines are available from us. If the engine or transmission you desire is not in stock, we can locate it for you!</p>

                <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">Used Auto Engines / Used Truck Engines</h2>
                <p className="text-[#686868] text-[17px] mt-8">With our wide selection of engines for passenger cars as well as light and medium-heavy trucks, we offer an engine to fit any late model vehicle. In the link below you will find a comprehensive list of models that are supported by us</p>
                <p className="text-[#686868] text-[17px] mt-8">Remember that when acquiring a used engine, you must ensure that the mileage is accurate. Before you buy any old engine, get a FREE Vehicle History Report! This might end up saving you hundreds of dollars in the long term!</p>
                <p className="text-[#686868] text-[17px] mt-8">Although our used engines for sale will not set you back an arm and a leg, they will never be cheap or of poor quality and will always guarantee to exceed your expectations. During our Quality Assessment, we thoroughly evaluate our used engines to verify they are in operating order.</p>
                <p className="text-[#686868] text-[17px] mt-8">When you’re looking for a high-quality secondhand engine, we’ve got what it takes. We know that at every stage of your transaction our staff will be there to help and provide great customer service! You can find the perfect match based on year make or model by checking out used engines online today through comprehensive automotive catalogs found here in addition to all other features available including financing options should complement each other’s needs as well allowing flexibility when buying new equipment whether big jobs small tasks requires attention now but also keeping things rational down future</p>
                <p className="text-[#686868] text-[17px] mt-8">Once you’ve found the perfect used motor for your vehicle, check out your shopping cart or phone one of our customer service specialists. After searching for “used engines near me” and visiting our website, enter your vehicle’s year, make, and model to identify the matching engine code and place your order.</p>
                <p className="text-[#686868] text-[17px] mt-8">You can have your vehicle back on the road in no time with our quick and easy shipping. We offer free pickup or delivery, so all you need to do is pick up from one of many locations around town!</p>

                <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">Engines, Transmissions And Other Auto Parts</h2>
                <p className="text-[#686868] text-[17px] mt-8">Used Auto Parts Pro is the place to go if you need used auto parts. We have an extensive inventory of all makes and models, so we can help restore your vehicle with just what it needs!</p>

                <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">USED AUTO PARTS PRO OFFERS QUALITY USED ENGINES</h2>
                <p className="text-[#686868] text-[17px] mt-8">You’ll never have to worry about finding that perfect used engine again! USED AUTO PARTS PRO has an extensive network of auto part yards and will get back to you as soon as possible on pricing for the one just right. Fill out our form now, so we can help save time in your day by providing quotes.</p>
                <p className="text-[#686868] text-[17px] mt-8">We’ll get you the best price for your engine, no matter if it’s a local or imported vehicle. Whether truck/vanity camper style SUV’s are what you need we can find exactly which one will work with all of our customer’s needs in mind!</p>

                <p className="text-[#686868] text-[17px] mt-10">We Carry Engines for the following Makes listed below:</p>

                <ul className="grid lg:grid-cols-3 grid-cols-2 gap-2 mt-8 ml-4 list-disc list-inside">
                    {
                        ENGINES.map((item, index) => (
                            <li className="text-[#686868] text-[17px]" key={index}>{item}</li>
                        ))
                    }
                </ul> */}
            </div>
        </main>
    )
}

