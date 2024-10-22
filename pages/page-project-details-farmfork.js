import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Animalprojectdetails from "@/components/sections/innerpages/AnimalProjectDetails"
export default function pageProjectDetails() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="My Animal " />
    <Animalprojectdetails/>
    </Layout>
    </>
  )
}