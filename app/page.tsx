import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kelly Israel Lotsu-Morgan
      </h1>
      <p className="mb-4">
        {`Hey, I'm Kelly. I'm a programmer, graphic designer, video editor, and math teacher. I love to learn and share 
        my knowledge with others. I'm passionate about technology and how it can be used to improve 
        our lives. I'm also passionate about mathematics and how it can be used to solve real-world problems while being
        fun and engaging. This is my portfolio where I showcase my work and share my thoughts on various subject matter I particularly find intriguing.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
