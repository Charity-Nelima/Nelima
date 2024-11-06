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
                className="inline-flex items-center rounded-full px-4 py-1 text-purple-600 ring-1 ring-inset ring-purple-400"
                id="author-title"
              >
                <span className="font-mono text-sm" aria-hidden="true">00</span>
                <span className="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">Techie</span>
              </h2>
              <p className="mt-8 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                <span className="block text-purple-400">+254729815051</span>
                charity.w.nelima@gmail.com
              </p>
              {/* <p className="mt-4 text-xl tracking-tight text-slate-700">
               "" charity.w.nelima@gmail.com"
              </p> */}
              <p className="mt-8">
                <a className="inline-flex items-center text-base font-medium tracking-tight text-slate-900" href="https://www.linkedin.com/in/charity-nelima/">
                 
                  <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#007BB5" height="23" width="7" y="9"/><path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="#007BB5"/><circle cx="3.5" cy="3.5" fill="#007BB5" r="3.5"/></g><g/><g/><g/><g/><g/><g/></svg>

                  <span className="ml-4">Follow on <span className='text-blue-700'>LinkedIn</span></span>
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
