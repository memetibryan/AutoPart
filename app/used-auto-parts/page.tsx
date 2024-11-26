import { FaSearch } from "react-icons/fa"
import { MAKE, PARTS } from "../config"
import SubHeadComponent from "../components/SubHeadComponent"
import PhoneIcon from "../components/PhoneIcon"
import { MAKE_ICONS } from '../config'
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: 'Reliable and Affordable Components | Used Auto Parts',
    description: "Discover high-quality, affordable used auto parts to transform your ride, affordable components for optimal performance. Choose with ease, save with confidence!",
    alternates: {
        canonical: 'https://usedautoparts.pro/used-auto-parts'
      }
}

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col bg-white mt-24">
            <PhoneIcon />
            <SubHeadComponent title={"Revive Your Ride: Explore a Wide Selection of Reliable Used Auto Parts"} subTitle={"Unlock Quality, Savings, and Performance with Affordable Used Auto Parts"}
                bgImageUrl={'/used-auto-parts-logo.webp?q=50'} selectedMake='Choose Your Car' selectedPart='Choose Part'
            />
            <div className="mx-auto w-full max-w-screen-xl flex flex-col p-4 py-6 lg:py-8">
                <p className="text-text-primary text-[17px] mt-8"><span className="font-bold italic">Used Auto Parts Pro</span> – your ultimate haven for discovering top-notch used car replacement parts and accessories. With our extensive expertise in sourcing components, we&apos;ve become a beacon of trust and excellence, serving customers worldwide.</p>
                <p className="text-text-primary text-[17px] mt-8">Nestled at the heart of convenience, we bring you the finest deals on <span className="font-bold italic">Used Auto Parts</span> – whether you&apos;re right at home or in your mechanic&apos;s haven. Unearth those elusive components with ease, making the journey smoother for us both.</p>
                <p className="text-text-primary text-[17px] mt-8">In the unpredictable world of vehicle breakdowns, we&apos;re your steadfast ally. Our sales team stands at the ready 365 days a year, because your car doesn&apos;t check the calendar before acting up. From the middle of nowhere to the most challenging of situations, we&apos;ll have you back on the road, right-side up.</p>

                <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10"><span className="italic">ENGINES</span> AND <span className="italic">TRANSMISSIONS</span></h2>
                <p className="text-text-primary text-[17px] mt-8"> they&apos;re more than parts; they&apos;re life for your vehicle. At <span className="font-bold italic">Used Auto Parts Pro</span>, they&apos;re our specialty. Whether it&apos;s restoration or repair, we offer a gamut of options to rejuvenate your ride.</p>

                <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold mt-10 italic">Quality Auto Parts</h2>
                <p className="text-text-primary text-[17px] mt-8"><span className="font-bold italic">Quality</span> isn&apos;t just a buzzword; it&apos;s our mantra. The <span className="font-bold italic">Used Auto Parts Pro</span> team scours for the best, ensuring you access <span className="font-bold italic">quality used auto parts</span>. Shipping&apos;s on us, and we back our inventory with <span className="font-bold italic">60-90 day warranties</span>. From old relics in need of resurrection to your cherished ride, we&apos;re your one-stop destination.</p>
                <p className="text-text-primary text-[17px] mt-8">Delve into the array of <span className="font-bold italic">salvage parts for cars</span>, discover <span className="font-bold italic">cars for parts for sale</span>, and explore <span className="font-bold italic">used parts car parts</span>. <span className="font-bold italic">Salvage yards for parts</span>, <span className="font-bold italic">pickup parts junkyard</span> finds, and <span className="font-bold italic">auto recycler parts</span> are our playground. We are the wind beneath your vehicle&apos;s wings, offering <span className="font-bold italic">used cars parts for sale</span> and bringing <span className="font-bold italic">salvage yards for parts</span> closer than ever.</p>
                <p className="text-text-primary text-[17px] mt-8">With an <span className="font-bold italic">auto parts store nearby</span> vibe, we&apos;re more than just a service; we&apos;re an experience. Elevate your auto parts journey with <span className="font-bold italic">Used Auto Parts Pro</span>. Your trust, our drive, your vehicle&apos;s renaissance – it&apos;s all here. Discover excellence today!</p>

                <div className="flex flex-row mt-10 items-center ml-4">
                    <FaSearch size={18} color="#002E5B" className="search-icon" />
                    <h4 className="font-sans text-[#002E5B] text-[20px] font-bold uppercase ml-2">SEARCH BY CAR MAKE</h4>
                </div>
                {/* <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-8 ml-6 list-disc list-inside">
                    {
                        Object.keys(MAKE).map((item, index) => (
                            <li className="text-[#686868] text-[17px] uppercase" key={index}>{item}</li>
                        ))
                    }
                </ul> */}


                <div className='w-full mx-auto max-w-screen-xl mt-5'>
                    <div className='mx-5 grid grid-cols-4 lg:grid-cols-5 md:grid-cols-5 gap-x-5 lg:gap-x-28 md:gap-x-14 gap-y-5'>
                        {
                            MAKE_ICONS.map((item, index) => (
                                <Link href={encodeURIComponent(item[1].toLowerCase())} key={index} >
                                    <div className='w-50 py-5 items-center flex flex-col w-50 h-50 '>
                                        <Image src={item[0]} alt={item[1]} width={70} height={70} />
                                        <p className="text-text-primary mt-2">{item[1]}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                </div>
                {/* <div className="flex flex-row mt-10 items-center ml-4">
                    <FaSearch size={18} color="#002E5B" className="search-icon" />
                    <h4 className="font-sans text-[#002E5B] text-[20px] font-bold uppercase ml-2">USED AUTO PARTS WE CARRY</h4>
                </div>
                <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-8 ml-6 list-disc list-inside">
                    {
                        PARTS.map((item, index) => (
                            <li className="text-[#686868] text-[17px]" key={index}>{item}</li>
                        ))
                    }
                </ul> */}
            </div>
        </main>
    )
}

