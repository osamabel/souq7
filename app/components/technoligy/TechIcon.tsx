import React, { useEffect, useState } from "react";

interface title {
  name: string;
  tech: string[];
}

interface TechIconProps {
  titles: title[];
  selected: number;
  isInView: boolean;
}

const box =
  "flex-1 aspect-square rounded-[10px] border-[1px] border-white/20 flex items-center justify-center w-[70px] h-[70px]";

function TechIcon({ titles, selected, isInView }: TechIconProps) {
  const [delay, setDelay] = useState(2);

  useEffect(() => {
    setDelay(1);
  }, [selected]);

  return (
    <div
      key={selected}
      className="flex flex-col lg:flex-1 items-center h-[300px]"
    >
      <div
        style={{ animationDelay: `${delay}s !important` }}
        className={`w-[1px] bg-gradient-to-t from-white to-white/10 ${
          isInView && "expand"
        }`}
      ></div>
      <img
        style={{ animationDelay: `${delay + .5}s !important` }}
        className="w-[60px] fade z-[5]"
        src="/circle.svg"
        alt=""
      />

      <div className="h-[70%] w-full flex justify-center translate-y-[-8px] self-end">
        <div className="lg:w-f[300px] lg:h-f[300px] flex flex-col gap-y-[5px] ">
          <div
            style={{ animationDelay: `${delay}s !important` }}
            className={`flex gap-x-[5px] justify-center ${
              isInView && "slidedownTitle"
            }`}
          >
            <div className={`${box} opacity-0`}></div>
            <div className={`${box}`}>
              <img
                className="w-[50%] aspect-square fade z-[5]"
                src={`/tech/${titles[selected].tech[0]}.svg`}
                alt=""
              />
            </div>
            <div className={`${box} opacity-0`}></div>
          </div>

          <div
            style={{ animationDelay: `${delay + 0.2}s !important` }}
            className={`flex gap-x-[5px] justify-center ${
              isInView && "slidedownTitle"
            }`}
          >
            {titles[selected].tech.slice(1, 4).map((item, index) => (
              <div key={index} className={`${box}`}>
                <img
                  className="w-[50%] aspect-square fade z-[5]"
                  src={`/tech/${item}.svg`}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div
            style={{ animationDelay: `${delay + 0.8}s !important` }}
            className={`flex gap-x-[5px] justify-center ${
              isInView && "slidedownTitle"
            }`}
          >
            {titles[selected].tech.length - 4 === 1 ? (
              <>
                <div className={`${box} !border-white/10`}></div>
                <div className={`${box}`}>
                  <img
                    className="w-[50%] aspect-square fade z-[5]"
                    src={`/tech/${titles[selected].tech[4]}.svg`}
                    alt=""
                  />
                </div>
                <div className={`${box} !border-white/10`}></div>
              </>
            ) : titles[selected].tech.length - 4 === 2 ? (
              <>
                <div className={`${box}`}>
                  <img
                    className="w-[50%] aspect-square fade z-[5]"
                    src={`/tech/${titles[selected].tech[4]}.svg`}
                    alt=""
                  />
                </div>
                <div className={`${box} !border-white/10`}></div>
                <div className={`${box}`}>
                  <img
                    className="w-[50%] aspect-square fade z-[5]"
                    src={`/tech/${titles[selected].tech[5]}.svg`}
                    alt=""
                  />
                </div>
              </>
            ) : titles[selected].tech.length - 4 === 3 ? (
              titles[selected].tech.slice(-3).map((item, index) => (
                <div key={index} className={`${box}`}>
                  <img
                    className="w-[50%] aspect-square fade z-[5]"
                    src={`/tech/${item}.svg`}
                    alt=""
                  />
                </div>
              ))
            ) : (
              <>
                <div className={`${box} !border-white/10`}></div>{" "}
                <div className={`${box} !border-white/10`}></div>{" "}
                <div className={`${box} !border-white/10`}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechIcon;
