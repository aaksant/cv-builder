import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import FormControlButton from './FormControlButton';
import '../../styles/Form.css';

export default function SingleEntryForm({ title, fields }) {
  const [isFormShown, setIsFormShown] = useState(true);
  const [personalDetails, setPersonalDetails] = useState(null);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={`form ${isFormShown ? 'active' : ''}`}>
      <div className="form__header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <button
          type="button"
          className="btn form__dropdown-button"
          onClick={toggleDropdown}
        >
          <SlArrowDown className="icon" />
        </button>
      </div>
      {isFormShown && (
        <form action="/" onSubmit={handleOnSubmit}>
          {fields.map(({ label, type, name, id, isRequired }, index) => (
            <div className="form-row" key={index}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                id={id}
                required={isRequired}
                value={personalDetails?.[name] || ''}
                onChange={handleOnChange}
              />
            </div>
          ))}
          <div className="form-control">
            <FormControlButton
              className="cancel"
              text="Cancel"
              onClick={() => setPersonalDetails(null)}
            />
            <FormControlButton className="submit" text="Submit" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}
