import Link from "next/link";
import { useState } from 'react';

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <style jsx>{`
                .navigation {
                    background-color: black;
                    padding: 10px; /* Add some padding if needed */
                }
                .navigation li {
                    display: inline-block; /* Change this to block for vertical menu */
                    margin-right: 20px; /* Adjust margin between items */
                }
                .navigation a {
                    color: white;
                    text-decoration: none;
                    padding: 5px 10px; /* Add some padding to the links */
                }
                .navigation a:hover {
                    color: #51c2c0; /* Change color on hover */
                }
            `}</style>
            <ul className="navigation clearfix">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/page-service-details">Services</Link>
                </li>
                <li><Link href="/page-about">About Us</Link></li>
                <li><Link href="/page-testimonial">Testimonial</Link></li>
               
                <li>
                    <Link href="/page-contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}
