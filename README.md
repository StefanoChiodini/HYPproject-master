# hypermediaproject

<p align="center">
  <img width="100%" src="https://i.imgur.com/xhzaPe8.png" alt="header" />
</p>
<p align="center">
    <img src="https://i.imgur.com/LdkVjwo.gif" width="180" alt="Politecnico di Milano"/>
</p>

## Description
Repository of the project developed for the "Hypermedia Applications" course, part of the Master of Science in Computer Science and Engineering at Politecnico di Milano.

This course aims at providing students with the knowledge and skills needed to design and to implement complex, high quality web based hypermedia applications for stationary and mobile devices.

This repository refers to the 2022 edition of the course, which main topic is a website for a city.

## Website
[Comune di Bologna](https://hypwebsite2022.herokuapp.com/)

## Group
| First name    | Last Name | Email address                     |
| ----------    | --------- | ------------------------------    |
| Massimo       | Buono     | massimo.buono@mail.polimi.it      |
| Stefano       | Chiodini  | stefano.chiodini@mail.polimi.it   |
| Luca          | Incarbone | luca.incarbone@mail.polimi.it     |
| Matteo        | Malandra  | matteo.malandra@mail.polimi.it    |

All members took part in defining the overall structure of the website, its design according to the IDM models and the APIs offered by the web server.

- Massimo Buono:
- - Contribution to the design of components, pages and consistency check between pages' contents using Figma.
- - Contribution to fulfillment of DB.
- - Implementation of several components, layouts, pages and shared elements like footer and navbar.
- - Major focus on SEO and accessibility of the pages and relative testing.
- - Management of accessibility tags.

- Stefano Chiodini:
- - Creation of tables and formalization the corresponding E-R diagram.
- - Major focus on setting up the database.
- - Testing responsiveness of the website, relations between elements and coherency with DB.
- - Management of photos using Imgur.

- Luca Incarbone:
- - Contribution to the design of components, pages and layouts using Figma, APIs and consistency check between pages' contents.
- - Definition, implementation and testing of the assigned APIs
- - Help in database setup.
- - Implementation of several components, layouts, pages and shared elements like footer and navbar.
- - Management of photos using Imgur.
- - Management of accessibility tags.

- Matteo Malandra:
- - Contribution to consistency check between pages' contents and IDM diagrams.
- - Contribution to fulfillment of DB.
- - Design and implementation of pages, components and shared elements like footer and navbar.
- - Search of pictures, screenshots and relative compression for website.

## Documentation
- [Design Document](https://github.com/MaxBuono/HYPproject/blob/master/Buono%2C%20Chiodini%2C%20Incarbone%2C%20Malandra%20-%20DESIGN%20report%20-%2005-07-2022.pdf)

## App Organization
The project has been developed with the following technologies:
- Backend: node.js
- Database: PostgreSQL
- Frontend: HTML, CSS, JavaScript
- Framework: Vue.js, Nuxt.js

Components Vue:
- Breadcrumbs
- FooterNew
- Navbar
- LargeCardHome: used as an introduction for the page, with title and description.
- Skeleton: to display specific POI page.
- Skeleton Itineraries: to display specific itinerary page.
- Skeleton Event: to display specific event page.
- SmallCardsHome: card used in Homepage to navigate the website.
- SmallCardsDisplay: container of multiple SmallCardsHome
- TileNew: tile structure used in all grids.

API:
- APIs were used to retrive info from the DB. They are all written in /server/api.js

Images:
- Images retrived from the DB are links to Imgur in order to minimize the utilization of memory.

/static:
- In this folder there is the favicon.ico

/assets:
- In this folder there are only main basic images/icons of pages, not of the events, POIs and so on.

Thanks to Vuejs it was possible to create components and import them directly in pages. This helped us to reuse the code several times. Also layouts (default and error) has been an important step not to write the same components every time (like footer and navbar) in pages.

The link part was made with NuxtLink because way faster than href.
Also bindings, props and so on were useful to pass data with the least possible effort.

The whole website was also designed for high accessibility, responsivity, ease of use and SEO optimization.


To read more about the website structure read the Documentation file above.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
