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
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium">
              Samuel Gerungan
              <p className="hidden lg:block text-xl my-1">Software Engineer</p>
            </h1>
            <p className="my-5 leading-relaxed ml-1">
              An eye for design, passion for innovation, and meticulous
              attention to detail
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-contain object-center rounded-3xl"
              alt="hero-image"
              src="/self-portrait.jpg"
              width={600}
              height={720}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
