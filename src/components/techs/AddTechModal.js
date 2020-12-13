import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (firstName === '' || tech === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      console.log(firstName, lastName);

      // Clear fields
      setfirstName('');
      setlastName('');
    }
  }

  return <div id='add-tech-modal' className='modal'>
    <div className="modal-content">
      <h4>New Techician</h4>
      <div className="row">
        <div className="input-field">
          <input type="text" name='message' value={firstName} onChange={e => setfirstName(e.target.value)}/>
          <label htmlFor="firstName" className="active">
            First Name
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <input type="text" name='message' value={lastName} onChange={e => setfirstName(e.target.value)}/>
          <label htmlFor="lastName" className="active">
            Last Name
          </label>
        </div>
      </div>

    </div>
    <div className="modal-footer">
      <a href="#!"
        onClick={onSubmit}
        className="modal-close waves-effect blue waves-light btn"
      >
        Enter
      </a>
    </div>
  </div>
}

export default AddTechModal;
