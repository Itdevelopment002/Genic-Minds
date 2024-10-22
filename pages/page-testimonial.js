import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial from "@/components/sections/innerpages/Testimonial"

export default function PageTestimonial() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Testimonial" />

    <Testimonial1 />
    </Layout>
    </>
  )
}