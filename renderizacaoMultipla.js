/* RENDERIZAÇÃO REACT- MÚLTIPLOS COMPONENTES

!!Importante: convenções a serem seguidas:
    1- É importante utilizar as chaves {} para renderização de vários componentes;

*/

const OneList = () => {
    const myitens = ['React', 'Vue', 'Angular']
    return (
        <>
            {myitens.map((element => <p>{element}</p>))}
        </>
    )
}

function App() {
    return (
        <div className="App">
            <OneList />

        </div>
    );
}

/*

 O que aconteceu:
    1-No começo, tinha-se um array com 3 elementos
    2-Cada elemento precisava ser adicionado na página com React
    3-Para evitar a repetição de código desnecessária, usa-se a renderização múltipla
    4-Assim:
        -Percorrer o array com o .map 
        -Usar uma arrow function, onde cada elemento será inserido em uma tag <p>
        -Assim, no final são gerados 3 elementos <p>, um para cada elemento do array
*/
