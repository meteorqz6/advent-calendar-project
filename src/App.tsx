import { useState } from 'react'
import Calendar from 'react-calendar';
import './App.css'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App
