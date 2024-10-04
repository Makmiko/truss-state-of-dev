import React from "react"
import { Hero } from "./Hero"
import { Why } from "./Why"
import { Interested } from "./Interested"
import { InviteCards } from "./InviteCards"
import { FAQ } from "./FAQ"
import SupportersCarousel from '../SupportersCarousel/SupportersCarousel';

const Home = () => {
  return (
    <>
      <Hero />
      <SupportersCarousel />
      <Why />
      <InviteCards />
      <FAQ />
      <Interested />
    </>
  )
}

export default Home
