function HowItWorks() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-16">
          Prepare for your dream job in just three simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
              1
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Choose Interview
            </h3>

            <p className="mt-3 text-gray-600">
              Select your role, experience level, and interview type.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
              2
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Practice with AI
            </h3>

            <p className="mt-3 text-gray-600">
              Answer AI-generated technical and HR interview questions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
              3
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Get Feedback
            </h3>

            <p className="mt-3 text-gray-600">
              Receive detailed AI analysis and improve every interview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;