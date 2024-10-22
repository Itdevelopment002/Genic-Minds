import Link from "next/link"
const CallToAction1 = () => {
    return (
        <>
        <section className="call-to-action" style={{ backgroundImage: 'url(/images/background/1.jpg)' }}>
            <div className="auto-container">
                <div className="title-box">
                    <div className="icon bounce-y"><img src="images/resource/icon-logo.png" alt=""/></div>
                    <h1 className="title">IT Solutions & Services <br/>at your Fingertips</h1>
                    <Link href="page-services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction1