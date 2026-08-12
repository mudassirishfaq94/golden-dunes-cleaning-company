import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  "Dubai South",
  "Expo City Dubai",
  "Al Maktoum International Airport District",
  "Madinat Al Mataar",
  "Jebel Ali",
  "Dubai Marina",
  "JVC / JVT",
  "Downtown Dubai",
  "Business Bay",
  "Al Barsha",
  "Arabian Ranches",
  "Dubai Hills Estate",
];

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
              <MapPin className="h-4 w-4 text-gold-500" />
              <span className="text-sm font-semibold text-gold-700">Service Area</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
              Serving All of{" "}
              <span className="text-gold-500">Dubai</span>
            </h2>
            <p className="text-base sm:text-lg text-navy-600 leading-relaxed mb-8">
              Based in Sustainability District at Expo City, we proudly serve Dubai South,
              Expo City, and the greater Dubai area. Wherever you are, we'll bring the
              sparkle to you.
            </p>

            {/* Areas list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-navy-50/50 hover:bg-gold-50 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-navy-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115522.43071797159!2d55.05451!3d24.9601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Dunes Deep Cleaning Service Area — Dubai"
                className="w-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gold-200 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">Expo City</div>
                <div className="text-xs text-navy-500">Dubai South, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
