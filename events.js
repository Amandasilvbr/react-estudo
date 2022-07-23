/* EVENTOS REACT

!! Importante: convenções a serem seguidas:
    1- No React, diferentemente do Js puro, usa-se camelCase na chamada dos eventos.
        Exemplo: onclick (Js) -> onClick (React)

    2-No React, as funções são passadas entre chaves.
        Exemplo: "myFunction()" (Js) -> {myFunction} (React)

*/

function App() {
    // Função a ser chamada quando um evento acontecer, como click, on mouse over, etc
    function eventHandler() {
        alert('Geeksforgeeks is the best platform to learn coding!');
    }
    // Adicionando a função no botão, chamando em onClick na linha 21
    return (
        <div className='App'>
            <h1>Welcome to Geeksforgeeks</h1>
            <button onClick={eventHandler}>Click for alert!</button>
        </div>
    );
}


// Passando props nos eventos

// Função a ser chamada quando um evento acontecer, como click, on mouse over, etc
function colorAlert(color) {
    alert(`You click in the color ${color}`);
}
// Adicionando a função no botão, chamando em onClick na linha 26
const CallEvent = (props) => {
    return (
        <div>
            <button colorName={props.color} onClick={() => colorAlert(props.color)}>Click for alert the color!</button>
        </div>
    )
};

// Usando o componente callEvent

function App() {
    return (
      <CallEvent color="blue"/>
    // Saída: You click in the color blue
    );
  }

/* Explicação passo a passa do código com props:

    1- A função foi criada, e o paramêtro dela (nome da cor) foi adicionado no alert

    2-O retorno foi criado, onde um botão aparece

    3-Na hora de passar a função para o onClick, passa-se em conjunto uma arrow function. Seu papel é:
        -Chamar a função colorAlert e passar para ela, como parâmetro, a props.color, ou seja, o nome da cor

    4-Assim, a função chamada recebe corretamente o nome da cor em questão, seja qual for

*/


