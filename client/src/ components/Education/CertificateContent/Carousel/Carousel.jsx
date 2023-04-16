import { useEffect, useState } from 'react';

import Slider from 'react-slick';

import styles from './Carousel.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({
    certificates,
    handleSetCurrentCertificate
}) => {
    const afterChangeHandler = (slide) => {
        handleSetCurrentCertificate(certificates[slide])
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        afterChange: afterChangeHandler
    };

    return (
        <Slider {...settings}>
            {certificates?.map(x => (
                <div key={x.id} className={styles['cert-img-wrapper']}>
                    <img className={styles['cert-img']} src={x.imageUrl} />
                </div>
            ))}
        </Slider>
    );
}