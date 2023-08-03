import Image from "next/image";

interface SkillcardProps {
    name: string;
    image: string;
}

const Skillcard: React.FC<SkillcardProps> = ({
    name,
    image,
}) => {
    return ( 
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-color-primary object-cover hover:bg-color-bg-variant transition-all
        duration-300
        ease-in-out w-24 h-24">
            <Image 
                className="mt-2"
                src={image}
                alt={name}
                width="48"
                height="48"
            />
            <div className="mt-2 text-white text-sm">
                {name}
            </div>
        </div> 
    );
}
 
export default Skillcard;