import React from "react";
import "./About.css";
import profilePic from "../../Image/mandz.jpg";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={profilePic} alt="Mẫn đẹp trai vãi ò" />
          </div>
        </div>
        </Fade>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About me</h5>
              <span className="line"></span>
            </div>
            <Fade bottom>
            <h5>
              Em tên là Cù Minh Mẫn, em năm nay em 9 tuổi đang là học
              sinh lớp 3A trường tiểu Phan Bội Châu. Em thích màu hồng, thích xem
              tivi và đọc sách truyện. Em rất giỏi đấm nhau. từ lớp 1 đến lớp 5
              em chưa ngán thằng nào kể cả mấy thằng lớp 6. Hễ cứ đụng vào em hoặc 
              là mấy thằng bạn hay thằng đệ của em là em đấm cho sưng mồm. Em tên là Cù Minh Mẫn, em năm nay em 9 tuổi đang là học
              sinh lớp 3A trường tiểu Phan Bội Châu. Em thích màu hồng, thích xem
              tivi và đọc sách truyện. Em rất giỏi đấm nhau. từ lớp 1 đến lớp 5
              em chưa ngán thằng nào kể cả mấy thằng lớp 6. Hễ cứ đụng vào em hoặc 
              là mấy thằng bạn hay thằng đệ của em là em đấm cho sưng mồm. Em tên là Cù Minh Mẫn, em năm nay em 9 tuổi đang là học
              sinh lớp 3A trường tiểu Phan Bội Châu. Em thích màu hồng, thích xem
              tivi và đọc sách truyện. Em rất giỏi đấm nhau. từ lớp 1 đến lớp 5
              em chưa ngán thằng nào kể cả mấy thằng lớp 6. Hễ cứ đụng vào em hoặc 
              là mấy thằng bạn hay thằng đệ của em là em đấm cho sưng mồm. 
              
            </h5>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
