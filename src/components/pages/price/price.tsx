"use client";

import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { DumbleIcon, MiniCelenderIcon, MiniDollerIcon, TimeIcon } from "../../../../public/assets/icons";
import PriceCard from "@/components/common/priceCard/priceCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger,SplitText);
const Price = () => {


  useEffect(() => {
    let split = SplitText.create("#price_split_text", { type: "words", aria: "hidden" });
  
    gsap.from(split.words, {
      y: 30,
      opacity: 0,
      // duration: 1,
      ease: "sine.out",
      stagger: 0.1,
      scrollTrigger:{
        trigger:".price_page",
        start:"top 80%",
        end : "top 30%",
        // markers:true,
        scrub : 1,
      } 
    });
  }, []);

  return (
    <div className="price_page">
      <Container>
        <div className="price_page_in">
          <div className="head_price">
            <p>
              {" "}
              <DumbleIcon /> pricing plan
            </p>
            <h1 className="main_heading " id="price_split_text">
              Transform Your Body with Our
              <span>Dynamic Fitness</span> Classes
            </h1>
          </div>
          <div className="card_box">
            <PriceCard className="active" />
            <PriceCard />
      
          </div>
          <ul className="options">
            <li><MiniCelenderIcon/>Get 30 day free trial</li>
            <li><MiniDollerIcon/>No any hidden fees pay</li>
            <li><TimeIcon/>You can cancel anytime</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Price;
