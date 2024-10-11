import React from 'react';

export default function Contact() {
  return (
    <div>
      <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
        <img
          alt=""
          loading="lazy"
          width="919"
          height="1351"
          decoding="async"
          data-nimg="1"
          className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
          style={{ color: 'transparent' }} // Correct usage of the style prop
          src="/_next/static/media/background-newsletter.488a0204.jpg"
        />
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div>
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
              Stay up to date
            </p>
            <p className="mt-4 text-lg tracking-tight text-blue-900">
              Get updates on all of our events and be the first to get notified when tickets go on sale.
            </p>
          </div>
          <form>
            <h3 className="text-lg font-semibold tracking-tight text-blue-900">
              Sign up to our newsletter <span aria-hidden="true">↓</span>
            </h3>
            <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                type="submit"
              >
                <span className="sr-only sm:not-sr-only">Sign up today</span>
                <span className="sm:hidden">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      d="m14 7 5 5-5 5M19 12H5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
