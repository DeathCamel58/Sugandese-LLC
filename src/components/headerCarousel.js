/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import "../scss/bootstrap.scss"
import "../scss/components/homepageCarousel.scss"
import {StaticImage} from "gatsby-plugin-image";
import { Link } from "gatsby"
import {Helmet} from "react-helmet";

const HeaderCarousel = () => (
        <>
            {/* Add Bootstrap JS for Slider */}
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                        crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                        crossOrigin="anonymous" />
            </Helmet>

            {/* Carousel Item */}
            <div id="carouselExampleIndicators" className="carousel carousel-dark slide header-carousel text-light mb-3" data-bs-ride="carousel">
                {/* Carousel Navigation */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"/>
                </div>

                {/* Carousel Pages */}
                <div className="carousel-inner">

                    {/* Carousel Page for GitLab CI/CD */}
                    <div className="carousel-item active">
                        <div className="container carousel-item-container">
                            <div className="carousel-caption">
                                <StaticImage src="../images/projects/GitLab.png" alt="GitLab Logo" ClassName="d-block w-100 carousel-caption-image" height="150" placeholder="#333333" />
                                <h2>Improve Development Productivity</h2>
                                <p>
                                    We have experience helping companies improve development times using custom
                                    continuous integration and continuous delivery pipelines. This helps to ensure code
                                    quality and helps to avoid regressions.
                                </p>
                                <p>
                                    <Link to="/projects/gitlab-ci-cd" className="btn btn-lg btn-outline-light">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Page for Docker Containers */}
                    <div className="carousel-item">
                        <div className="container carousel-item-container">
                            <div className="carousel-caption">
                                <StaticImage src="../images/projects/Docker.png" alt="Docker Logo" ClassName="d-block w-100 carousel-caption-image" height="150" placeholder="#333333" />
                                <h2>Custom Docker Containers</h2>
                                <p>
                                    We have built custom Docker containers for our clients. This includes containers
                                    with custom toolsets, and porting existing containers to new architectures.
                                </p>
                                <p>
                                    <Link to="/projects/docker-containers" className="btn btn-lg btn-outline-light">Read More</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Page for Proxmox */}
                    <div className="carousel-item">
                        <div className="container carousel-item-container">
                            <div className="carousel-caption">
                                <StaticImage src="../images/projects/Proxmox.png" alt="Docker Logo" ClassName="d-block w-100 carousel-caption-image" height="150" placeholder="#333333" />
                                <h2>Hyperconverged Clusters</h2>
                                <p>
                                    We have our own in-house infrastructure, but love working on client's services
                                    as well. We're experienced with managing and setting up both Proxmox and Rancher.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)

export default HeaderCarousel
