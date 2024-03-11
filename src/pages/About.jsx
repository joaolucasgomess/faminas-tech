import React from 'react'
import styled from 'styled-components'

export const About = () => {
    return(
        <StyledDiv>
            <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet justo vel justo consequat vehicula. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer luctus risus eget 
            magna mollis dapibus. Donec rhoncus massa id metus lobortis, id fringilla nulla luctus. Quisque posuere magna nec tellus lobortis 
            efficitur. Nam tincidunt vestibulum nulla, vitae euismod dolor luctus nec. Nullam pharetra lacus vel libero pharetra, eget faucibus 
            justo congue. Sed malesuada, mi nec vestibulum commodo, nisi libero vestibulum justo, ut consectetur odio metus id neque. Mauris 
            ultricies nisl id tellus ullamcorper, at scelerisque nulla cursus. Phasellus vulputate dapibus felis, non aliquet odio vestibulum at. 
            Quisque consequat turpis a odio convallis congue.
            </StyledParagraph>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background-color: #D9D9D9;
    width: 80%;
    height: 776px;
    display: flex;
    padding: 5%;
    margin: 3% auto;
    border-radius: 6px;
    overflow: auto;

    @media screen and (min-width: 390px) {
        margin: 10% auto;
    }

    @media screen and (min-height: 1366px) {

    }
`

const StyledParagraph = styled.p`
    font-size: 1.5em;
`