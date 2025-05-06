
"use client";
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import banner from "../../../../public/assets/aboutusimg.png"
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import gsap from "gsap";
import Tilt from 'react-parallax-tilt';

gsap.registerPlugin(ScrollTrigger,SplitText);
const AboutPage = () => {

  useEffect(() => {
    let split = SplitText.create("#about_split_text", { type: "words", aria: "hidden" });
  
    gsap.from(split.words, {
      y: 30,
      opacity: 0,
      // duration: 1,
      ease: "sine.out",
      stagger: 0.1,
      scrollTrigger:{
        trigger:".about_page",
        start:"top 80%",
        end : "top 30%",
        // markers:true,
        scrub : 1,
      } 
    });
  }, []);

    return (
      <section className='about_page'>
       <Container>
        <div className="about_page_in">
        <Row>
            <Col lg={6}>
            <div className="about_page_left">
            <Tilt>
                <Image src={banner} alt=""/>
                </Tilt>
            </div>
            </Col>
            <Col lg={6}>
            <div className="about_page_right">
                <h5></h5>
                <h2 id="about_split_text">A Roadmap to Total Body
                <span>fitness</span></h2>
                <p>Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices. Achieving and maintaining optimal body fitness contributes to overall health, vitality. Joining fitness classes, sports teams, or workout groups provides social support.</p>
                <ul>
                    <li>
                    <span>01</span>Fitness Training</li>
                    <li><span>02</span>Regular Routine</li>
                </ul>
                <p>Gradually increasing the intensity, duration, or complexity of exercises ensures ongoing improvements in strength, endurance, and overall fitness.</p>
              <div className="action_box">
              <CommonArrowButton >more about us</CommonArrowButton>
              </div>
            </div>
            </Col>
        </Row>
        </div>
       </Container>
      </section>
    )
  }
  
  export default AboutPage
  