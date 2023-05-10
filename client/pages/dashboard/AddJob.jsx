import React from "react";
import { FormRow, Alert, FormRowSelect } from "../../components/";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../src/assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    isEditing,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValue,
    addJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      return;
    }
    addJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* job status */}
          <FormRowSelect
            labelText="status"
            name="status"
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={jobTypeOptions}
            value={jobType}
            handleChange={handleJobInput}
          />

          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValue();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
