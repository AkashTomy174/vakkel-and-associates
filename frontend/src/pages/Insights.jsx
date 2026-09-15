import { useState } from 'react'
import BlogCard from '../components/BlogCard/BlogCard.jsx'
import blogPosts from '../data/blog.js'
import './insights.css'

const categories = ['All Notes', 'Firm News', 'Legal Updates', 'Judgment Notes', 'Insights']

function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All Notes')
  const visiblePosts = selectedCategory === 'All Notes' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="insights-page">
      <section className="insights-hero"><div><span className="insights-kicker">THE JOURNAL</span><h1>Latest<br /><em>News.</em></h1><p>Perspectives on law, business and the decisions that shape both, from the legal strategists at Vakkeel & Associates.</p></div><div className="insights-hero-index"><span>Notes on law,<br />strategy and practice</span></div></section>
      <section className="insights-content">
        <div className="insights-toolbar"><div><span className="insights-kicker">THE ARCHIVE</span><h2>Latest news</h2></div><span className="insights-count">{String(visiblePosts.length).padStart(2, '0')} published notes</span></div>
        <div className="category-filter" role="group" aria-label="Filter insights by category">{categories.map((category) => <button className={selectedCategory === category ? 'selected' : ''} type="button" key={category} onClick={() => setSelectedCategory(category)}>{category}</button>)}</div>
        <div className="blog-grid">{visiblePosts.map((post, index) => <BlogCard key={post.id} post={post} index={index} />)}</div>
      </section>
    </main>
  )
}

export default Insights
