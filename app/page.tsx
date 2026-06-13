export default function Home() {
  const benefits = [
    "Business Meetings",
    "Professional Communication",
    "Negotiations & Presentations",
    "Mexican Business Culture",
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

      {/* HERO IMAGE */}
      <section>
        <img
          src="https://media-cdn.flowics.com/user-library-prod/v1/team/3127/6a2dd3b71b5e7e080a713cd7/ImagePage1.png"
          alt="Spanish for Business"
          className="w-full"
        />
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {item}
                </h3>

                <p className="text-slate-600">
                  Practical communication skills for real-world business situations.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEET ANA */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <img
              src="https://media-cdn.flowics.com/user-library-prod/v1/team/3127/6a2dcd4a1b5e7e080a713cd0/Profesora.png"
              alt="Ana"
              className="rounded-3xl shadow-xl max-h-[600px]"
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
              Based in Cuernavaca, Mexico, Ana helps professionals communicate
              naturally and confidently when working with Mexican clients,
              suppliers and international teams.
            </p>

            <p className="text-lg text-slate-600">
              Lessons focus on practical communication, meetings,
              presentations, negotiations and understanding Mexican
              business culture.
            </p>

          </div>

        </div>

      </section>

      {/* ARTICLES */}
      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Articles
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">

            {articles.map((article) => (
              <div
                key={article}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-xl mb-3">
                  {article}
                </h3>

                <p className="text-slate-600">
                  Read more about Mexican Spanish and business communication.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-green-700 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready to improve your Spanish?
          </h2>

          <p className="text-xl mb-10">
            Start communicating more confidently with Mexican teams and clients.
          </p>

          <a
            href="mailto:ana.businessspanish@gmail.com"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold"
          >
            Contact Ana
          </a>

        </div>

      </section>

    </main>
  );
}