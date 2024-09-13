import React from "react"
import { Hero } from "./Hero"
import { Why } from "./Why"
import { Interested } from "./Interested"
import { InviteCards } from "./InviteCards"
import { FAQ } from "./FAQ"

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <InviteCards />
      <FAQ />
      <Interested />
    </>
  )
}

export default Home
