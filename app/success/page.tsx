import PhoneIcon from "../components/PhoneIcon";
import { CALL_TO, PHONE_NUMBER } from "../config";

import Link from "next/link";
const Success = function () {
    return (
        <main className="flex flex-col bg-white mt-24">
            <PhoneIcon />
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply py-24 " style={{ backgroundImage: "url('/about-bg.webp')" }}>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-center">Success</h1>
            </section>

            <h4 className="text-center text-[#002E5B] text-[28px] font-sans font-extrabold mt-12">Your message was sent successfully.</h4>
            <h4 className="text-center text-[#002E5B] text-[28px] font-sans font-bold mt-4">We will contact soon…</h4>
            <h4 className="text-center text-[#002E5B] text-[28px] font-sans font-bold mt-4">If you need immediate assistance,</h4>
            <Link href={CALL_TO} className="text-center text-[#545454] text-[28px] font-sans mt-4 font-bold">{PHONE_NUMBER}</Link>

        </main>
    )
}

export default Success;