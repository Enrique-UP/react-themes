import "../../sass/childhood.scss";
import img1 from "../../images/childhood-1.jpg";
import img2 from "../../images/childhood-2.jpg";
import img3 from "../../images/childhood-3.jpg";
import img4 from "../../images/childhood-4.jpg";
import { useEffect } from "react";
const Childhood = () => {
    useEffect(() => {
        var readMore = document.querySelector(".childhood .readMore > a");
        var pText = document.querySelector(".childhood p.text");
        readMore.addEventListener("click", function(e){
            if(this.innerText === "Read More"){
                this.innerText = "Read Less";
                pText.classList.add("active");
            }else{
                this.innerText = "Read More";
                pText.classList.remove("active");
            }
        });
    }, []);
    return(
        <>
            <section className="section childhood" id="childhood">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="fw left">
                                <p className="head1">Welcome to Where</p>
                                <p className="head2">My Happy Childhood Resides!</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="fw right">
                                <p className="head3">My Childhood Tale</p>
                                <p className="text">Being a child of a rich family, I grew up very well. I was born after a long time, due to which everyone loved me very much as a child. Especially my grandmother loved me too much as I was her only son in law. When I was born many people in my family started firing in joy and likewise celebrated huge happiness, as a result, there was three days feast that happened. Then I started to mature slowly and my grandfather used to take me with him to the bricks factory. There were many servants of my grandfather who used to play cricket and called me a little quite sir.</p>
                                <p>I and my elder sister first applied the kiln to the brick when the kiln session started. We enjoyed our slit and we used to take a taste of sugarcane, fried potato, and Sweet potato. Thereafter, we used to bath there amazingly. To tell the truth, there was massive fun at those times. Frequently, I had seen peacock, deer, or Blue cow in our field moving here and there. Once I sowed Uurad dal with our farmer of the kiln and even once I was plowed our field with our tractor driver.</p>
                                <p>I used to enjoy it at my home apart from the kiln. My home is very big and it has 7 gates because of 7 rooms. I used to play cricket with our elder sister in our courtyard. There was a bridge behind our house where we used to play with our toys. In case any toy like scooter or car got damaged I was extremely expert to repair all of them soon. I was also an expert in flying the kite on our wide roof.</p>
                                <p>Sometimes my aunt’s children get together in my big house in vacation time and they used to make more massive fun with me. We had more fun in fire cracking, hide and sick game and used to take some bath using tube well in our own widest field and teased to the honey bee and fled away from there soon. We were pretty naughty like children remain.</p>
                                <p>Our grandfather was so strict to go out of the house and this is the reason he used to make us stay at a one place where he used to sleep, but we run away out of the house one by one and went to the garden of mangoes where we used to have immense fun at the pound. But now gradually everything has been finished now and we are astonished amazed to grown-up soon eventually.</p>
                                <p className="readMore"><a>Read More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="childhoodImg">
                <img data-src={img1} />
                <img data-src={img2} />
                <img data-src={img3} />
                <img data-src={img4} />
            </section>
        </>
    )
}
export default Childhood;