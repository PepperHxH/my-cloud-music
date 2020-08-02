import React from 'react';
import Slider from '../../components/Slider';

function Recommend(props) {

    return (
        <div>
            <Slider bannerList={bannerList}></Slider>
        </div>
    )
}

export default React.memo (Recommend);