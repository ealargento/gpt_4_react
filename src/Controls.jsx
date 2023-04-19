import React from 'react';

function Controls({ value, cb, cbtalk, visible }) {
  return (
    <div>
    <div class="row justify-content-center">
      {!visible&&<h1>I am OpenAI's GPT-3 model. You can ask me just about anything!</h1>}
    </div>

    <div class="row justify-content-center">
    <div class="col-7 py-4">
      <textarea class="form-control" id="textarea" rows="3" onChange={cb} value={value}></textarea>
    </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-6 py-3">
        {visible?<button onClick={cbtalk} class="btn btn-secondary" >Ask me again!</button>:<button onClick={cbtalk} class="btn btn-secondary" >Ask me!</button>}

      </div>
    </div>
    
    </div>
  )
};

export default Controls;
