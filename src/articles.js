import fm from 'front-matter'

import rawArticles from '../articles/*.md'

// extract front-matter/body & set defaults

const defaultMeta = fm(rawArticles['_meta']).attributes

const processArticle = (name, article) => {
  article.attributes = { ...defaultMeta, ...article.attributes }
  if (!article.attributes.slug) {
    article.attributes.slug = name
  }
  if (!article.attributes.url) {
    article.attributes.url = `/${article.attributes.slug}`
  }
  if (typeof article.attributes.inMenu === 'undefined') {
    article.attributes.inMenu = name[0] !== '_'
  }
  if (!article.attributes.menuTitle) {
    article.attributes.menuTitle = name.replace(/_/g, ' ').trim()
  }
  article.attributes.menuOrder = article.attributes.menuOrder || 0

  article.body = article.body.replace(/assets\//g, '/assets/')

  return article
}

export const parsedArticles = Object.keys(rawArticles).filter(a => a !== '_meta').reduce((a, c) => ({ ...a, [c]: processArticle(c, fm(rawArticles[c])) }), {})

export const articles = Object.values(parsedArticles)
articles.sort((a, b) => {
  if (a.attributes.menuOrder > b.attributes.menuOrder) { return 1 }
  if (a.attributes.menuOrder < b.attributes.menuOrder) { return -1 }
  return 0
})

export default articles
