import React, { useState } from 'react'
import styled from 'styled-components'
import { activeColor, borderColor, eventColor, timeColor } from '../GlobalStyle'
import addDays from '../utils/addDays'
import addHours from '../utils/addHours'

const DayViewWrapper = styled.main`
  display: flex;
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
  display: none;
  }
`
//колонка с временем по часам
const TimeRow = styled.aside`
  width: 50px;
  margin: 40px 0 0 10px;
`

const TimeItem = styled.div`
  color: ${timeColor};
  height: 50px;
  padding: 2px;
  border: 1px solid transparent;
  text-align: center;
`

const DayViewGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
`

const GridCellWrapper = styled.div`
  border-top: ${props => props.top ? 'none' : `2px solid ${borderColor}`};
  border-right: 2px solid ${borderColor};
  padding: 2px;
  height: 50px;
  background: ${
  props => props.event && props.selected ? activeColor : 
  props.event && !props.selected ? eventColor : 'inherit'
  };
  cursor: ${props => props.event ? 'pointer' : 'inherit'};
  background-clip: content-box;
`

const GridCell = (props) => {
  return (
    <GridCellWrapper {...props}>
    </GridCellWrapper>
  )
}

const DayView = ({monday, events, setEvent}) => {
  //заполняем массив со значениями часов для левой колонки
  const timeArray = [...Array(24).keys()].map(e => e < 10 ? '0' + e + ':00' : e + ':00')
  timeArray.push('00:00')

  //выделенная ячейка
  const [selectedCell, setSelectedCell] = useState(null)

  //массив для сетки событий
  const cellArray = []
  for (let i = 0; i < timeArray.length-1; i++) {
    for (let j = 0; j < 7; j++) {
      cellArray.push(addHours(addDays(monday, j), i))
    }
  }

  const checkInterval = (e, tStart, tEnd) => e >= tStart && e < tEnd

  return (
    <DayViewWrapper>
      <TimeRow>
        {
          timeArray.map((val, i) => <TimeItem key={i}>{val}</TimeItem>)
        }
      </TimeRow>
      <DayViewGrid>
        {
          //заполняем верхнюю строку, которая несёт исключительно визуальную цель
          [...Array(7)].map((_, i) => <GridCell key={'top'+i} top />)
        }
        {
          //заполняем сетку событий
          cellArray.map((t, i) => 
            <GridCell 
              time={t}
              event={events.find(e => checkInterval(e, t, addHours(t, 1)))}
              key={i} 
              onClick={ () => {
                setSelectedCell(i)
                setEvent(events.findIndex(e => checkInterval(e, t, addHours(t, 1))))
              }}
              selected={selectedCell === i}
            />
          )
        }
        {
          //заполняем нижнюю строку, которая несёт исключительно визуальную цель
          [...Array(7)].map((_, i) => <GridCell key={'bottom'+i} />)
        }
      </DayViewGrid>
    </DayViewWrapper>
  )
}

export default DayView