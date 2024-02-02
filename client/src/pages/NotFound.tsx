export const NotFound = () => {
  return (
    <>
      <main
        className="grid min-h-full  px-6 py-24 sm:py-32 lg:px-8 dark:text-white"
        style={style}
      >
        <div className="text-center">
          <p className="text-9xl font-bold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-xl leading-7 text-gray-200">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

const style: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  backgroundImage: `url("/assets/space.webp")`,
  backgroundSize: "cover",
  textAlign: "center",
  textShadow: "0 0 10px black",
};
