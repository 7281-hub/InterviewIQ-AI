function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Why Choose InterviewIQ AI?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything you need to prepare for technical and HR interviews.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">🤖 AI Mock Interviews</h3>
            <p className="text-gray-600">
              Practice realistic interviews powered by AI.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">📊 Performance Analytics</h3>
            <p className="text-gray-600">
              Track your strengths and weaknesses after every interview.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">🎯 Personalized Feedback</h3>
            <p className="text-gray-600">
              Get AI-generated suggestions to improve your answers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;