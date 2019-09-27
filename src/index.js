import React from 'react'
import { render } from 'react-dom'
import SimpleReactRouter, { Link } from 'simple-react-router'
import ReactMarkdown from 'react-markdown'

import './index.scss'
import articles from '../articles/*.md'

// TODO: make this into a react component
import './beareffect'

articles.merch = 'https://www.etsy.com/shop/BLARESTEW'

const Header = ({ active = '' }) => (
  <header>
    <h1><a href='/'>Blare Stew</a></h1>
    <nav>
      {Object.keys(articles).filter(l => l[0] !== '_').map(l => <Link key={l} href={articles[l].slice(0, 4) === 'http' ? articles[l] : `/${l}`}>{l}</Link>)}
    </nav>
  </header>
)

const Page = ({ name }) => (
  <main>
    <Header active={name} />
    <article>
      <ReactMarkdown escapeHtml={false} source={articles[name]} />
    </article>
  </main>
)

const HomePage = () => (
  <main>
    <Header />
  </main>
)

class App extends SimpleReactRouter {
  routes (map) {
    map('/', HomePage)
    Object.keys(articles).filter(l => l.slice(0, 4) !== 'http').forEach(l => {
      const name = l[0] === '_' ? l.substr(1) : l
      map(`/${name}`, () => <Page name={l} />)
    })
  }
}

render(<App />, document.getElementById('root'))
