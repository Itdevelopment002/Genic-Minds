import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import CallToAction from "@/components/sections/CallToAction"
import CallToAction1 from "@/components/sections/CallToAction1"
import Clients2 from "@/components/sections/Clients2"
import ContactMap from "@/components/sections/ContactMap"
import Faq1 from "@/components/sections/Faq1"
import Funfact1 from "@/components/sections/Funfact1"
import News1 from "@/components/sections/News1"
import Project1 from "@/components/sections/Project1"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import WhyChooseUs1 from "@/components/sections/WhyChooseUs1"
export default function Home() {

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
      <Banner1 />
      <About1 />
      <Services1 />
      <Project1 />
      <Funfact1 />
      <WhyChooseUs1 />
      {/* <Team1 /> */}
      <CallToAction1 />
      <Testimonial1 />
      <Clients2 />
      <Faq1 />
       <News1 /> 
       {/*<ContactMap /> */}
      
    </Layout>
    </>
  )
}