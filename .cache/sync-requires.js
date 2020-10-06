const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/homedrive/jackheinemann/Desktop/portfoliog/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Volumes/homedrive/jackheinemann/Desktop/portfoliog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/homedrive/jackheinemann/Desktop/portfoliog/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Volumes/homedrive/jackheinemann/Desktop/portfoliog/src/templates/blog-post.js")))
}

