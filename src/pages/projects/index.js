import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Helmet} from "react-helmet";

import "../../scss/components/cards.scss"

const IndexPage = () => (
    <Layout>
        <Helmet>
            <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
    crossOrigin="anonymous" async/>
        </Helmet>
        <h1>Some of our projects</h1>
        <p>We use our computer skills to help our clients with all sorts of projects, big and small.</p>

        <div className="row" data-masonry={"{\"percentPosition\": true }"}>
            <div className="col-lg-6 mb-4">
                <div className="card">
                    <StaticImage src={"../../images/projects/GitLab.png"} alt={"GitLab"} />
                    <div className="card-body">
                        <Link to={"/projects/gitlab-ci-cd"}><h3>GitLab CI/CD Pipelines</h3></Link>
                        <p className="card-text">
                            We've done work on fully custom CI/CD pipelines to help our client's developers get their
                            work done faster while maintaining good quality code through audits.
                        </p>

                        <Link to={"/projects/gitlab-ci-cd"}>
                            <p className="text-end">
                                Read more
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
