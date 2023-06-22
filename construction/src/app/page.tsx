import Logos from "@/components/Logos";
import Banner from "@/layouts/Banner";
import Cards from "@/layouts/Cards";
import ContactUs from "@/layouts/ContactUs";
import Services from "@/layouts/Services";

export default function Home() {
  return (
   <>
    <Banner/>
    <Logos/>
    <Services/>
    <Cards/>
    <ContactUs/>
   </>
  )
}
