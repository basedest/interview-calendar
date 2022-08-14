import { useState } from "react"
import styled from "styled-components"
import DayView from "./components/DayView"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import GlobalStyle, { borderColor } from "./GlobalStyle"
import findMonday from "./utils/findMonday"

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  @media (min-width: 740px) {
    width: 740px;
    margin: 0 auto;
  }
`

function App() {
  //отправной точкой календаря считается понедельник
  const [monday, setMonday] = useState(findMonday(new Date()))
  //события хранятся в виде массива дат
  const [events, setEvents] = useState([])
  //индекс события в массиве для удаления
  const [event, setEvent] = useState(-1)
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header 
          events={events}
          setEvents={setEvents}
        />
        <Navigation 
          monday={monday}
          setMonday={setMonday}
        />
        <DayView
          monday={monday}
          events={events}
          event={event}
          setEvent={setEvent}
        />
        <Footer
          setMonday={setMonday}
          events={events}
          setEvents={setEvents}
          event={event}
          setEvent={setEvent}
        />
      </AppWrapper>
    </>
  )
}

export default App
