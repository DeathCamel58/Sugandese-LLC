import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

import "../../scss/components/post.scss"
import "../../scss/components/misc.scss"

const IndexPage = () => (
    <Layout>
        <StaticImage src={"../../images/projects/GitLab.png"} alt={"GitLab Logo"} className={"post-header-image"} />
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
            Because of this, we created some custom docker images with code-auditing tools they wanted.
        </p>
        <ul>
            <li>
                They needed a way to automatically check for terms that were not allowed to be checked into their
                codebase and they wanted to be able to audit that code was formatted according to an
                <a href="https://editorconfig.org/">EditorConfig</a> file, so we came up with this&nbsp;
                <code>Dockerfile</code> that has <code>grep</code> and <code>editorconfig-checker</code> preinstalled.
                <pre><code className="code-block">
                    FROM alpine AS base<br />
                    <br />
                    RUN apk update && apk add --no-cache sed cppcheck grep jq uuidgen editorconfig-checker curl<br />
                    <br />
                    LABEL maintainer="deathcamel57"
                </code></pre>
            </li>
            <li>
                They wanted to be able to run <a href="https://www.gnu.org/software/complexity/">GNU Complexity</a> to
                ensure that their code was easily maintainable, so we made sure this container has&nbsp;
                <code>complexity</code> preinstalled.
                <pre><code className="code-block">
                    FROM ubuntu AS base<br />
                    <br />
                    RUN ln -s /usr/bin/dpkg-split /usr/sbin/dpkg-split<br />
                    RUN ln -s /usr/bin/dpkg-deb /usr/sbin/dpkg-deb<br />
                    RUN ln -s /bin/rm /usr/sbin/rm<br />
                    RUN ln -s /bin/tar /usr/sbin/tar<br />
                    <br />
                    RUN apt-get update && apt-get install -y complexity tree jq sed<br />
                    <br />
                    LABEL maintainer="deathcamel57"
                </code></pre>
            </li>
            <li>
                They wanted to have <a href="https://doxygen.nl">Doxygen</a> automatically generate updated documentation on
                &nbsp;every check in, so we went ahead and made another Docker image that had <code>doxygen</code>&nbsp;
                preinstalled.
                <pre><code className="code-block">
                    FROM alpine AS base<br />
                    <br />
                    RUN apk update && apk add --no-cache doxygen<br />
                    <br />
                    LABEL maintainer="deathcamel57"
                </code></pre>
            </li>
        </ul>

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
    </Layout>
)

export default IndexPage
