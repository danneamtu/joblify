import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    padding-top: 24px;
    padding-right: 60px;
    padding-left: 30px;
    text-align: center;
    font-size: 14px;
    color: rgba(255,255,255,0.4);
    & a {
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        font-size: 13px
        margin-left: 8px;
        margin-right: 8px;
    } 
    & a:hover{
      color: rgba(255,255,255,0.8);
    }
    
`

function JobsFooter() {
  return (
    <FooterContainer>
      <p>Our mission is to aggregate and analize technical jobs, pair with your skills and get the best job.</p>
      <p>
        <a href="#">Mission</a>
        <a href="#">Statistics</a>
        <a href="#">Contact</a>
        Joblify &copy; 2021
      </p>
    </FooterContainer>
  )
}

export default JobsFooter
