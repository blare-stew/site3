import React, { Fragment } from 'react'
import { render } from 'react-dom'
import SimpleReactRouter, { Link } from 'simple-react-router'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'

import './index.scss'
import articles from './articles'

// TODO: make this into a react component
import './beareffect'

const Page = ({ page }) => {
  const menu = articles.filter(a => a.attributes.inMenu)
  return (
    <Fragment>
      <Helmet>
        <meta property='og:site_name' content='Blare Stew' />
        <meta property='og:title' content={page.attributes.title} />
        <meta property='og:description' content={page.attributes.description} />
        <meta property='og:image' content={page.attributes.image} />
        <meta property='og:url' content={`https://blarestew.com${page.attributes.url}`} />
        <link rel='canonical' href={`https://blarestew.com${page.attributes.url}`} />
        <title>{page.attributes.title}</title>
      </Helmet>
      <header>
        <h1><a href='/'>BLARE!!! StEW??</a></h1>
        <nav>
          {menu.map(l => <Link className={l.attributes.slug === page.attributes.slug ? 'active' : ''} key={l.attributes.slug} href={l.attributes.url} dangerouslySetInnerHTML={{ __html: l.attributes.menuTitle }} />)}
        </nav>
      </header>
      <article>
        <ReactMarkdown escapeHtml={false} source={page.body} />
      </article>
    </Fragment>
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
