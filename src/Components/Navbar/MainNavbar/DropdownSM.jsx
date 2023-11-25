import Menus from "./Menus";
import { useState } from "react";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileDropdown from "./ProfileDropdown";

const DropdownSM = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
  };

  return (
          <div className="relative">
              <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 p-2 focus:outline-none"
              >
                  {isDropdownOpen ? <div className="flex"><BiCaretDown /> <GiHamburgerMenu/></div>: <div className="flex"><BiCaretRight/><GiHamburgerMenu/></div>}
                  

                  {isDropdownOpen && (
                      <div className="absolute z-10 mt-2 right-16 top-8 w-48 bg-white text-black rounded-lg shadow-2xl">
                          <ul className="py-2">
                              <Menus/>
                              <ProfileDropdown/>
                          </ul>
                      </div>
                  )}
              </button>
              
          </div>
          
     
  );
};

export default DropdownSM;