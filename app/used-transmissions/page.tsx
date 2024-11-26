import SubHeadComponent from "../components/SubHeadComponent"
import { TRANSMISSIONS } from "../config"
import Image from "next/image"
import PhoneIcon from "../components/PhoneIcon"

export const metadata = {
    title: 'Used Transmission Assembly | Used Auto Parts',
    description: "Discover reliable used transmissions for seamless shifts and savings. Expert guidance, affordability, and top performance await you on the road ahead.",
    alternates: {
        canonical: 'https://usedautoparts.pro/used-transmissions'
    }
}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white mt-24">
            <SubHeadComponent title={"Shift into Gear with Confidence: Discover Reliable Used Transmissions"} subTitle={"Unlock Smooth Shifting and Savings with High-Quality Used Transmissions"}
                bgImageUrl={'/transmissions.webp?q=50'} selectedMake='Choose Your Car' selectedPart='Choose Part'
            />
            <PhoneIcon />
            <div className="mx-auto w-full max-w-screen-xl flex lg:flex-row md:flex-row flex-col mt-10">
                <div className="px-3 mb-10">
                    <h2 className="font-sans text-[#002E5B] text-[28px] font-bold">Discovering Dependability and Savings: The Essence of Used Transmissions</h2>
                    <p className="text-text-primary text-[17px] mt-4">Welcome to a realm where trust and professionalism intertwine, introducing you to the world of <span className="font-bold">Used Transmissions</span>. In this captivating landscape, transmissions come alive with a symphony of internal components, including the exclusive torque converter designed solely for <span className='font-bold'>Automatic Transmissions.</span></p>

                    <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">Embodiment of Trust and Efficiency</h2>
                    <p className="text-text-primary text-[17px] mt-4">Within this domain, you&apos;ll encounter the embodiment of trustworthiness, cost-effectiveness, and the limitless potential that elevates vehicular aspirations. <span className="font-bold">Used transmissions</span> offer a portal to infuse your vehicle&apos;s heartbeat with extraordinary efficiency.</p>

                    <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">A Symphony of Power: Transmissions as Precision Conductors</h2>
                    <p className="text-text-primary text-[17px] mt-4">Imagine your vehicle as a meticulously orchestrated orchestra, with each internal component playing in harmonious unison to transmit power seamlessly, choreographing a symphony of speed and precision.</p>

                    <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">Unveiling Economical Enchantment: Used Transmissions&apos; Savings Spell</h2>
                    <p className="text-text-primary text-[17px] mt-4">Step into the enchanting world of savings with <span className="font-bold">used transmissions</span>. These transmissions redefine the story of automotive repair costs, extending vehicle lifespan and financial prudence by introducing a new chapter into the narrative.</p>

                    <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">Unlock the Portal: Your Journey&apos;s Prelude</h2>
                    <p className="text-text-primary text-[17px] mt-4">As you explore &quot;used transmissions near me,&quot; delve into the avenues of &quot;junkyard transmissions&quot; and embrace the allure of &quot;cheap used transmissions near me.&quot; From the resonating echoes of transmission junkyards to the reliable haven of &quot;used transmission shops near me,&quot; your journey commences. These words harmonize seamlessly with the whispers of the &quot;transmission salvage yard,&quot; where trust and professionalism illuminate your path forward.</p>
                </div>
                <Image src="/transmission.webp" width={241} height={209} alt="reliable used transmissions" className="self-start" />
            </div>
        </main>
    )
}

