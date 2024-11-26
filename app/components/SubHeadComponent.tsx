import FindPart from "./FindPart";

interface Props {
    title: string;
    subTitle: string;
    bgImageUrl: string;
    selectedMake: string;
    selectedPart: string;
    bgAlt?: string;
    bgTitle?: string;
}

const SubHeadComponent: React.FC<Props> = ({ title, subTitle, bgImageUrl, selectedMake, selectedPart, bgAlt, bgTitle }) => {
    return (
        <div className="relative">
            <img
                className="object-center object-cover pointer-events-none absolute w-full h-full"
                src={bgImageUrl}
                alt={bgAlt ? bgAlt: "bg"}
                title={bgTitle? bgTitle: "bgTitle"}
            />
            <section className='relative z-1 w-full bg-no-repeat bg-cover items-center lg:px-32 md:px-16 flex flex-col lg:flex-row lg:space-x-10 md:space-x-6 justify-between'>
                <div className="lg:w-1/2 lg:flex lg:flex-col lg:order-1 order-2 px-2 w-full">
                    <h1 className="text-white font-extrabold text-4xl lg:text-5xl md:text-5xl">{title}</h1>
                    <h2 className="text-white text-[25px] mt-10">{subTitle}</h2>
                </div>
                <FindPart selectedMake={selectedMake} selectedPart={selectedPart} />
            </section>
        </div>

    )
}

export default SubHeadComponent;