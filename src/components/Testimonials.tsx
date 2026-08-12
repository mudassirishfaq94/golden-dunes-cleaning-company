import { Star, Quote, MapPin, BadgeCheck } from "lucide-react";
import { testimonials, RATING, REVIEW_COUNT } from "../data";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
            <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
            <span className="text-sm font-semibold text-gold-700">Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            What Our Clients{" "}
            <span className="text-gold-500">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            Real reviews from homeowners and property managers across Dubai.
            See why they trust Golden Dunes for their deep cleaning needs.
          </p>
        </div>

        {/* Overall rating badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-gold-50 to-gold-100/50 border border-gold-200 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-navy-900">{RATING}</div>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-gold-300" />
            <div>
              <div className="text-sm font-semibold text-navy-800">Google Reviews</div>
              <div className="text-sm text-navy-500">{REVIEW_COUNT} verified reviews</div>
            </div>
            <div className="w-px h-10 bg-gold-300" />
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Review cards - 2 rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl border border-navy-100 p-6 sm:p-7 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-50 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-gold-200 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-navy-600 leading-relaxed mb-5">
                "{review.text}"
              </p>

              {/* Service & Location tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-gold-50 text-xs font-medium text-gold-700">
                  {review.service}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy-50 text-xs font-medium text-navy-600">
                  <MapPin className="h-3 w-3" />
                  {review.location}
                </span>
              </div>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-white text-sm font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-navy-900">{review.name}</span>
                      {review.isLocalGuide && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-blue-600">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Local Guide
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-navy-400">{review.timeAgo}</div>
                  </div>
                </div>
                {/* Google icon */}
                <svg className="h-5 w-5 text-navy-300" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="currentColor" opacity="0.7"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" opacity="0.7"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" opacity="0.7"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Golden+Dunes+Deep+Cleaning+Dubai+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            View all reviews on Google
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
