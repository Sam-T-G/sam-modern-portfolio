import Image from "next/image";

const Home = () => {
  return (
    <>
      <header className="text-slate-100 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex font-medium items-center mb-4 md:mb-0">
            <h1 className="ml-3 text-2xl hover:text-cyan-500 cursor-pointer">
              Sam Gerungan
            </h1>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center">
            <a className="flex mr-5 hover:text-cyan-500 cursor-pointer">Home</a>
            <a className="flex mr-5 hover:text-cyan-500 cursor-pointer">
              About
            </a>
            <a className="flex mr-5 hover:text-cyan-500 cursor-pointer">
              Contact
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 text-cyan-800 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-500 hover:text-white rounded text-base mt-4 md:mt-0">
            Projects
          </button>
        </div>
      </header>

      <main className="text-slate-100 body-font">
        <div className="container mx-auto flex flex-wrap py-5 px-24 md:flex-row flex-col items-center">
          <div>
            <p className="hidden">Software Engineer</p>
            <h1 className="text-5xl">Samuel Gerungan</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
