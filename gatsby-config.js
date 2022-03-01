module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://sugandese.net`
    },
    plugins: [
        "gatsby-plugin-preact",
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: false, // Print removed selectors and processed file names
                develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
                purgeCSSOptions: {
                    // https://purgecss.com/configuration.html#options
                    // safelist: ['safelist'], // Don't remove this selector
                },
                // More options defined here https://purgecss.com/configuration.html#options
            },
        },
    ]
};
