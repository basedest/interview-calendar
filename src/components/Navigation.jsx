import React from 'react'
import styled from 'styled-components'
import { accentColor, bgColor, borderColor } from '../GlobalStyle'
import addDays from '../utils/addDays'
import compareDates from '../utils/compareDates'
import getMonthName from '../utils/getMonthName'

const NavigationWrapper = styled.nav`
    background-color: ${bgColor};
    padding: 5px 0px 5px 60px;
    border: 1px solid ${borderColor};
`

const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const DaysContainer = styled.div`
    display: flex;
    justify-content: space-around;
` 

const DayOfWeek = styled.div`
    font-size: 12px;
    cursor: default;
`
const DayOfMonth = styled.div`
    font-size: 16px;
    background: ${props => props.selected ? accentColor : 'inherit'};
    color: ${props => props.selected ? 'white' : 'inherit'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    cursor: default;
`

const DayItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

const DayItem = ({dayOfWeek, dayOfMonth}) => {
    return (
        <DayItemWrapper>
            <DayOfWeek>
                {dayOfWeek}
            </DayOfWeek>
            <DayOfMonth selected={compareDates(dayOfMonth, new Date())}>
                <div>{dayOfMonth.getDate()}</div>
            </DayOfMonth>
        </DayItemWrapper>
    )
}

const NavButton = styled.svg`
    width: 1rem;
    height: 1rem;
    color: ${accentColor};
    cursor: pointer;
`

const MonthNav = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
`

const Navigation = ({monday, setMonday}) => {

    return (
        <NavigationWrapper>
            <DaysContainer>
                {
                    daysOfWeek.map((d, i) => 
                        <DayItem 
                            key={i}
                            dayOfWeek={d}
                            dayOfMonth={addDays(monday, i)}
                        />
                    )
                }
            </DaysContainer>
            <MonthNav>
                <NavButton 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                    onClick={() => setMonday(addDays(monday, -7))}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </NavButton>
                {getMonthName(monday.getMonth())} {monday.getFullYear()}
                <NavButton 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
                onClick={() => setMonday(addDays(monday, 7))}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </NavButton>
            </MonthNav>
        </NavigationWrapper>
    )
}

export default Navigation