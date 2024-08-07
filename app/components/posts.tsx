import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  const allBlogs = getBlogPosts().sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  )

  return (
    <div className="space-y-8">
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group"
        >
          <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
            <time 
              dateTime={post.metadata.publishedAt}
              className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums"
            >
              {formatDate(post.metadata.publishedAt, false)}
            </time>
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </h3>
              {post.metadata.summary && (
                <p className="mt-1 text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {post.metadata.summary}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}