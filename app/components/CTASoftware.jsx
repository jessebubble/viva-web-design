import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import clsx from 'clsx';
import { SectionIntro } from './SectionIntro';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';

const features = [
   {
      title: 'Access Control',
      description:
         "Once authenticated, use our software to control who can access what data, and when they can access it. It's like a bouncer for your data.",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1707532025/app-screenshots/reporting_a1uqnq.png',
   },
   {
      title: 'Data Driven',
      description:
         "Our software is designed to help you make decisions based on data, not just your gut. It's like having a data scientist in your pocket.",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1707760276/app-screenshots/payroll_rjtd9b.png',
   },
   {
      title: 'Manage Inventory',
      description:
         "Our software can help you keep track of your inventory, so you'll always know what you have and what you need to order.",
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1707760276/app-screenshots/inventory_f4xsye.png',
   },
   {
      title: 'Marketing Automation',
      description:
         'Our software can help you automate your marketing efforts, so you can focus on other things, like growing your business.',
      image: 'https://res.cloudinary.com/jessebubble/image/upload/v1707760276/app-screenshots/contacts_mbnrae.png',
   },
];

export function SoftwareSection() {
   let [tabOrientation, setTabOrientation] = useState('horizontal');

   useEffect(() => {
      let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

      function onMediaQueryChange({ matches }) {
         setTabOrientation(matches ? 'vertical' : 'horizontal');
      }

      onMediaQueryChange(lgMediaQuery);
      lgMediaQuery.addEventListener('change', onMediaQueryChange);

      return () => {
         lgMediaQuery.removeEventListener('change', onMediaQueryChange);
      };
   }, []);

   return (
      <div className="mt-24 pt-24 sm:mt-32 sm:pt-32">
         <SectionIntro
            eyebrow="Web Applications"
            title="Data-driven software solutions for your business"
         >
            <p className="text-balance">
               We've assisted clients of all sizes in creating business
               applications for managing payroll, inventory, customer data, and
               more. Allow us to help you construct a customized solution that
               fits your needs.
            </p>
         </SectionIntro>
         <Container className="relative">
            <FadeIn>
               <Tab.Group
                  as="div"
                  className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                  vertical={tabOrientation === 'vertical'}
               >
                  {({ selectedIndex }) => (
                     <>
                        <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                           <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                              {features.map((feature, featureIndex) => (
                                 <div
                                    key={feature.title}
                                    className={clsx(
                                       'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                                       selectedIndex === featureIndex
                                          ? 'bg-neutral-950 lg:bg-neutral-950/10 lg:ring-1 lg:ring-inset lg:ring-neutral-950/10'
                                          : 'hover:bg-neutral-950/10 lg:hover:bg-neutral-950/5'
                                    )}
                                 >
                                    <h3>
                                       <Tab
                                          className={clsx(
                                             'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                                             selectedIndex === featureIndex
                                                ? 'text-neutral-50 lg:text-neutral-950'
                                                : 'text-neutral-500 hover:text-neutral-950/70 lg:text-neutral-950'
                                          )}
                                       >
                                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                          {feature.title}
                                       </Tab>
                                    </h3>
                                    <p
                                       className={clsx(
                                          'mt-2 hidden text-sm lg:block',
                                          selectedIndex === featureIndex
                                             ? 'text-neutral-600'
                                             : 'text-neutral-300 group-hover:text-neutral-600'
                                       )}
                                    >
                                       {feature.description}
                                    </p>
                                 </div>
                              ))}
                           </Tab.List>
                        </div>
                        <Tab.Panels className="lg:col-span-7">
                           {features.map((feature) => (
                              <Tab.Panel key={feature.title} unmount={false}>
                                 <div className="relative sm:px-6 lg:hidden">
                                    <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-neutral-950/10 ring-1 ring-inset ring-neutral-950/10 sm:inset-x-0 sm:rounded-t-xl" />
                                    <p className="relative mx-auto max-w-2xl text-base text-neutral-950 sm:text-center">
                                       {feature.description}
                                    </p>
                                 </div>
                                 <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                    <GrayscaleTransitionImage
                                       src={feature.image}
                                       alt=""
                                       sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                       className="w-full"
                                    />
                                 </div>
                              </Tab.Panel>
                           ))}
                        </Tab.Panels>
                     </>
                  )}
               </Tab.Group>
            </FadeIn>
         </Container>
      </div>
   );
}
