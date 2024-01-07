import viva from '~/components/images/viva.png';
import { Link } from '@remix-run/react';
import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function ContactSection() {
    return (
        <>
            <Container className="mt-24 sm:mt-32">
                <FadeIn>
                    <div className="relative rounded-3xl bg-transparent">
                        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                            <img
                                className="h-full w-full object-contain"
                                alt="devSA github logo"
                                src={viva}
                            />
                        </div>
                        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                            <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                                <h2 className="text-base font-semibold leading-7 text-spursPink">
                                    It starts with an idea...
                                </h2>
                                <p className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                                    Let's connect and see what we can do for you
                                </p>
                                <p className="mt-6 text-base leading-7 text-neutral-800">
                                    We have helped clients of all sizes produce
                                    stunning websites, and we are confident that
                                    we can help you produce stunning websites as
                                    well.
                                </p>
                                <div className="mt-8">
                                    <Link
                                        to="/contact"
                                        className="inline-flex rounded-md bg-spursOrange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-spursOrange/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                                    >
                                        Lets get started -&gt;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </>
    );
}