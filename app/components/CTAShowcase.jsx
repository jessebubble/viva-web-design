import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';

export function ShowcaseSection() {
   return (
      <div className="mt-24 pt-24">
         <Container className="">
            <div className="">
               {collections.map((group) => (
                  <FadeInStagger key={group.title}>
                     <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-3 xl:gap-8">
                        <div className="lg:col-span-3">
                           <ul
                              role="list"
                              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                           >
                              {group.examples.map((example) => (
                                 <li key={example.name}>
                                    <FadeIn>
                                       <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                          <Link to={example.href}>
                                             <img
                                                alt="screen shot of the product"
                                                {...example.image}
                                                className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                             />
                                             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                   {example.name}
                                                </p>
                                                <p className="mt-2 text-sm text-white">
                                                   {example.role}
                                                </p>
                                             </div>
                                          </Link>
                                       </div>
                                    </FadeIn>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </FadeInStagger>
               ))}
            </div>
         </Container>
      </div>
   );
}

const collections = [
   {
      title: 'What we build',
      examples: [
         {
            name: 'The Runner',
            role: 'A website that reflects your brand essence',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924009/midjourney/saint-adobe2_nyxvvx.png',
            },
            href: '#',
         },
         {
            name: 'The Glitch',
            role: 'Optimized for sales and customer satisfaction',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921594/midjourney/bunny_shlzik.png',
            },
            href: '#',
         },
         {
            name: 'The Monster Mash',
            role: 'Tailored to your business needs and unique requirements',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921594/midjourney/sponsor_ejuylh.png',
            },
            href: '#',
         },
         {
            name: 'The Salesman',
            role: 'For your website, social media, and print materials',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921594/midjourney/cat_vtjbik.png',
            },
            href: '#',
         },
         {
            name: 'Dental Office',
            role: 'Flyers for your events, promotions, and more',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921840/midjourney/dentist_n9lqnh.jpg',
            },
            href: '#',
         },
         {
            name: 'The Politician',
            role: 'Menus for your restaurant, food truck, or any other business',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924008/midjourney/saint-adobe_ibzq0m.png',
            },
            href: '#',
         },
         {
            name: 'Travel Agency',
            role: 'Brochures for your business, event, or organization',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924383/midjourney/hello_bececg.png',
            },
            href: '#',
         },
         {
            name: 'Generative AI',
            role: 'Professional business cards for your business or organization',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706924383/midjourney/robot_ycihmd.png',
            },
            href: '#',
         },
         {
            name: 'Fight Forever',
            role: 'Represent your data in a visually appealing way',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1706921840/midjourney/door_iv8dr9.png',
            },
            href: '#',
         },
      ],
   },
];
