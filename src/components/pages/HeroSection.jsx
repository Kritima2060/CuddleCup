
function Hero() {
  return (
    <>
      <section className="bg-linear-to-r from-amber-800 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Crafted with Love
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Premium coffee and artisan desserts made fresh daily
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-100 transition-colors shadow-lg">
            Order Now
          </button>
        </div>
      </section>
    </>
  );
}
export default Hero;
