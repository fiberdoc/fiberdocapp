export const metadata = {
  title: "FiberDoc AI",
  description: "AI Documentation Software for Telecom Field Technicians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
