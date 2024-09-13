import React from "react"

export const Interested = () => (
  <section className="relative bg-purple-50 py-10 text-purple-900 sm:py-16 lg:py-24 mb-4">
    <div className="absolute inset-x-0 -top-14 -bottom-14 overflow-hidden bg-purple-50">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white "></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white "></div>
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-4 inline-flex h-12 w-12 text-purple-700">
          <img src="/images/logo_short.png" alt=""/>
        </div>
        <h2 className=" text-center mt-6 mb-10 text-3xl font-semibold tracking-wide  sm:text-4xl">
          Interested in the final report only?
        </h2>
        <p className="mt-4 text-xl font-medium">
          Subscribe to our Newsletter to get the final report as soon as it's
          ready.
        </p>

        <div className="sm mt-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
          <a
            href="https://hiretruss.com/"
            target="_blank"
            className="mt-4 rounded-lg border-2 border-purple-700 bg-purple-700 px-6 py-2 font-medium text-white transition hover:translate-y-1"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  </section>
)
