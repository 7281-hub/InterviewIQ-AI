function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight">
        Ace Every Interview
      <br />
  <span className="text-indigo-600">with AI</span>
     </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Practice technical and HR interviews with AI-powered feedback,
        personalized insights, and real interview simulations.
      </p>

      <button className="mt-10 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition">
        Start Mock Interview
      </button>
    </section>
  );
}

export default Hero;