import React, { useState } from 'react'

// just a minimal react component for testing purposes in MDX.
export default function Bar() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment </button>
    </>
  )
}
