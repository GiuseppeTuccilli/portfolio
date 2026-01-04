import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import TopSession from "./TopSession";
import Progetti from "./Progetti";
import Links from "./Links";
function Content() {
  const [expanded, setExpanded] = useState(false);
  const [onScreen, setOnScreen] = useState("top");

  const topRef = useRef();
  const progRef = useRef();
  const linkRef = useRef();

  const handleScroll = (e) => {
    if (e.target.scrollTop < topRef.current.offsetHeight) {
      setOnScreen("top");
      return;
    }
    if (e.target.scrollTop < progRef.current.offsetHeight) {
      setOnScreen("prog");
      return;
    }
    if (e.target.scrollTop >= progRef.current.offsetHeight) {
      setOnScreen("link");
      return;
    }
  };

  return (
    <>
      <div className="flex h-lvh">
        <div
          className={
            "bg-gray-800 flex flex-col justify-start py-3 px-2 items-center transition-all duration-200 ease-linear z-10" +
            (expanded
              ? " absolute md:relative h-full min-w-[60%] md:min-w-[30%] lg:min-w-50"
              : " min-w-15 md:min-w-15 lg:min-w-15")
          }
        >
          <div className="w-full flex justify-end">
            <button
              className="hover:cursor-pointer hover:bg-blue-200 bg-blue-400 rounded px-3 pt-0.5 text-white"
              onClick={() => {
                if (expanded) {
                  setExpanded(false);
                } else {
                  setExpanded(true);
                }
              }}
            >
              {expanded ? (
                <span className="text-2xl mt-1 icon-[tabler--arrow-big-left-lines]"></span>
              ) : (
                <span className="text-2xl mt-1 icon-[tabler--arrow-big-right-lines]"></span>
              )}
            </button>
          </div>
          <Sidebar expanded={expanded} onScreen={onScreen} />
        </div>
        <div
          className="overflow-y-scroll w-full scroll-smooth"
          onScroll={(e) => {
            handleScroll(e);
          }}
        >
          <div ref={topRef}>
            <TopSession />
          </div>
          <div ref={progRef}>
            <Progetti />
          </div>
          <div ref={linkRef}>
            <Links />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
