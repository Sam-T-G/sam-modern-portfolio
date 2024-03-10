import React from "react";

const About = () => {
  return (
    <>
      <main className="text-slate-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="hidden lg:block text-xl my-1">About Me</p>
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium">
              About Sam Gerungan
            </h1>
            <p className="my-1 leading-relaxed ml-1">
              Insert your About content here. You can describe yourself, your
              skills, experiences, etc.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-contain object-center rounded-3xl"
              alt="hero-image"
              src="/your-image.jpg"
            />
          </div>
        </div>
      </main>

      <footer className="text-slate-200 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-100">
            <span className="ml-3 text-xl">Sam Gerungan</span>
          </a>
          <p className="text-sm text-slate-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Samuel Gerungan —
            <a
              href="https://https://github.com/Sam-T-G"
              className="text-cyan-200 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @sam-t-g
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Social media icons */}
          </span>
        </div>
      </footer>
    </>
  );
};

export default About;
