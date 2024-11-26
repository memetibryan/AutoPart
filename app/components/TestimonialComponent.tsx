import Image from "next/image"

interface Props {
    title: string;
    subTitle: string;
}
const TestimonialComponent: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <div className="relative min-w-[340px] h-80 lg:mt-0 md:mt-0 max-w-sm p-6 bg-[rgb(208,208,208)] rounded-lg flex flex-col mx-auto">
            <h3 className="mb-2 text-[28px] font-bold tracking-tight text-text-primary">{title}</h3>
            <p className="mb-3 font-normal text-text-primary text-[16px]">{subTitle}</p>
        </div>
    )
}

export default TestimonialComponent