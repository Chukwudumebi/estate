import bgImage from '../assets/bg3.png';

function Testimonials() {
  return (
    <div>
      {/* Testimonials */}
      <section id="testimonials">
        {/* Container to headin and testimonial blocks */}
        <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold">Testimonials</h2>
          {/* Testimonials Container */}
          <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-gray-200 p-6 md:w-1/3">
              <img src={bgImage} className="-mt-14 h-20 w-20 rounded-full" alt="testimonials" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-blue-800">
                Testimonials Quote Ruth assessed our requirements with great professionalism, her commitment to our
                preferences was sincere and she had our best interests at heart. Peter & Ann Baker Quote Understood
                exactly our requirements and matched up that against what you had access to. Made big effort to really
                understand our needs. Liam & Marna Edwards
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-slate-300 p-6 md:w-1/3">
              <img src={bgImage} className="-mt-14 h-20 w-20 rounded-full" alt="testimonials" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-blue-800">
                Testimonials Quote Ruth assessed our requirements with great professionalism, her commitment to our
                preferences was sincere and she had our best interests at heart. Peter & Ann Baker Quote Understood
                exactly our requirements and matched up that against what you had access to. Made big effort to really
                understand our needs. Liam & Marna Edwards
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-slate-300 p-6 md:w-1/3">
              <img src={bgImage} className="-mt-14 h-20 w-20 rounded-full" alt="testimonials" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-blue-800">
                Testimonials Quote Ruth assessed our requirements with great professionalism, her commitment to our
                preferences was sincere and she had our best interests at heart. Peter & Ann Baker Quote Understood
                exactly our requirements and matched up that against what you had access to. Made big effort to really
                understand our needs. Liam & Marna Edwards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

