import "./globals.css";

export const metadata = {
  title: "Olwen Lifesciences",
  description: "The best pharma company in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
