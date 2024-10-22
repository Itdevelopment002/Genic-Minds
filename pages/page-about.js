import Layout from "@/components/layout/Layout"
import Clients2 from "@/components/sections/Clients2"
import Faq1 from "@/components/sections/Faq1"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial1 from "@/components/sections/Testimonial1"
import About from "@/components/sections/innerpages/About"
import Testimonial from "@/components/sections/innerpages/Testimonial"


export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="About Us" />

    <About />
    <Testimonial1 />
    <Clients2 />

    {/* <Faq1 /> */}
    </Layout>
    </>
  )
}