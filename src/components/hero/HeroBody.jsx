import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';

export default function HeroBody() {

    return (
        <div className="mx-auto max-w-7xl px-6 py-0 sm:py-32 md:py-6 lg:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div className="flex">
                    <div className="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="font-semibold text-indigo-500">We're hiring</span>
                        <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                        <Link to="/jobs" className="flex items-center gap-x-1">
                            <span className="absolute inset-0" aria-hidden="true" />
                            See open positions
                            <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
                <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    More Than Just A<span className="block text-logo-pink">Creative Agency </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                    <span className='lg:block'>We're a team of independent creatives, designers and developers who are passionate about helping our community continue to grow.</span> 
                    <span className="block text-logo-pink"> Hablamos español.</span>  
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                    <Link to="/community" className="rounded-md bg-logo-pink px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        > Let's connect
                    </Link>
                    <Link to="/services" className="text-base font-semibold leading-7 text-gray-100">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <Player
                    src='https://assets6.lottiefiles.com/packages/lf20_8qDRX7nBln.json'
                    className='md:w-60 lg:w-96'
                    background='transparent'
                    loop={true}
                    autoplay={true} >
                </Player>
            </div>
        </div>
    )
}