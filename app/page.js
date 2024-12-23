'use client';
 import Image from 'next/image';
 import { FaArrowDown, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
 import Coffe from '/public/assets/Images/Coffe.png'; 
import P1 from '/public/assets/Images/P1.png';
 import P2 from '/public/assets/Images/P2.png';
  import P3 from '/public/assets/Images/P3.png';
 import C from '/public/assets/Images/C.png';
 import Tet from '/public/assets/Images/Testimonial.png';
  import Steps from '/public/assets/Images/Steps.png';
   import Title from '/public/assets/Images/Title.png';
   import About from '/public/assets/Images/About.png';
    import T1 from '/public/assets/Images/T1.png';
     import Pr1 from '/public/assets/Images/Pr1.png';
     import Pr2 from '/public/assets/Images/Pr2.png'; 
    import T2 from '/public/assets/Images/T2.png';
   import Pr3 from '/public/assets/Images/Pr3.png';
   import Logo from '/public/assets/Images/Logo.png';
   import N1 from '/public/assets/Images/N1.png';
  import Bg from '/public/assets/Images/Bg.png' ;
   const HomePageContent = () => {
     const scrollToNextSection = (sectionId) => {
     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
   };
    return (
     <div>
     <section className="bg-[#2B1712] flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 rounded-t-lg">
     {/* Desktop Layout */}
     <div className="hidden lg:flex flex-row items-center justify-center space-x-10 w-full max-w-screen-lg mx-auto">
     <div className="w-1/2"> 
    <Image src={Coffe} alt="Cup Image" className="rounded-md" /> 
  </div>
 <div className="w-1/2 text-white">
 <p className="text-[#DDB66F] text-sm">Exceptional Quality</p>
 <Image src={Title} alt="Stylish Title" className="mt-4" /> 
<Image src={T1} alt="Paragraph" className="mt-2" />
 <button onClick={() => scrollToNextSection('next-section')} className="mt-4 px-6 py-2 bg-[#DDB66F] text-black font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center" > Get Started </button>
 </div>
 </div> {/* Mobile Layout */}
 <div className="flex lg:hidden flex-col items-center justify-center w-full text-white">
 <Image src={Title} alt="Stylish Title" className="mt-4" /> 
<Image src={T1} alt="Paragraph" className="mt-2" /> 
<button onClick={() => scrollToNextSection('next-section')} className="mt-4 px-6 py-2 bg-[#DDB66F] text-black font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center" > Get Started </button>
 <Image src={Coffe} alt="Cup Image" className="w-3/4 rounded-md mt-4" />
 </div>
  </section> {/* Next Section */} <section id="next-section">
 <div className="bg-[#492D26] flex flex-col lg:flex-row items-center justify-between min-h-screen w-full lg:space-x-10 rounded-t-lg px-4">
<div className="flex flex-col items-start justify-start w-full lg:w-1/2 text-white">
<button className="mt-4 px-6 py-2 bg-[#2B1712] text-white font-medium rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center" onClick={() => scrollToNextSection('third-section')} > Scroll Down <FaArrowDown className="ml-2" /> </button>
 <Image src={T2} alt="Paragraph" className="mt-4" /> 
 </div> 
<div className="flex flex-wrap justify-end w-full lg:w-1/2 text-white">
 <div className="flex flex-col items-center m-2"> 
<Image src={P1} alt="Classic Coffee" className="rounded-md" />
 <Image src={Pr1} alt="Price" className="mt-2" /> 
 </div>
 <div className="flex flex-col items-center m-2">
 <Image src={P2} alt="Classic Coffee" className="rounded-md" />
 <Image src={Pr2} alt="Price" className="mt-2" />
 </div> 
<div className="flex flex-col items-center m-2">
 <Image src={P3} alt="Classic Coffee" className="rounded-md" />
 <Image src={Pr3} alt="Price" className="mt-2" />
 </div>
  </div>
   </div>
    <div className="bg-white flex flex-col lg:flex-row items-center justify-between min-h-screen w-full rounded-t-lg px-4 mt-4"> 
    <div className="flex flex-col items-start justify-start w-full lg:w-1/2"> 
  <Image src={C} alt="Coffee Cup" className="rounded-md" /> 
</div>
 <div className="flex flex-col items-center w-full lg:w-1/2 text-black">
 <Image src={About} alt="Our History" className="w-full h-full lg:w-full lg:h-full rounded-t-lg" />
 </div>
 </div> 
 </section>
  {/* Third Section */}
 <section id="third-section"> 
<div className="flex flex-col lg:flex-row items-center justify-between min-h-screen w-full lg:space-x-10 rounded-t-lg px-4 mt-4"> 
<Image src={Steps} alt="Steps" className="w-full h-full lg:w-full lg:h-full rounded-t-lg" /> </div> <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen w-full rounded-t-lg px-4 mt-4"> 
<Image src={Tet} alt="Testimonial" className="w-full h-full lg:w-full lg:h-full rounded-t-lg" /> 
</div>
 </section> {/* Footer Section */}
  {/* Footer Section */}
  <section className="bg-[#2B1712] relative min-h-screen flex flex-col items-center justify-center px-4">
     <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col items-center lg:items-start">
     <Image src={Logo} alt="Logo" className="mt-4" />
     <Image src={N1} alt="Footer Heading" className="mt-4" />
     </div>
     <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col items-center lg:items-start">
     <input type="email" placeholder="Enter e-mail address" className="mt-4 px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-white" />
     <button className="mt-4 px-10 py-2 bg-[#DDB66F] text-black font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center"> Subscribe </button>
     <p className="mt-4 text-sm"> We care about your data. <span className="text-[#DDB66F]">Read our Privacy Policy</span>
      </p>
       </div>
        <div className="flex flex-col items-center mt-10 lg:mt-20 space-y-4"> 
        <div className="flex space-x-4 text-white"> 
        <FaFacebook size={24} />
       <FaInstagram size={24} />
       <FaTwitter size={24} /> 
      </div>
     <p className="text-sm text-white">© Copyright Bedimcode. All rights reserved.</p>
      </div>
       </section>
       </div>
        );
       };
        export default HomePageContent;