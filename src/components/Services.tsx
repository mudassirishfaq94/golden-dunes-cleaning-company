import { Link } from "react-router-dom";
import {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-sm font-semibold text-gold-700">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Professional Cleaning{" "}
            <span className="text-gold-500">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            From routine deep cleans to specialized services, we've got every corner of
            your space covered with our expert team.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 group-hover:from-gold-100 group-hover:to-gold-200 transition-colors">
                    <Icon className="h-6 w-6 text-gold-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Services */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gold-600 border border-gold-300 rounded-xl hover:bg-gold-50 hover:border-gold-400 transition-colors"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
