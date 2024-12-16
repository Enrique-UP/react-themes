import { useEffect } from "react";
import "../../sass/disclaimer.scss";
const Disclaimer = () => {
    useEffect(() => {
        (function () {
            var text = document.querySelector(".disclaimer .fw>span").innerText;
            document.querySelector(".disclaimer .marqueePopup .head").innerHTML += text;

            var ul = document.querySelector(".disclaimer .marquee").innerHTML;
            document.querySelector(".disclaimer .marqueePopup .fwidth>ul").innerHTML = ul;

            document.querySelector(".disclaimer .fw>i").addEventListener("click", function () {
                document.querySelector(".disclaimer .marqueePopup").style.display = "block";
                setTimeout(function () {
                    document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.add("active");
                }, 300);
            });
            document.querySelector(".disclaimer .marqueePopup .head .icon").addEventListener("click", function () {
                document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.remove("active");
                setTimeout(function () {
                    document.querySelector(".disclaimer .marqueePopup").style.display = "none";
                }, 300);
            });
        })();
    }, []);
    return (
        <>
            <section className="disclaimer">
                <div className="container">
                    <div className="fw">
                        <span>Disclaimer:-</span>
                        <ul className="marquee">
                            <li><span className="domain"></span> is not affiliate with any brand or company. I am only providing information about me and showing my work live. The third party templates and links have been used on my website for showing my work purpose only.</li>
                        </ul>
                        <i>Read More</i>
                    </div>
                </div>
                <div className="container marqueePopup">
                    <div className="fwidth">
                        <p className="head"><i className="icon">&#xe039;</i></p>
                        <ul className="lists"></ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Disclaimer;