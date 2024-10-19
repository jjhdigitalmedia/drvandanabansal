import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const NavigationB = () => {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen((prev) => !prev);
        setIsServicesDropdownOpen(false); // Close Services dropdown if About is opened
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen((prev) => !prev);
        setIsAboutDropdownOpen(false); // Close About dropdown if Services is opened
    };

    const toggleNestedDropdown = (menu) => {
        setIsNestedDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const [isOpen, setIsOpen] = useState(false);
    const navClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className=" hidden md:flex flex-wrap z-50 justify-between py-1 px-3 bg-pink-800">
                <div>
                    <span className="pr-8 text-sm text-white">
                        <MdOutlineMail className="inline" />
                         <Link href='Home'>Phone: +91 6390103002</Link>
                    </span>
                    <span className="pr-8 text-sm text-white">
                        <IoCallOutline className="inline" />
                         Email: arpitivf@gmail.com
                    </span>
                    
                </div>
                {/* <div className="text-xs text-white md:mt-2 mt-0">
          <a
            href="https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <IoLocationOutline className="inline text-white text-lg text-wrap" />
            <span className=" align-middle">
              162 Bai Ka Bagh, Lowther Road, 211003, Prayagraj UP
            </span>
          </a>
        </div> */}
                <div>
                    <span className="pr-8 text-sm text-white">
                        <IoLocationOutline className="inline " />
                        162 Bai Ka Bagh, Lowther Road, 211003, Prayagraj UP
                    </span>
                </div>
            </div>
        </>
    )
}

export default NavigationB