import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <>
    <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-4xl font-cambria text-pink-700">
            Book a Consultation
          </h2>
          <p className="mb-8 text-lg leading-8 text-gray-700">
            If you are experiencing irregular periods or abnormal menstrual
            symptoms, consult our specialists for accurate diagnosis and
            effective treatment.
          </p>

          <div className="rounded-3xl bg-[#f2f2f2] p-10 shadow-xl">
            <h3 className="mb-3 font-cambria text-3xl text-pink-800">
              Dr. Vandana Bansal
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Expert Care for Women’s Health & Hormonal Wellness
            </p>

            <Link to='book-appointment' className="rounded-full bg-pink-800 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-pink-800">
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Appointment