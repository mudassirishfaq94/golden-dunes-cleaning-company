import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK, services } from "../data";

const navLinks = [
  { href: "/#why-us", label: "Why Us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle hash navigation
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (isHomePage) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileOpen(false);
  };

  // Determine if navbar should be transparent (only on homepage at top)
  const isTransparent = isHomePage && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-300/30">
              <span className="text-lg sm:text-xl font-bold text-white">G</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-sm sm:text-base font-bold leading-tight tracking-tight transition-colors ${isTransparent ? "text-white" : "text-navy-900"}`}>
                Golden Dunes
              </span>
              <span className={`text-[10px] sm:text-xs font-medium leading-tight uppercase tracking-widest transition-colors ${isTransparent ? "text-gold-300" : "text-gold-600"}`}>
                Deep Cleaning
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-navy-700 hover:text-gold-600 hover:bg-gold-50"
                } ${location.pathname.startsWith("/services") ? (isTransparent ? "text-white bg-white/10" : "text-gold-600 bg-gold-50") : ""}`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-navy-100 overflow-hidden transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="p-2">
                  <Link
                    to="/services"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-navy-900 hover:bg-gold-50 hover:text-gold-700 transition-colors border-b border-navy-100 mb-2"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-white text-xs">
                      ✨
                    </span>
                    View All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-navy-700 hover:bg-gold-50 hover:text-gold-700 transition-colors"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-50 text-navy-500 text-xs">
                        {service.icon === "Sparkles" && "✨"}
                        {service.icon === "Home" && "🏠"}
                        {service.icon === "Armchair" && "🛋️"}
                        {service.icon === "ChefHat" && "👨‍🍳"}
                        {service.icon === "HardHat" && "🔨"}
                        {service.icon === "ShieldCheck" && "🛡️"}
                      </span>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-navy-700 hover:text-gold-600 hover:bg-gold-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/booking"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                isTransparent
                  ? "text-white border border-white/30 hover:bg-white/10"
                  : "text-navy-800 hover:text-gold-700 border border-navy-200 hover:border-gold-300"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Book Online
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:from-green-600 hover:to-green-700 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isTransparent ? "text-white hover:bg-white/10" : "text-navy-800 hover:bg-navy-100"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-navy-100 px-4 py-4 space-y-1 shadow-xl">
          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-navy-700 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="pl-4 space-y-1 py-2">
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold text-gold-600 hover:bg-gold-50 rounded-xl transition-colors"
                >
                  ✨ View All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-navy-600 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block px-4 py-3 text-sm font-medium text-navy-700 hover:text-gold-600 hover:bg-gold-50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Book Online link in mobile */}
          <Link
            to="/booking"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-gold-600 hover:text-gold-700 hover:bg-gold-50 rounded-xl transition-colors border border-gold-200 mt-2"
          >
            📅 Book Online
          </Link>
          
          <div className="pt-3 flex gap-3 border-t border-navy-100 mt-3">
            <a
              href={PHONE_LINK}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-navy-800 border border-navy-200 rounded-xl hover:border-gold-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-500/20 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
