import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavItem } from "../shared/NavItem";
import logo from "/assets/logo.svg"



const navItems = [
  { href: "#", text: "FAQs" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Press Kit" },
  { href: "#", text: "Install Guide" },
];

const Footer = () => {
  return (
<div className="w-full bg-gray-200 py-6">
  <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-6xl mx-auto px-4 pt-7 
                  grid grid-cols-1 gap-6 
                  lg:flex lg:flex-row lg:items-center lg:justify-center">
    {/* Logo */}
    <div className="flex justify-center lg:justify-start">
      <img alt="Logo" className="w-16 h-16" src={logo} />
    </div>

    {/* Nav Items */}
    <ul className="grid grid-cols-1 gap-4 justify-items-center text-center 
                   lg:grid-cols-4 lg:gap-8 lg:justify-items-start lg:text-left lg:mb-4 ">
      {navItems.map((item, key) => (
        <NavItem href={item.href} text={item.text} key={key} />
      ))}
    </ul>

    {/* Social Icons */}
    <div className="flex justify-center gap-4 lg:justify-start">
      <Facebook className="w-6 h-6 text-gray-600 hover:text-green-500 transition-colors duration-300 hover:scale-110" />
      <Twitter className="w-6 h-6 text-gray-600 hover:text-green-500 transition-colors duration-300 hover:scale-110" />
      <Instagram className="w-6 h-6 text-gray-600 hover:text-green-500 transition-colors duration-300 hover:scale-110" />
    </div>

  </div>
</div>

  )
}

export default Footer