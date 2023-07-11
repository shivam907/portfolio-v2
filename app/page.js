import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}
