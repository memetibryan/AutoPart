import PhoneIcon from '../components/PhoneIcon'
import Link from 'next/link'
import {CUSTOM_PHONE_ADDR, CALL_TO_CUSTOMER } from '../config'

export const metadata = {
    title: 'Submit a Ticket - Streamline Your Support Experience Today',
    description: "Submit a ticket for quick and effective assistance. Our dedicated support team is ready to address your inquiries, resolve issues, and provide timely solutions.",
    alternates: {
        canonical: 'https://usedautoparts.pro/ticket-submit'
      }
}

export default function FAQ() {
    return (
        <main className="flex flex-col min-h-screen bg-white mt-24">
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply" style={{ backgroundImage: "url('/faq-logo.webp ')" }}>
                <div className="mx-auto max-w-screen-xl py-24 lg:py-32 px-12 lg:px-2 md:px-2">
                    <h1 className="mb-4 text-6xl font-extrabold text-white lg:w-1/2 md:w-1/2 w-full">Streamline Your Support: Submit a Ticket for Quick and Effective Assistance</h1>
                    <h2 className="mb-4 text-lg font-normal text-gray-300">Fast-track Solutions with Our Ticket Submission Process for Prompt Support</h2>
                </div>
            </section>
            <PhoneIcon />

            <div className='py-10 w-full bg-cover bg-no-repeat flex flex-col items-center max-w-screen-xl mx-auto'>
                {/* <span className=' font-sans text-[13px] text-[#777777] text-center'>PRIVACY POLICY</span> */}
                <h3 className="font-sans font-bold text-[36px] mt-5 text-[#002E5B] text-center">Exceptional Customer Service: Your Satisfaction, Our Priority</h3>
                <div className='w-[50px] h-[4.5px] bg-primary mt-5 mb-10'></div>

                <div className='w-[80%]'>
                    <p className='mb-5 text-text-primary  text-[18px]'>At Usedautoparts.pro, we take pride in delivering not just quality products, but also an unparalleled customer experience. Our dedicated team of customer service agents stands ready to assist you at every step of your journey.</p>

                    <h3 className='mb-2 text-text-primary text-[24px] font-bold'>Personalized Assistance, Prompt Solutions</h3>
                    <p className='mb-5 text-text-primary  text-[18px]'>We understand that each customer&apos;s needs are unique. That&apos;s why we provide you with personalized attention, ensuring you&apos;re directed to the most relevant department to swiftly address your queries and concerns.</p>

                    <h3 className='mb-2 text-text-primary text-[24px] font-bold'>Convenient Hours for Your Convenience</h3>
                    <p className='mb-5 text-text-primary  text-[18px]'>Your convenience matters to us. Our customer service operates from Monday to Friday, ensuring you have access to support when you need it. Our hours of operation are 8:00 am to 6:00 pm CST, allowing us to assist you during your busy schedule.</p>

                    <h3 className='mb-2 text-text-primary text-[24px] font-bold'>Need Immediate Assistance? Reach Out!</h3>
                    <p className='mb-2 text-text-primary  text-[18px]'>Have questions, need guidance, or seeking assistance? Feel free to connect with us directly at (888) 748-0882. Our dedicated helpline is your direct line to efficient solutions.</p>
                    <p className='mb-5 text-text-primary  text-[18px]'>At Usedautoparts.pro, customer satisfaction isn&apos;t just a goal; it&apos;s our commitment. Experience customer service that goes beyond expectations. Your needs drive us, and your contentment fuels us.</p>


                    {/* <p className='mb-2 text-text-primary  text-[20px]'>Directly Number - <Link href={CALL_TO_CUSTOMER} className="text-primary font-semibold hover:underline">{CUSTOM_PHONE_ADDR}</Link></p> */}
                    {/* <p className='mb-2 text-text-primary  text-[20px] break-all text-center'>*************************************************************************************</p> */}
                </div>
                {/* <AccordionComponent /> */}
            </div>
        </main >
    )
}