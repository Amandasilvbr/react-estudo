/* RENDERIZAÇÃO REACT

!!Importante: convenções a serem seguidas:
    1- É importante utilizar as chaves {} para renderização condicional;

*/

const Condicional = (props) => {
    return (
        <div>
            <h2 isLogged={props.logged}>
                {props.logged === `Yes` ? `Logout here` : `Login here`}
            </h2>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Condicional logged="Yes" />
        </div>
    );
}

/*
    O que aconteceu:
    1-Através das props, foi possível descobrir se o usuário estava logado ou não
    2-Se ele estivesse, deveria aparecer a opção de sair, ou seja, deslogar (Logout here)
    3-Se ele não estivesse, deveria aparecer a opção de entrar, ou seja, logar (Login here)

    Todo o processo aconteceu dentro de um operador ternário, formando, assim, uma renderização condicional

*/