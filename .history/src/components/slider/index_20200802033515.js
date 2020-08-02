import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import "swiper/css/swiper.css";
import Swiper from "swiper";

function Slider (props) {
    const [ sliderSwiper, setSliderSwiper ] = useState(null);
    const { bannerList } = props;

    return (
        <SliderContainer>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        bannerList.map(slider => {
                            return (
                                <div className="swiper-slide" key={slider.imageUrl}>
                                    <div className="slider-nav">
                                        <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </SliderContainer>
    );
}

export default React.memo (Slider)