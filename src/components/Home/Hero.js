import React from "react"
import { Fragment, useRef, useState } from "react"

import { Dialog, Transition } from "@headlessui/react"
import TimeIcon from "../../assets/time.svg"
import { Link } from "gatsby"

export const Hero = () => {
  return (
    <>
      <div className="relative mb-14">
        <div className="absolute inset-x-0 top-0 lg:-top-14 bottom-0 lg:-bottom-14 overflow-hidden bg-purple-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white "></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white "></div>
        </div>
        <div className="mx-auto h-full px-4 py-6 lg:py-12 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8 relative">
          <div className="flex flex-col items-center justify-between lg:flex-row ">
            <div className="my-16">
              <div className="lg:max-w-xl lg:pr-5 ">
                <h2 className="mb-6 max-w-lg text-4xl text-center font-light leading-snug tracking-tight text-purple-600 sm:text-6xl sm:text-left ">
                  State Of Dev <br />
                  In{" "}
                  <span className="my-1 inline-block border-b-8 border-purple-600 font-bold text-purple-600 ">
                    {" "}
                    Uzbekistan 2023{" "}
                  </span>
                </h2>
                <p className=" lg: mt-1 text-sm text-center tracking-normal text-gray-800 lg:mt-1 lg:text-xl lg:text-left">
                  Participate and let us know what working in tech really looks
                  like in Uzbekistan
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:items-stretch md:flex-row ">
                <Link to="/beforeStart">
                  <div className="relative mb-3  inline-flex h-12 w-full items-center justify-center rounded-lg bg-purple-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-purple-800">
                    <div className="absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 -scale-x-100 text-purple-700">
                      <svg
                        viewBox="0 0 82 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    Take part in the survey{" "}
                  </div>
                </Link>
                <Link
                  to="/2022"
                  aria-label=""
                  className="underline-offset-2  items-center font-semibold text-purple-600 underline transition-colors duration-200 hover:underline pt-8 md:pt-0 bg-transparent sm:inline-flex hidden"
                >
                  Read last year report
                </Link>
              </div>
              <div className="sm:mt-12 mt-5  flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x sm:inline-flex hidden">
                <div className="flex max-w-xs space-x-2 justify-center items-center">
                  <TimeIcon className="h-7" />
                  <p> The survey should take you 10 minutes </p>
                </div>
                <div className="flex max-w-xs space-x-2 px-4"></div>
              </div>
            </div>
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </>
  )
}

export const YoutubeVideo = () => {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <>
      <div className="relative shadow-xl shadow-purple-200/50  lg:w-1/2">
        <img
          className="h-56 w-full rounded-lg object-cover shadow-lg sm:h-96"
          src="/images/video-cover.jpeg"
          alt=""
        />
        <button
          onClick={() => setOpen(true)}
          aria-label="Play Video"
          className="group absolute inset-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-30 transition-colors duration-300 hover:bg-opacity-10"
        >
          <div className="flex h-16 w-16 transform items-center justify-center rounded-full bg-gray-100/80 shadow-2xl transition duration-300 group-hover:scale-110">
            <svg
              className="w-10 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"></path>
            </svg>
          </div>
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative "
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-999 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-[100] w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform h-full w-full rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full lg:w-[80vw] justify-center items-center  max-w-[1200px]">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/88cQ6vkJhfQ?autoplay=1"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      auto
                    ></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
