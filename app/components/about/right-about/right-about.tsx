import Skillcard from "./skillcard";
import skills from "./skills";


const RightAbout: React.FC = () => {
    return ( 
        <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-8 items-center">
                {skills.map((skill) => (
                    <Skillcard 
                        key={skill.name}
                        name={skill.name}
                        image={skill.image}
                    />
                ))}
            </div>
        </div>
        
     );
}
 
export default RightAbout;