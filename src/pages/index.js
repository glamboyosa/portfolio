import React from "react"
import { Link } from "gatsby"
import Header from "../components/HomePage/Header/header"
import FirstSection from "../components/HomePage/Section1/Section1"
import Layout from "../components/layout"
import Section2 from "../components/HomePage/Section2/Section2"
import Section3 from "../components/HomePage/Section3/Section3"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <FirstSection />
    <Section2 />
    <Section3 />
  </Layout>
)

export default IndexPage
