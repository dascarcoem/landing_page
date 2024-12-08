import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "About Us - Create Next App",
  description: "Learn more about us.",
};

export default function AboutUsLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
