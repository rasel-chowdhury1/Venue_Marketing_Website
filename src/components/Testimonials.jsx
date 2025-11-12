import { ACCENT_COLOR, PRIMARY_COLOR } from "../constants/colors";
import { testimonials } from "../data/testimonialsData";




const Testimonials = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Trusted by Explorers and Owners</h2>
      <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">Don't just take our word for it—see what our community has to say about the platform.</p>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-xl shadow-lg border-l-4" style={{ backgroundColor: ACCENT_COLOR, borderLeftColor: PRIMARY_COLOR }}>
            <p className="text-lg italic text-gray-800">"{t.quote}"</p>
            <div className="mt-6 pt-4 border-t border-gray-300">
              <p className="text-base font-semibold text-gray-900">{t.author}</p>
              <p className="text-sm" style={{ color: PRIMARY_COLOR }}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
