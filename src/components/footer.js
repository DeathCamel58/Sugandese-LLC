import * as React from "react"
import {Link} from "gatsby"

import "../scss/components/footer.scss"

import "../scss/bootstrap.scss"

const Footer = () => (
    <footer className="bg-dark text-center text-white">
        <div className="container pt-3">

            <div className="row">
                {/* Left Section */}
                <div className="col-lg-6">
                    <p>
                        Sugandese LLC is a small tech firm that specializes in custom solutions for your company's
                        problems. We're particularly experienced in cloud infrastructure and self-hosted hyper converged
                        clouds.
                    </p>
                </div>

                {/* Right Section */}
                <div className="col-lg-6">
                    <h5 className="text-uppercase">What we do</h5>

                    {/* Links */}
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://randomcpu.com/" className="text-white">Our Blog</a>
                        </li>
                        <li>
                            <Link to="/projects" className="text-white">Past Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="text-center p-3 footer-darkbar">
            © {new Date().getFullYear()} Copyright:&nbsp;
            <Link to="/" className="text-white">Sugandese LLC</Link>
        </div>
    </footer>
)

export default Footer
