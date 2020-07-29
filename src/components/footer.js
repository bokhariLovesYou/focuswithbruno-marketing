import React, { Component } from "react"
// Bootstrap
import Container from "react-bootstrap/Container"
// Styled Components
import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 0.5rem 0;
  border-top: 1px solid #eee;
`

export class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Container className="text-center">
          <p className="mb-0 light">
            © Copyright{" "}
            <a
              href="https://bokharilovesyou.com/"
              rel="noreferrer"
              target="_blank"
            >
              bokharilovesyou
            </a>{" "}
            {new Date().getFullYear()}{" "}
          </p>
        </Container>
      </FooterWrapper>
    )
  }
}

export default Footer
