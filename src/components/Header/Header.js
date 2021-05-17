import React from "react";

// ========= main-menu 9  activation
const open = () => {
  let navbarSidebar9 = document.querySelector(".navbar-sidebar-9");
  let overlay9 = document.querySelector(".overlay-9");
  navbarSidebar9.classList.add("open");
  overlay9.classList.add("open");
};

const close = () => {
  let navbarSidebar9 = document.querySelector(".navbar-sidebar-9");
  let overlay9 = document.querySelector(".overlay-9");
  navbarSidebar9.classList.remove("open");
  overlay9.classList.remove("open");
};

const Header = () => {
  return (
    <header className="menu-style-9 position-relative">
      <div className="container">
        <nav className="row align-items-center">
          <div className="col-3 d-lg-none">
            <div className="navbar-toggle icon-text-btn">
              <button
                className="icon-btn primary-icon-text mobile-menu-open-9"
                onClick={open}
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-6 order-lg-1">
            <div className="navbar-logo text-center text-lg-start">
              <a href="#0">
                <img
                  src="https://demo.ecommercehtml.com/assets/images/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-3 order-lg-3">
            <div className="navbar-meta">
              <ul className="meta">
                <li>
                  <a className="search" href="#0">
                    <i className="lni lni-search-alt"></i>
                  </a>
                </li>
                <li>
                  <div className="navbar-user dropdown">
                    <a
                      className="icon-btn primary-icon-text icon-text-btn"
                      href="#dropdown-9"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account"></i>
                    </a>
                    <ul className="dropdown-menu" id="dropdown-9">
                      <li>
                        <a href="#0">
                          <i className="mdi mdi-account"></i> My Profile
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="mdi mdi-cog"></i> Settings
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="mdi mdi-bell"></i>Notifications
                        </a>
                      </li>
                      <li>
                        <a href="#0">
                          <i className="mdi mdi-import"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="navbar-cart">
                    <a
                      className="icon-btn primary-icon-text icon-text-btn"
                      href="#0"
                    >
                      <img
                        src="https://demo.ecommercehtml.com/assets/images/icon-svg/cart-1.svg"
                        alt="Icon"
                      />
                      <span className="icon-text text-style-1">88</span>
                    </a>

                    <div className="navbar-cart-dropdown">
                      <div className="checkout-style-2">
                        <div className="checkout-header d-flex justify-content-between">
                          <h6 className="title">Shopping Cart</h6>
                        </div>

                        <div className="checkout-table table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="checkout-product">
                                  <div className="product-cart d-flex">
                                    <div className="product-thumb">
                                      <img
                                        src="https://demo.ecommercehtml.com/assets/images/product-cart/product-1.png"
                                        alt="Product"
                                      />
                                    </div>
                                    <div className="product-content media-body">
                                      <h5 className="title">
                                        <a href="#0">Hollow Port</a>
                                      </h5>
                                      <ul>
                                        <li>
                                          <span>Brown</span>
                                        </li>
                                        <li>
                                          <span>XL</span>
                                        </li>
                                        <li>
                                          <a className="delete" href="#0">
                                            <i className="mdi mdi-delete"></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td className="checkout-quantity">
                                  <div className="product-quantity d-inline-flex">
                                    <button
                                      type="button"
                                      id="sub"
                                      className="sub"
                                    >
                                      <i className="mdi mdi-minus"></i>
                                    </button>
                                    <input type="text" />
                                    <button
                                      type="button"
                                      id="add"
                                      className="add"
                                    >
                                      <i className="mdi mdi-plus"></i>
                                    </button>
                                  </div>
                                </td>
                                <td className="checkout-price">
                                  <p className="price">$36.00</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="checkout-product">
                                  <div className="product-cart d-flex">
                                    <div className="product-thumb">
                                      <img
                                        src="assets/images/product-cart/product-2.png"
                                        alt="Product"
                                      />
                                    </div>
                                    <div className="product-content media-body">
                                      <h5 className="title">
                                        <a href="#0">Mist Black Triblend</a>
                                      </h5>
                                      <ul>
                                        <li>
                                          <span>Brown</span>
                                        </li>
                                        <li>
                                          <span>XL</span>
                                        </li>
                                        <li>
                                          <a className="delete" href="#0">
                                            <i className="mdi mdi-delete"></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td className="checkout-quantity">
                                  <div className="product-quantity d-inline-flex">
                                    <button
                                      type="button"
                                      id="sub"
                                      className="sub"
                                    >
                                      <i className="mdi mdi-minus"></i>
                                    </button>
                                    <input type="text" />
                                    <button
                                      type="button"
                                      id="add"
                                      className="add"
                                    >
                                      <i className="mdi mdi-plus"></i>
                                    </button>
                                  </div>
                                </td>
                                <td className="checkout-price">
                                  <p className="price">$36.00</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="checkout-product">
                                  <div className="product-cart d-flex">
                                    <div className="product-thumb">
                                      <img
                                        src="assets/images/product-cart/product-3.png"
                                        alt="Product"
                                      />
                                    </div>
                                    <div className="product-content media-body">
                                      <h5 className="title">
                                        <a href="#0">Realm Bone</a>
                                      </h5>
                                      <ul>
                                        <li>
                                          <span>Brown</span>
                                        </li>
                                        <li>
                                          <span>XL</span>
                                        </li>
                                        <li>
                                          <a className="delete" href="#0">
                                            <i className="mdi mdi-delete"></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td className="checkout-quantity">
                                  <div className="product-quantity d-inline-flex">
                                    <button
                                      type="button"
                                      id="sub"
                                      className="sub"
                                    >
                                      <i className="mdi mdi-minus"></i>
                                    </button>
                                    <input type="text" />
                                    <button
                                      type="button"
                                      id="add"
                                      className="add"
                                    >
                                      <i className="mdi mdi-plus"></i>
                                    </button>
                                  </div>
                                </td>
                                <td className="checkout-price">
                                  <p className="price">$36.00</p>
                                </td>
                              </tr>
                              <tr>
                                <td className="checkout-product">
                                  <div className="product-cart d-flex">
                                    <div className="product-thumb">
                                      <img
                                        src="assets/images/product-cart/product-4.png"
                                        alt="Product"
                                      />
                                    </div>
                                    <div className="product-content media-body">
                                      <h5 className="title">
                                        <a href="#0">Circular Sienna</a>
                                      </h5>
                                      <ul>
                                        <li>
                                          <span>Brown</span>
                                        </li>
                                        <li>
                                          <span>XL</span>
                                        </li>
                                        <li>
                                          <a className="delete" href="#0">
                                            <i className="mdi mdi-delete"></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                                <td className="checkout-quantity">
                                  <div className="product-quantity d-inline-flex">
                                    <button
                                      type="button"
                                      id="sub"
                                      className="sub"
                                    >
                                      <i className="mdi mdi-minus"></i>
                                    </button>
                                    <input type="text" />
                                    <button
                                      type="button"
                                      id="add"
                                      className="add"
                                    >
                                      <i className="mdi mdi-plus"></i>
                                    </button>
                                  </div>
                                </td>
                                <td className="checkout-price">
                                  <p className="price">$36.00</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="checkout-footer">
                          <div className="checkout-sub-total d-flex justify-content-between">
                            <p className="value">Subotal Price:</p>
                            <p className="price">$144</p>
                          </div>
                          <div className="checkout-btn">
                            <a
                              href="#0"
                              className="main-btn primary-btn-border"
                            >
                              View Cart
                            </a>
                            <a href="#0" className="main-btn primary-btn">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 position-static">
            <div className="navbar-container  navbar-sidebar-9">
              <div className="navbar-close d-lg-none">
                <button
                  className="icon-btn primary-icon-text close-mobile-menu-9"
                  onClick={close}
                >
                  <i className="mdi mdi-close"></i>
                </button>
              </div>

              <div className="main-navbar">
                <ul className="main-menu-horizontal">
                  <li className="position-static menu-item-has-children">
                    <a
                      href="#0"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#menuVertical9-1"
                      aria-controls="menuVertical9-1"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Womens <i className="mdi mdi-chevron-right"></i>{" "}
                    </a>
                    <ul
                      className="sub-mega-dropdown collapse"
                      id="menuVertical9-1"
                    >
                      <li>
                        <div className="mega-dropdown-menu">
                          <ul className="container mega-dropdown d-flex flex-wrap">
                            <li className="mega-dropdown-list menu-item-has-children">
                              <h6
                                className="heading-6 font-weight-500 mega-title collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#menuVertical9-2"
                                aria-controls="menuVertical9-2"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                New Arrivals
                                <i className="mdi mdi-chevron-right"></i>
                              </h6>
                              <ul className="collapse" id="menuVertical9-2">
                                <li>
                                  <a href="#0">Dressess</a>
                                </li>
                                <li>
                                  <a href="#0">Jackets</a>
                                </li>
                                <li>
                                  <a href="#0">Hoodies & Sweatshirts</a>
                                </li>
                                <li>
                                  <a href="#0">Sweaters</a>
                                </li>
                                <li>
                                  <a href="#0">Tops & Tees</a>
                                </li>
                                <li>
                                  <a href="#0">Party Dressess</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-dropdown-list menu-item-has-children">
                              <h6
                                className="heading-6 font-weight-500 mega-title collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#menuVertical9-3"
                                aria-controls="menuVertical9-3"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                Trending
                                <i className="mdi mdi-chevron-right"></i>
                              </h6>
                              <ul className="collapse" id="menuVertical9-3">
                                <li>
                                  <a href="#0">Dressess</a>
                                </li>
                                <li>
                                  <a href="#0">Jackets</a>
                                </li>
                                <li>
                                  <a href="#0">Hoodies & Sweatshirts</a>
                                </li>
                                <li>
                                  <a href="#0">Sweaters</a>
                                </li>
                                <li>
                                  <a href="#0">Tops & Tees</a>
                                </li>
                                <li>
                                  <a href="#0">Party Dressess</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-dropdown-list menu-item-has-children">
                              <h6
                                className="heading-6 font-weight-500 mega-title collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#menuVertical9-4"
                                aria-controls="menuVertical9-4"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                              >
                                Accessories
                                <i className="mdi mdi-chevron-right"></i>
                              </h6>
                              <ul className="collapse" id="menuVertical9-4">
                                <li>
                                  <a href="#0">Hoodies & Sweatshirts</a>
                                </li>
                                <li>
                                  <a href="#0">Jackets & Coats</a>
                                </li>
                                <li>
                                  <a href="#0">Pants</a>
                                </li>
                                <li>
                                  <a href="#0">Jeans</a>
                                </li>
                                <li>
                                  <a href="#0">Tops & Tees</a>
                                </li>
                                <li>
                                  <a href="#0">Casual Shorts</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-dropdown-list">
                              <img
                                src="assets/images/menu-slider-1.png"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#0">mens</a>
                  </li>
                  <li>
                    <a href="#0">Kids</a>
                  </li>
                  <li>
                    <a href="#0">Accessories</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#0"
                      className="collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#menuVertical9-5"
                      aria-controls="menuVertical9-5"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      More <i className="mdi mdi-chevron-right"></i>{" "}
                    </a>
                    <ul className="sub-menu collapse" id="menuVertical9-5">
                      <li>
                        <a href="#0">Dropped Menu 1</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a
                          href="#0"
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#menuVertical9-6"
                          aria-controls="menuVertical9-6"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Dropped Menu 2{" "}
                          <i className="mdi mdi-chevron-right"></i>
                        </a>
                        <ul className="sub-menu collapse" id="menuVertical9-6">
                          <li>
                            <a href="#0">Sub Dropped Menu 1</a>
                          </li>
                          <li>
                            <a href="#0">Sub Dropped Menu 2</a>
                          </li>
                          <li>
                            <a href="#0">Sub Dropped Menu 3</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a
                              href="#0"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#menuVertical9-7"
                              aria-controls="menuVertical9-7"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              Sub Dropped Menu 4{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </a>
                            <ul
                              className="sub-menu collapse"
                              id="menuVertical9-7"
                            >
                              <li>
                                <a href="#0">Sub Dropped Menu 1</a>
                              </li>
                              <li>
                                <a href="#0">Sub Dropped Menu 2</a>
                              </li>
                              <li>
                                <a href="#0">Sub Dropped Menu 3</a>
                              </li>
                              <li>
                                <a href="#0">Sub Dropped Menu 4</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#0">Dropped Menu 3</a>
                      </li>
                      <li>
                        <a href="#0">Dropped Menu 4</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="overlay-9"></div>
    </header>
  );
};

export default Header;
