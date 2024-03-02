import React from 'react'
import { useRef } from 'react';

function Form_input() {
    const email = useRef(null);

function submitForm(e){
 e.preventDefault();
 
 console.log(email.current.value);
   document.getElementById('user_email').innerHTML = email.current.value;
}

return (
 <div>
  <form onSubmit={submitForm}>
   <input type="text" ref={email} />
   <button>Submit</button>
   <h3 id="user_email">Email is : </h3>
  </form>
 </div>
)
}

export default Form_input
