import React from 'react'

export default function Technologies() {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            <section id='technologies'>
                <h1 class="text-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl mb-8">Technologies</h1>

                <div class="rounded-2xl border border-zinc-100 p-6  m-6 dark:border-zinc-700/40">
                    <div class='p-5'>
                    <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-512.png" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                         src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-512.png" alt="Statamic" width="158" height="48" />
                    </div>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="data:image/jpeg;base64,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" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" 
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        
                        src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwPdqgkrKMfhAhX2gEAbLFfQK1T6r94FEZw&s" alt="Statamic" width="158" height="48" />
                    </div>
                    </div>

       




                </div>
            </section>

        </div>
    )
}
