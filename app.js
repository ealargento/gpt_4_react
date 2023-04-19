import React from 'react';
import ReactDOM from 'react-dom';
import Respuesta from './src/Respuesta.jsx';
import Navbar from './src/Navbar.jsx';
import Controls from './src/Controls.jsx';
import axios from "axios";

const API_KEY=""
const input="Corrientes Capital es una ciudad fria"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input: "",
      answer: "",
      visible: false
    }

    this.talk = this.talk.bind(this);
    this.inputhandler = this.inputhandler.bind(this);
    this.promisehandler = this.promisehandler.bind(this);

  }

  promisehandler(x){

      console.log("RESPUESTA")
      console.log(x.data.choices[0].text)

      this.setState({input: "",answer: x.data.choices[0].text, visible: true})


  }

  inputhandler(event){
    console.log(event.target.value)
    this.setState({input: event.target.value})
    console.log(this.state.input)
  }

  talk (){
    console.log(this.state.input)
    axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `${this.state.input}`,
        model: "text-davinci-002",
        max_tokens: 150,
        n: 1,
        stop: ".",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    ).then(this.promisehandler)
}

  render() {
    return (

        <div>
          <Navbar />
          <Respuesta texto={this.state.answer} />
          <Controls value={this.state.input} cb={this.inputhandler} cbtalk={this.talk} visible={this.state.visible} />
        </div>

    );
  }
};

//ternario en el return


// function App() {
//   return (
//     <div>
//       <Saludo nombre={x.data.choices[0].text} lang='en'/>
//       <SaludoFuncional nombre='Soy Henry' lang='es'/>
//       <Musicos musicos={musicos} />
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('app'));
