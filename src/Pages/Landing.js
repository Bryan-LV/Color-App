import React, {useState} from 'react'
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';

export default function Landing(props) {
  const [view, setView] = useState('login');

  return (
    <div>
      {view === 'login' && <Login handleView={() => setView('signup')}/>}
      {view === 'signup' && <Signup handleView={() => setView('login')}/>}
    </div>
  )
}
