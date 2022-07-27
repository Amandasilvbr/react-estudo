/* STATE COMPONENTES DE CLASSE

!!Importante: antes, apenas componentes de classe podiam usar state, mas isso foi mudado
com as novas atualizações do React

*/

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }

    // Mudando o estado

    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }
  
// O exemplo acima foi retirado do site W3Schools

/* Estrutura 

class NOME-DA-CLASSE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      STATE INICIAL
    };
  }
  FUNÇÃO QUE VAI MUDAR O STATE = () => {
    this.setState({MUDANÇA});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.ATRIBUTO}</h1>
        <p>
          It is a {this.state.ATRIBUTO}
          {this.state.ATRIBUTO
          from {this.state.ATRIBUTO}.
        </p>
        <button
          type="button"
          onClick={this.FUNÇÃO QUE VAI MUDAR O STATE
        >Change color</button>
      </div>
    );
  }
}









*/

