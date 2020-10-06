import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { render } from "react-dom"

const Container = styled.div`
  text-align: left;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  height: 1vh;
  margin-top: 10vh;
  margin-bottom: 5vh;
`

const Description = styled.p`
  padding: 1.9rem 0rem;
  font-size: 1.4rem;
`

const LandingDesc = () => {
    return (
      <OuterContainer>
        <Container>
          <Description>A continually updated record of the random and unproven coding ideas attempted in my free time, built on the Jamstack.</Description>
        </Container>
      </OuterContainer>
    )
}

export default LandingDesc;