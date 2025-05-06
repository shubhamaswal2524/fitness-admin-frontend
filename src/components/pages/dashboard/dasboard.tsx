"use client";

import CommonTable from "@/components/common/commonTable/commonTable";
import DeitPlan from "@/components/common/deitPlan/deitPlan";
import IncomeCard from "@/components/common/incomeCard/incomeCard";
import { Col, Row } from "react-bootstrap";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import demo from "../../../../public/assets/blog_img.png"

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const trainersData = [
    {
      slNo: 1,
      course: "Yoga",
      personalTrainers: 9,
      generalTrainers: 8,
      total: 17,
    },
    {
      slNo: 2,
      course: "Aerobics",
      personalTrainers: 12,
      generalTrainers: 10,
      total: 22,
    },
    {
      slNo: 3,
      course: "Fitness",
      personalTrainers: 14,
      generalTrainers: 12,
      total: 26,
    },
    {
      slNo: 4,
      course: "Body Building",
      personalTrainers: 11,
      generalTrainers: 9,
      total: 20,
    },
    {
      slNo: 5,
      course: "Zumba",
      personalTrainers: 15,
      generalTrainers: 12,
      total: 27,
    },
    {
      slNo: 6,
      course: "Flexibility",
      personalTrainers: 7,
      generalTrainers: 5,
      total: 12,
    },
  ];
  const userdata = [
    {
      id: 1,
      title: "jashan",
      course: "shered code",
      date: "8/9/2025",
      img: demo,
    },
    {
      id: 2,
      title: "shubham",
      course: "shered code",
      date: "8/9/2025",
      img: demo,
    },
    {
      id: 3,
      title: "sharnjeet",
      course: "shered code",
      date: "8/9/2025",
      img: demo,
    },
    
   
  ];

  return (
    <>
      <section className="dashboard">
        <div className="dashboard_head">
          <Row>
            <Col xl={4} lg={12} md={12}>
              <IncomeCard />
            </Col>
            <Col xl={8} lg={12} md={12}>
              <div className="graph_chart_box">
                <ResponsiveContainer className="graph_chart">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                   
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Col>
            <Col xl={8} lg={12}>
              <CommonTable
                fields={[
                  "slNo",
                  "course",
                  "personalTrainers",
                  "generalTrainers",
                  "total",
                ]}
              >
                {trainersData.map((item) => (
                  <tr key={item.slNo}>
                    <td>{item.slNo}</td>
                    <td>{item.course}</td>
                    <td>{item.personalTrainers}</td>
                    <td>{item.generalTrainers}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
              </CommonTable>
            </Col>
            <Col xl={4} lg={6} md={12} >
              <DeitPlan data={userdata} maintitle={"Recent User"}/>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
