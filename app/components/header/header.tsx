import Button from "@/app/components/button";

const Header: React.FC = () => {
    return ( 
        <div 
            className='
                flex 
                flex-col 
                items-center 
                justify-center 
                h-screen 
                space-y-2 
                sm:space-y-4 
                mx-auto 
                relative
                overflow-hidden'>
            <div className='text-4xl sm:text-6xl font-bold relative text-white'>
                Hi, I'm <span className='text-color-primary relative'>David</span>.
            </div>
            <div className='text-white text-lg sm:text-3xl relative'>Welcome to my page</div>
            <Button />
        </div>
     );
}
 
export default Header;