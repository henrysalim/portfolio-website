import "./globals.css";

export const metadata = {
  title: "Henry Salim",
  description: "Henry Salim's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
