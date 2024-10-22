import React from 'react';

export default function Projects() {
  return (
    <div>
      <section id='projects'>
        <div className="relative px-4 sm:px-8 lg:px-12 mt-20">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-42l font-bold tracking-tight text-zinc-070 sm:text-5xl ">
                My Projects
              </h1>
              <p className="mt-6 text-base text-zinc-600 ">
                I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              <li className="group relative flex flex-col items-start">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 w-8"
                      src="data:image/jpeg;base64,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"
                      style={{ color: 'transparent' }} // Change to a style object
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl "></div>

                    <span className="relative z-10">Hemllin</span>

                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                    A web app that offers strategy and training consulting services.
                  </p>
                  <a href="https://www.hemllin.com/" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-400 dark:text-zinc-400">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                    </svg>
                    <span className="ml-2">Hemllin website</span>

                  </a>
                  {/* <a href='https://www.hemllin.com/' aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a> */}
                </li>
                
                <li className="group relative flex flex-col items-start">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 w-8"
                      src="https://edgewaytravel.com/static/media/edgeway-logo.d3412cb2bc93a73de360.webp"
                      style={{ color: 'transparent' }} // Change to a style object
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl "></div>

                    <span className="relative z-10">Edgeway travel</span>

                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                    A platform that highlights tourism and travel details of a company
                  </p>
                  <a href="https://edgewaytravel.com/" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-400 dark:text-zinc-400">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                    </svg>
                    <span className="ml-2">Edgeway website</span>

                  </a>
                  {/* <a href='https://edgewaytravel.com/' aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a> */}
                </li>

              
{/* 
                <li className="group relative flex flex-col items-start">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 w-8"
                      src="https://spotlight.tailwindui.com/_next/static/media/starbucks.4a5bd050.svg"
                      style={{ color: 'transparent' }} // Change to a style object
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl "></div>

                    <span className="relative z-10">Hemllin</span>

                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                    Creating technology to empower civilians to explore space on their own terms.
                  </p>
                  <a href="https://www.hemllin.com/" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-400 dark:text-zinc-400">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                    </svg>
                    <span className="ml-2">planetaria.tech</span>

                  </a>
                  <a href='https://www.hemllin.com/' aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </li> */}

{/* 
                <li className="group relative flex flex-col items-start">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 w-8"
                      src="https://spotlight.tailwindui.com/_next/static/media/starbucks.4a5bd050.svg"
                      style={{ color: 'transparent' }} // Change to a style object
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition sm:-inset-x-6 sm:rounded-2xl "></div>

                    <span className="relative z-10">Hemllin</span>

                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 ">
                    Creating technology to empower civilians to explore space on their own terms.
                  </p>
                  <a href="https://www.hemllin.com/" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-400 dark:text-zinc-400">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path>
                    </svg>
                    <span className="ml-2">planetaria.tech</span>

                  </a>
                  <a href='https://www.hemllin.com/' aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
