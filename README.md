# gatsby-dynamical-navigation
 Dynamical navigation plugin for gatsbyjs.

## Install

`npm install --save gatsby-dynamical-navigation`

## How to use

`gatsby-config.js`
```javascript
...
plugins: [
  ...`gatsby-dynamical-navigation`
],
...
```

## How it works

The algorithm creates `GraphQL` nodes using files with `.md/.mdx` extensions, located in `src/pages`.

*Support for other formats is under development*

## For example:

You have such a file structure in `src/pages`:
```
├── index.md
├── lectures
|   ├── index.md
|   ├── file1.md
|   ├── file2.md
|   ├── file3.md
```

**The presence of the file `index.md` in the root of each folder is necessary for correctly compiling the full navigation of the application**

Using `frontmatter`:

`/index.md`

```md
---
title: Home
---

...Content...
```

`/lectures/index.md`

```md
---
title: Lectures
---

...Content...
```

`/lectures/file1.md`

```md
---
title: lecture 1
navTitle: HTML
order: 1
---

...Content...
```

`/lectures/file2.md`

```md
---
title: lecture 2
navTitle: CSS
order: 2
---

...Content...
```

`/lectures/file1.md`

```md
---
title: lecture 3
navTitle: JS
order: 3
---

...Content...
```


The `title` and` navTitle` fields are used as the text of links for navigation. Moreover, `navTitle` overrides` title`.

**At least one of `navTitle` and` title` must be defined. Otherwise, the `GraphQL` node for this page will not be created.**

`order` is optional. It is necessary to organize the links when displaying.

## `Navigation` component API

`Navigation` is `React` component for rendering of `navigation`.

### How to use

```jsx
import { Navigation } from 'gatsby-dynamical-navigation';

...
<Navigation 
  root={some path} //vertex path of displayed navigation
  target= {some path} //bottom path of displayed navigation (usually location)
  loader={React component} // optional. Component that will be displayed until the navigation is loaded
/>
...
```

You can find an example here:

**[Site page with left side navigation](https://learn.webpurple.net/dictionaries/html/1_html_introduction/)**

(*Where `root` is `/dictionaries/` and `target` is `/dictionaries/html/1_html_introduction/`*)

**[This site on GitHub](https://github.com/WebPurple/learn)**


## `loadNavigation` API

If you prefer to create your own navigation instance, you can use this API.

### How to use

```javascript
import { loadNavigation } from 'gatsby-dynamical-navigation';

...
loadNavigation(navigation => {
  //some kind of code with navigation
})
...
```

**[How it used in the plugin](https://github.com/ZeninZenin/gatsby-dynamical-navigation/blob/master/lib/components/Navigation/Navigation.component.tsx)**

The `loadNavigation` allows loading navigation asynchronously.

`navigation` is cached. No repeat requests.

`navigation` is an array of the type:

```javascript
[
  {
    path: string, //path to page
    title: string, //text for link (name)
    childrenSiteNavigation: { //array of child links
      title: string, //path to page
      path: string, //text for link (name)
      order: number | null, //useful for arranging links when rendering
      fields: {
        isRoot: true, //means it has child links
      } | null //or not
    }[]
  }
]
```

Only navigation items with children loaded.

Items without children loaded as children of others.

### For this example `navigation` would be:

```javascript
[
  {
    title: Home,
    path: '/',
    childrenSiteNavigation: [
      {
        title: Lectures,
        path: '/lectures/'
        order: null,
        fields: {
          isRoot: true,
        },
      },
    ],
  },
  {
    title: Lectures,
    path: '/lectures/'
    childrenSiteNavigation: [
      {
        title: HTML,
        path: '/lectures/file1/'
        order: 1,
        fields: null,
      },
      {
        title: CSS,
        path: '/lectures/file2/'
        order: 2,
        fields: null,
      },
      {
        title: JS,
        path: '/lectures/file3/'
        order: 3,
        fields: null,
      },
    ],
  },
]
```



## GraphQL queries

You can use the `GraphQL` nodes as you like.

### For example, to load all navigation items:

`in page template`
```javascript
...

export const pageQuery = graphql`
    query queryName {
      allSiteNavigation {
        edges {
          node {
            title
            path
            order
            fields {
              isRoot
            }
          }
        }
      }
    }
  `
```

