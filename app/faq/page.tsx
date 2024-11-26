import PhoneIcon from '../components/PhoneIcon'
import AccordionComponent from '../components/AccordionComponent'

export const metadata = {
    title: 'Frequently Asked Questions - Your Answers to Common Inquiries',
    description: "We have compiled a list of frequently asked questions to provide you with quick and informative solutions. Get the information you need and make informed decisions effortlessly.",
    alternates: {
        canonical: 'https://usedautoparts.pro/faq'
      }
}

export default function FAQ() {
    return (
        <main className="flex flex-col min-h-screen bg-white mt-24">
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply" style={{ backgroundImage: "url('/faq-logo.webp ')" }}>
                <div className="mx-auto max-w-screen-xl py-24 lg:py-32 px-12 lg:px-2 md:px-2">
                    <h1 className="mb-4 text-6xl font-extrabold text-white lg:w-1/2 md:w-1/2 w-full">Get Answers to Your Burning Questions: Dive into Our FAQ Section</h1>
                    <h2 className="mb-4 text-lg font-normal text-gray-300">Unlock Quick Solutions and Informed Decisions with our Frequently Asked Questions</h2>
                </div>
            </section>
            <PhoneIcon />

            <div className='py-10 w-full bg-cover bg-no-repeat flex flex-col items-center max-w-screen-xl mx-auto'>
                <span className=' font-sans text-[13px] text-[#777777] text-center'>FREQUENTLY ASKED QUESTIONS</span>
                <h3 className="font-sans font-bold text-[36px] mt-5 text-[#002E5B] text-center">Learn more about used auto parts that we use</h3>
                <div className='w-[50px] h-[4.5px] bg-primary mt-5 mb-10'></div>

                <AccordionComponent />
            </div>
        </main>
    )
}