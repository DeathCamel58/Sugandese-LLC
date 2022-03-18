import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import HeaderCarousel from "../components/headerCarousel"

import "../scss/components/homepage.scss"

const IndexPage = () => (
    <Layout description={"Here at Sugandese LLC, we use our computer skills to help our clients with all sorts of projects, big and small."}>
        {/* Add Slider */}
        <HeaderCarousel />

        {/* Content */}
        <div className="container">
            <div className="row">
                <h1>Sugandese LLC</h1>
                <h3>Who are we?</h3>
                <p>
                    Here at Sugandese LLC, we use our computer skills to help our clients with all sorts of projects, big
                    and small. We're skilled in IT, and love to find ways to integrate systems into our client's existing
                    tooling and infrastructure.
                </p>
            </div>
        </div>

        {/* Three Service Descriptions */}
        <div className="container-fluid bg-dark-custom text-light p-3 mb-3">
            <div className="container">
                <div className="row">
                    <h2>What specific experience though?</h2>
                    <div className="col-md-4">
                        <div className="h3">GitLab</div>
                        <p>
                            Whether you're needing a VCS set up, or you're wanting to have automated audits of your codebase,
                            we have the experience necessary to accelerate your development time.
                        </p>
                        <Link to="/projects/gitlab-ci-cd" className="btn btn-lg btn-outline-light">More</Link>
                    </div>
                    <div className="col-md-4">
                        <div className="h3">Docker</div>
                        <p>
                            We have experience with porting Docker containers to new architectures and developing containers
                            with your custom toolset or applications to ensure that "it compiles on my machine" is a thing
                            of the past.
                        </p>
                        <Link to="/projects/docker-containers" className="btn btn-lg btn-outline-light">More</Link>
                    </div>
                    <div className="col-md-4">
                        <div className="h3">Proxmox</div>
                        <p>
                            We have our own servers running Proxmox, and we'd love to help with yours as well. We use Ceph
                            to ensure that data loss doesn't occur, and we have experience with high availability to make
                            sure our services are available 24/7/365.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Additional Content at Bottom */}
        <div className="container">
            <div className="row">
                <h3>*nix Architecture Porting</h3>
                <p>
                    We have specific experience with porting <code>x86</code> and <code>x86_64</code> programs to other
                    architectures including <code>aarch64</code>, <code>mipsle</code>, and more. We've been working on our
                    in house project of porting <a href="https://www.unrealengine.com/">Unreal Engine</a> to the Raspberry
                    Pi, as it could really help in low cost <Link to="/projects/gitlab-ci-cd">CI/CD</Link> builds.
                </p>

                <h3>Package Repository Management</h3>
                <p>
                    We currently have an in-house <a href="https://openwrt.org/">OpenWRT</a> repository that contains a few
                    hundred packages that track upstream packages that the OpenWRT project does not keep sufficiently up to
                    date.
                </p>
                <p>
                    We've previously maintained custom Debian package repositories as well.
                </p>
            </div>
        </div>
    </Layout>
)

export default IndexPage
