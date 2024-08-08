import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Footer } from "./Footer"
import "../styles/commons.scss"
import { Header } from "./Header"

export const Layout = ({ children, year = undefined }) => (
  <>
    {year === undefined ? (
      <GatsbySeo
        title="State Of Dev In Uzbekistan"
        description="Participate and let us know what working in tech really looks like in Uzbekistan"
        canonical="https://state-of-dev-uz.com"
        openGraph={{
          url: "https://state-of-dev-uz.com",
          title: "State Of Dev In Uzbekistan",
          description:
            "Participate and let  us know what working in tech really looks like in Uzbekistan",
          images: [{ url: "https://www.state-of-dev-uz.com/images/cover.png" }],
          site_name: "StateOfDevUz",
        }}
      />
    ) : (
      <GatsbySeo
        title={`State Of Dev In Uzbekistan ${year}`}
        description={`State Of Dev In Uzbekistan ${year} | Uzbek developers jobs satisfaction, salaries, and community contribution, how they learn and level up, which tools they’re using, and what they want to learn next. `}
        canonical="https://state-of-dev-uz.com"
        openGraph={{
          url: `https://state-of-dev-uz.com/${year}`,
          title: `State Of Dev In Uzbekistan ${year}`,
          description: `State Of Dev In Uzbekistan ${year} | Uzbek developers jobs satisfaction, salaries, and community contribution, how they learn and level up, which tools they’re using, and what they want to learn next. `,
          images: [{ url: "https://www.state-of-dev-uz.com/images/cover.png" }],
          site_name: "StateOfDevUz",
        }}
      />
    )}
    <Header />
    {children}
    <Footer />
  </>
)
