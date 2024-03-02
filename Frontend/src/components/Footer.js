import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div id='footer'>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>School Of Life</h3>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>

                        <div id='s' className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>

                            <ul>

                                <li><i className="bx bx-chevron-right"></i><Link to={'/'} >Home</Link> </li>
                                <li><i className="bx bx-chevron-right"></i><Link to={'/about'}>About us</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link to={'/'} >Services</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link to={'/'} >Terms of service</Link></li>
                                <li><i className="bx bx-chevron-right"></i><Link to={'/'} >Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>

                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <div>
                                <div>
                                    <h4>Join Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action="true" method='post' >
                                        <input type="email" name="email" />
                                        <input type="submit" value="Subscribe" />
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div></div>


        </div>
    );
}


export default Footer;