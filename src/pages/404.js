import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import {
  Section,
  LargeHeading,
  Button,
  LargeParagraph,
} from "../components/styledElements"

const NotFoundPage = () => (
  <Layout>
    <Section MinHeight VerticallyCentered>
      <SEO
        title={`404 - Not Found`}
        description={`You just hit a route which does not exist. Hmmm.`}
      />
      <Container className="text-center">
        <LargeHeading Purple>404. Not Found!</LargeHeading>
        <LargeParagraph className="text-purple">
          Oops, you just hit a route which does not exist.
        </LargeParagraph>
        <Link to="/">
          <Button Large className="mt-3">
            Navigate to Home
          </Button>
        </Link>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
