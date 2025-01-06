import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import Button from './Button';
import '../../styles/Form.css';

export default function Form({ title, fields }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [formData, setFormData] = useState({});

  function handleFormDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // preview stuffs here
  }

  function handleCancel() {
    setFormData({});
  }
  
  return (
    <div className={`form ${isFormShown ? 'active' : ''}`}>
      <div className="form__header" onClick={handleFormDropdown}>
        <h2>{title}</h2>
        <button
          type="button"
          className="btn form__dropdown-button"
          onClick={handleFormDropdown}
        >
          <SlArrowDown className="icon" />
        </button>
      </div>
      {isFormShown && (
        <form action="/" onSubmit={handleSubmit}>
          {fields.map(({ label, type, name, id, isRequired }, index) => (
            <div className="form-row" key={index}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                name={name}
                id={id}
                required={isRequired}
                value={formData[name] || ''}
                onChange={handleOnChange}
              />
            </div>
          ))}
          <div className="form-control">
            <Button className="cancel" text="Cancel" onClick={handleCancel} />
            <Button className="submit" text="Submit" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}
