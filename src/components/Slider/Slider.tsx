import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from 'src/assets/slider_1.webp';
import slider_2 from 'src/assets/slider_2.webp';
import slider_3 from 'src/assets/slider_3.webp';
import './slider.scss';

const sliderImgs = [slider_1, slider_2, slider_3];

const HeaderSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider-content overflow-x-hidden'>
                    <Slider {...settings}>
                        <div className='slider-item'>
                            <img src={sliderImgs[0]} alt="slider" />
                        </div>
                        <div className='slider-item'>
                            <img src={sliderImgs[1]} alt="slider" />
                        </div>
                        <div className='slider-item'>
                            <img src={sliderImgs[2]} alt="slider" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HeaderSlider