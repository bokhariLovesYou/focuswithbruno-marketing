import React, { Component } from "react"
// Bootstrap
import Container from "react-bootstrap/Container"
// Styled Components
import styled from "styled-components"
import { LogoWrapper, LogoBox, LogoSpan, Button } from "./styledElements"
// Link
import { Link } from "gatsby"
const HeaderOuterWrapper = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`
const HeaderInnerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

const ButtonWrapper = styled.div``

export class Header extends Component {
  render() {
    return (
      <>
        <HeaderOuterWrapper>
          <Container>
            <HeaderInnerWrapper>
              {/* Logo */}
              <Link to="/">
                <LogoWrapper>
                  <LogoBox Inverted>
                    <LogoSpan Inverted>fo.</LogoSpan>
                  </LogoBox>
                </LogoWrapper>
              </Link>
              {/* //Logo */}
              {/* CTA */}
              <ButtonWrapper>
                <a href="https://app.focuswithbruno.com/a/login">
                  <Button>Sign in</Button>
                </a>
              </ButtonWrapper>
              {/* //CTA */}
            </HeaderInnerWrapper>
          </Container>
        </HeaderOuterWrapper>
      </>
    )
  }
}

export default Header
