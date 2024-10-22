import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <ul
        className="navigation"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "50px",
          marginRight: "20px",
          listStyleType: "none", // Remove bullet points
          padding: 0, // Remove padding
        }}
      >
        <li style={{ color: "white" }}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page-about">About Us</Link>
        </li>
        <li
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/page-service-details">Services</Link>
          {/* Implement dropdown menu if needed */}
        </li>
       
        {/* <li>
          <Link href="/page-projects">Projects</Link>
        </li> */}
        <li>
          <Link href="/news-grid">Careers</Link>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>

      <style jsx>{`
        @media (max-width: 768px) {
          .navigation {
            flex-direction: column; // Stack items vertically
            background: black; // Background for mobile menu
            position: absolute; // Absolute position
            top: 100%; // Below the header
            left: 0;
            width: 100%; // Full width
            display: ${dropdownOpen ? "block" : "none"}; // Show/hide based on state
          }
          .navigation li {
            padding: 10px 20px; // Add padding for touch targets
          }
        }
      `}</style>
    </>
  );
}
