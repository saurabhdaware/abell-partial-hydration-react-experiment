import React from 'react';

function Navbar() {
  const [count, setCount] = React.useState(0);
  return (
    <nav>
      {'navbar is important! hydrate it first'}
      <button onClick={() => setCount(count + 1)}>Count +</button>
      {count}
    </nav>
  )
}

export default Navbar;