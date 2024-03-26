import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="h-64 p-12 border-t border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="md:grid md:grid-cols-2  max-w-screen-xl text-blue-100 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-quicksand text-2xl md:text:3xl uppercase col-span-1 whitespace-nowrap">
              Software Developer
            </h1>
            <p className="mt-auto">© Jonathan Jimena Jr.</p>
            <p>2024</p>
          </div>
        </div>

        <div className="flex flex-col items-center pt-4 md:pt-0">
          <h1 className="font-quicksand text-2xl md:text:3xl uppercase mb-2">
            Contact
          </h1>
          <a href="mailto:jojojimena.jobs@gmail.com">
            <div className="flex flex-row gap-2">
              <IoMail size={24} />
              <span>jojojimena.jobs@gmail.com</span>
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <span>Jonathan-Jimena-Jr</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
