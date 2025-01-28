import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form.jsx'
import Resume from './components/Resume.jsx'


function App() {
  const initData = {
    'Name':'',
    'Email':'',
    'Mobile':'',
    'Education':[],
    'Experience':[],
  };

  const [data, setData] = useState(initData);
  const [formStatus, setFormStatus] = useState(false);

  return (
    <>
      <Form formData={data} setFormData={setData} formStatus={formStatus} setFormStatus={setFormStatus}/>
      <Resume resumeData={data}/>
    </>
  )
}

export default App
