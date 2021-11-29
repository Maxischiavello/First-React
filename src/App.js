import React from 'react';
import './App.css';

/* function HelloWorld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
} */

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else {
      return <h1>
        No hay componentes (else)
        <button onClick={this.toggleShow}>
          Toggle show
        </button>
      </h1>
    }
  }
}

// componente escrito como funcion flecha

// const App = () => <div>This is my component: <HelloWorld /> </div>


//componente escrito como clase

/*class App extends React.Component {
  render() {
    return <div>This is my component: <HelloWorld /> </div>
  }
}*/

//componente escrito como funcion normal

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Prueba de ejemplo" subtitle="ejemplo de subtitulo" />
      <HelloWorld mytext="Segundo ejemplo" subtitle="segundo ejemplo de subtitulo" />
      <HelloWorld mytext="Tercer ejemplo" subtitle="tercer ejemplo de subtitulo" />
    </div>
  );
}

export default App;
