import React from 'react'
import { render } from 'react-dom'
import SimpleReactRouter, { Link } from 'simple-react-router'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'

import './index.scss'
import articles from './articles'

// TODO: make this into a react component
import './beareffect'

const Header = ({ active }) => {
  const menu = articles.filter(a => a.attributes.inMenu)
  return (
    <header>
      <h1><a href='/'>Blare Stew</a></h1>
      <nav>
        {menu.map(l => <Link className={l.attributes.slug === active.attributes.slug ? 'active' : ''} key={l.attributes.slug} href={l.attributes.url}>{l.attributes.menuTitle}</Link>)}
      </nav>
    </header>
  )
}

const Page = ({ page }) => {
  return (
    <main>
      <Helmet>
        <meta property='og:title' content={page.attributes.title} />
        <meta property='og:description' content={page.attributes.description} />
        <meta property='og:image' content={page.attributes.image} />
        <meta property='og:url' content={`https://blarestew.com${page.attributes.url}`} />
        <title>{page.attributes.title}</title>
      </Helmet>
      <Header active={page} />
      <article>
        <ReactMarkdown escapeHtml={false} source={page.body} />
      </article>
    </main>
  )
}

const homeArticle = articles.find(l => l.attributes.slug === 'home')

class App extends SimpleReactRouter {
  routes (map) {
    map('/', () => <Page page={homeArticle} />)
    articles
      .filter(l => l.attributes.url.slice(0, 4) !== 'http' && l.attributes.slug !== 'home')
      .forEach(l => {
        map(l.attributes.url, () => <Page page={l} />)
      })
  }
}

render(<App />, document.getElementById('root'))
