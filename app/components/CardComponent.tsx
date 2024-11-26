import Image from "next/image"
import Link from "next/link";

interface Props {
    title: string;
    subTitle: string;
    bgImageUrl: string;
}
const CardComponent: React.FC<Props> = ({ title, subTitle, bgImageUrl }) => {
    return (
        <div className="mx-auto min-w-[340px] bg-black h-80 max-w-sm p-6 lg:rounded-lg md:rounded-lg flex flex-col">
            <div className="self-center p-3 border-2 border-primary rounded-full">
                <Image alt={title} width={60} height={60} className="text-white self-center" aria-hidden="true" src={bgImageUrl} />
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white text-center text-[22px]">{title}</h3>
            <p className="mt-3 font-normal text-[#FFFFFFB8] text-center text-[16px]">{subTitle}</p>

            {
                title == "We Give 60 Day Warranty" ? <Link href="/">
                    <h3 className="mt-4 text-2xl font-bold text-white text-center text-[22px]">SHOP NOW!</h3>
                </Link> : ""
            }
        </div>
    )
}

export default CardComponent