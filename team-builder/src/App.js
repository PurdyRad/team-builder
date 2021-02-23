import React, { useState } from 'react'
import './App.css';

const initialTeamMembers = [
  {
    name:'Adam',
    email:"coolgui@coolness.com",
    role:'World Class Bestfriend'
  },
  {
    name:'Kara',
    email:"coolgurl@coolness.com",
    role:"World's second slowest runner"
  },
  {
    name:'SpongeBob',
    email:"sqaurepants@jellyfishfields.com",
    role:'Frycook'
  }
];

const initialFormValue = {
  name: '',
  email: '',
  role: '',
};

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValue, setFormValue] = useState(initialFormValue)

  const change = evt => {
    const { name, value } = evt.target
    setFormValue({...formValue, [name]: value})
  }

  const submit = evt => {
    evt.preventDefault();
   const newMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role.trim(),
    }

    setTeamMembers(teamMembers.concat(newMember))
    setFormValue(initialFormValue)
}
  return (
    <div className="App">
      <h1>The A Team</h1>
      {teamMembers.map((member, index) => {
        return (
          <div key={index}>
            {member.name} is a {member.role} who can be reached at {member.email}
          </div>
        )
      })}
      <form onSubmit={submit}>
        <input name='name' type='text' onChange={change} placeholder='Name Me' value={formValue.name} />
        <input name='role' type='text' onChange={change} placeholder='Whatcha wanna be' value={formValue.role} />
        <input name='email' type='email' onChange={change} placeholder='Got Snail Mail?' value={formValue.email} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
