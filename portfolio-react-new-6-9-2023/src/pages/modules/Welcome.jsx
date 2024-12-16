import "../../sass/welcome.scss";
const Welcome = () => {
    return(
        <>
            <section className="welcome">
                <div className="container">
                    <div className="fw">
                        <p className="head">Welcome
                            <span>to my website</span>
                        </p>
                        <p className="text welcome_detail"></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Welcome;