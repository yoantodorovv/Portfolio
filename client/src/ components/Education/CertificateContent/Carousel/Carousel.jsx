import { useEffect, useState } from 'react';

import Slider from 'react-slick';

import styles from './Carousel.module.scss'
import './Carousel.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({
    certificates,
    handleSetCurrentCertificate
}) => {
    const [currentCertificateSlide, setCurrentCertificateSlide] = useState(0);

    useEffect(() => {
        console.log('is useEffect');

        if (currentCertificateSlide === 0) {
            console.log('in');
            handleSetCurrentCertificate(certificates[0]);
        } else {
            console.log('in else');
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
        afterChange: afterChangeHandler,
        centerMode: true,
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