import Link from 'next/link'
import { PHONE_NUMBER, CALL_TO } from '../config'
import PhoneIcon from '../components/PhoneIcon'

export const metadata = {
    title: 'About Used Auto Parts Pro | Used Auto Parts',
    description: "Discover our passionate team and our commitment to excellence. We are dedicated to providing top-notch service, quality products, and exceptional customer satisfaction. Shop Now.",
    alternates: {
        canonical: 'https://usedautoparts.pro/about'
    }
}
export default function About() {
    return (
        <main className="flex flex-col min-h-screen bg-white mt-24 pb-10">
            <section className=" bg-cover bg-no-repeat bg-gray-300 bg-blend-multiply" style={{ backgroundImage: "url('/about-logo.webp')" }}>
                <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-20">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Us</h1>
                </div>
            </section>
            <PhoneIcon />

            <div className='flex flex-col md:flex-row lg:flex-row lg:space-x-16 md:space-x-8 justify-between mx-auto w-full max-w-screen-xl mt-20 px-5'>
                <div className='flex flex-col lg:w-1/2 md:w-1/2 w-full mb-5'>
                    <span className='text-primary text-[13px] uppercase mb-2 font-semibold'>About Us</span>
                    <h2 className='text-text-primary text-[42px] font-semibold'>About Used Auto Parts Pro</h2>
                    <p className='mt-[30px] text-[16px] text-[#373737]'>At Used Auto Parts Pro, we specialize in providing high quality used <span className='italic font-bold'>OEM automotive parts and accessories.</span> We have a team of experts who are always available to provide quick, real-time advice, and we strive to offer the best parts at the most competitive prices. Contact us today for all your automotive replacement part needs.</p>
                    <p className='text-[16px] text-[#373737] mt-5'>Call now at <Link href={CALL_TO} className="text-primary font-semibold">{PHONE_NUMBER}</Link> and join the thousands of satisfied <span className='italic font-bold'>Used Auto Parts Pro customers</span>.</p>
                    <Link href="/contact" className='mt-[55px] w-40 text-center uppercase py-[19px] bg-[#FF5E14] text-white'>Contact Us</Link>
                </div>
                <img src="/about-1.webp" className='w-full h-full lg:w-1/2 md:w-1/2' alt="string" />
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-between mx-auto w-full max-w-screen-xl mt-20 px-5 lg:space-x-16 md:space-x-8'>
                <img src="/about-2.webp" className='lg:w-1/2 md:w-1/2 w-full h-full' alt="string" />
                <div className='flex flex-col lg:w-1/2 md:w-1/2 w-full '>
                    <span className='text-primary text-[13px] uppercase mb-2 font-semibold'>About Our Company</span>
                    <h3 className='text-text-primary text-[42px] font-semibold'>Your Trusted Source for Quality Vehicle Parts</h3>
                    {/* <h3 className='text-[20px] text-text-primary font-medium mt-[35px]'>Our Mission</h3> */}
                    <span className='text-[18px] text-[#373737] mt-[10px]'>At usedautoparts.pro, we stand as a pillar of trust in the world of automotive solutions. With an extensive inventory of top-tier vehicle parts, we&apos;re your dependable partner in keeping your vehicles running smoothly.</span>
                </div>
            </div>

            <div className='flex flex-col mx-auto w-full max-w-screen-xl mt-10 px-5'>
                <h3 className='text-[20px] text-text-primary font-bold'>Why Choose Us for Your Automotive Needs?</h3>
                <span className='text-[16px] text-[#373737] mt-[10px]'><span className='font-bold'>Unmatched Trust:</span> usedautoparts.pro has earned its name by consistently delivering reliable solutions. When you choose us, you&apos;re choosing peace of mind.</span>
                <span className='text-[16px] text-[#373737] mt-[10px]'><span className='font-bold'>Vast Stocks, Instant Availability:</span> Searching for the right part ends here. Our substantial inventory ensures you get the parts you need, precisely when you need them.</span>
                <span className='text-[16px] text-[#373737] mt-[10px]'><span className='font-bold'>Seamless Shipping:</span> Distance is no barrier. Our efficient shipping ensures that your required parts reach your doorstep promptly.</span>
                <span className='text-[16px] text-[#373737] mt-[10px]'><span className='font-bold'>Committed to Quality:</span> Each part in our stock has met stringent quality standards. We believe in providing nothing less than excellence.</span>

                <h3 className='text-[20px] text-text-primary mt-[35px] font-bold'>Your Journey, Our Priority</h3>
                <span className='text-[16px] text-[#373737] mt-[10px]'>Whether you&apos;re a car enthusiast, a mechanic, or someone needing a quick fix, we have your back. OurCompany.com isn&apos;t just a name; it&apos;s a commitment to quality, reliability, and your satisfaction.</span>
                <span className='text-[16px] text-[#373737] mt-[10px]'>Experience the difference of working with a trusted name in the industry. Your journey deserves the best, and that&apos;s exactly what we offer.</span>
                {/* <span className='text-[16px] text-[#373737] mt-[10px]'>Remember, clear and engaging content helps to convey your company&apos;s message effectively. This version maintains a concise and compelling tone while highlighting your company&apos;s strengths. Feel free to adjust it to match your brand&apos;s voice and values.</span> */}
            </div>
        </main>
    )
}