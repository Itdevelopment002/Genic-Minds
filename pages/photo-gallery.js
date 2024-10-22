
import Layout from "@/components/layout/Layout"
// import PageTitle from "@/components/sections/PageTitle"
import PhotoGallery from "@/components/sections/PhotoGallery";

export default function PhotoGalleryPage() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    {/* <PageTitle pageName="Testimonial" /> */}

    <PhotoGallery />
    </Layout>
    </>
  )
}