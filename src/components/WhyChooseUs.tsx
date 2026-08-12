import { UserCheck, Leaf, ThumbsUp, CalendarCheck, Shield } from "lucide-react";
import { whyChooseUs } from "../data";

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Leaf,
  ThumbsUp,
  CalendarCheck,
  Shield,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 mb-5">
            <Shield className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-semibold text-gold-300">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Golden Dunes{" "}
            <span className="text-gold-400">Difference</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-300 leading-relaxed">
            We go beyond cleaning — we deliver peace of mind. Here's what sets us apart
            from the rest.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 hover:border-gold-400/30 hover:bg-white/[0.08] transition-all duration-300 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 mb-5 group-hover:from-gold-400/30 group-hover:to-gold-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
