function Links() {
  return (
    <>
      <div
        id="link"
        className="border border-amber-400 p-3 m-3 bg-linear-to-b from-blue-900 to-blue-200"
      >
        <h1 className="text-white text-center py-3 border border-amber-200 bg-blue-400 text-2xl my-3 ">
          Grazie per aver guardato il mio portfolio
        </h1>

        <h1 className="text-blue-900 text-3xl font-bold text-center p-3 mt-2 border border-blue-200 bg-amber-200">
          Link
        </h1>
        <div className="text-white flex justify-evenly items-center h-25 bg-gray-800 border-b border-amber-200">
          <a
            target="_blank"
            className="hover:text-amber-200 hover:underline hover:cursor-pointer"
            href="https://github.com/GiuseppeTuccilli"
          >
            <div className="flex items-center">
              <span className="text-2xl mb-1 icon-[tabler--brand-github]"></span>{" "}
              <p className="ms-1"> GitHub</p>
            </div>
          </a>
          <a
            target="_blank"
            className="hover:text-amber-200 hover:underline hover:cursor-pointer"
            href="https://www.linkedin.com/in/giuseppe-tuccilli/"
          >
            <div className="flex items-center">
              <span className="text-2xl mb-1 icon-[tabler--brand-linkedin]"></span>{" "}
              <p className="ms-1"> LinkedIn</p>
            </div>
          </a>
        </div>
        <div className="h-[20em] bg-[url('https://miro.medium.com/v2/resize:fit:1400/0*wvarxOW3YClJ57ro')] bg-cover text-white "></div>
      </div>
    </>
  );
}

export default Links;
