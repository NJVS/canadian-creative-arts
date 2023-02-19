import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialData = {
  about: {
    first_name: '',
    last_name: '',
    event_name: '',
    email: '',
    email_confirm: '',
    birth_date: '',
    dial_code: '',
    phone_number: '',
    current_level: '',
    planning_study: '',
  },
  interests: {
    interested_courses: [],
    interested_countries: [],
    interested_areas: []
  }
}

const initalState = {
  registrationStatus: 'SUBMITED', // false, TO_REVIEW, SUBMIT_REGISTRATION
};


function reducer(state, action) {
  switch(action.type) {
    case 'TO_REVIEW':
      return { registrationStatus: 'TO_REVIEW' }
    case 'SUBMIT_REGISTRATION':
      return { registrationStatus: 'SUBMITED' }
    case 'RESET':
      return { registrationStatus: false }
    default:
      return state;
  }
}

export const FormDataContext = createContext(null);

export const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [aboutData, setAboutData] = useState(initialData.about);
  const [interestsData, setInterestsData] = useState(initialData.interests);
  const navigate = useNavigate();

  function reviewData() {
    dispatch({ type: 'TO_REVIEW' });
    navigate('/register/review');
  }

  function submitApplication() {
    // POST
    dispatch({ type: 'SUBMIT_REGISTRATION' });

    // reset formdata
    setAboutData(initialData.about);
    setInterestsData(initialData.interests);
    
    // navigate to thankyou page
    navigate('/thankyou')
  }

  function resetRegistration() {
    console.log('reseeeet')
    dispatch({ type: 'RESET' });
  }


  return (
    <FormDataContext.Provider value={{
      status: state.registrationStatus,
      aboutData,
      interestsData,
      setAboutData,
      setInterestsData,
      reviewData,
      submitApplication,
      resetRegistration
    }}>
      {children}
    </FormDataContext.Provider>
  );
}