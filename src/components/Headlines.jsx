import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Headlines = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=167504db12f948438ccfdba8b685b07e"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const newsData = await response.json();
        setNews(newsData.articles);
        console.log(newsData.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      {news.map((article, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-lg p-4 shadow-md my-7">
            <img src={article.urlToImage} className="w-full h-50 object-cover mb-4 rounded" alt={article.title} />
            <div>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Headlines;
