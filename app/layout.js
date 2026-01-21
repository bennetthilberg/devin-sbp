import { Montserrat, Young_Serif } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import InitialAnim from "./components/InitialAnim";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Devin for SBP",
  description: "Vote Devin Duncan for UNC Student Body President",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${youngSerif.variable} antialiased`}>
        <InitialAnim />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
