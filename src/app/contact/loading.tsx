import React from "react";

const Loading: React.FC = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "#f5f5f5",
  },
  spinner: {
    border: "8px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    borderTop: "8px solid #3498db",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
};

export default Loading;
