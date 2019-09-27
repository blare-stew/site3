// get list for pre-render files based on markdown in /articles

import { writeFileSync } from 'fs'
import articles from './articles'

const routes = articles
  .filter(article => article.attributes.url.slice(0, 4) !== 'http')
  .map(article => article.attributes.url)

writeFileSync(`${__dirname}/../.prerenderrc`, JSON.stringify(routes))
