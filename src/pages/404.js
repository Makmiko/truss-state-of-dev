import React from "react"
import { Layout, Header } from "../components"

export default function Index() {
  return (
    <Layout>
      <div className="thanks">
        <div className="container">
          <div className="main">
            <img src="/images/tashkent-hero.png" />
            <h1 className="text-purple-600"> Oops! That page can’t be found. </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
