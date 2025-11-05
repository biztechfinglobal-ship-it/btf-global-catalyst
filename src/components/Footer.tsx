const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">BTF Global</h3>
            <p className="text-primary-foreground/80 text-sm">
              Transforming Business Through Innovation
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} BTF Global. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Built with excellence for business transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
