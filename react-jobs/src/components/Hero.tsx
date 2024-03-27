interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Land your dream job as a Software Engineer",
  subtitle = "1000's of jobs available now. Find your perfect role today.",
}) => {
  return (
    <section className="bg-indigo-300 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-black">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
