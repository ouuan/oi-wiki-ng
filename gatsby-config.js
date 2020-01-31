module.exports = {
  siteMetadata: {
    title: 'OI Wiki',
    description: 'Guide for OI',
    author: 'OI Wiki Team'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-dox',
      options: {
        basePath: '/',
        contentPath: 'docs/',
        mdx: false 
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // By default, `.md` is specified
              // ignoreFileExtensions: ['.md']
              // These files will not be copied
              ignoreFileExtensions: ['.md']
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
        remarkPlugins: [require("remark-details")],
        rehypePlugins: [require('rehype-details')],
        extensions: [".mdx", ".md"]
      }
    },
  ]
}
