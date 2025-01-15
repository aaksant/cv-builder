import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import Form from './Form';
import '../../styles/Form.css';

export default function SingleEntryForm({
  personalDetails,
  setCvData,
  title,
  fields
}) {
  const [isFormShown, setIsFormShown] = useState(true);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setCvData((prevCvData) => ({
      ...prevCvData,
      personalDetails: {
        ...personalDetails,
        ...Object.fromEntries([...formData.entries()])
      }
    }));

    e.currentTarget.reset();
  }

  function handleCancel() {
    setCvData((prevCvData) => ({
      ...prevCvData,
      personalDetails: {}
    }));
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
        <Form
          fields={fields}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}
