import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light py-4 px-md-2 px-sm-4" style={{height:"10vh"}}>
      
      <div>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <AiOutlineMenu className="border border-0" />
        </button>

        <a className="navbar-brand " href="#">
          <img
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            width="50"
            height="50"
            className="d-inline-block align-top object-fit-fill"
            alt=""
          />
        </a>

      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Men&apos;s Clothing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Women&apos;s Clothing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Electronics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Jewelery
            </a>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0 ">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default TopNav;
