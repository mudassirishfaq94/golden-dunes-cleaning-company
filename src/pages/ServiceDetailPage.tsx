import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
  Check,
  Clock,
  MessageCircle,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Star,
  Shield,
  Leaf,
} from "lucide-react";
import { services, WHATSAPP_LINK, RATING, REVIEW_COUNT } from "../data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Home,
  Armchair,
  ChefHat,
  HardHat,
  ShieldCheck,
};

// Related images for each service (stock photos)
const serviceImages: Record<string, string> = {
  "deep-cleaning": "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "move-in-out": "https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "sofa-carpet": "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "kitchen-deep": "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "post-construction": "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "sanitization": "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = services.find((s) => s.id === serviceId);
  const currentIndex = services.findIndex((s) => s.id === serviceId);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Redirect if service not found
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon];
  const imageUrl = serviceImages[service.id] || serviceImages["deep-cleaning"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={service.title}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-navy-400 mb-6">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-400">{service.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 border border-gold-400/20">
              <Icon className="h-8 w-8 text-gold-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-navy-300 max-w-3xl leading-relaxed mb-8">
            {service.fullDescription}
          </p>

          {/* Duration badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 mb-8">
            <Clock className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium text-white">
              Typical duration: {service.duration}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={`/booking?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-navy-900 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-500 hover:to-gold-600 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book This Service
            </Link>
            <a
              href={`https://wa.me/971547065051?text=${encodeURIComponent(`Hi Golden Dunes! I'm interested in your ${service.title} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-xl shadow-green-500/25 hover:shadow-green-500/40 hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* What's Included */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
                <Check className="h-4 w-4 text-gold-500" />
                <span className="text-sm font-semibold text-gold-700">What's Included</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
                Everything You Get With This Service
              </h2>
              <div className="space-y-4">
                {service.includes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-navy-50/50 hover:bg-gold-50/50 transition-colors"
                  >
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gold-100">
                      <Check className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <span className="text-base text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us for This Service */}
            <div>
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Choose Golden Dunes?</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 flex-shrink-0">
                      <Star className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">5.0★ Rated on Google</div>
                      <div className="text-sm text-navy-300">{REVIEW_COUNT} verified reviews from happy customers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 flex-shrink-0">
                      <Shield className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Fully Insured</div>
                      <div className="text-sm text-navy-300">Your property is protected during every service</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 flex-shrink-0">
                      <Leaf className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Eco-Friendly Products</div>
                      <div className="text-sm text-navy-300">Safe for your family, pets, and the environment</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 flex-shrink-0">
                      <Clock className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Fast Response</div>
                      <div className="text-sm text-navy-300">Booking confirmation within 1 hour</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{RATING} Rating</span>
                  </div>
                  <p className="text-sm text-navy-300 italic">
                    "Professional, thorough, and on time. Highly recommended!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Book Your {service.title}?
          </h2>
          <p className="text-base text-gold-100 mb-8 max-w-xl mx-auto">
            Get in touch today for a custom quote. Fast response, professional service,
            satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`/booking?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-gold-600 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gold-50 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book Now
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Navigation to Other Services */}
      <section className="py-12 bg-navy-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {prevService ? (
              <Link
                to={`/services/${prevService.id}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <ArrowLeft className="h-5 w-5 text-navy-400 group-hover:text-gold-500 transition-colors" />
                <div className="text-left">
                  <div className="text-xs text-navy-400 uppercase tracking-wider">Previous</div>
                  <div className="text-sm font-semibold text-navy-800">{prevService.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            <Link
              to="/services"
              className="text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
            >
              View All Services
            </Link>

            {nextService ? (
              <Link
                to={`/services/${nextService.id}`}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl border border-navy-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <div className="text-right">
                  <div className="text-xs text-navy-400 uppercase tracking-wider">Next</div>
                  <div className="text-sm font-semibold text-navy-800">{nextService.title}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-navy-400 group-hover:text-gold-500 transition-colors" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 text-center mb-10">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((s) => {
                const SIcon = iconMap[s.icon];
                return (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="group p-6 bg-white rounded-2xl border border-navy-100 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-100/50 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 group-hover:from-gold-100 group-hover:to-gold-200 transition-colors mb-4">
                      <SIcon className="h-6 w-6 text-gold-600" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {s.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
