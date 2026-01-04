function Sidebar(props) {
  let expanded = props.expanded;
  let onScreen = props.onScreen;

  return (
    <>
      <div className="text-white text-lg flex flex-col grow justify-evenly mb-[5em]">
        <div className="flex">
          <a
            className={
              "flex items-center hover:text-amber-200 hover:underline " +
              (onScreen === "top" && "text-amber-200")
            }
            href="#top"
          >
            <span className="text-2xl icon-[tabler--arrow-autofit-up]"></span>
            {expanded && <p className="ms-2">Top</p>}
          </a>
        </div>
        <div className="flex">
          <a
            className={
              "flex items-center hover:text-amber-200 hover:underline " +
              (onScreen === "prog" && "text-amber-200")
            }
            href="#progetti"
          >
            <span className="text-2xl icon-[tabler--brand-react]"></span>
            {expanded && <p className="ms-2">Progetti</p>}
          </a>
        </div>

        <div className="flex">
          <a
            className={
              "flex items-center hover:text-amber-200 hover:underline " +
              (onScreen === "link" && "text-amber-200")
            }
            href="#link"
          >
            <span className="text-2xl icon-[tabler--link]"></span>
            {expanded && <p className="ms-2">Link</p>}
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
