import React from 'react'
import ProductDataShow from '../components/atoms/ProductDataShow'
import useFetchdata from '../customHooks/useFetchdata'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Home() {

    // let ans = useFetchdata("https://fakestoreapi.com/products");
    // console.log(ans);

    let menswear = useFetchdata(process.env.REACT_APP_API + "/products/category/men's clothing")
    console.log(menswear);

    let womenswear = useFetchdata(process.env.REACT_APP_API + "/products/category/women's clothing")
    console.log(womenswear);


    return (
        <>

            {/* banner section */}
            <section>
                <div className=''>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <section className="hero-slide">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="hero-video"
                                >
                                    <source src="videos/COO.mp4" type="video/mp4" />
                                </video>

                                <div className="overlay"></div>

                                <div className="hero-content">
                                    <div className="hero-left">
                                        <h1>Call of Osiris</h1>

                                        <a href="#" className="take-look">
                                            <span></span>
                                            <p>Take A Look</p>
                                        </a>

                                    </div>

                                    <div className="hero-right">
                                        <img
                                            src="images/skulls.webp"
                                            alt="Osiris"
                                        />
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <section className="hero-slide">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="hero-video"
                                >
                                    <source src="videos/B4B.mp4" type="video/mp4" />
                                </video>

                                <div className="overlay"></div>

                                <div className="hero-content">
                                    <div className="hero-left">
                                        <h1>Ancient Warrior</h1>

                                        <a href="#" className="take-look">
                                            <span></span>
                                            <p>Take A Look</p>
                                        </a>

                                    </div>

                                    <div className="hero-right">
                                        <img
                                            src="images/wanderer.webp"
                                            alt="Warrior"
                                        />
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </section>
            {/* banner section */}

            {/* about section */}
            <section className='bg1'>
                <div className=''>
                    <div className='row align-items-center'>
                        <div className='d-sm-none d-block mb-3'>
                            <img src='images/about-img.webp' className='img-fluid' />
                        </div>
                        <div className='col-lg-12'>
                            <div className='about'>
                                <h2>About Hexar Family</h2>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className='about'>
                                <p>Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.</p>

                                <p>We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experiences.</p>
                                <p>With Hexar, you're not just working with a studio — you're partnering with a creative powerhouse trusted by global brands.</p>
                                <div className='text-center'>
                                    <img src='images/hexar-logo1.png' />
                                </div>
                                <div className='text-center aboutlogo'>
                                    <p>The Parent Organisation</p>
                                    <img src='images/line.png' />
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className='logo-1 p-2'>
                                            <img src='images/head-hoppers-logo.png' className='img-fluid' />
                                            <p>Character / Hair Specialist</p>
                                        </div>
                                        <div className='logo-2 p-2'>
                                            <img src='images/ares-logo.png' className='img-fluid' />
                                            <p>Concept / VFX / Technical Art / Co-dev</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section */}

            <hr className='border border-white' />

            {/* mission-vision section */}
            <section className='bg2'>
                <div className=''>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 1200 1200"
                            >
                                <defs>
                                    <mask id="diamondMask">
                                        <rect width="1200" height="1200" fill="black" />

                                        <rect x="-460" y="80" width="1020" height="1020" rx="50" ry="50" fill="white" transform="rotate(45 -80 380)"></rect>

                                        <rect x="535.5" y="120" width="280" height="280" rx="25" ry="25" fill="white" transform="rotate(45 480 285)"></rect>

                                        <rect x="650.5" y="500.5" width="280" height="280" rx="25" ry="25" fill="white" transform="rotate(45 480 565)"></rect>

                                        <rect x="800.5" y="270.5" width="280" height="280" rx="25" ry="25" fill="white" transform="rotate(45 670 455)"></rect>

                                    </mask>
                                </defs>

                                <foreignObject
                                    width="1200"
                                    height="1200"
                                    mask="url(#diamondMask)"
                                >
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    >
                                        <source src="https://hexar-rgkn.onrender.com/videos/Hexar%20Video.mp4" />
                                    </video>
                                </foreignObject>
                            </svg>
                        </div>
                        <div className='col-lg-6'>
                            <div className='mission'>
                                <div className='mb-5'>
                                    <h2 className='mb-3'>Our Mission</h2>
                                    <p>Our mission is to provide cutting-edge 3D arts solutions with exceptional quality and innovation. We bring creativity to life through immersive visuals, pushing artistic boundaries.</p>
                                </div>
                                <div className=''>
                                    <h2 className='mb-3'>Our Vision</h2>
                                    <p>Inspire and empower through transformative 3D arts. We aim to be a trusted partner known for our visionary approach, technical expertise,and commitment to excellence. By embracing creativity and staying at the forefront of technology, we shape the future and leave a lasting impact in the industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* mission-vision section */}


            {/* Banner section start */}
            <section className='pt-3 pb-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <img src='images/banner2.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner section close */}

            {/* Men's Clothing section start */}
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 mb-4 text-center'>
                            <h2>Trending Men's Clothing</h2>
                        </div>
                        <ProductDataShow record={menswear} />
                    </div>
                </div>
            </section>

            {/* Women's Clothing section start */}
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 mb-4 text-center'>
                            <h2>Trending Women's Clothing</h2>
                        </div>
                        <ProductDataShow record={womenswear} />
                    </div>
                </div>
            </section>

            {/* categories section start */}
            {/* <section>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h2>Trending Categories</h2>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/dress.png' className='img-fluid' />
                        <h4>Dresses</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/shirts.png' className='img-fluid' />
                        <h4>Shirts & T-shirts</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/denim.png' className='img-fluid' />
                        <h4>Denims</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/watch.png' className='img-fluid' />
                        <h4>Watches</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/kurta.png' className='img-fluid' />
                        <h4>Kurtas & Kurtis</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/handbag.png' className='img-fluid' />
                        <h4>Handbags</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/kids.png' className='img-fluid' />
                        <h4>Kids Wear</h4>
                    </div>
                </div>
                <div className='col-lg-3 my-3'>
                    <div className='category_box text-center'>
                        <img src='images/fragnance.png' className='img-fluid' />
                        <h4>Fragrances</h4>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
            {/* categories section close */}



        </>
    )
}