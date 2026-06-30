function Stats() {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold">10K+</h2>
            <p className="mt-3 text-indigo-100">
              Mock Interviews
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">5K+</h2>
            <p className="mt-3 text-indigo-100">
              Active Students
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">95%</h2>
            <p className="mt-3 text-indigo-100">
              Success Rate
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24/7</h2>
            <p className="mt-3 text-indigo-100">
              AI Availability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;