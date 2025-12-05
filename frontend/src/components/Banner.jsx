import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <section className="banner-area" style={{ marginTop: "80px" }}>
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            className="mySwiper"
                        >

                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="row single-slide d-flex align-items-center">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="banner-content">
                                            <h1>Nike New <br />Collection!</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Exercitationem, repudiandae.
                                            </p>
                                            <div className="add-bag d-flex align-items-center">
                                                <a className="add-btn" href="">
                                                    <span className="lnr lnr-cross"></span>
                                                </a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="banner-img">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/banner/banner-img.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="row single-slide d-flex align-items-center">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="banner-content">
                                            <h1>Nike New <br />Collection!</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Exercitationem, repudiandae.
                                            </p>
                                            <div className="add-bag d-flex align-items-center">
                                                <a className="add-btn" href="">
                                                    <span className="lnr lnr-cross"></span>
                                                </a>
                                                <span className="add-text text-uppercase">Add to Bag</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="banner-img">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/banner/banner-img.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;


