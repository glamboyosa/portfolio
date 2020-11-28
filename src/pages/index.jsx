import React from "react"
import Header from "../components/HomePage/Header/header"
import FirstSection from "../components/HomePage/Section1/Section1"
import SecondSection from "../components/HomePage/Section2/Section2"
import Layout from "../components/layout"
import Footer from "../components/UI/Footer/Footer"
import PortfolioSection from "../components/HomePage/Section3/portfolio-section"
import SEO from "../components/seo"
import { Element } from "react-scroll"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Element name="home">
        <Header />
      </Element>
      <Element name="about">
        <FirstSection />
      </Element>
      <Element name="stack">
        <SecondSection />
      </Element>
      <Element name="portfolio">
        <PortfolioSection />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </Layout>
  )
}

export default IndexPage
