import "./globals.css";
import "./components.css";
import { Creepster, } from "next/font/google";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400"
});
export const metadata = {
  title: "Xanart Studios",
  description: "Xanart, vos pones la idea nosotros el arte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={creepster.className}>{children}</body>
    </html>
  );
}
