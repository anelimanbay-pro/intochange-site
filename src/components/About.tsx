const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-12">
          Our Approach
        </h2>
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
          <p>
            Into Change is a private art advisory built on a simple conviction: exceptional
            art should be found quietly, verified rigorously, and placed with intention.
          </p>
          <p>
            We work with a small number of collectors and institutions, sourcing
            museum-quality works — from modern masters to the most compelling contemporary
            Portuguese artists — and guiding every acquisition, off-market sale and fair
            visit with absolute discretion.
          </p>
          <p className="text-xl md:text-2xl font-serif pt-8">
            No public listings. No open negotiations.
          </p>
          <p className="text-2xl md:text-3xl font-serif italic">
            Only access, judged by what it reveals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
