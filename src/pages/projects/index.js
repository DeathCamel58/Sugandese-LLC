import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Helmet} from "react-helmet";

import "../../scss/components/cards.scss"

const IndexPage = () => (
    <Layout title={"Projects"} description={"This is a list of projects we've done for our clients."}>
        {/* Add Masonry Script to Page */}
        <Helmet>
            <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
    crossOrigin="anonymous" async/>
        </Helmet>

        {/* Content */}
        <div className="container">
            <h1>Some of our projects</h1>
            <p>We use our computer skills to help our clients with all sorts of projects, big and small.</p>

            <div className="row" data-masonry={"{\"percentPosition\": true }"}>

                {/* Add Card for Docker Containers */}
                <div className="col-lg-6 mb-4">
                    <div className="card overflow-hidden">
                        <StaticImage src={"../../images/projects/Docker.png"} alt={"Docker Logo"} placeholder="#333333" />
                        <div className="p-3">
                            <Link to={"/projects/docker-containers"}><h3 className="text-dark">Custom Docker Containers</h3></Link>
                            <p className="card-text">
                                We've worked with clients porting custom toolsets to new architectures and creating
                                multiple architecture Docker images.
                            </p>

                            <Link to={"/projects/docker-containers"}>
                                <p className="text-end text-dark">
                                    How we do it
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Add Card for GitLab CI/CD */}
                <div className="col-lg-6 mb-4">
                    <div className="card overflow-hidden">
                        <StaticImage src={"../../images/projects/GitLab.png"} alt={"GitLab Logo"} placeholder="#333333" />
                        <div className="p-3">
                            <Link to={"/projects/gitlab-ci-cd"}><h3 className="text-dark">GitLab CI/CD Pipelines</h3></Link>
                            <p className="card-text">
                                We've done work on fully custom CI/CD pipelines to help our client's developers get their
                                work done faster while maintaining good quality code through audits.
                            </p>

                            <Link to={"/projects/gitlab-ci-cd"}>
                                <p className="text-end text-dark">
                                    Read more
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
