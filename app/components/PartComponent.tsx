import Image from "next/image"

interface Props {
    title: string;
    subTitle: string;
    subTitle1: string;
    bgImageUrl: string;
}
const PartComponent: React.FC<Props> = ({ title, subTitle, subTitle1, bgImageUrl }) => {
    return (
        <div className="min-w-[340px] h-[600px] lg:h-[450px] md:h-[500px] lg:mt-0 md:mt-0 max-w-md p-6 bg-[rgb(208,208,208)] rounded-lg flex flex-col mx-auto">
            <h3 className="mb-2 text-[28px] font-bold tracking-tight text-text-primary">{title}</h3>
            <span className="inline-flex items-baseline">
                <span className="mr-3 font-normal text-text-primary text-[16px]">{subTitle}</span>
                <Image alt="Explore our used auto parts marketplacey of Car" width={100} height={100} src={bgImageUrl} className="self-center" />
            </span>
            <span className="mb-3 font-normal text-text-primary text-[16px]">{subTitle1}</span>
        </div>
    )
}

export default PartComponent