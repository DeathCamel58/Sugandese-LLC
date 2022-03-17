import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"

import "../../scss/components/post.scss"
import "../../scss/components/misc.scss"

const DockerContainers = () => (
    <Layout>
        <div className="container-fluid header-image-bg-dark p-5 mb-3">
            <StaticImage src={"../../images/projects/Docker.png"} alt={"GitLab Logo"} className={"post-header-image"} placeholder="#333333" />
        </div>
        <div className="container">
            <h1>Custom Docker Images</h1>
            <p>
                While talking to a client about what languages are being used and how their development process works, we
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

            <h2>Multiple Architectures</h2>
            <p>
                Although creating Docker images for other architectures seems difficult, it's honestly one of the
                easiest parts of this kind of project. This is because Docker has a their&nbsp;
                <a href="https://docs.docker.com/buildx/working-with-buildx/">Buildx</a> tool.
            </p>
            <p>
                To use it to produce images, we created a final CI/CD pipeline to build multiple architecture images and
                push them to our internal registry for their usage.
                <pre><code className="code-block">
                    image: docker:20.10.12<br />
                    <br />
                    variables:<br />
                    &nbsp;&nbsp;BUILDX_VERSION: "0.7.1"<br />
                    &nbsp;&nbsp;BUILDX_HOST: "linux"<br />
                    &nbsp;&nbsp;BUILDX_ARCH: "arm64"<br />
                    <br />
                    before_script:<br />
                    &nbsp;&nbsp;- wget -O /usr/bin/docker-buildx https://github.com/docker/buildx/releases/download/v${`{BUILDX_VERSION}`}/buildx-v${`{BUILDX_VERSION}`}.${`{BUILDX_HOST}`}-${`{$BUILDX_ARCH}`}
                    &nbsp;&nbsp;- chmod +x /usr/bin/docker-buildx<br />
                    <br />
                    build:<br />
                    &nbsp;&nbsp;tags:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- no-dind<br />
                    &nbsp;&nbsp;stage: build<br />
                    &nbsp;&nbsp;script:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- docker-buildx create --use<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- docker-buildx build<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--platform linux/amd64,linux/arm/v7,linux/arm64/v8,linux/ppc64le,linux/s390x<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--tag ${`{CI_REGISTRY_IMAGE}`}:latest<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--push<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br />
                </code></pre>
            </p>

            <p>
                These containers went on to be used in a <Link to="/projects/gitlab-ci-cd">GitLab CI/CD</Link> pipeline
                to provide automated code review.
            </p>
        </div>
    </Layout>
)

export default DockerContainers
