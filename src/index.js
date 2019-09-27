import React from 'react'
import { render } from 'react-dom'
import SimpleReactRouter from 'simple-react-router'
import ReactMarkdown from 'react-markdown'

import './index.scss'
import articles from '../articles/*.md'

// TODO: make this into a react component
import './beareffect'

const Header = ({ active = '' }) => (
  <header>
    <h1><a href='/'>Blare Stew</a></h1>
    <nav>
      {Object.keys(articles).filter(l => l[0] !== '_').map(l => <a key={l} href={l}>{l}</a>)}
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
    Object.keys(articles).forEach(l => {
      const name = l[0] === '_' ? l.substr(1) : l
      map(`/${name}`, () => <Page name={l} />)
    })
  }
}

render(<App />, document.getElementById('root'))
