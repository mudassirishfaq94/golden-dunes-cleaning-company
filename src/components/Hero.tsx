import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, MapPin, Clock, ChevronDown, Calendar } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK, RATING, REVIEW_COUNT, HOURS } from "../data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Spotless modern living room"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-6 sm:mb-8 animate-fade-in-up">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">{RATING}</span>
            <span className="text-sm text-white/70">•</span>
            <span className="text-sm text-white/70">{REVIEW_COUNT} Google Reviews</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5 sm:mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            Spotless Homes,{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Zero Hassle
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-8 sm:mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Dubai's trusted deep cleaning experts. From move-ins to villas, we deliver
            spotless results with eco-friendly products and trained professionals — so you
            can focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl shadow-green-600/30 hover:shadow-green-600/50 hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Book via WhatsApp
            </a>
            <Link
              to="/booking"
              className="group flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-navy-900 bg-white rounded-2xl shadow-xl shadow-white/20 hover:shadow-white/40 hover:bg-gold-50 transition-all duration-300"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
              Book Online
            </Link>
            <a
              href={PHONE_LINK}
              className="group flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white border-2 border-white/25 rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
              Call Now
            </a>
          </div>

          {/* Info strip */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-white/60 text-sm animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0" />
              <span>Dubai South, Expo City & Greater Dubai</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-400 flex-shrink-0" />
              <span>{HOURS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <a href="#services" className="flex flex-col items-center gap-1 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
