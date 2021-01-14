import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from './HogList'
import HogForm from './HogForm'

function App() {
  const [greasedFilter, setGreasedFilter] = useState(false)
  const [sortState, setSortState] = useState(false)
  const [hogsState, setHogsState] = useState(hogs)

  function handleAddHog(newHog) {
    const newHogsArray = [newHog, ...hogsState]

    setHogsState(newHogsArray)
  }

  return (
    <div className="App">
      <Nav 
      filterByGreased={setGreasedFilter} 
      greasedState={greasedFilter}
      setSortState={setSortState}
      sortState={sortState}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList 
      hogs={hogsState} 
      greasedState={greasedFilter} 
      sortState={sortState}
      />
    </div>
  );
}

export default App;
