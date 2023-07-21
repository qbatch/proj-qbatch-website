import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function UsersList(){

  return (
    <Container>
      <h1>Dedicated Developers</h1>
    </Container>
  )
}