import Link from 'next/link'
import PhoneIcon from '../components/PhoneIcon'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { CALL_TO, EMAIL_ADDRESS, PHONE_NUMBER } from '../config'
import { SendMailForm } from '../components/SendMailForm'

export const metadata = {
    title: "Let's Connect and Make Things Happen | Used Auto Parts Pro",
    description: "Need help or have questions? Our friendly team is here to provide exceptional service and support. Contact us for assistance. Let's connect and achieve together.",
    alternates: {
        canonical: 'https://usedautoparts.pro/contact'
      }
  }
export default function Home() {
    return (
        <main className="flex flex-col bg-white font-sans mt-24">
            <PhoneIcon />
            <section className='flex flex-col lg:flex-row md:flex-row lg:space-x-20 py-10 w-full bg-cover bg-no-repeat items-center px-5 lg:px-48 justify-between' style={{ backgroundImage: "url('/contact.webp')" }}>
                <div className='flex-col items-center w-full lg:w-1/2 md:w-1/2 mb-5 hidden lg:flex md:flex'>
                    <h1 className="text-white font-sans font-extrabold text-[32px] text-center mt-5">Experience Excellence: Reach Out for Unparalleled Service and Support</h1>
                    <h2 className="text-white font-sans text-[21px] mt-7 text-center">Discover a new level of service and support with OurCompany.com. Whether you&apos;re seeking solutions, have questions, or want to explore opportunities, our dedicated team is here to provide exceptional assistance. Connect with us today and let&apos;s make things happen together.</h2>

                    <div className='flex space-x-20 mt-10'>
                        <div className="flex flex-col items-center">
                            <FaPhone className='h-10 w-10 mr-2 inline-block text-white' style={{ transform: "scaleX(-1)" }} />
                            <h3 className="uppercase text-white text-[18px] font-bold text-center mt-10">Phone</h3>
                            <Link href={CALL_TO} className="text-white text-[16px] text-center mt-5">{PHONE_NUMBER}</Link>
                        </div>

                        <div className='flex flex-col items-center'>
                            <FaEnvelope className='h-10 w-10 mr-2 inline-block text-white' />
                            <h3 className="uppercase text-white text-[18px] font-bold text-center mt-10">EMAIL</h3>
                            <Link href={CALL_TO} className="text-white text-[16px] text-center mt-5">{EMAIL_ADDRESS}</Link>
                        </div>
                    </div>
                </div>

                <SendMailForm/>
            </section>
        </main>
    )
}

