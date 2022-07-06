function Header({ counterInitialValue, counter, setCounter }) {

  const addOne = () => {
    setCounter(counter + 1)
  }

  const addAugmentedValue = (amountToAdd) => {
    setCounter(counter + amountToAdd)
  }

  const minusOne = () => {
    if (counter === 0) return
    setCounter(counter - 1)
  }

  const minusVariable = (event) => {
    const amount = parseInt(event.target.value)
    if (counter >= 0 && counter <= 4) return
    setCounter(counter - amount)
  }

  const reset = () => {
    setCounter(counterInitialValue)
  }

  const augmentedValue = 5

  return (
    <>
      <button onClick={addOne}>+1</button>
      <button onClick={() => { addAugmentedValue(augmentedValue) }}>+{augmentedValue}</button>
      <button onClick={minusVariable} value={5}>-5</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Header