import { useState } from "react";

const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
const errorStyle = { color: "red", fontSize: "12px", margin: "5px 0" };
const btnStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  background: "#2ecc71",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
};
const resultBoxStyle = {
  marginTop: "20px",
  padding: "15px",
  background: "#f9f9f9",
  border: "1px solid #ccc",
  textAlign: "left",
};

// Custom hook for form handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (value.trim() === "") {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};

    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, handleChange, errors, validate, setValues, resetForm };
}

export default function LoginForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const { values, handleChange, errors, validate, resetForm } = useForm({
    username: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(values);
      resetForm();
      console.log("Success:", values);
    }
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.username && <p style={errorStyle}>{errors.username}</p>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}

        <input
          name="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.phone && <p style={errorStyle}>{errors.phone}</p>}

        <button type="submit" style={btnStyle}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={resultBoxStyle}>
          <h3>Entered Values:</h3>
          <p>
            <strong>Name:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
        </div>
      )}
    </div>
  );
}
