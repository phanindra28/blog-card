import "./App.css";
import ArrowRight from "./assets/arrow-right.svg";
import Image from "./img/spacejoy-YqFz7UMm8qE-unsplash.jpg";
function App() {
  return (
    <>
      <div className={"container"}>
        <img src={Image} alt="logo" width={"336"} />
        <div className={"bg-white flex gap-3 flex-col px-4 py-6 w-[336px]"}>
          <div className={"flex flex-col gap-2"}>
            <div>
              <span
                className={
                  "text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-[2px]"
                }
              >
                Interior
              </span>
            </div>
            <div className={"text-lg font-semibold"}>
              Top 5 Living Room Inspirations
            </div>
          </div>
          <div className={"overflow-hidden flex flex-col gap-6"}>
            <span className={"line-clamp-2 text-base text-neutral-600"}>
              Curated vibrants colors for your living, make it pop & calm in the
              same time.
            </span>
            <button
              className={
                "flex items-center gap-[6px] text-indigo-700 font-semibold"
              }
            >
              <span>Read More</span>
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects/u/phanindra"
          target="_blank"
        >
          Phanindra
        </a>
        .
      </div>
    </>
  );
}

export default App;
