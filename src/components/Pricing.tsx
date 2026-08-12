import { Link } from "react-router-dom";
import { Check, MessageCircle, Crown, Calendar } from "lucide-react";
import { packages, WHATSAPP_LINK } from "../data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-navy-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
            <Crown className="h-4 w-4 text-gold-500" />
            <span className="text-sm font-semibold text-gold-700">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Simple, Transparent{" "}
            <span className="text-gold-500">Packages</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            Choose your space size and we'll provide a custom quote. No hidden fees,
            no surprises — just spotless results.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-2xl shadow-navy-900/30 scale-[1.02] border-2 border-gold-400/30"
                  : "bg-white border border-navy-100 hover:border-gold-200 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-xs font-bold text-navy-900 shadow-md">
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-navy-900"}`}>
                  {pkg.name}
                </h3>
                <div className={`text-sm ${pkg.popular ? "text-gold-300" : "text-navy-500"}`}>
                  Custom pricing based on your needs
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full mt-0.5 ${
                      pkg.popular ? "bg-gold-400/20" : "bg-gold-100"
                    }`}>
                      <Check className={`h-3 w-3 ${pkg.popular ? "text-gold-400" : "text-gold-600"}`} />
                    </div>
                    <span className={`text-sm ${pkg.popular ? "text-navy-200" : "text-navy-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="space-y-3">
                <Link
                  to="/booking"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:from-gold-500 hover:to-gold-600"
                      : "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/15"
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Book Online
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? "border border-white/20 text-white hover:bg-white/10"
                      : "border border-navy-200 text-navy-700 hover:border-green-300 hover:text-green-600"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-navy-400 mt-8">
          All packages include eco-friendly products & professional equipment. Prices vary based on property condition and specific requirements.
        </p>
      </div>
    </section>
  );
}
