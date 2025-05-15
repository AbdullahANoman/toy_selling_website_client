import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import NavItem from "./NavItem";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TfiClose } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import ToggleBar from "./ToggleBar";
import Logo from "../../../assets/icons/logo.png";

// const ToggleNavbar = dynamic(() => import("./ToggleBar")); // Lazy-load

const Navbar = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathName } = useParams();
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const topbarHeight = 80;
    setNavbarFixed(window.scrollY > topbarHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-[#F2F2F2]">
      {/* Main Navbar */}
      <div
        className={`navbar font-semibold transition duration-300 h-20 lg:h-24 ${
          isNavbarFixed
            ? "fixed top-0 left-0 w-full z-[100] bg-background shadow-2xl"
            : ""
        }`}
      >
        <div className="relative h-full">
          <div className="container mx-auto h-full flex justify-between items-center lg:grid lg:grid-cols-3 gap-1 px-1 md:px-2">
            <div className="col-span-1 flex justify-start items-center">
              <div className="flex gap-2 items-center">
                <div>
                  <img src={Logo} className="relative h-12 w-12" alt="logo" />
                </div>
                <p className="text-xl font-bold">
                  <span className="text-primary">Toy</span>
                  <span className="text-secondary">Tutors</span>
                </p>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center gap-5">
              <NavItem path="/" name="Home" />
              <NavItem path="/all-toys" name="All Toys" />
              <NavItem path="/about" name="About" />
              <NavItem path="/contact" name="Contact" />
            </div>
            <div
              className={`smM:flex justify-center items-center text-lg font-bold text-primary hidden md:hidden`}
            >
              ToyTutors
            </div>
            <div className="col-span-1  flex justify-end items-center gap-3">
              <div className="flex gap-2">
                <Link to="/cart"></Link>
                <Sheet open={isOpenDrawer} onOpenChange={setOpenDrawer}>
                  <SheetTrigger>
                    {/* <CartIcon /> */} <p>Show</p>
                  </SheetTrigger>
                  <SheetContent className="z-[99999] rounded-l-xl">
                    {/* <CartPage setOpenDrawer={setOpenDrawer} /> */}
                    <div onClick={() => setOpenDrawer(true)}>
                      <div>Noman</div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
              <div className="transition-all duration-300 w-6 flex justify-center items-center">
                {isMobileMenuOpen ? (
                  <TfiClose
                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-brandColor cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ) : (
                  <FaBars
                    className="md:hidden text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:text-brandColor cursor-pointer"
                    size={24}
                    onClick={toggleMobileMenu}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Navbar */}
      <ToggleBar
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isNavbarFixed={isNavbarFixed}
        pathName={pathName}
      />

      {/* Placeholder for Fixed Navbar */}
      {isNavbarFixed && <div className="h-20"></div>}
    </div>
  );
};

export default Navbar;
