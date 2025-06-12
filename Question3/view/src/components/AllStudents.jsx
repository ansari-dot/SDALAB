import React, { useEffect, useState } from "react";
import axios from "axios";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all")
      .then((res) => setStudents(res.data))
      .catch((err) => {
        console.error("Error fetching students:", err);
        alert("Failed to load student data.");
      });
  }, []);

  return (
    <div style={styles.container}>
      {students.length === 0 ? (
        <p style={styles.empty}>No students found.</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Registration No</th>
                <th style={styles.th}>Semester</th>
                <th style={styles.th}>CGPA</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} style={styles.tr}>
                  <td style={styles.td}>{student.StudentName}</td>
                  <td style={styles.td}>{student.RegNo}</td>
                  <td style={styles.td}>{student.semester}</td>
                  <td style={styles.td}>{student.cgpa}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.status,
                      backgroundColor: student.cgpa >= 3.0 ? '#dcfce7' : '#fee2e2',
                      color: student.cgpa >= 3.0 ? '#166534' : '#991b1b'
                    }}>
                      {student.cgpa >= 3.0 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    overflowX: 'auto',
  },
  tableWrapper: {
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
  },
  th: {
    backgroundColor: '#f8fafc',
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#1e293b',
    borderBottom: '2px solid #e2e8f0',
    whiteSpace: 'nowrap',
  },
  tr: {
    borderBottom: '1px solid #e2e8f0',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#f8fafc',
    },
  },
  td: {
    padding: '12px 16px',
    color: '#334155',
    whiteSpace: 'nowrap',
  },
  status: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontWeight: '500',
    display: 'inline-block',
  },
  empty: {
    textAlign: 'center',
    color: '#64748b',
    padding: '2rem',
    fontStyle: 'italic',
  },
};

export default AllStudents;
