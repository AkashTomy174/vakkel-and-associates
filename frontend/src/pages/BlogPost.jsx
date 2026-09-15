import { Link, useParams } from 'react-router-dom'
import ClientContactActions from '../components/ClientContactActions/ClientContactActions.jsx'
import blogPosts from '../data/blog.js'
import './insights.css'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <main className="insights-page missing-post"><span className="insights-kicker">404 / NOTE NOT FOUND</span><h1>This page has moved.</h1><Link className="article-back" to="/insights">Return to the journal <span>â†—</span></Link></main>
  }

  return (
    <main className="insights-page article-page">
      <header className="insights-header"><Link className="insights-brand" to="/"><span>VA</span><strong>VAKKEEL <small>& ASSOCIATES</small></strong></Link><nav><Link to="/#about">The Firm</Link><Link to="/#practice">Practice Areas</Link><Link className="active" to="/insights">Insights</Link></nav><Link className="insights-contact" to="/">Book a consultation <span>â†—</span></Link></header>
      <article>
        <div className="article-heading"><Link className="article-back" to="/insights">â† Back to the journal</Link><span className="insights-kicker">{post.category}</span><h1>{post.title}</h1><div className="article-byline"><span>By {post.author}</span><time dateTime={post.date}>{post.date}</time></div></div>
        <img className="article-cover" src={post.coverImage} alt="" />
        <div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
      <ClientContactActions />
      <footer className="insights-footer"><Link className="insights-brand" to="/"><span>VA</span><strong>VAKKEEL <small>& ASSOCIATES</small></strong></Link><span>New Delhi · Mumbai · Kerala · Chandigarh · Bengaluru · Chennai</span><span>Â© 2026 Vakkeel & Associates</span></footer>
    </main>
  )
}

export default BlogPost