import React from 'react'
import styled from 'styled-components'
import { accentColor } from '../GlobalStyle'

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px 10px 24px;
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
`

const AddButton = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    color: ${accentColor};
    cursor: pointer;
`

const Header = ({events, setEvents}) => {
    const handleClick = () => {
        const inputStr = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss')
        const date = Date.parse(inputStr)
        // любое целое число может корректно спарситься как дата, но нам это не надо, поэтому проводим проверку через РВ
        const regex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/   
        if (regex.test(inputStr) && date) {
            setEvents([...events, date])
        }
        else {
            alert('Invalid date')
        }
    }
    return (
        <HeaderWrapper>
            <Title>Interview Calendar</Title>
            <AddButton 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
                onClick={() => handleClick()}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </AddButton>
        </HeaderWrapper>
    )
}

export default Header