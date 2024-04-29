import React from "react";

const Footer = () => (

  <footer className="page-footer font-small blue mx-5 p-5  footer">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About Us</h5>
          <p
            className="text-justify "
            style={{ textIndent: "50px", letterSpacing: "3px" }}
          >
            Here you can use rows and columns to organize your footer
            content.Voluptate commodo voluptate id cillum mollit commodo eu
            nostrud consectetur sint. Cillum nulla laborum tempor nulla quis
            duis. Culpa qui aliqua nostrud ullamco sit. Duis anim tempor
            adipisicing magna nisi. Enim cupidatat ad amet ex veniam adipisicing
            duis labore eiusmod ut culpa consequat exercitation officia.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">FAQ</a>
            </li>
            <li>
              <a href="#!">Terms & Condition</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Support</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Contact Us</a>
            </li>
            <li>
              <a href="#!">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="#"> Ecommerce Shop</a>
    </div>
  </footer>
);

export default Footer;
