import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Kelly Israel Lotsu-Morgan',
  description: 'Programmer, graphic designer, video editor, and teacher passionate about technology and mathematics.',
}

export default function Page() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/me.jpg"
              alt="Kelly Israel Lotsu-Morgan"
              width={240}
              height={240}
              className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
            />
          </div>
          <div className="flex-1 lg:pt-4">
            <p className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
              Hey, I'm Kelly. I'm a programmer, graphic designer, video editor, jazz lover, and math tutor. I also do crypto on the side. I love to learn and share 
              my knowledge with others. I'm passionate about technology and how it can be used to improve 
              our lives. I'm also passionate about mathematics and how it can be used to solve real-world 
              problems while being fun and engaging. This is my portfolio where I showcase my work and share my thoughts on various disciplines in the form of blog posts.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Featured Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Programming', 'Graphic Design', 'Video Editing', 'Teaching', 'Mathematics', 'Crypto'].map((skill) => (
            <li key={skill} className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Recent Blog Posts
        </h2>
        <BlogPosts />
      </section>
    </div>
  )
}