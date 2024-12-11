import gmailIcon from "../../assets/icons/gmail-icon.png";

const Navbar = () => {
  return (
    <nav className="navbar nav d-flex px-3 ">
      <ul className=" nav-item">
        <li>
          <i className="bi bi-list"></i>
        </li>
        <li className="main-logo d-none d-lg-flex">
          <img className="logo" src={gmailIcon} alt="Icon of Gamil" />
          <h1 className="logo-name">Gmail</h1>
        </li>
        <li className=" searchbar ">
          <div className="searchbar-main">
            <i className=" bi bi-search"></i>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              placeholder="Search mail"
            />
          </div>
          <i className=" bi bi-sliders2"></i>
        </li>
      </ul>
      <ul className=" d-flex column-gap-4">
        <li className=" more-options">
          <i className=" bi bi-info-circle"></i>
        </li>
        <li className=" more-options">
          <i className=" bi bi-gear"></i>
        </li>
        <li className=" more-options">
          <i className=" bi bi-collection"></i>
        </li>
        <li className="">
          <i className=" bi  bi-person"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
