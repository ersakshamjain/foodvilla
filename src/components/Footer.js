import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Footer = () => {


  const {user} = useContext(userContext)
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p>Ward No. 18 Teacher's Colony Nainwa, Bundi, Rajastan 323801</p>
            <p>Email: sakshamajain2804@gmail.com</p>
            <p>Phone: +91 7427097207</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#twitter"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#linkedin"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#instagram"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>&copy; 2023 Food Villa All rights reserved - {user.name}</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
