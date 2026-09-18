import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo/Seo.jsx'
import { breadcrumbSchema, SITE_URL_EXPORT } from '../data/schema.js'
import blogPosts from '../data/blog.js'
import './insights.css'

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <main className="insights-page missing-post"><Seo title="Note Not Found | Vakkeel & Associates" description="The requested article could not be found. Browse the latest legal notes and updates from Vakkeel & Associates." path={`/insights/${slug}`} noindex /><span className="insights-kicker">404 / NOTE NOT FOUND</span><h1>This page has moved.</h1><Link className="article-back" to="/insights">Return to the journal <span>↗</span></Link></main>
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Vakkeel & Associates' },
    mainEntityOfPage: `${SITE_URL_EXPORT}/insights/${post.slug}`,
  }

  return (
    <main className="insights-page article-page">
      <Seo
        title={`${post.title} | Vakkeel & Associates`.slice(0, 60)}
        description={post.excerpt.slice(0, 160)}
        path={`/insights/${post.slug}`}
        image={post.coverImage}
        type="article"
        jsonLd={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'News', path: '/insights' },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ]}
      />
      <article>
        <div className="article-heading"><Link className="article-back" to="/insights">← Back to the journal</Link><span className="insights-kicker">{post.category}</span><h1>{post.title}</h1><div className="article-byline"><span>By {post.author}</span><time dateTime={post.date}>{post.date}</time></div></div>
        <img className="article-cover" src={post.coverImage} alt={`Cover illustration for the article: ${post.title}`} width="980" height="560" loading="lazy" />
        <div className="article-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside className="article-related" id="related">
          <span className="insights-kicker">RELATED</span>
          <p>Explore the practice areas behind this matter, or speak to the chamber about a similar brief.</p>
          <div className="article-related-links">
            <Link to="/#practice">Our practice areas <span aria-hidden="true">↗</span></Link>
            <Link to="/government-approvals-compliance">Government approvals &amp; compliance <span aria-hidden="true">↗</span></Link>
            <Link to="/join">Work with us <span aria-hidden="true">↗</span></Link>
          </div>
        </aside>
      </article>
    </main>
  )
}

export default BlogPost