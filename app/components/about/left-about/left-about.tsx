import Image from "next/image";

const LeftAbout: React.FC = () => {
    return ( 
        <div className="flex flex-col items-center space-y-5">
            <Image 
                src="/images/my-photo.png"
                alt="My Picture"
                height={350}
                width={350}
                sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
     );
}
 
export default LeftAbout;