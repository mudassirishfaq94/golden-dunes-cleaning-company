import { Link } from "react-router-dom";
import { CalendarPlus, SprayCan, Smile, ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { steps, WHATSAPP_LINK } from "../data";

const stepIcons = [CalendarPlus, SprayCan, Smile];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-gold-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold-200 mb-5">
            <ArrowRight className="h-4 w-4 text-gold-500" />
            <span className="text-sm font-semibold text-gold-700">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Three Simple{" "}
            <span className="text-gold-500">Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            Getting your space professionally cleaned has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={idx} className="relative text-center group">
                {/* Connector line (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t-2 border-dashed border-gold-300/50" />
                )}

                {/* Step number & icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white border-2 border-gold-200 shadow-lg shadow-gold-100/50 group-hover:border-gold-400 group-hover:shadow-gold-200/50 transition-all duration-300">
                    <Icon className="h-10 w-10 text-gold-500 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl shadow-xl shadow-gold-400/25 hover:shadow-gold-400/40 hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
          >
            <Calendar className="h-5 w-5" />
            Book Online
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl shadow-green-500/25 hover:shadow-green-500/40 hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
