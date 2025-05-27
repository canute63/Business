export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans" style={{ paddingLeft: '1in', paddingRight: '1in', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <section className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Canute Chandrakumaran Consulting</h1>
          <p className="text-lg text-gray-700">
            Expert Project Management, Transport Safety, and Technical Advisory Services
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
            <p className="text-gray-700 mb-4">
              I provide specialist consulting for infrastructure planning, project delivery, and professional mentoring.
              With 30+ years in public and private sectors, I support local councils, developers, and engineers across NZ.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Engineer to Contract (NZS3910/NZS3916)</li>
              <li>Road Safety & Transport Planning</li>
              <li>NZTA Business Case Development</li>
              <li>Mentoring & CPD for Engineers</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Contact</h3>
            <p className="mb-2">📧 canute63@xtra.co.nz</p>
            <p className="mb-2">📞 021 402 532</p>
            <p className="mb-2">📍 Raumati Beach, New Zealand</p>
            <p className="mt-4">Available for consulting, workshops, and contract roles nationwide.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Me</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Chartered Professional Engineer (CPEng)</li>
            <li>Trusted leadership across councils and transport agencies</li>
            <li>Commitment to Te Tiriti o Waitangi and iwi engagement</li>
            <li>Flexible delivery tailored to your project’s needs</li>
          </ul>
        </section>

        <footer className="border-t pt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Canute Chandrakumaran. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
