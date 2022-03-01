/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../scss/bootstrap.scss"
import "../scss/components/layout.scss"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Sugandese LLC`} />
            <div className="container" id="main">
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0 1.0875rem 1.45rem`,
                    }}
                >
                    <main>{children}</main>
                    <footer
                        style={{
                            marginTop: `2rem`,
                        }}
                    >
                        © {new Date().getFullYear()}, Built by
                        {` `}
                        <a href="https://randomcpu.com">RandomCPU</a>
                    </footer>
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
