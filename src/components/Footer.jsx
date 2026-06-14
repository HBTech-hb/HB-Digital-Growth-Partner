const Footer = () => {
  return (
    <footer className="h-32 flex items-center justify-center">
      <p className="text-gray-600 text-center">
        © {new Date().getFullYear()} Harshad A. Bansode. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;