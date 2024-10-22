import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Clients2 from "@/components/sections/Clients2"
import Contact2 from "@/components/sections/Contact2"
import Location2 from "@/components/sections/Location2"
import Map2 from "@/components/sections/Map2"
import News2 from "@/components/sections/News2"
import Pricing2 from "@/components/sections/Pricing2"
import Project2 from "@/components/sections/Project2"
import Services2 from "@/components/sections/Services2"
import Services2T2 from "@/components/sections/Services2T2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

  return (
    <>
    <Layout headerStyle={2} footerStyle={1}>
      <Banner2 />
      <Services2 />
      <About2 />
      <Services2T2 />
      <Contact2 />
      <Project2 />
      <Pricing2 />
      <Testimonial2 />
      <Clients2 />
      <News2 />
      <Location2 />
      <Map2 />
    </Layout>
    </>
  )
}