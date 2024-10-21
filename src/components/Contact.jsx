import React from 'react';
import photo from '../assets/Nelima.jpg'

export default function Contact() {
  return (
    <div>
      <div className="mt-20  relative -mx-4 overflow-hidden  px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">

        <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
          <div className="bg-purple-50 pt-px sm:rounded-6xl">
            <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
              <img
                alt=""
                loading="lazy"
                width="576"
                height="576"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ color: 'transparent' }}
                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"

                src={photo}
              />
            </div>
            <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
              <h2
                className="inline-flex items-center rounded-full px-4 py-1 text-blue-600 ring-1 ring-inset ring-blue-600"
                id="author-title"
              >
                <span className="font-mono text-sm" aria-hidden="true">05</span>
                <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">Author</span>
              </h2>
              <p className="mt-8 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                <span className="block text-purple-400">+254729815051</span>
                charity.w.nelima@gmail.com
              </p>
              <p className="mt-4 text-xl tracking-tight text-slate-700">
               "" charity.w.nelima@gmail.com"
              </p>
              <p className="mt-8">
                <a className="inline-flex items-center text-base font-medium tracking-tight text-slate-900" href="#">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                  </svg>
                  <span className="ml-4">Follow on X</span>
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
