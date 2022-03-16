import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
    <Layout>
        <div className="row">
            <h1>Sugandese LLC</h1>
            <h3>Who are we?</h3>
            <p>
                Here at Sugandese LLC, we use our computer skills to help our clients with all sorts of projects, big
                and small. We're skilled in IT, and love to find ways to integrate systems into our client's existing
                tooling and infrastructure.
            </p>
        </div>
        <div className="row">
            <h2>What specific experience though?</h2>
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
    </Layout>
)

export default IndexPage
