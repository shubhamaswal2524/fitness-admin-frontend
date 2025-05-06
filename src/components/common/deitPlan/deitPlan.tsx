"use client";

import Image from "next/image";

interface ProfileCardProps {
  data: any;
  maintitle: any;
}

const DeitPlan = ({ data , maintitle }: ProfileCardProps) => {
  return (
    <>
      <div className="deit_card">
        <h1 className="deit_plan">{maintitle}</h1>
        <div className="text_content">
          <ul>
            {data.map((item: any, index: number) => (
              <li key={index}>
                <Image src={item.img} alt="" />
                <div className="text">
                <h2>{item.title}</h2>
                <h5>
                  <span>{item.course}</span>
                  {item.date}
                </h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DeitPlan;
