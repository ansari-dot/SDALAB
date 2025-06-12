import React, { useState } from "react";

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    StudentName: "",
    RegNo: "",
    semester: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add Student</h2>

      <input
        name="StudentName"
        placeholder="Student Name"
        onChange={handleChange}
        value={formData.StudentName}
        style={styles.input}
        required
      />

      <input
        name="RegNo"
        placeholder="Registration No"
        onChange={handleChange}
        value={formData.RegNo}
        style={styles.input}
        required
      />

      <input
        name="semester"
        placeholder="Semester"
        onChange={handleChange}
        value={formData.semester}
        style={styles.input}
        required
      />

      <input
        name="cgpa"
        type="number"
        step="0.01"
        placeholder="CGPA"
        onChange={handleChange}
        value={formData.cgpa}
        style={styles.input}
        required
      />

      <button type="submit" style={styles.button}>
        Add Student
      </button>
    </form>
  );
};

const styles = {
  form: {
    background: "#f9f9f9",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default AddStudentForm;
