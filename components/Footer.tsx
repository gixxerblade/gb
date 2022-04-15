import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FB } from './FB';
import { Instagram } from './Instagram';


export const Footer = () => (
  <footer className="fixed w-screen bottom-0 bg-navy h-24 flex flex-col justify-center items-center">
    <div>
      <p className="text-white">
        &copy;
        {new Date().getFullYear()}
        {" "}
        <a href="https://www.thebicycle.com/">The Bicycle Shop</a>
      </p>
    </div>
    <div className="flex my-2 w-24 h-10">
      <FB />
      <Instagram />
    </div>
  </footer>
);