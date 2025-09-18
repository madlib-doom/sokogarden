import React from 'react';
import { Link } from 'react-router-dom';
import "./stylings/footer.css";

const Footer = () => {
  return (
    <footer className="mt-auto py-5 bg-light border-top w-100">
      <div className="container">
        <div className="row text-dark justify-content-between">
          {/* About Us */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5>About Us</h5>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 align-items-center align-items-md-start">
              <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
              <li><Link to="/signin" className="text-decoration-none text-dark">Signin</Link></li>
              <li><Link to="/signup" className="text-decoration-none text-dark">Signup</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; 2025 Your app. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
