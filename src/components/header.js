import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../scss/components/header.scss"
import {Helmet} from "react-helmet";

const Header = ({ siteTitle, title, description }) => (
    <>
        {/* Insert Title Schemas */}
        <Helmet
        htmlAttributes={{
            lang: 'en',
        }}>
            <title>{title ? siteTitle + " - " + title : siteTitle}</title>
            <meta property="og:title" content={title ? siteTitle + " - " + title : siteTitle} />
            <meta property="twitter:title" content={title ? siteTitle + " - " + title : siteTitle} />
        </Helmet>

        {/* Insert Description Schemas */}
        { description ?
            <Helmet>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="twitter:description" content={description} />
            </Helmet>
            : null
        }

        {/* Add Navigation Bar */}
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* Add Site Title Link */}
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-4">
                        {siteTitle}
                    </Link>

                    {/* Add Links to Pages */}
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="https://randomcpu.com" className="nav-link px-2 text-white">Our Blog</a></li>
                        <li><Link to="/projects" className="nav-link px-2 text-white">Our Projects</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
