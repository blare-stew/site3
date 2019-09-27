# site

This is ideas for [the website](https://blarestew.com). You can get to it [here](https://blarestew.com).

You can edit articles in `articles/`, and it will add them to the menu. Put your assets in `articles/assets/` and they will be available onsite as `/assets/`.

## meta-data

There are (optional) [frontmatter](https://jekyllrb.com/docs/front-matter/) you can put at the top of an article to make it work differently:

```
---
title: YOUR TITLE
menuTitle: SHORT NAME FOR MENU
menuOrder: NUMERIC SORT ORDER FOR MENU
inMenu: false
slug: A CUSTOM SLUG FOR URL (LIKE "video")
description: YOUR DESCRIPTION
image: AN IMAGE THAT SHOWS WHEN YOU SHARE
---
```

All of these are optional, and you can leave them out. You can also edit the global defaults (for articles that don't have this data) in the file `articles/_meta.md`.


## development

```
npm i          # install tools

npm start      # run development server
npm run build  # build site
npm run deploy # deploy site
```

