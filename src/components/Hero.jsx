const heroImageUrl = 'https://www.figma.com/api/mcp/asset/785ae618-ea5a-4191-a989-fdb0ce6ca971'

const stats = [
  { value: '50000+', label: 'Students Trained' },
  { value: '200+', label: 'Workshops' },
  { value: 'Industry', label: 'Mentors' },
]

export default function Hero() {
  return (
    <section className="px-5 pb-8 pt-4 md:px-10 md:pb-10 lg:px-[45px] lg:pb-[52px]">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-8 lg:grid-cols-[minmax(0,846px)_minmax(0,645px)] lg:gap-0">
        <div className="flex flex-col items-start">
          <div className="mb-6 flex w-full max-w-[781px] items-center justify-center gap-[15px] lg:mb-[44px]">
            <span className="h-1 w-16 bg-[#ffc300] md:w-24 lg:w-[160px]" />
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffc300] md:text-[16px] lg:text-[23.8px] lg:tracking-[1.19px]">
              Empowering Student Careers
            </p>
            <span className="h-1 w-16 bg-[#ffc300] md:w-24 lg:w-[160px]" />
          </div>

          <h1 className="mb-5 max-w-[846px] text-left font-['Gideon_Roman'] text-[40px] leading-[1.05] text-white md:text-[54px] lg:mb-[35px] lg:text-[72px] lg:leading-[72px]">
            Build <span className="text-[#ffc300]">Industry-Ready</span> Skills For The Real
            World
          </h1>

          <p className="mb-7 max-w-[846px] text-left text-[16px] leading-[1.5] text-white/90 md:text-[18px] md:leading-[1.55] lg:mb-[38px] lg:text-[20px] lg:leading-[28px]">
            Eduzen Solutions empowers students with practical, industry-focused learning
            designed for the real world. Through mentorship, modern technology training,
            workshops, and career-driven programs, we help bridge the gap between academics and
            professional success.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-4 lg:mb-[48px]">
            <a
              href="#programs"
              className="inline-flex h-[58px] items-center justify-center rounded-[8px] bg-[#ffc300] px-8 text-base font-bold leading-6 text-black shadow-[0_0_7.5px_rgba(212,175,55,0.3)] transition-colors duration-200 hover:bg-[#ffd23f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
            >
              Explore Programs
            </a>
            <a
              href="#get-started"
              className="inline-flex h-[58px] items-center justify-center rounded-[8px] border border-[#ffc300] px-[33px] text-base font-bold leading-6 text-[#ffc300] transition-colors duration-200 hover:bg-[#ffc300] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
            >
              Get Started
            </a>
          </div>

          <dl className="grid w-full grid-cols-1 border-y border-white/75 py-6 md:grid-cols-3 md:py-[33px]">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 py-3 md:py-0 ${index > 0 ? 'md:border-l md:border-white/50 md:pl-8' : ''}`}
              >
                <div className="h-11 w-11 rounded-full border border-[#ffc300]/70 bg-[#ffc300]/10" />
                <div>
                  <dt className="text-2xl font-bold leading-8 text-white">{item.value}</dt>
                  <dd className="text-sm leading-5 text-[#9ca3af]">{item.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[645px] overflow-hidden rounded-[12px] md:h-[520px] lg:h-[726px] lg:rounded-none">
          <img
            src={heroImageUrl}
            alt="Student working in focused low-light environment"
            className="h-full w-full object-cover object-[34%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 lg:hidden" />
        </div>
      </div>
    </section>
  )
}
