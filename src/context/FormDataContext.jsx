import { createContext, useReducer } from "react";

const initalState = {
  registrationStatus: false,
  formData: {}
};


function reducer(state, action) {
  switch(action.type) {
    case 'REGISTRATION_COMPLETE':
      return {
        registrationStatus: true,
        formData: action.payload
      }
    case 'REGISTRATION_RESET':
      return {
        registrationStatus: false,
        formData: {}
      }
    default:
      return state;
  }
}

export const FormDataContext = createContext(null);

export const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  function registrationComplete(data) {
    // POST

    // FOR CONTEXT
    dispatch({
      type: 'REGISTRATION_COMPLETE',
      payload: data
    })
  }

  function registerAgain() {
    dispatch({ type: 'REGISTRATION_RESET' });
  }


  return (
    <FormDataContext.Provider value={{
      registrationStatus: state.registrationStatus,
      formData: state.formData,
      registrationComplete,
      registerAgain
    }}>
      {children}
    </FormDataContext.Provider>
  );
}