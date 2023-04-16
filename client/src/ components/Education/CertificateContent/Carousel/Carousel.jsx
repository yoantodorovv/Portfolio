import { useState } from 'react';

import Slider from 'react-slick';

import styles from './Carousel.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({
    certificates,
    handleSetCurrentCertificate
}) => {
    const [currentCertificate, setCurrentCertificate] = useState(null);

    const afterChangeHandler = (slide) => {
        // console.log(slide);
        // console.log(certificates[slide]);

        // handleSetCurrentCertificate(slide)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        afterChange: afterChangeHandler
    };

    return (
        <Slider {...settings}>
            {certificates.map(x => (
                <div key={x.id} className={styles['cert-img-wrapper']}>
                    <img className={styles['cert-img']} src={x.imageUrl} />
                </div>
            ))}
        </Slider>
    );
}