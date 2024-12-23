import Image from 'next/image';
 import Logo from '/public/assets/Images/Logo.png';
  const Header = () => {
 return (
    <header className="bg-[#2B1712] p-4"> 
   <div className="container mx-auto flex justify-center items-center"> {/* Logo */}
    <div className="flex items-center justify-center w-full">
   <Image src={Logo} alt="Logo" width={100} height={110} className="rounded-full" />
 </div> 
 </div> {/* Separator Line */}
 <div className="w-full border-t border-[#DDB66F] mt-4">
</div>
 </header>
  ); 
}; 
export default Header;