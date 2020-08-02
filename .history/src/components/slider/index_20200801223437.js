import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import "swiper/css/swiper.css";
import Swiper from "swiper";

function Slider (props) {

    return (
        <SliderContainer>
            <div className="slider-container">
                <div className="swiper-wrapper">

                </div>
            </div>
        </SliderContainer>
    );
}

export default React.memo (Slider)