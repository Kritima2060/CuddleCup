import { Coffee, CakeSlice, Armchair } from "lucide-react";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      {/* 1. Added a grid to balance the text and the feature card */}
      <div className="grid  gap-16 items-center">
        
        <div>
          {/* Changed text-amber-300 to amber-900 to match the Header's strength */}
          <h3 className="text-5xl font-serif text-amber-900 mb-8">Our Story</h3>
          
          <div className="text-stone-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Founded in 2024, <span className="font-semibold text-amber-800">Cuddle Cup</span> began with a simple mission: to create a
              space where exceptional coffee meets handcrafted desserts.
            </p>
            <p className="text-xl leading-relaxed">
              Every bean is carefully sourced from sustainable farms, and every
              pastry is baked fresh each morning by our talented team of pastry
              chefs.
            </p>
            <p className="text-xl leading-relaxed italic border-l-4 border-amber-200 pl-6">
              "We believe in quality over quantity, craftsmanship over convenience,
              and creating moments worth savoring."
            </p>
          </div>
        </div>

        
        <div className="flex flex-col gap-8 p-10 backdrop-blur-md rounded-[2.5rem] bg-white/80 shadow-xl shadow-stone-200/50 border border-white">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-6 group border-b pb-6 border-stone-300">
            <div className="h-14 w-14 shrink-0 bg-amber-100 rounded-2xl flex justify-center items-center group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
              <Coffee className="w-7 h-7 text-amber-800 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-800 mb-1">Organic Beans</h4>
              <p className="text-stone-600">We source only the best ethically grown coffee.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-6 group border-b pb-6 border-stone-300">
            <div className="h-14 w-14 shrink-0 bg-amber-100 rounded-2xl flex justify-center items-center group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
              <CakeSlice className="w-7 h-7 text-amber-800 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-800 mb-1">Fresh Pastries</h4>
              <p className="text-stone-600">Baked every morning in-house by our chefs.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-6 group">
            <div className="h-14 w-14 shrink-0 bg-amber-100 rounded-2xl flex justify-center items-center group-hover:bg-amber-900 group-hover:text-white transition-all duration-300">
              <Armchair className="w-7 h-7 text-amber-800 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-800 mb-1">Cozy Seating</h4>
              <p className="text-stone-600">The perfect place to work or catch up with friends.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;