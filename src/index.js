import React from 'react'
import { render } from 'react-dom'
import SimpleReactRouter, { Link } from 'simple-react-router'
import ReactMarkdown from 'react-markdown'

import './index.scss'
import articles from './articles'

// TODO: make this into a react component
import './beareffect'

const Header = ({ active = '' }) => {
  const menu = articles.filter(a => a.attributes.inMenu)
  return (
    <header>
      <h1><a href='/'>Blare Stew</a></h1>
      <nav>
        {menu.map(l => <Link key={l.attributes.slug} href={l.attributes.url}>{l.attributes.menuTitle}</Link>)}
      </nav>
    </header>
  )
}

const Page = ({ page }) => {
  return (
    <main>
      <Header active={page.attributes.slug} />
      <article>
        <ReactMarkdown escapeHtml={false} source={page.body} />
      </article>
    </main>
  )
}

const HomePage = () => (
  <main>
    <Header />
  </main>
)

class App extends SimpleReactRouter {
  routes (map) {
    const content = articles.filter(l => l.attributes.url.slice(0, 4) !== 'http')
    map('/', HomePage)
    content.forEach(l => {
      map(l.attributes.url, () => <Page page={l} />)
    })
  }
}

render(<App />, document.getElementById('root'))
