import styled from "styled-components"

export const LogoWrapper = styled.div`
  max-width: ${props => (props.MW400 ? "400px" : "")};
`
export const LogoBox = styled.div`
  background-color: #fff;
  background-color: ${props => (props.Inverted ? "#6a299a;" : "")};
  width: 50px;
  height: 45px;
  width: ${props => (props.Large ? "60px;" : "")};
  height: ${props => (props.Large ? "60px;" : "")};
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.Inverted ? "#55207d;" : "")};
  }
`
export const LogoSpan = styled.span`
  font-size: 1.1rem;
  font-size: ${props => (props.Large ? "2rem;" : "")};
  color: #6a299a;
  color: ${props => (props.Inverted ? "#fff;" : "")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
`
export const Button = styled.button`
  border: none;
  background-color: #692a9a;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  font-size: ${props => (props.Large ? "1.35rem" : "")};
  &:hover {
    background-color: #55207d;
  }
`

export const Section = styled.section`
  padding: 4rem 0;
`

export const LargeHeading = styled.h1`
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => (props.Purple ? "#6a299a" : "")};
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

export const ContentBox = styled.div`
  max-width: ${props => (props.MW700 ? "700px" : "")};
`

export const LargeParagraph = styled.p`
  font-size: 1.15rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`
