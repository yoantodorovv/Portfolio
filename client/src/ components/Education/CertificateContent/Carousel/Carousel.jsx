import { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import styles from './Carousel.module.scss'
import './Carousel.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({
    sliderRef,
    certificates,
    handleSetCurrentCertificate
}) => {
    const [currentCertificateSlide, setCurrentCertificateSlide] = useState(0);

    useEffect(() => {
        if (currentCertificateSlide === 0) {
            setCurrentCertificateSlide(0);
            handleSetCurrentCertificate(certificates[0]);
        } else {
            handleSetCurrentCertificate(certificates[currentCertificateSlide]);
        }
    }, [certificates]);

    const afterChangeHandler = (slide) => {
        setCurrentCertificateSlide(slide)
        handleSetCurrentCertificate(certificates[slide])
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        afterChange: afterChangeHandler,
    };

    return (
        <Slider ref={sliderRef} {...settings}>
            {certificates?.map(x => (
                <div key={x.id} className={styles['cert-img-wrapper']}>
                    <img className={styles['cert-img']} src={x.imageUrl} />
                </div>
            ))}
        </Slider>
    );
}