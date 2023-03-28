import React from "react";
import "./Education.css";
import {GiGraduateCap} from 'react-icons/gi'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "OxFord University",
      degree: "M.sc in Software Engineering",
      year: "2020-2023",
      des: "Trường SNU với cơ sở vật chất tiên tiến, hiện đại đầy cung cấp cho sinh viên môi trường học tập tốt nhất. Tốt nghiệp từ SNU sẽ đảm bảo cho bạn có một tấm bằng đước các doanh nghiệp không riêng gì Hàn Quốc mà cả Quốc tế công nhận. Đảm bảo cho các e sự thành công trong tương lai.",
    },
    {
      name: "Seoul National University – SNU",
      degree: "MVP in Frontend",
      year: "2017-2021",
      des: "Là một trong những trường đại học lâu đời nhất của Nhật Bản. Trường được xếp hạng thứ 75 trong danh sách đại học chất lượng nhất thế giới. Là 1 trong 7 trường đại học hoàng gia tại sứ sở hoa anh đào. Trường có tất cả 4 cở sở tại các thành phố lớn tại Nhật Bản (Osaka, Suita, Minoh, Toyonaka).",
    },
    {
      name: " Australian National University.",
      degree: "Best Backend",
      year: "2019-2023",
      des: "Đến với các trường đại học của Mỹ các em sẽ được hưởng nền giáo dục cũng như môi trường học tập đạt cấp Quốc tế. Nhưng kèm theo đó thì học phí cũng cao hơn so với các nước khác. Tuy nhiên, Mỹ được coi là thiên đương học bổng với những chính sách rộng rãi cho cả sinh viên Quốc tế.",
    },
    {
      name: "Sungkyunkwan University",
      degree: "Pro.Fullstack",
      year: "2015-2019",
      des: "Là trường Đại học duy nhất của Úc được thành lập bởi Đạo luật Nghị viện liên bang năm 1946. Trường đại học quốc giá Úc đứng đầu toàn nước Úc về chất lượng đào tạo. Đứng thứ 20 trong danh sách các trường Đại học hàng đầu thế giới theo QS World University Ranking 2018.",
    },
  ];
  const colors = [
    "#696969",
    "#FF34B3",
    "#2F4F4F",
    "#8B4513",
    "#CD853F",
    "#CDB38B",
    "#CD96CD",
    "#8B8386",
    "#8470FF",
    "#7CCD7C",
    "#ADFF2F",
    "#556B2F",
    "#CD5555",
    "#CD3333",
    "#FF7F00",
    "#FF6EB4",
    "#8B7B8B",
  ];

  return (
    <div className="container education-section" id="Education">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        <VerticalTimeline lineColor="#ff1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #ffbb24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<GiGraduateCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degree}
              </h4>
              
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
