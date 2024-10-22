import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
}) {
  return (
    <>
      <header
        className={`main-header header-style-two-new ${isSearch ? "moblie-search-active" : ""}`}
        style={{
          
          color: "white",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          backgroundColor: "black",
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="main-box"
          style={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
            flexWrap: "wrap", // Allow wrapping for smaller screens
          }}
        >
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="Techo"
                  title="Techo"
                  style={{ height: "70px", width: "auto" }} 
                />
              </Link>
            </div>
           
          </div>

          <div className="nav-outer" style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <nav className="nav main-menu">
              <Menu />
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="mobile-menu-button" onClick={handleMobileMenu}>
              <span className="icon fa fa-bars"></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenu ? "active" : ""}`}>
          <div className="menu-backdrop" onClick={handleMobileMenu} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="Logo" style={{ height: "35px", width: "auto" }} />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
          </nav>
        </div>
      </header>

      {/* Add margin-top to the next section to prevent content from hiding under the fixed navbar */}
      <div style={{ marginTop: "70px" }}></div>

      <style jsx>{`
        @media (max-width: 768px) {
          .main-box {
            height: auto; // Allow height to adjust
            padding: 10px; // Less padding for mobile
          }
          .mobile-menu-button {
            display: block; // Show mobile menu button
            margin-left: auto; // Align to the right
          }
          .nav.main-menu {
            display: none; // Hide main menu
          }
          .mobile-menu.active {
            display: block; // Show mobile menu when active
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none; // Hide mobile menu button on larger screens
          }
        }
      `}</style>
    </>
  );
}
