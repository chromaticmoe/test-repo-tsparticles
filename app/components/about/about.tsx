import LeftAbout from "./left-about/left-about";
import RightAbout from "./right-about/right-about";

const About: React.FC = () => {
    return ( 
        <section className="h-screen pt-24" id="about">
            <div className="text-center text-color-primary mb-20 font-bold text-5xl">About</div>
            <div 
                className="
                    lg:grid
                    lg:grid-cols-2
                    lg:gap-x-12
                    xl:gap-x-24
                    items-center 
                    justify-between 
                    sm:container
                    lg:px-24
                    mx-auto"
            >
                <LeftAbout />
                <RightAbout />
            </div>
            
        </section>
     );
}
 
export default About;