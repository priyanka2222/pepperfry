import React from "react";

import '../styles/HomeStatic.css'


export const HomeStatic = () => {

    return (
        
        <div className="main">
            
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <div className="main-one">
                <h1 className="one-head">Make Room For Memories</h1>
                <div className="one">
                    <div className="one1">
                        <img className="img1" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_memories_web_21122021_1.jpg" alt="" />
                        <p className="one2">Living Room</p>
                    </div>
                    <div className="one1">
                        <img className="img1" src="https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_WFH.jpg" alt="" />
                        <p className="one2">Work From Home</p>
                    </div>
                    <div className="one1">
                        <img className="img1" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_memories_web_21122021_3.jpg" alt="" />
                        <p className="one2">Bedroom</p>
                    </div>
                    <div className="one1">
                        <img className="img1" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_memories_web_21122021_4.jpg" alt="" />
                        <p className="one2">Kids Room</p>
                    </div>
                </div>
            </div>
            <div className="main-one">
                <h1 className="one-head">Infuse Oodles Of Warmth</h1>
                <div className="two">
                    <div className="two2">
                        <img className="img21" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_invoke_web_24122021_1.jpg" alt="" />
                    </div>
                    <div className="two2">
                        <img className="img21" src="https://ii3.pepperfry.com/media/wysiwyg/banners/WEB_SIDEBOARDS.jpg" alt="" />
                    </div>
                    <div className="two3">
                        <img className="img22" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_invoke_web_27122021_3.jpg" alt="" />
                        <img className="img22" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_invoke_web_24122021_4.jpg" alt="" />
                        <img className="img22 two-space" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_invoke_web_24122021_5.jpg" alt="" />
                        <img className="img22 two-space" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_invoke_web_24122021_6.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="change-color">
                <div className="main-two">
                    <div className="three three-space">
                        <div className="one1">
                            <h1 className="one-head">We’ve Got Your Style</h1>
                            <p className="one2 three-text">Your home is a reflection of you. Nail your aesthetic with products our stylists love and recommend</p>
                            <p className=" one2 three-text three-redcolor">View all Styles</p>
                        </div>
                        <div className="three1">
                            <img className="img3" src="https://ii2.pepperfry.com/media/wysiwyg/banners/homepage_style_web_24122021_1.jpg" alt="" />
                            <h6 className="three-head">Modern</h6>
                            <p className="one2 three-img-head-color">Form Meets Function</p>
                        </div>
                        <div className="three1">
                            <img className="img3" src="https://ii3.pepperfry.com/media/wysiwyg/banners/homepage_style_web_24122021_3.jpg" alt="" />
                            <h6 className="three-head">Traditional</h6>
                            <p className="one2 three-img-head-color">Old World Charm</p>
                        </div>
                        <div className="three1">
                            <img className="img3" src="https://ii1.pepperfry.com/media/wysiwyg/banners/homepage_style_web_24122021_2.jpg" alt="" />
                            <h6 className="three-head">Industrial</h6>
                            <p className="one2 three-img-head-color">Perfect Imperfections</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-one main-swiper swiper">
                <div className="main-one-head">
                    <h1 className="one-head ">Handpicked For Your Home</h1>

                    <div className="arrow"> <span className="swiper-button-prev"> <i class="uil uil-angle-left-b"></i> </span> 
                        <span className="swiper-button-next"> <i class="uil uil-angle-right-b"></i>  </span></div>
                    {/* <span class="swiper-button-prev">
                        <i class="uil uil-angle-left-b swiper-icon"></i>
                    </span>
                    <span class="swiper-button-next">
                        <i class="uil uil-angle-right-b swiper-icon"></i>
                    </span> */}

                    {/* <!-- Add Pagination --> */}
                    <div class="swiper-pagination"></div>

                </div>
                <div className="two swiper-wrapper">

                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_1.jpg" alt="" />
                        <h6 className="three-head">Tishya</h6>
                        <p className="one2 three-img-head-color">Artsy Cutwork</p>
                    </div>
                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_2.jpg" alt="" />
                        <h6 className="three-head">Fidel</h6>
                        <p className="one2 three-img-head-color">Channel Quilted Back</p>
                    </div>
                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_3.jpg" alt="" />
                        <h6 className="three-head">Avantika</h6>
                        <p className="one2 three-img-head-color">Mughal Grandeur</p>
                    </div>
                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_4.jpg" alt="" />
                        <h6 className="three-head">Tectona</h6>
                        <p className="one2 three-img-head-color">Elegant & Sleek</p>
                    </div>
                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_5.jpg" alt="" />
                        <h6 className="three-head">Siramika</h6>
                        <p className="one2 three-img-head-color">Painted Majolica tiles</p>
                    </div>
                    <div className="three1 swiper-slide">
                        <img className="img4" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_6.jpg" alt="" />
                        <h6 className="three-head">Azalea</h6>
                        <p className="one2 three-img-head-color">Glam & Grace</p>
                    </div>
                </div>


            </div>
            <div className="main-one">
                <div>

                    <div className="main-one-head">
                        <h1 className="one-head">Cherry On The Top</h1>
                        <div className="arrow"> <span className="swiper-button-prev"> <i class="uil uil-angle-left-b"></i> </span>
                            <span className="swiper-button-next"> <i class="uil uil-angle-right-b"></i>  </span></div>
                    </div>
                </div>

                <div className="five">

                    <div className="three1">
                        <img className="img5" src="https://ii2.pepperfry.com/media/wysiwyg/banners/home_decor_web_21122021_1.jpg" alt="" />
                        <h6 className="three-head">Metal Wall Art</h6>
                        <p className="one2 three-img-head-color">947 Options</p>
                    </div>
                    <div className="three1">
                        <img className="img5" src="https://ii3.pepperfry.com/media/wysiwyg/banners/WEB_TABLELAMP.jpg" alt="" />
                        <h6 className="three-head">Table Lamps</h6>
                        <p className="one2 three-img-head-color">2307 Options</p>
                    </div>
                    <div className="three1">
                        <img className="img5" src="https://ii1.pepperfry.com/media/wysiwyg/banners/home_decor_web_21122021_3.jpg" alt="" />
                        <h6 className="three-head">Pots and Planters</h6>
                        <p className="one2 three-img-head-color">1105 Options</p>
                    </div>
                    <div className="three1">
                        <img className="img5" src="https://ii2.pepperfry.com/media/wysiwyg/banners/home_decor_web_31122021_41.jpg" alt="" />
                        <h6 className="three-head">Carpets</h6>
                        <p className="one2 three-img-head-color">2184 Options</p>
                    </div>
                    <div className="three1">
                        <img className="img51" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_collection_web_21122021_5.jpg" alt="" />
                        <h6 className="three-head">Mandir</h6>
                        <p className="one2 three-img-head-color">396 Options</p>
                    </div>
                    <div className="three1">
                        <img className="img5" src="https://ii1.pepperfry.com/media/wysiwyg/banners/home_decor_web_21122021_6.jpg" alt="" />
                        <h6 className="three-head">Mirrors</h6>
                        <p className="one2 three-img-head-color">767 Options</p>
                    </div>
                </div>
            </div>
            <div className="main-one">
                <h1 className="one-head">Decor Brands You Need To Know About</h1>
                <div className="six">

                    <div className="three1">
                        <img className="img6" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-1-27-dec.jpg" alt="" />
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-6-27-dec.jpg" alt="" />
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-5-27-dec.jpg" alt="" />
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-4-27-dec.jpg" alt="" />
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-3-27-dec.jpg" alt="" />
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-2-27-dec.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="main-one">
                <div className="seven">

                    <div className="seven1">
                        <img className="img7" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_explore_mattresses.jpg" alt="" />
                    </div>
                    <div className="seven1">
                        <img className="img7" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_explore_kitchen.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <img className="img8" src="https://ii1.pepperfry.com/images/hp_more_from_store_bg.jpg" alt="Snow" />
                <div className="main-one">
                    <h1 className="one-head top-left">More From The Store</h1>
                    <div className="top-left-1">
                        <h4 className="text-head">Furniture</h4>
                        <div className="text-img">Sofas & Recliners</div>
                        <div className="text-img">Seating</div>
                        <div className="text-img">Chairs</div>
                        <div className="text-img">Beds</div>
                        <div className="text-img">Cabinetry</div>
                        <div className="text-img">Tables</div>
                        <div className="text-img">Dining</div>
                        <div className="text-img">Kids & Teens</div>
                        <div className="text-img">Home Office</div>
                        <div className="text-img">Sofa Chairs</div>
                        <div className="text-img">Entertainment Units</div>
                        <div className="text-img">Outdoor</div>
                        <div className="text-img">Bar Furniture</div>
                        <div className="text-img">Furniture & Home Services</div>
                    </div>

                    <div className="top-left-2">
                        <h4 className="text-head"> Sofas & Recliners</h4>
                        <div className="text-img">By Size</div>
                        <div className="text-img">By Type</div>
                        <div className="text-img">By Style</div>
                        <div className="text-img">By Material</div>
                        <div className="text-img">Sofa Chairs</div>
                    </div>

                    <div className="bottom-left-1">
                        <h4 className="text-head"> Décor</h4>
                        <div className="text-img">Wall Shelves & Cabinets</div>
                        <div className="text-img">Clocks</div>
                        <div className="text-img">Wall Art</div>
                        <div className="text-img">Table Décor</div>
                        <div className="text-img">Spiritual</div>
                        <div className="text-img">Home Garden</div>
                        <div className="text-img">Tableware</div>
                        <div className="text-img">Kids Décor</div>
                        <div className="text-img">Mirrors</div>
                        <div className="text-img">Photo Frames</div>
                        <div className="text-img">Accent Furniture</div>
                    </div>

                    <div className="top-left-3">
                        <h4 className="text-head">Beds</h4>
                        <div className="text-img">By Size</div>
                        <div className="text-img">By Storage</div>
                        <div className="text-img">Kids & Teens</div>
                        <div className="text-img">By Material</div>
                        <div className="text-img">By Style</div>
                        <div className="text-img">Mattresses</div>
                    </div>


                    <div className="bottom-left-2">
                        <h4 className="text-head">Furnishings</h4>
                        <div className="text-img">Bed Linen</div>
                        <div className="text-img">Blankets & Comforters</div>
                        <div className="text-img">Carpets</div>
                        <div className="text-img">Curtains</div>
                        <div className="text-img">Cushion & Covers</div>
                        <div className="text-img">Bath Linen</div>
                        <div className="text-img">Kids Furnishings</div>
                        <div className="text-img">Home Services</div>
                        <div className="text-img">Flooring</div>
                        <div className="text-img">Table Linen</div>
                        <div className="text-img">Essentials</div>
                    </div>

                    <div className="top-left-4">
                        <h4 className="text-head">Cabinetry</h4>
                        <div className="text-img">Wardrobes</div>
                        <div className="text-img">Shoe Racks</div>
                        <div className="text-img">Storage</div>
                        <div className="text-img">Entertainment Units</div>
                        <div className="text-img">Bar</div>
                        <div className="text-img">Kids Storage</div>
                        <div className="text-img"></div>
                    </div>


                    <div className="bottom-left-3">
                        <h4 className="text-head">Lighting</h4>
                        <div className="text-img">Floor Lamps</div>
                        <div className="text-img">Chandeliers</div>
                        <div className="text-img">Wall Lights</div>
                        <div className="text-img">Smart Lights</div>
                        <div className="text-img">Festive Lights</div>
                        <div className="text-img">Lampshades</div>
                        <div className="text-img">Ceiling Lights</div>
                        <div className="text-img">LED Lights</div>
                        <div className="text-img">Outdoor Lights</div>
                        <div className="text-img">Table Lamps</div>
                        <div className="text-img">Kids Lighting</div>
                    </div>

                    <div className="top-left-5">
                        <h4 className="text-head">Appliances</h4>
                        <div className="text-img">Mixers & Processors</div>
                        <div className="text-img">Breakfast Appliances</div>
                        <div className="text-img">Chimneys</div>
                        <div className="text-img">Built-in Appliances</div>
                        <div className="text-img">Heating & Cooling Appliances</div>
                        <div className="text-img">Cleaning</div>
                        <div className="text-img">Refrigerators</div>
                        <div className="text-img">OTGs</div>
                        <div className="text-img">Food Makers</div>
                        <div className="text-img">Cooktops</div>
                        <div className="text-img">Bar Appliances</div>
                        <div className="text-img">Purifiers</div>
                        <div className="text-img">Laundry</div>
                        <div className="text-img">Televisions</div>
                    </div>

                </div>

            </div>
            <div className="main-one">
                <h1 className="one-head">Happy Customers, Happy Us</h1>

                <div className="two">

                    <div className="eight1">
                        <img className="img9" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg" alt="" />
                        <p className="eight-text">Bought these two grey puffy stools from pepperfry. Found them to be surprisingly strong! Blends perfectly with our theme, too!</p>
                        <p className="eight-below-text">Suman Senapatia</p>
                        <p className="one2 three-img-head-color eight-below-text-2">Visakhapatnam</p>
                    </div>
                    <div className="eight1">
                        <img className="img9" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_8.jpg" alt="" />
                        <p className="eight-text">I purchased Candy Study Chair in Pink Colour by Alex Daisy from pepperfry looks awesome and My daughter loves and spend most of the time during her home school sessions. I am happy with my choice to give a Gift to my daughter.</p>
                        <p className="eight-below-text">Satya Madhana</p>
                        <p className="one2 three-img-head-color eight-below-text-2">Secunderabad</p>
                    </div>
                    <div className="eight1">
                        <img className="img9" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg" alt="" />
                        <p className="eight-text">Purchased an ergonomic chair, I thought it would not be fitting for me but once it got delivered, got it assembled then and there. Now, I am just loving it. Will suggest pepperfry.</p>
                        <p className="eight-below-text">Baba Kattubadi</p>
                        <p className="one2 three-img-head-color  eight-below-text-2">Hyderabad</p>
                    </div>
                </div>
            </div>
            <div className="main-one">
                <div className="main-one-head">
                    <span><h1 className="one-head">Need Help Buying?</h1></span>
                    <span className="last-color">View all</span>
                </div>

                <div className="six">

                    <div className="three1">
                        <img className="img6" src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg" alt="" />
                        <p className="eight-below-text">Here's How To Choose The Right Sofa</p>
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg" alt="" />
                        <p className="eight-below-text">How To Buy A Perfect Bed For Your Room</p>
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg" alt="" />
                        <p className="eight-below-text">Your Guide To Buy The Perfect Mattress</p>
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg" alt="" />
                        <p className="eight-below-text">EverythingAbout Cabinets And Sideboards</p>
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg" alt="" />
                        <p className="eight-below-text">What To Look For While Buying A Chair</p>
                    </div>
                    <div className="three1">
                        <img className="img6" src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
}
