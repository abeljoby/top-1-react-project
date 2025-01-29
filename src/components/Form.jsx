import "./Resume.css";

function Form({formData,setFormData,formStatus,setFormStatus}) {

  const currentData = {...formData};
  // const educationFields = [];
  // const workFields = [];
  console.log(currentData);

  function addEdField(e) {
    currentData['Education'].push({'Name':'','Year':'','Degree':''});
    setFormData(currentData);
  }

  function addWkField(e) {
    currentData['Experience'].push({'Name':'','Start':'','End':''});
    setFormData(currentData);
  }

  function submitForm(e) {
    e.preventDefault();
    setFormData(currentData);
    setFormStatus(!formStatus);
  }

  function editForm(e) {
    e.preventDefault();
    setFormStatus(!formStatus);
  }

  return (
    <form onSubmit={submitForm} onReset={editForm}>
      <fieldset className='geninfo' disabled={formStatus}>
          <legend>General Information</legend>
          <input type="text" placeholder='Name' onChange={(e) => currentData['Name']=e.target.value}/>
          <input type="text" placeholder='Email address' onChange={(e) => currentData['Email']=e.target.value}/>
          <input type="text" placeholder='Mobile number' onChange={(e) => currentData['Mobile']=e.target.value}/>
      </fieldset>
      <fieldset className='education' disabled={formStatus}>
          <legend>Education</legend>
          {currentData['Education'].map((ed,index) => {
            return (
              <>
                <div className="edfields" key={index}>
                  <input type="text" placeholder='Institution name' onChange={(e) => currentData['Education'][index]['Name']=e.target.value}/>
                  <input type="text" placeholder='Degree' onChange={(e) => currentData['Education'][index]['Degree']=e.target.value}/>
                  <input type="text" placeholder='Year of graduation' onChange={(e) => currentData['Education'][index]['Year']=e.target.value}/>
                </div>
              </>
            )
          })}
          <input type="button" value="Add" onClick={addEdField}/>
      </fieldset>
      <fieldset className='experience' disabled={formStatus}>
          <legend>Experience</legend>
          {/* <input type="text" placeholder='Company name'/>
          <input type="text" placeholder='Start date'/>
          <input type="text" placeholder='End date'/> */}
          {currentData['Experience'].map((wk,index) => {
            return (
              <>
                <div className="exfields" key={index}>
                  <input type="text" placeholder='Company name' onChange={(e) => currentData['Experience'][index]['Name']=e.target.value}/>
                  <input type="text" placeholder='Start date' onChange={(e) => currentData['Experience'][index]['Start']=e.target.value}/>
                  <input type="text" placeholder='End date' onChange={(e) => currentData['Experience'][index]['End']=e.target.value}/>
                </div>
              </>
            )
          })}
          <input type="button" value="Add" onClick={addWkField}/>
      </fieldset>
      <input type="reset" value="Edit" disabled={!formStatus}/>
      <input type="submit" value="Create!" disabled={formStatus}/>
    </form>
  );
}

export default Form