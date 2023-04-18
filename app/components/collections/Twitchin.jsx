import { getTwitchin } from "~/lib/collectionsQuery"
import { Link, useLoaderData } from "@remix-run/react"
import imageUrlBuilder from "@sanity/image-url"
import { client } from "~/lib/sanity"

export const loader = async () => {
    let twitchinArray = await getTwitchin()
    return { twitchinArray };
}

export default function Twitchin() {
    const { twitchinArray } = useLoaderData();

    const builder = imageUrlBuilder(client)
    const urlFor = (source) => {
        return builder.image(source)
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-logopink sm:text-4xl">Twitchin' in the Kitchen Collection</h2>
                    <p className="mt-4 text-gray-500">
                        Our thank you to our clients and their growing community. 
                        This exclusive collection is made with love by the Viva Web Design team
                        because we know every purchase made goes directly back to support our local creative community.  
                    </p>
                </div>
    
                <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {twitchinArray.map((item) => (
                        <div key={item.title} className="flex flex-col-reverse">
                            <div className="mt-6">
                                <Link to={item.slug} className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-2 text-sm font-medium text-white hover:bg-logopink"
                                    > Add to bag<span className="sr-only">, {item.title}</span>
                                </Link>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                                <p className="text-sm font-medium text-gray-500">{item.price}</p>
                                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                            </div>
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-900">
                                <img 
                                    src={urlFor(item.mainImage).url()} 
                                    alt={item.title} 
                                    className="object-cover object-center" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}