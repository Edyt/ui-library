# Edyt UI Library



## Installation and Usage

The UI Library repository ships with the compiled version in the `public` directory. 

To see the UI Library, clone the repository ([see cloning instructions](LINK_MISSING_CONTACT_FARUK)) and open the `public/index.html` file in your browser. (FUTURE: public version available somewhere via github.io?)

To install the necessary infrastructure to update and build the UI Library yourself:

For Mac OS X or Linux:

1. Install Node.js on your system (a recent version that ships with `npm`)
2. Open a Terminal to the directory of the library and run `npm install`

For Windows:

- _(instructions missing)_


To build the UI Library, make sure you have the necessary infrastructure installed first (above), then run this command from the project’s root directory:

1. `node build`

To run the file watcher & UI Library server (useful for active development; will recompile upon every file save and run a local file- and BrowserSync server):

1. `node server`
2. Open [http://localhost:3398/](http://localhost:3398/)




# Process

- One-directional CSS stack from the top-down:
  1. (individual) Component level (static html & css)
  1. Collection level (static html & css)
  1. Page level (static html & css)
  1. React Component level
  1. React-based Collections
  1. React-based Pages
- No adding of any CSS to or for React-level components of any kind _unless it is also added at the top of the stack_.
- Changes to the markup of any Component _MUST_ also happen at the individual Component level in the static html & css
- Folders that contain multiple items inside (e.g. multiple components) are named in _plural_ form; folders and files for individual components are named in _singular_ form. 
  - **Example:** 
    - `components/button/button.jsx`
    - `components/button/button.md`
    - `components/button/button.scss`


# Our Holistic CSS approach

Streamlined, unified, CSS 

BEM + SMACSS + OOCSS:

BEM    notation of class syntax 
SMACSS design of base/layout/module/state/theme
OOCSS  architecture of modular construction and compounding







# Site Map
## Rules for the naming convention & file + folder structure

Foundations are named based on their function and purpose

Components are named by their BEM notation block, e.g.

```scss
.menu {
  …

  &__item { // compiles to: .menu__item {}
    …

    &--current { // compiles to: .menu__item--current {} 
      …
    }

    &[aria-selected="true"] { // use aria states instead of .is-active etc.
      …
    }
  }
}
```

The above would go in a file called `menu.scss`.

See: `style-example.scss` (and `style-example-output.css`) for a more complete style example, or see [this CodePen](http://codepen.io/KuraFire/pen/MwgPgg) for an interactive example.


### Metalsmith & Highlight.js 

We're using the Metallic Metalsmith plugin, which adds Highlight.js-powered syntax highlighting for code in markdown documents compiled by Metalsmith. 

Our custom download of highlight.js includes:

- CSS
- CoffeeScript
- Diff
- Handlebars
- HTML (& XML)
- JavaScript
- JSON
- Markdown
- Ruby
- SCSS

And (for the time being) we use the [Github color scheme](https://highlightjs.org/static/demo/).


# Loading CSS

CSS files should be created based on individual standalone components as much as possible. It's okay to not concatenate CSS files into one; we're aiming for the future, not the past, and the future is HTTP2 & SPDY where small individual files are better than one giant file. HTTP requests are not going to be the bottleneck for us, nor in the future. Large files have worse performance and delay rendering.

## Setup

This section under heavy modification.

### Requirements

1. Node
1. Ruby

#### Tools:
1. Sublime Text 3
  1. _With the following plugins:_
  	1. [Package Control](https://packagecontrol.io/installation)
  	1. [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html)
  	1. [Sublime​Linter-contrib-scss-lint](https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint)
  		* Note: before installing this Linter plugin, `scss-lint` needs to be installed via this Terminal command: `gem install scss-lint`
  1. _And the following User preferences:_  
    * `"tab_size": 2,`
    * `"translate_tabs_to_spaces": true`
1. Metalsmith
	1. `npm install metalsmith`
1. [Screenfly](http://quirktools.com/screenfly/)
1. [BrowserSync](http://www.browsersync.io/)

## Thoughts on the long-term version of the app and the UI Library

* [Yeoman React Webpack to start?](https://github.com/newtriks/generator-react-webpack)
* [Server-side rendering of React components](https://github.com/mhart/react-server-example) before sending them to the browser ([info](http://www.crmarsh.com/react-ssr/))
* [React Router](https://github.com/rackt/react-router)
* [docs.writethedocs.org](http://docs.writethedocs.org/) for reference on writing good documentation (should be linked in UI library)
* [ghooks (for dev environments _only_)](https://www.npmjs.com/package/ghooks) 
  * Also for running SCSS Lint on our source files before commit
  * tests, etc.


Sass structure guidelines: [sitepoint.com/architecture-sass-project](http://www.sitepoint.com/architecture-sass-project/)




# Possible resources:

* https://github.com/ireade/formhack




`package.json` before MASS INSTALLING ALL THE PLUGINS:

```json
{
  "name": "edyt-uilibrary",
  "version": "1.0.0",
  "description": "Edyt UI Library",
  "main": "build.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Edyt, Inc (Faruk Ates)",
  "license": "ISC",
  "devDependencies": {
    "metalsmith": "^1.3.0",
    "metalsmith-collections": "^0.7.0",
    "metalsmith-markdown": "^0.2.1",
    "metalsmith-metallic": "^0.3.1",
    "metalsmith-navigation": "^0.1.0",
    "metalsmith-permalinks": "^0.4.0",
    "metalsmith-templates": "^0.6.1",
    "mustache": "^1.1.0"
  }
}
```



* * *




# Template for UI asset files:

---
title:    Lorem ipsum dolor sit amet
layout:   xyz
other:
  - yaml
  - front
  - matter
---

## Title for (component/collection/page) goes here

<div class="uil-sample-code">
  {{! put your most canonical version’s code here as direct HTML }}
</div>
<div class="uil-react-code">
  {{! if there is a React component, put the component JSX here }}
</div>

Paragraph(s) documenting and explaining the component, collection or page, in terms of the semantics, the use cases & purpose(s) of the asset, and any other relevant info.

If there are variations or configuration options to the asset, introduce them here.

<div class="uil-sample-code uil-variations">
  <put all variations here; configuration options cause variations>
</div>

<pre class="uil-configuration"><code>
  {{! This section is optional, only used for configurations. List the configuration options as a JSON object }}
</code></pre>

### Accessibility

Paragraph(s) explaining the accessibility information, use cases, ARIA roles, and cautions or concerns (if any). 

Any remaining additional content included after the h3 for Accessibility will be included in the Accessibility section.

<p>You can use raw HTML here as well, if you know what you’re doing.</p>