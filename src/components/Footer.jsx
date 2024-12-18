import React from 'react'

export default function Footer() {
    return (
        <div>
            <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40 mt-10">
                <div class="relative px-4 sm:px-8 lg:px-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-gray-600 ">
                                <a class="transition hover:text-purple-500 " href="#About">About</a>
                                <a class="transition hover:text-purple-500 dark:hover:text-purple-400" href="#technologies">Technologies</a>
                                <a class="transition hover:text-purple-500 dark:hover:text-purple-400" href="#experiences">Experiences</a>
                                <a class="transition hover:text-purple-500 dark:hover:text-purple-400" href="#projects">Projects</a>
                            </div>
                            <p class="text-sm text-zinc-400 dark:text-zinc-500">© 2024 Charity Nelima. All rights reserved.</p>
                        </div>

                    </div>
                   

                </div>
            </div>

        </div>
    )
}
