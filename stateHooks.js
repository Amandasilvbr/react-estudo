// STATE - HOOKS

import React, { Component, useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  let incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={incrementCount}>Clique Aqui</button>
    </div>
  )
}

/* Explicação
 
let [count, setCount] = useState(0);
count= nome da variável
setCount= oresponsável por atualizar o estado
useState= estado inicial de count

*/