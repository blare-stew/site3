---
title: Markdown Reference
inMenu: false
slug: markdown
---

This a test of all markdown possibilities:

------------------------------------------

## Headings

# h1 Heading 1
## h2 Heading 2
### h3 Heading 3
#### h4 Heading 4
##### h5 Heading 5
###### h6 Heading 6

------------------------------------------

## Horizontal Rules

___

---

***

------------------------------------------

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

------------------------------------------

## Links

[link text][1]

[link with title][2]

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

------------------------------------------

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
    

------------------------------------------

## Lists

### Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### Ordered

#### Numers in sequence

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

#### Numers not in sequence

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

------------------------------------------

## Images

You can do them inline, basically link-tags with a `!`:

![blarebear](assets/blarebear.jpg)

Like links, Images also have a footnote style syntax, with a reference later in the document defining the URL location:

![Minion][3]
![Stormtroopocat][4]
![Alt text][5]

By default, the image will be 100%-width.

------------------------------------------

## Video

Although markdown doesn't have support for video, directly, it allows you to use the youtube "embed" code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/6TiTBnE0NlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


You can tweak the parameters in the `iframe` tag. On-site, this will show the video.

------------------------------------------

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

------------------------------------------

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

------------------------------------------


## Warning

You can add warning labels liek this:

```warning
WARNING: THIS IS A WARNING LABEL, LIKE FOR FOOD OR WHATEVER
```

------------------------------------------

[1]: http://dev.nodeca.com
[2]: http://nodeca.github.io/pica/demo/ "title text!"
[3]: https://octodex.github.com/images/dinotocat.png
[4]: https://octodex.github.com/images/saritocat.png "The Stormtroopocat"
[5]: https://octodex.github.com/images/daftpunktocat-thomas.gif "The Dojocat"
