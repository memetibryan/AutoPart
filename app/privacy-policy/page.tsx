import PhoneIcon from '../components/PhoneIcon'
import { CALL_TO, EMAIL_ADDRESS, MAIL_TO, PHONE_NUMBER } from '../config'
import Link from 'next/link'

export const metadata = {
    title: 'Privacy Policy - Your Trust is Our Priority in Safeguarding Your Data',
    description: "Your privacy matters. Our policy ensures data security and transparency. Learn how we handle your information responsibly. Read our privacy policy for details.",
    alternates: {
        canonical: 'https://usedautoparts.pro/privacy-policy'
      }
}

export default function FAQ() {
    return (
        <main className="flex flex-col min-h-screen bg-white mt-24">
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply" style={{ backgroundImage: "url('/faq-logo.webp ')" }}>
                <div className="mx-auto max-w-screen-xl py-24 lg:py-32 px-12 lg:px-2 md:px-2">
                    <h1 className="mb-4 text-6xl font-extrabold text-white lg:w-2/3 md:w-1/2 w-full">Your Privacy Matters: Our Commitment to Protecting Your Information</h1>
                    <h2 className="mb-4 text-lg font-normal text-gray-300">Safeguarding Your Data with Transparency, Security, and Trust</h2>
                </div>
            </section>
            <PhoneIcon />

            <div className='py-10 w-full bg-cover bg-no-repeat flex flex-col items-center max-w-screen-xl mx-auto'>
                {/* <span className=' font-sans text-[13px] text-[#777777] text-center'>PRIVACY POLICY</span> */}
                <h3 className="font-sans font-bold text-[36px] mt-5 text-[#002E5B] text-center">PRIVACY POLICY</h3>
                <div className='w-[50px] h-[4.5px] bg-primary mt-5 mb-10'></div>

                <div className='w-[80%]'>
                    <p className='mb-2 text-text-primary  text-[20px]'>Used Auto Parts Pro certifies that your information is safe and secure when making transactions over the Internet.</p>
                    <p className='mb-2 text-text-primary  text-[20px]'>Through this Internet Privacy Statement, we want to reassure users of the Site that we will not sell, share, or rent user information to others in a manner different than as set forth in this Internet Privacy Statement.</p>
                    <p className='mb-2 text-text-primary  text-[20px] '>We use a credit card processing company to bill purchasers of goods from the Site, and we also use outside distributors and delivery companies to assist us in fulfilling and delivering orders. We share with them only the information necessary to enable such card processing and fulfillment and delivery of goods. Our users&apos; personal information will not be shared, sold, or rented to any organization outside of Used Auto Parts Pro and our financial and order fulfillment affiliates.  Used Auto Parts Pro occasionally sends our customers and users of the Site announcements and updates, containing important information which we believe will be of value to them. Users of the Site can always update their personally identifying information that they have provided to Used Auto Parts Pro by e-mailing us at <Link href={MAIL_TO} className="text-primary font-semibold hover:underline">{EMAIL_ADDRESS}</Link> Or Call Now <Link href = {CALL_TO} className="text-primary font-semibold hover:underline">{PHONE_NUMBER}</Link></p>
                    {/* <p className='mb-2 text-gray-500 dark:text-gray-400 text-[20px] break-all text-center'>*************************************************************************************</p> */}
                </div>
                {/* <AccordionComponent /> */}
            </div>
        </main >
    )
}