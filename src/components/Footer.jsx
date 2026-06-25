const Footer = () => {
  return (
    <footer className="h-32 flex items-center justify-center">
      <p className="text-[var(--text-muted)] text-center">
        © {new Date().getFullYear()} Harshad A. Bansode. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;