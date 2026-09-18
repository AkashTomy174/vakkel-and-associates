import { Link } from 'react-router-dom'

function BlogCard({ post, index }) {
  return (
    <article className="blog-card">
      {/* Decorative duplicate of the title link below — hidden from AT and tab order. */}
      <Link className="blog-card-image" to={`/insights/${post.slug}`} aria-hidden="true" tabIndex={-1}>
        <img src={post.coverImage} alt="" width="500" height="323" loading="lazy" />
        <span className="blog-card-number">{String(index + 1).padStart(2, '0')}</span>
      </Link>
      <div className="blog-card-content">
        <div className="blog-card-meta"><span>{post.category}</span><time dateTime={post.date}>{post.date}</time></div>
        <h2><Link to={`/insights/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.excerpt}</p>
        <div className="blog-card-footer"><span>{post.author}</span><Link to={`/insights/${post.slug}`}>Read {post.title} <span aria-hidden="true">↗</span></Link></div>
      </div>
    </article>
  )
}

export default BlogCard