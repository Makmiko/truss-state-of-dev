import React from "react"
import Logo from "../assets/logo.svg"

export const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-3 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2">
            <img src="/images/logo.png" className="h-[64px] w-[154px] min-h-[64px] min-w-[154px] z-0"/>
          </div>
          <div className="text-gray-500">
            Participate and let us know what working in tech really looks like
            in Uzbekistan
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Community</div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://hiretruss.com/"
                  target="_blank"
                >
                  hiretruss.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://state-of-dev-uz.com"
                  target="_blank"
                >
                  state-of-dev-uz.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://hiretruss.com/blog/"
                  target="_blank"
                >
                  Our blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://hiretruss.com/careers-at-truss/ "
                  target="_blank"
                >
                  Join the team
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://hiretruss.com/about/"
                  target="_blank"
                >
                  More
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://www.youtube.com/c/GeeksBlaBla01"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="http://linkedin.com/company/hiretruss/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://www.facebook.com/hiretruss"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              {/*<li>*/}
              {/*  <a*/}
              {/*    className="hover:text-purple-600 hover:underline"*/}
              {/*    href="https://x.com/geeksblabla"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    X("Previously Twitter")*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li>
                <a
                  className="hover:text-purple-600 hover:underline"
                  href="https://www.instagram.com/hiretruss/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              {/*<li>*/}
              {/*  <a*/}
              {/*    className="hover:text-purple-600 hover:underline"*/}
              {/*    href="https://github.com/geeksblabla"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    Github*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">Made with ❤️ by Geeksblabla Team</p>
          <p className="">
            © {new Date().getFullYear()} Geeksblabla | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
