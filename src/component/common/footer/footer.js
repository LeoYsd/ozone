import { FaFacebookF, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { BsDribbble } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import BrandLogo from "../../../assets/images/OzoneLogo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="grid place-items-center bg-[#58504A1A] w-full">
            <div className="my-20 w-[90%] flex align-center justify-center sm:flex-col-reverse md:flex-row md:gap-0 sm:gap-10">
                <div className="md:w-[35%] flex flex-col gap-3">
                    <div>
                        <img src={BrandLogo} alt="logo"/>
                    </div>
                    <h3 className="font-bold capitalize leading-[28px] text-[1.2rem]">Contact us</h3>
                    <p className="text-[#6D737A]">Call : +123 400 123</p>
                    <address className="text-[#6D737A] not-italic md:w-2/3 sm:w-full">No 5. Ozumba Mbadiwe road 112110, Gwarinpa, Lagos State.</address>
                    <a href="mailto:example@example.com" className="font-bold">Email: example@example.com</a>
                    <div className="flex gap-2">
                        <div className="bg-[#fafafa] p-4">
                            <FaFacebookF color='#9C94FE'/>
                        </div>
                        <div className="bg-[#fafafa] p-4">
                            <BsDribbble color='#9C94FE'/>
                        </div>
                        <div className="bg-[#fafafa] p-4">
                            <FaLinkedinIn color='#9C94FE'/>
                        </div>
                        <div className="bg-[#fafafa] p-4">
                            <FiInstagram color='#9C94FE'/>
                        </div>
                        <div className="bg-[#fafafa] p-4">
                            <FaBehance color='#9C94FE'/>
                        </div>
                    </div>
                </div>
                <div className="w-[65%] flex md:flex-row sm:flex-col items-center justify-between sm:gap-12 md:gap-0">
                    <div className='md:w-[33%] sm:w-full flex justify-between flex-col h-full'>
                        <h3 className='h-[10%] font-bold text-[#1B1D1F] lg:text-[1.3rem] md:text-[1.1rem] sm:mb-3 md:mb-0'>Features</h3>
                        <ul className='h-[80%] text-[#6D737A] flex flex-col gap-2'>
                            <li>Home</li>
                            <li>Become a host</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='md:w-[33%] sm:w-full flex justify-between flex-col h-full'>
                        <h3 className='h-[10%] font-bold text-[#1B1D1F] lg:text-[1.3rem] md:text-[1.1rem] sm:mb-3 md:mb-0'>Company</h3>
                        <ul className='h-[80%] text-[#6D737A] flex flex-col gap-2'>
                            <li>About us</li>
                            <li>Press contact</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='md:w-[33%] sm:w-full flex justify-between flex-col h-full'>
                        <h3 className='h-[10%] font-bold text-[#1B1D1F] lg:text-[1.3rem] md:text-[1.1rem] sm:mb-3 md:mb-0'>Team and Policies</h3>
                        <ul className='h-[80%] text-[#6D737A] flex flex-col gap-2'>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center text-white bg-dark py-3 w-full'>
                &copy; {currentYear} Copyright Ozone.
            </div>
        </div>
    );
}
 
export default Footer;
