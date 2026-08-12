import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
  ArrowRight,
  Clock,
  MessageCircle,
  Calendar,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { services, faqs, WHATSAPP_LINK } from "../data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-navy-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-navy-900 group-hover:text-gold-600 transition-colors pr-4">
          {question}
        </span>
        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold-50 group-hover:bg-gold-100 transition-colors">
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-gold-600" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gold-600" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-navy-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 mb-5">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-semibold text-gold-300">Our Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
            Professional Cleaning{" "}
            <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed mb-8">
            From routine deep cleans to specialized treatments, we offer comprehensive
            cleaning solutions tailored to your needs. Click on any service to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-500 hover:to-gold-600 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book a Service
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group relative bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 hover:border-gold-300 hover:shadow-2xl hover:shadow-gold-100/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 group-hover:from-gold-100 group-hover:to-gold-200 transition-colors mb-5">
                    <Icon className="h-7 w-7 text-gold-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-xs text-navy-400 mb-4">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Preview of what's included */}
                  <div className="pt-4 border-t border-navy-100">
                    <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">
                      Includes:
                    </div>
                    <ul className="space-y-1.5">
                      {service.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-navy-500">
                          <span className="h-1 w-1 rounded-full bg-gold-400" />
                          {item.length > 40 ? item.substring(0, 40) + "..." : item}
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-xs text-gold-600 font-medium">
                          +{service.includes.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
                    View Details & Book
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-base text-gold-100 mb-8 max-w-xl mx-auto">
            Chat with us on WhatsApp and we'll help you choose the right service
            for your space. We're happy to provide custom quotes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-gold-600 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gold-50 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Chat With Us
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
              <HelpCircle className="h-4 w-4 text-gold-500" />
              <span className="text-sm font-semibold text-gold-700">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
              Frequently Asked{" "}
              <span className="text-gold-500">Questions</span>
            </h2>
            <p className="text-base text-navy-600">
              Got questions? We've got answers. If you can't find what you're
              looking for, feel free to reach out.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-navy-500 mb-4">Still have questions?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
