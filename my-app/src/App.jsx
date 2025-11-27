import { useState } from 'react'

function App() {
  const [value1, setValue1] = useState(Math.floor(Math.random() * 10));
  const [value2, setValue2] = useState(Math.floor(Math.random() * 10));

  const [result, setResult] = useState("?");

  const resetStates = _ => {
    setValue1(Math.floor(Math.random() * 10));
    setValue2(Math.floor(Math.random() * 10));
    setResult("?");
  }

  const handleSubmit = e => {
    if (result == value1 + value2) {
      alert("Norm");
    } else {
      alert("Неправильно");
    }
    resetStates();
  }

  const handleResultChange = e => {
    setResult(e.target.value);
  }

  return (
    <>
      <h1>Проверка арифметики</h1>
      
      {value1} + {value2} = {result}
      

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleResultChange}/>
        <button>Проверить</button>
      </form>
    </>
  )
}

export default App
