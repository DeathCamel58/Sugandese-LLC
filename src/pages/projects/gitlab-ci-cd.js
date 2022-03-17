import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

import "../../scss/components/post.scss"
import "../../scss/components/misc.scss"

const GitLabCICD = () => (
    <Layout>
        <div className="container-fluid header-image-bg-dark p-5 mb-3">
            <StaticImage src={"../../images/projects/GitLab.png"} alt={"GitLab Logo"} className={"post-header-image"} placeholder="#333333" />
        </div>
        <div className="container">
            <h1>Helping DevOps with CI/CD</h1>
            <p>
                We recently had a company reach out to us asking if there was any way to audit code checked into their
                GitLab instance for a game they're working on. After some discussion, we explained the ideas behind CI/CD,
                and they fell in love with the concept.
            </p>

            <h2>Custom Docker Images</h2>
            <p>
                While talking to them about what languages are being used and how their development process works, we
                quickly learned that no pre-made docker images would work, and that GitLab's
                <a href={"https://docs.gitlab.com/ee/topics/autodevops/"}> Auto DevOps</a> features were not a good fit for
                them.
                Because of this, we created some custom docker images with code-auditing tools they wanted.&nbsp;
                <Link to="/projects/docker-containers">Read More</Link>
            </p>

            <h2>Custom Code Quality</h2>
            <StaticImage src={"../../images/projects/GitLab-code-quality.png"} alt={"GitLab Code Quality Widget"} className={"post-header-image"} />
            <p>
                Although the custom Docker images work well at auditing code, they're pretty much useless if we don't have a
                good way of displaying the results to the programmer who checked in the code. Here's where GitLab's&nbsp;
                <a href="https://docs.gitlab.com/ee/user/project/merge_requests/code_quality.html#code-quality-widget">Code Quality</a>
                &nbsp;widget really shines.
            </p>
            <p>
                To combine all the results of all the code auditing jobs, we spin up a Docker image that has&nbsp;
                <a href="https://stedolan.github.io/jq/">jq</a> preinstalled. This tool can take in data, parse it as JSON,
                and output valid JSON (which is required for the Code Quality widget).
            </p>
            <p>
                To do this, we exported data from each audit step as an artifact in our CI/CD <code>.yml</code> files:
                <pre><code className="code-block">
                    artifacts:<br />
                    &nbsp;&nbsp;paths:<br />
                    &nbsp;&nbsp;- audit1-output.json
                </code></pre>
                Then we import the job artifacts in another job, which makes all our job artifacts reports available:
                <pre><code className="code-block">
                    needs:<br />
                    &nbsp;&nbsp;- job: cppcheck<br />
                    &nbsp;&nbsp;artifacts: true<br />
                    &nbsp;&nbsp;- job: complexity<br />
                    &nbsp;&nbsp;artifacts: true<br />
                </code></pre>
                Finally, we can concatenate the artifacts together, and run them through <code>jq</code> to ensure we have
                valid json and export the concatenated file as <code>gl-code-quality-report.json</code>, which is the
                required name for the code quality report.
            </p>
        </div>
    </Layout>
)

export default GitLabCICD
