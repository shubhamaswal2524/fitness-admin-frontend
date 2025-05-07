"use client";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import { Col, Container, Row } from "react-bootstrap";
import { CallIcon } from "../../../../public/assets/icons";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger,SplitText);
const Consultancy = () => {

  useEffect(() => {
    let split = SplitText.create("#consultancy_split_text", { type: "words", aria: "hidden" });
  
    gsap.from(split.words, {
      y: 30,
      opacity: 0,
      // duration: 1,
      ease: "sine.out",
      stagger: 0.1,
      scrollTrigger:{
        trigger:".consultancy",
        start:"top 80%",
        end : "top 30%",
        // markers:true,
        scrub : 1,
      } 
    });
  }, []);

  return (
    <>
      <div className="consultancy">
        <Container>

        <Row>
          <Col lg={6}>
            <div className="consultancy_left"></div>
          </Col>
          <Col lg={6}>
            <div className="consultancy_right">
              <h1 className="main_heading" id="consultancy_split_text">
                Get a <span>Free Consultancy</span>Right Now Here!
              </h1>
              <div className="contact_number">
                <CallIcon/>
                <div>
                  <h4>Need Help?</h4>
                  <p>+91-123-456-789</p>
                </div>
              </div>
              <CommonArrowButton>Make Appointment</CommonArrowButton>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  );
};

export default Consultancy;
