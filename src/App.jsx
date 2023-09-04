import { useState } from 'react'
import List from './components/List'
import { data } from './data';
import './App.css'

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () => {
    setPeople([])
  }
  return (
   <div>
    <h1>Workshop 1: Birthday List</h1>
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people = {people}/>
        <button onClick={clearAll}>Clear All</button>
      </section>
    </main>
   </div>
  )
}

export default App
