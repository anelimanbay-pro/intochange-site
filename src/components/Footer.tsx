type FooterProps = {
  /** Show the movement footer variant. The advisory homepage uses its own wordmark block instead. */
  showMovement?: boolean;
};

const Footer = ({ showMovement = true }: FooterProps) => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto text-center">
        {showMovement ? (
          <>


            <p className="text-base md:text-lg font-serif italic font-light text-muted-foreground mb-3">
              Exceptional art, found quietly.
            </p>
            <p className="text-sm font-sans tracking-wider text-muted-foreground">
              © {new Date().getFullYear()} Into Change. All rights reserved.
            </p>
          </>
        ) : (
          <>
            <p className="text-xl md:text-2xl font-serif font-light tracking-[0.3em] uppercase mb-3">
              Into Change
            </p>
            <p className="text-base md:text-lg font-serif italic font-light text-muted-foreground mb-3">
              Exceptional art, found quietly.
            </p>
            <p className="text-xs font-sans tracking-[0.35em] uppercase text-muted-foreground/70 mb-6">
              Private Art Advisory · Strictly Confidential
            </p>
            <p className="text-sm font-sans tracking-wider text-muted-foreground">
              © {new Date().getFullYear()} Into Change. All rights reserved.
            </p>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
