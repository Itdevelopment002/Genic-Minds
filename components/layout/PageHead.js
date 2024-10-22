import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Genic Minds "}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz@0,9..40;1,9..40&family=Outfit:wght@100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead