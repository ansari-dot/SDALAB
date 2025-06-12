import React from "react";
import AddStudentForm from "./components/AddStudentForm";
import AllStudents from "./components/AllStudents";
import GoodStudents from "./components/GoodStudents";
import BadStudents from "./components/BadStudents";

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Student Management System</h1>
        <p style={styles.subtitle}>Track and manage student performance</p>
      </header>
      
      <main style={styles.main}>
        <section style={styles.formSection}>
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Add New Student</h2>
            <AddStudentForm />
          </div>
        </section>

        <section style={styles.studentsSection}>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>All Students</h2>
              <AllStudents />
            </div>
            
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Good Students</h2>
              <GoodStudents />
            </div>
            
            <div style={styles.card}>
              <h2 style={styles.sectionTitle}>Students Needing Improvement</h2>
              <BadStudents />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8f9fa",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  header: {
    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    color: "white",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0",
    letterSpacing: "-0.025em",
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: "0.9",
    marginTop: "0.5rem",
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  formSection: {
    marginBottom: "2rem",
  },
  studentsSection: {
    marginTop: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #e5e7eb",
  },
};

export default App;
