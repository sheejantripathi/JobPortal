const Navbar = () => {
  return (
    <nav className="bg-indigo-500 border-b border-indigo-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <img src="images/logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
