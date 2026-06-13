export default function Home() {
  const benefits = [
    "Business Meetings",
    "Professional Communication",
    "Negotiations & Presentations",
    "Mexican Business Culture",
  ];

  const audience = [
    "Sales Professionals",
    "Procurement Teams",
    "Project Managers",
    "Executives",
    "Engineers",
    "Expats Moving to Mexico",
  ];

  const articles = [
    "Why 'Ahorita' Doesn't Mean Right Now",
    "5 Mexican Expressions Every Professional Should Know",
    "Understanding Mexican Business Culture",
    "Spanish for Meetings: Essential Vocabulary",
    "Common Communication Mistakes with Mexican Teams",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f5faf7 35%, #dff5e8 70%, #c9efd8 100%)",
        }}
      >
        <div
          className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-green-700 font-semibold mb-4">
                Mexican Spanish for Professionals
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Learn Mexican Spanish
                <br />
                for Business
              </h1>

              <p className="text-xl text-slate-600 mb-10 max-w-xl">
                Practical Spanish lessons designed for professionals
                working with Mexican clients, suppliers, colleagues
                and international teams.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:ana.businessspanish@gmail.com"
                  className="bg-green-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:bg-green-800 transition"
                >
                  Contact Ana
                </a>

                <a
                  href="#about"
                  className="border border-slate-300 px-8 py-4 rounded-xl font-medium hover:bg-white transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://media-cdn.flowics.com/user-library-prod/v1/team/3127/6a2dcd4a1b5e7e080a713cd0/Profesora.png"
                alt="Ana"
                className="max-h-[650px] w-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {item}
                </h3>

                <p className="text-slate-600">
                  Practical communication skills for real-world
                  professional situations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <img
              src="https://media-cdn.flowics.com/user-library-prod/v1/team/3127/6a2dd657b239d3029462054c/Profesora2.png"
              alt="Ana teaching Spanish"
              className="rounded-3xl shadow-xl w-full max-w-[500px]"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-green-700 font-semibold mb-3">
              Meet Ana
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Native Mexican Spanish Teacher
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              Based in Cuernavaca, Mexico, Ana helps professionals
              communicate naturally and confidently when working
              with Mexican clients, suppliers, and teams.
            </p>

            <p className="text-lg text-slate-600">
              Lessons are focused on practical communication,
              business situations, meetings, negotiations and
              understanding Mexican business culture.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Who Is This For?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {audience.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Articles
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article}
              className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">
                {article}
              </h3>

              <p className="text-slate-600">
                Read more about Mexican Spanish,
                communication and business culture.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to improve your Spanish?
          </h2>

          <p className="text-xl mb-10 opacity-90">
            Start communicating more confidently with
            Mexican teams and clients.
          </p>

          <a
            href="mailto:ana.businessspanish@gmail.com"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            Contact Ana
          </a>
        </div>
      </section>
    </main>
  );
}