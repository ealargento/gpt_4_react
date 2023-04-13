import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx';
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';
import axios from "axios";

const API_KEY="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"
const input="Corrientes Capital es una ciudad fria"

const musicos = [
  {
    name: 'John',
    lastname: 'Lennon',
    band: 'The Beatles'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input: ""
    }

    this.talk = this.talk.bind(this);
    this.inputhandler = this.inputhandler.bind(this);

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
    ).then(function(x){
      console.log("RESPUESTA")
      console.log(x.data.choices[0].text)


    })

  }



  render() {
    return (
      <div>
        <textarea class="form-control" id="textarea" rows="3" onChange={this.inputhandler}></textarea>
        <button onClick={this.talk}>Ask me!</button>
      </div>
    );
  }
};




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
