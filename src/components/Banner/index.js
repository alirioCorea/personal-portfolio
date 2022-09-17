import "./styles.css";
import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../../assets/img/header-img.svg";

export default function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate= ["Web Developer", "Software Engineer", "Front-End", "UI/UX Designer", "Freelancer"];
    const [txt, setTxt] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        }
    }, [txt]);

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullTxt = toRotate[i];
        let updatedText=isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
        setTxt(updatedText);

        if(isDeleting ){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullTxt){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

        
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='aligh-items-centers'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portoflio</span>
                    <h1>{`Hi I'm Josué Corea `}<span className='wrap'>{txt}</span></h1>
                    <p>High school graduate with experience in software development, using technologies such as CSS, HTML, Java, GitHub together with Slack; collaborating as a designer, layout designer and developer I am looking for an opportunity to collaborate, support and become an expert in the area, I am passionate about technology, I like challenges and never stop learning.</p>
                    <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5} className='banner-img'>
                    <img src={headerImg} alt="Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
