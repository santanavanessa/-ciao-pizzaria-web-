import { OurProducts } from "./components/OurProducts";
import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";
import Footer from "./components/Footer";

export function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <OurProducts/>
      <Footer/>
    </HomeContainer>
  );
}
