import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  Star,
  Shield,
  Clock,
  UserCheck,
  Send,
  CheckCircle,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import {
  services,
  propertyTypes,
  timeSlots,
  PHONE,
  PHONE_LINK,
  RATING,
  REVIEW_COUNT,
} from "../data";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: preselectedService,
    propertyType: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hi Golden Dunes! I'd like to book a cleaning service.

📋 *Booking Details*
• Name: ${form.name}
• Phone: ${form.phone}
• Service: ${form.service}
• Property: ${form.propertyType}
• Date: ${form.date}
• Time: ${form.time}
• Address: ${form.address}
${form.notes ? `• Notes: ${form.notes}` : ""}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/971547065051?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const msg = `Hi Golden Dunes! I'd like to book a cleaning service.${
      form.service ? `\n\nService interested in: ${form.service}` : ""
    }`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/971547065051?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50/30 to-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-300/30">
                <span className="text-lg font-bold text-white">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight tracking-tight text-navy-900">
                  Golden Dunes
                </span>
                <span className="text-[10px] font-medium leading-tight uppercase tracking-widest text-gold-600">
                  Deep Cleaning
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-gold-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
              <Sparkles className="h-4 w-4 text-gold-500" />
              <span className="text-sm font-semibold text-gold-700">Book Now</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
              Book Your{" "}
              <span className="text-gold-500">Cleaning</span>
            </h1>
            <p className="text-base sm:text-lg text-navy-600 max-w-xl mx-auto">
              Fill out the form below or chat with us directly on WhatsApp for the
              fastest response.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-3">
                      Booking Request Sent!
                    </h2>
                    <p className="text-base text-navy-600 mb-8 max-w-md">
                      Your request has been sent via WhatsApp. Our team will confirm
                      your booking within 1 hour during business hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 text-sm font-semibold text-navy-700 border border-navy-200 rounded-xl hover:bg-navy-50 transition-colors"
                      >
                        Book Another Service
                      </button>
                      <Link
                        to="/"
                        className="px-6 py-3 text-sm font-semibold text-white bg-gold-500 rounded-xl hover:bg-gold-600 transition-colors"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                    <div className="space-y-6">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            placeholder="e.g. Sarah Ahmed"
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Phone / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            placeholder="e.g. 054 XXX XXXX"
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all"
                          />
                        </div>
                      </div>

                      {/* Service & Property Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Service Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="service"
                            required
                            value={form.service}
                            onChange={(e) =>
                              setForm({ ...form, service: e.target.value })
                            }
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all appearance-none"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {services.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="propertyType"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Property Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="propertyType"
                            required
                            value={form.propertyType}
                            onChange={(e) =>
                              setForm({ ...form, propertyType: e.target.value })
                            }
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all appearance-none"
                          >
                            <option value="" disabled>
                              Select property type
                            </option>
                            {propertyTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="date"
                            type="date"
                            required
                            value={form.date}
                            onChange={(e) =>
                              setForm({ ...form, date: e.target.value })
                            }
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-semibold text-navy-800 mb-2"
                          >
                            Preferred Time <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="time"
                            required
                            value={form.time}
                            onChange={(e) =>
                              setForm({ ...form, time: e.target.value })
                            }
                            className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all appearance-none"
                          >
                            <option value="" disabled>
                              Select time slot
                            </option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-semibold text-navy-800 mb-2"
                        >
                          Address / Area <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="address"
                          type="text"
                          required
                          value={form.address}
                          onChange={(e) =>
                            setForm({ ...form, address: e.target.value })
                          }
                          placeholder="e.g. Building Name, Street, Dubai South"
                          className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all"
                        />
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-sm font-semibold text-navy-800 mb-2"
                        >
                          Additional Notes{" "}
                          <span className="text-navy-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                          id="notes"
                          rows={3}
                          value={form.notes}
                          onChange={(e) =>
                            setForm({ ...form, notes: e.target.value })
                          }
                          placeholder="Any specific requirements, access instructions, or questions..."
                          className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
                      >
                        <Send className="h-5 w-5" />
                        Submit Booking Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp Alternative */}
              <div className="bg-green-50 rounded-2xl border border-green-200 p-6">
                <h3 className="text-base font-bold text-green-900 mb-2">
                  Prefer to Chat?
                </h3>
                <p className="text-sm text-green-700 mb-4">
                  Skip the form and book instantly via WhatsApp. We'll respond within
                  minutes!
                </p>
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Instantly via WhatsApp
                </button>
              </div>

              {/* Call Option */}
              <a
                href={PHONE_LINK}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-navy-100 hover:border-gold-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-400/20">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-navy-500">Call Us</div>
                  <div className="text-base font-bold text-navy-900">{PHONE}</div>
                </div>
              </a>

              {/* Trust Elements */}
              <div className="bg-white rounded-2xl border border-navy-100 p-6 space-y-5">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                  Why Book With Us
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-3 pb-4 border-b border-navy-100">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy-900">{RATING}</span>
                    <span className="text-sm text-navy-500">
                      {" "}
                      • {REVIEW_COUNT} Google Reviews
                    </span>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-50 flex-shrink-0">
                      <Clock className="h-4 w-4 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">
                        Fast Response
                      </div>
                      <div className="text-xs text-navy-500">
                        Confirmation within 1 hour
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-50 flex-shrink-0">
                      <Shield className="h-4 w-4 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">
                        Fully Insured
                      </div>
                      <div className="text-xs text-navy-500">
                        Your property is protected
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-50 flex-shrink-0">
                      <UserCheck className="h-4 w-4 text-gold-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">
                        Trained Staff
                      </div>
                      <div className="text-xs text-navy-500">
                        Professional & background-checked
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Info (if preselected) */}
              {form.service && (
                <div className="bg-gold-50/50 rounded-2xl border border-gold-200 p-5">
                  <div className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1">
                    Selected Service
                  </div>
                  <div className="text-base font-bold text-navy-900">
                    {form.service}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-navy-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-navy-500">
            © {new Date().getFullYear()} Golden Dunes Deep Cleaning. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
