import React, {useReducer} from 'react'
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import 

const initialState = {
}

export default function AuthState(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)


  const authstate = {

  }

  return (
    <AuthContext.Provider value={authstate}>
      {props.children}
    </AuthContext.Provider>
  )
}
