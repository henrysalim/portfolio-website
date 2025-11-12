import "./globals.css";

export const metadata = {
  title: "Henry Salim",
  description: "Henry Salim's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased">{children}</body>
    </html>
  );
}
