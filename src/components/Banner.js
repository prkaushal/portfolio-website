import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg2 from "../assets/img/header-img2.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const toRotate = ["web Developer", "UI Designer", "Video Editor"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const period = 200;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setisDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Prashant Kaushal`} <br />
              <span
                className="txt-rotate"
                dataPeriod="500"
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              i am  a versatile professional skilled in programming, UI
              design, and freelance video editing. With a knack for
              problem-solving, I crafts seamless user experiences through
              intuitive interfaces. Beyond coding, I brings stories to life
              with dynamic video editing, blending creativity with technical
              finesse. A true polymath, I thrives on the intersection of
              technology and artistry, delivering innovative solutions across
              diverse mediums.
            </p>
            <button onClick={() => console.log("connect")}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg2} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
