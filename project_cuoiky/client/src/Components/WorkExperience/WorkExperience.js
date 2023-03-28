import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiShipWheel } from "react-icons/gi";

const WorkExperience = () => {
  const data = [
    {
      companyname: "google",
      position: "Full Stack Developer",
      des: "MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js frontend framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any frontend JavaScript framework can work.",
      year: "2022-2023",
      techskills: [
        { techname: "NodeJs" },
        { techname: "Express Js" },
        { techname: "React Js" },
        { techname: "Material UI" },
      ],
    },
    {
      companyname: "Travala.com",
      position: "Backend Developer",
      des: "Đầu tiên hãy tìm hiểu nó là cái gì, chúng khác dữ liệu quan hệ chỗ nào và tại sao cần dùng đến nó. Có rất nhiều sự lựa chọn, chỉ cần tìm kiếm một chút và so sánh các feature sẽ thấy được sự khác nhau. Một số option phổ biến gồm có MongoDB, Cassandra, RethinkDB và Couchbase. Nếu phải chọn một thì bạn nên chọn MongoDB.",
      year: "2022-2023",
      techskills: [
        { techname: "NodeJs" },
        { techname: "Express Js" },
        { techname: "MongoDB" },
        { techname: "Lavarel" },
      ],
    },
    {
      companyname: "Fruit.Com",
      position: "Frontend Developer",
      des: "Về cơ bản, một lập trình viên Front end (Front end developer) sẽ chịu trách nhiệm phát triển giao diện bên ngoài của một website dựa vào những bản thiết kế. Những giao diện website đó sẽ được người dùng nhìn thấy đầu tiên khi truy cập vào trang web thông qua trình duyệt.",
      year: "2022-2023",
      techskills: [
        { techname: "ReactJs" },
        { techname: "VueJs" },
        { techname: "AngularJs" },
        { techname: "Tailwin" },
      ],
    },
    {
      companyname: "LienMinhMocBoc.Com",
      position: "Programming Game",
      des: " Tôi biết việc viết code là đáng sợ lúc đầu khi bạn gặp phải những rào cản liên tục thất bại. Nó không có nghĩa là bạn dở code mà đó là một thách thức, bạn sẽ phải thất bại để có được thành công.Nhưng nó cũng như bất kỳ kỹ năng nào khác khi bạn sẽ tốn thời gian để học hỏi và thuần thục.",
      year: "2022-2023",
      techskills: [
        { techname: "Hulk" },
        { techname: "Misc" },
        { techname: "ART" },
        { techname: "UI" },
      ],
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
    <div className="container worexperience-section" id="Work-Experience">
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
              icon={<GiShipWheel />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>
              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
