import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react";
import { PHONE, PHONE_LINK, WHATSAPP_LINK, ADDRESS, services } from "../data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services" },
  { label: "Book Now", href: "/booking" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md">
                <span className="text-xl font-bold text-white">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight text-white">Golden Dunes</span>
                <span className="text-xs font-medium leading-tight uppercase tracking-widest text-gold-400">
                  Deep Cleaning
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-400 leading-relaxed mb-5 max-w-xs">
              Dubai's trusted deep cleaning professionals. Premium service,
              eco-friendly products, and guaranteed satisfaction.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-green-500/20 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm text-navy-400 hover:text-gold-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <a href={PHONE_LINK} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-300 hover:text-green-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <Link
                  to="/booking"
                  className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                >
                  Book Online
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-400 leading-relaxed">
                  {ADDRESS}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            © {new Date().getFullYear()} Golden Dunes Deep Cleaning. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Serving Dubai South, Expo City & Greater Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
