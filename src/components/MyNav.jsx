function MyNav() {
  return (
    <>
      {/* Sticky navbar */}
      <nav className="navbar bg-gray-900 md:h-15 absolute start-0 top-0 z-1 shadow-base-300/20 shadow-sm ">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between max-md:w-full">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link link-neutral text-xl font-bold no-underline text-gray-200 hover:text-blue-300"
                href="#"
              >
                Portfolio
              </a>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square text-gray-200 border-gray-200"
                data-collapse="#sticky-navbar-collapse"
                aria-controls="sticky-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
          <div
            id="sticky-navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
          >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2  ">
              <li className="text-gray-200 ">
                <a href="#" className="hover:text-blue-300 ">
                  Link 1
                </a>
              </li>
              <li className="text-gray-200">
                <a href="#" className="hover:text-blue-300 ">
                  Link 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNav;
