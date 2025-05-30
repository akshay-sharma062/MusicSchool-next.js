'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"


function UpcommingWebinars() {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <p  className="text-base text-teal-400 font-semibold tracking-wide uppercase">FEATURED WEBINARS</p>
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</h1>
      </div>
      <div className="mt-10">
      <HoverEffect items={featuredWebinars.map(webinar=>(
        {
            title:webinar.title,
            description:webinar.description,
            link:webinar.slug
        }
      ))} />
      </div>
      <div className="mt-10 text-center">
        <Link href={"/"} className="p-4 text-xl border-2 border-cyan-300 hover:border-transparent hover:text-cyan-300 hover:border-2 hover:border-b-cyan-300 rounded-2xl  duration-700 hover:shadow-cyan-400 hover:shadow-2xl">View All Webinars</Link>
      </div>
    </div>
    </div>
  )
}

export default UpcommingWebinars;
