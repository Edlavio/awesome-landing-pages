import Logos from "@/components/Logos";
import Banner from "@/layouts/Banner";
import Blog from "@/layouts/Blog";
import Cards from "@/layouts/Cards";
import ContactUs from "@/layouts/ContactUs";
import Footer from "@/layouts/Footer";
import Newsletter from "@/layouts/Newsletter";
import Services from "@/layouts/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Logos />
      <Services />
      <Cards />
      <ContactUs />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  )
}
