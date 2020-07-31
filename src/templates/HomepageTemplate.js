import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import {
  Section,
  LargeHeading,
  ContentBox,
  LargeParagraph,
  Button,
} from "../components/styledElements"

export class HomepageTemplate extends Component {
  render() {
    const { frontmatter } = this.props.data.pageData
    const { hero } = frontmatter
    return (
      <Layout>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <Section>
          <Container>
            <ContentBox MW700 className="ml-auto mr-auto text-center">
              <LargeHeading
                Purple
                dangerouslySetInnerHTML={{ __html: hero.largeHeading }}
              />
              <LargeParagraph
                dangerouslySetInnerHTML={{ __html: hero.content }}
              />
              <a href={hero.buttonURL}>
                <Button Large className="mt-2 mb-1">
                  {hero.buttonTitle}
                </Button>
              </a>
            </ContentBox>
            <Img
              className="mt-4 mt-md-5 border-radius box-shadow"
              fluid={hero.image.childImageSharp.fluid}
              alt="Focus With Bruno App Screen"
            />
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default HomepageTemplate

export const query = graphql`
  query($path: String!) {
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        hero {
          largeHeading
          content
          buttonTitle
          buttonURL
          image {
            childImageSharp {
              fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
