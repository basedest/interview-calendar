import React from 'react'
import styled from 'styled-components'
import { accentColor, bgColor, borderColor } from '../GlobalStyle'
import findMonday from '../utils/findMonday'

const FooterWrapper = styled.footer`
  background: ${bgColor};
  display: flex;
  padding: 15px 40px;
  justify-content: space-between;
  border: 1px solid ${borderColor};
`

const FooterButton = styled.button`
  font-size: 1.25rem;
  color: ${accentColor};
  border: none;
  display: ${props => props.visible ? 'block' : 'none'};
  background-color: inherit;
  cursor: pointer;
`

// кнопка Today перемещает на текущую неделю, поэтому меняем именно понедельник
// кнопка Delete показывается только при наличии индекса события в массиве events, 
// поэтому после удаления ставим индекс на -1
const Footer = ({event, setEvent, events, setEvents, setMonday}) => {
  return (
    <FooterWrapper>
      <FooterButton
        visible
        onClick={() => setMonday(findMonday(new Date()))}
      >
        Today
      </FooterButton>
      <FooterButton
        visible={event >= 0}
        onClick={() => {
          const buf = [...events]
          buf.splice(event, 1)
          setEvents(buf)
          setEvent(-1)
        }}
      >
        Delete
      </FooterButton>
    </FooterWrapper>
  )
}

export default Footer