import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';


const Testimonial = () => {
  const data = [
    {
      name: "Thu",
      position: "CEO",
      des: "For all available methods, go hereFor all available methods, go hereFor all available methods, go hereFor all available methods, go hereFor all available methods, go here",
      img: "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-co-rang-khenh-dang-yeu-de-thuong.jpg",
    },
    {
      name: "Hiền Hồ",
      position: "Casi",
      des: "Hồ Thị Hiền, thường được biết đến với nghệ danh Hiền Hồ, là một nữ ca sĩ người Việt Nam. Hồ Thị Hiền, thường được biết đến với nghệ danh Hiền Hồ, là một nữ ca sĩ người Việt Nam.",
      img: "https://icdn.24h.com.vn/upload/1-2022/images/2022-03-21/hienho40-1647833459-43-width650height812.jpg",
    },
    {
      name: "Midu",
      position: "Người mẫu",
      des: "Đặng Thị Mỹ Dung thường được biết đến với nghệ danh Midu, là một nữ diễn viên, giảng viên, người mẫu ảnh kiêm doanh nhân người Việt Nam. Cô từng tham gia phim điện ảnh Thiên mệnh anh hùng của đạo diễn Victor Vũ.",
      img: "https://phapluatxahoi.kinhtedothi.vn/stores/news_dataimages/2022/102022/18/15/186f241908b492c36559008e072623cd.jpg?rt=20221018155821",
    },
    {
      name: "Hà Nhi",
      position: "Casix",
      des: "Hà Nhi, sinh năm 1994, là một trong những giọng ca được nhắc đến nhiều trong thời gian qua. Tên tuổi của cô phủ sóng mạnh hơn sau khi tham gia game show Ca sĩ mặt nạ trong vai Miêu Quý Tộc. Trước đó, Hà Nhi bắt đầu nổi lên nhờ những video hát live, lan tỏa trên nền tảng TikTok.",
      img: "https://vnn-imgs-f.vgcloud.vn/2021/10/20/16/ha-nhi-ra-album-lau-phai-do-ket-gan-5-thang-o-phu-quoc-1.jpg",
    },
    {
      name: "Hoàng Yến ChiBi",
      position: "TikToker",
      des: "Nguyễn Hoàng Yến, thường được biết đến với nghệ danh Hoàng Yến Chibi, là một nữ ca sĩ, diễn viên, người mẫu ảnh và người dẫn chương trình người Việt Nam.",
      img: "https://vtv1.mediacdn.vn/thumb_w/640/2020/3/6/vov2245-15834706253551367304187.jpg",
    },
    {
      name: "HariWoon",
      position: "MC",
      des: "Lưu Esther, được biết đến với nghệ danh Hari Won là một nữ ca sĩ, diễn viên và người dẫn chương trình mang hai dòng máu Việt Nam và Hàn Quốc. Cô chính thức hoạt động nghệ thuật ở Việt Nam kể từ năm 2014",
      img: "https://images2.thanhnien.vn/Uploaded/haoph/2022_11_30/hari-won-1-8601.png",
    },
    {
      name: "Nhã Phương",
      position: "Diễn viên",
      des: "Trần Thị Nhã Phương nổi tiếng với nghệ danh Nhã Phương hay Nabi Nhã Phương, là một nữ diễn viên điện ảnh - truyền hình người Việt Nam",
      img: "https://icdn.dantri.com.vn/thumb_w/640/2018/9/14/nguoi-dep9-1536876873971333744093.jpg",
    },
    {
      name: "Nam em",
      position: "Ca Sĩ",
      des: "Nam Em là một hoa hậu, ca sĩ, diễn viên và người mẫu nổi tiếng người Việt Nam. Trước đây, Nam Em là Quân nhân và đã ra quân để hoạt động nghệ thuật. Cô nổi danh khi đăng quang Hoa khôi Đồng bằng sông Cửu Long 2015 và đại diện Việt Nam dự thi Quốc tế Hoa hậu Trái Đất 2016.",
      img: "https://zmp3-photo.zadn.vn/avatars/0/8/f/6/08f684039151576cf256a9972b4ca63f.jpg",
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="Testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
              <div className="content-slider" key={index} style={{background:colors[index]}}>
                <img
                  src={item.img}
                  alt="testimonal_image"
                  className="center-image"
                />
                <p>{item.des}</p>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
