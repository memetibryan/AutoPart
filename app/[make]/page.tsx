"use client"
import { useState } from "react"
import PhoneIcon from "../components/PhoneIcon"
import SubHeadComponent from "../components/SubHeadComponent"
import { PARTS, SEO } from "../config"
import Image from "next/image"
import Link from "next/link"
import { redirect, notFound } from "next/navigation"

export default function Make({ params }: { params: { make: string } }) {

    let make = params.make.charAt(0).toUpperCase() + params.make.slice(1);

    const [selectedMake, setSelectedMake] = useState(SEO[make] && SEO[make].name);
    const [selectedPart, setSelectedPart] = useState("Choose Part");

    if (make == params.make) {
        return redirect ("/" + make.toLowerCase())
    }
    if (!SEO[make]) {
        notFound();
        return;
        // return redirect("/")
    }

    const handleClick = (part: string) => {
        console.log(part)
        setSelectedMake(SEO[make].name);
        setSelectedPart(part);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <main className="flex min-h-screen flex-col bg-white mt-24">
            <PhoneIcon />
            <SubHeadComponent title={SEO[make].h1} subTitle={SEO[make].h2}
                bgImageUrl={SEO[make].bg} selectedMake={selectedMake} selectedPart={selectedPart}
                bgAlt = {SEO[make].bg_alt} bgTitle = {SEO[make].bg_title}
            />

            <div className="mx-auto w-full max-w-screen-xl mt-10">
                <h4 className='text-[40px] font-black text-text-primary uppercase px-2'>{SEO[make].heading1}</h4>
                <div className="flex flex-col lg:flex-row md:flex-row gap-x-5">
                    <p className="text-text-primary text-[18px] leading-relaxed mt-5 px-2" dangerouslySetInnerHTML = {{__html: SEO[make].description1}} />
                    <Image src={'/' + SEO[make].url} width={400} height={150} alt={SEO[make].alt} className="self-center border-blue-500 border-2 p-2 rounded-lg"/>
                </div>
                <h4 className='text-[32px] font-black text-text-primary uppercase px-2 mt-5'>USED {SEO[make].name} AUTO PARTS</h4>
                <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 list-disc list-inside gap-y-2 py-5">
                    {
                        PARTS.map((item, index) => (
                            <Link href="#" key={index} onClick={() => handleClick(item)}>
                                <li className="px-2" >
                                    <span className="text-[17px] text-text-primary">{SEO[make].name} {item}</span>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}