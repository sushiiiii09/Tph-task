import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <button
          className="w-[40px] h-[40px] fixed items-center cursor-pointer left-8 top-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#E3DFFD"
            stroke="#E3DFFD"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Complete">
                <g id="align-left">
                  <g>
                    <polygon
                      fill="#ffffff"
                      points="12.9 18 4.1 18 4.1 18 12.9 18 12.9 18"
                      stroke="#E3DFFD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>{" "}
                    <polygon
                      fill="#ffffff"
                      points="20 14 4 14 4 14 20 14 20 14"
                      stroke="#E3DFFD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>{" "}
                    <polygon
                      fill="#ffffff"
                      points="12.9 10 4.1 10 4.1 10 12.9 10 12.9 10"
                      stroke="#E3DFFD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>{" "}
                    <polygon
                      fill="#ffffff"
                      points="20 6 4 6 4 6 20 6 20 6"
                      stroke="#E3DFFD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white fixed left-7 top-6 z-10 w-[60px] h-[60px]"
        >
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
                stroke="#ffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      )}
      <div
        className={`top-0 left-0 fixed bg-[#1b132b] bg-opacity-95 md:w-[40vw] lg:w-[30vw] h-full sm:w-[50vw] p-20 pt-20
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } ease-in-out duration-300 `}
      >
        <div className=" py-1">
          <span className="grid h-10 w-32 place-content-center rounded-full  bg-white text-lg text-[#844e89] font-bold">
            T P H
          </span>

          <ul className=" opacity-100 mt-2 space-y-1">
            <li>
              <a
                href="https://tailwindcss.com/docs/customizing-colors"
                className="block opacity-100 px-4 py-4 text-lg font-medium text-white hover:border-b hover:text-[#844e89] "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs/customizing-colors"
                className="block px-4 py-4 text-lg font-medium text-white hover:border-b hover:text-[#844e89] "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs/customizing-colors"
                className="block  px-4 py-4 text-lg font-medium  text-white hover:border-b hover:text-[#844e89] "
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs/customizing-colors"
                className="block  px-4 py-4 text-lg font-medium  text-white hover:border-b hover:text-[#844e89] "
              >
                Upcoming events
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between text-white px-4 py-2 hover:border-b hover:text-[#844e89] ">
                  <span className="text-lg font-medium ">Domains</span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="https://tailwindcss.com/docs/customizing-colors"
                      className="block px-3 py-3 text-md font-medium text-white hover:border-b hover:text-[#844e89] "
                    >
                      Blockchain
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://tailwindcss.com/docs/customizing-colors"
                      className="block  px-3 py-3 text-md font-medium text-white hover:border-b hover:text-[#844e89] "
                    >
                      Web-Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/docs/customizing-colors"
                      className="block  px-3 py-3 text-md font-medium text-white hover:border-b hover:text-[#844e89] "
                    >
                      Creatives
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href="https://tailwindcss.com/docs/customizing-colors"
                className="block  px-4 py-4 text-md font-large font-medium text-white hover:border-b hover:text-[#844e89] "
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
