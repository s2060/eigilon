import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Eigi Lon",
  description: "Manipuri English translation",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
