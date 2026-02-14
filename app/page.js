export default function Home() {
  return (
    <main style={{ 
      fontFamily: "Arial, sans-serif", 
      padding: "40px", 
      textAlign: "center" 
    }}>
      <h1>FiberDoc AI</h1>
      <p>AI Documentation Software for Telecom Field Technicians</p>

      <div style={{ marginTop: "40px" }}>
        <h2>Generate Professional Reports Instantly</h2>
        <p>
          Trouble Tickets • Light Verification • Close-Out Reports
        </p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <button style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Coming Soon
        </button>
      </div>
    </main>
  );
}
