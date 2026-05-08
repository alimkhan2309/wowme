import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  //The navbar should be solid if we've scrolled down OR if we are on an internal page
  const isSolid = isScrolled || !isHomePage;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "Treatments", path: "/#treatments" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#booking" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4" : "py-6"
      }`}
    >
      {/* 1. THE SCRIM: Only render this dark gradient if we are on the homepage.
        It fades out when isSolid becomes true. */}
      {isHomePage && (
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none transition-opacity duration-300 ${
            isSolid ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      )}

      {/* 2. Added 'relative' here so the content sits ABOVE the absolute gradient */}
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-serif font-medium tracking-wide text-charcoal"
        >
          <img
            src={`${isSolid ? "/images/logo-dark.png" : "/images/logo.png"}`}
            alt="Company Logo"
            className="h-30"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-sm tracking-wide hover:text-rosegold transition-colors ${
                isSolid
                  ? "text-charcoal"
                  : "text-charcoal md:text-white drop-shadow-sm"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#booking"
            onClick={(e) => handleNavClick(e, "/#booking")}
            className="bg-charcoal text-ivory px-6 py-2.5 text-sm tracking-wide hover:bg-rosegold transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${isSolid ? "text-charcoal" : "text-charcoal md:text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ivory shadow-lg border-t border-rosegold/10 py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-lg font-serif text-charcoal"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#booking"
              onClick={(e) => handleNavClick(e, "/#booking")}
              className="bg-charcoal text-ivory px-6 py-3 text-center tracking-wide mt-2"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link
            to="/"
            className="text-4xl font-serif font-medium tracking-wide mb-6 block text-rosegold">
            
            Wowme.
          </Link>
          <p className="text-ivory/70 text-sm leading-relaxed mb-6">
            Where confidence meets the artistry of premium aesthetic care in the
            heart of Dubai.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-ivory/70 hover:text-rosegold transition-colors">
              
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-ivory/70 hover:text-rosegold transition-colors">
              
              <Facebook size={20} />
            </a>
            {/* TikTok icon approximation using custom SVG or text if lucide doesn't have it, using a generic icon for now */}
            <a
              href="#"
              className="text-ivory/70 hover:text-rosegold transition-colors font-serif italic text-lg leading-none">
              
              t
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-rosegold">Treatments</h4>
          <ul className="space-y-4 text-sm text-ivory/70">
            <li>
              <Link
                to="/services/injectables"
                className="hover:text-ivory transition-colors">
                
                Injectables
              </Link>
            </li>
            <li>
              <Link
                to="/services/facial-tech"
                className="hover:text-ivory transition-colors">
                
                Facial Tech & Glow
              </Link>
            </li>
            <li>
              <Link
                to="/services/laser-hair-removal"
                className="hover:text-ivory transition-colors">
                
                Laser Hair Removal
              </Link>
            </li>
            <li>
              <Link
                to="/services/regenerative"
                className="hover:text-ivory transition-colors">
                
                Regenerative Medicine
              </Link>
            </li>
            <li>
              <Link
                to="/services/body-sculpting"
                className="hover:text-ivory transition-colors">
                
                Body Sculpting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-rosegold">Clinic</h4>
          <ul className="space-y-4 text-sm text-ivory/70">
            <li>
              <Link to="/#about" className="hover:text-ivory transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/#treatments"
                className="hover:text-ivory transition-colors">
                
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/#booking"
                className="hover:text-ivory transition-colors">
                
                Book Consultation
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-ivory transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-rosegold">Contact</h4>
          <ul className="space-y-4 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-rosegold" />
              <span>
                Wowme Aesthetics Clinic
                <br />
                Jumeirah, Dubai, UAE
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-rosegold" />
              <span>+971 4 XXX XXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-rosegold" />
              <span>hello@wowme.ae</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-ivory/10 text-center text-sm text-ivory/50">
        <p>
          &copy; {new Date().getFullYear()} Wowme Aesthetics Clinic. All rights
          reserved.
        </p>
      </div>
    </footer>);

};
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/97140000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}>
      
      {/* Inline SVG for authentic WhatsApp icon */}
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>

      {/* Pulse effect */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"
        style={{
          animationDuration: '2s'
        }}>
      </span>
    </motion.a>);

};
export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>);

};