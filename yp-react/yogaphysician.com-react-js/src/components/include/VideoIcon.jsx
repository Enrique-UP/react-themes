function VideoIconTag(props) {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-3">
                <a href={props.link} target="_blank" className="videoIconArea">
                    <i className="icon">&#xf1c8;</i>
                    <p className="heads">{props.head}</p>
                    {/*<p className="text">{props.text}</p>  
                         data-aos="fade-up"
                    */}
                    <i className="icon">&#xf178;</i>
                </a>
            </div>{/* col */}
        </>
    )
}

const VideoIcon = () => {
    const Videodata = [
        {
            link: "https://www.youtube.com/watch?v=iHn5ofB0H1g",
            head: "What is yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=fCWDGbT2lsA",
            head: "Why did yoga evolve and how long has it existed?"
        },
        {
            link: "https://www.youtube.com/watch?v=04Shp7-BeLU",
            head: "Is yoga scientific?"
        },
        {
            link: "https://www.youtube.com/watch?v=YBipMh5VtXo",
            head: "Can we compare the yoga science with medicine?"
        },
        {
            link: "https://www.youtube.com/watch?v=lTk-nUQJTZ0",
            head: "How did yoga survive for so long?"
        },
        {
            link: "https://www.youtube.com/watch?v=deDBwzMOKJ8",
            head: "In the present time how relevant is it to prescribe yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=swtLu10giG4",
            head: "What are the disorders that yoga has been efficatious?"
        },
        {
            link: "https://www.youtube.com/watch?v=PV67YDF55Ac",
            head: "Are medical practitioners prescribing yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=sw2sePsNlRY",
            head: "What are the side effects and long-term consequences of yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=uRipdmEWk2I",
            head: "Is it a way of life?"
        },
        {
            link: "https://www.youtube.com/watch?v=uRipdmEWk2I",
            head: "Celebreties taking to yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=YG_6TqbO_xo",
            head: "When did you get interested in yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=etKSKhMTXRU",
            head: "How and when should one start practicing yoga?"
        },
        {
            link: "https://www.youtube.com/watch?v=vQW6tBbQD2k",
            head: "Yoga diet"
        },
        {
            link: "https://www.youtube.com/watch?v=ntVVRGp6q6g",
            head: "How are your patients benefiting?"
        },
        {
            link: "https://www.youtube.com/watch?v=pUIv6x66lxQ",
            head: "What is your message?"
        },
        {
            link: "https://www.youtube.com/watch?v=HFJviQejbVM",
            head: "What is pranayama?"
        },
        {
            link: "https://www.youtube.com/watch?v=v_7geYkja0E",
            head: "What is chanting yoga and how does it work?"
        },
        {
            link: "https://www.youtube.com/watch?v=96kOsckMw44",
            head: "How does spirituality help in medicine?"
        },
        {
            link: "https://www.youtube.com/watch?v=i0LBgVQM0kk&feature=youtu.be",
            head: "Kundlini yoga"
        }
    ];
  return (
    <>
        <section className="sectionTB videoIcon">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Lorem</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Videos</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container">
                <div className="row mb">
                    {
                        Videodata.map((val, KeyName1) => {
                            return <VideoIconTag key={KeyName1} head={val.head} text={val.text} link={val.link} />
                        })
                    }
                </div>{/* row */}
            </div>{/* container */}
            {/* 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn center">
                            <a href="#" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </section>
    </>
  );
}

export default VideoIcon;
