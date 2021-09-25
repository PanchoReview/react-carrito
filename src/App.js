import { Component } from 'react';
import Productos from "./components/Productos"
import Layout from './components/Layout'
import Title from './components/Title'

class App extends Component {
  state = {
    productos:[
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      { name: 'Arbeja', price: 2500, img: '/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ]
  }
  render() {
    return(
      <div>
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={() => console.log('No action')}
            productos = {this.state.productos}
          />
        </Layout>
        
      </div>
    )
  }
}

export default App;
