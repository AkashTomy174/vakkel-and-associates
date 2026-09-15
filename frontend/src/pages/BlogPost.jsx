import { Link, useParams } from 'react-router-dom'
import blogPosts from '../data/blog.js'
import './insights.css'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <main className="insights-page missing-post"><span className="insights-kicker">404 / NOTE NOT FOUND</span><h1>This page has moved.</h1><Link className="article-back" to="/insights">Return to the journal <span>↗</span></Link></main>
  }

  return (
    <main className="insights-page article-page">
      <article>
        <div className="article-heading"><Link className="article-back" to="/insights">← Back to the journal</Link><span className="insights-kicker">{post.category}</span><h1>{post.title}</h1><div className="article-byline"><span>By {post.author}</span><time dateTime={post.date}>{post.date}</time></div></div>
        <img className="article-cover" src={post.coverImage} alt="" />
        <div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
    </main>
  )
}

export default BlogPost