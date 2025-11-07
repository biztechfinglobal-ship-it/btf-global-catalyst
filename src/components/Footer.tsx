const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-1.5">BTF Global</h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              Transforming Business Through Innovation
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} BTF Global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
