import React, { useEffect, useState } from "react";
import "./WithSidebar.css";
import "remixicon/fonts/remixicon.css";

import blog1 from "../../assets/WithSidebar image/blog-1.avif";
import blog2 from "../../assets/WithSidebar image/blog-2.avif";
import blog3 from "../../assets/WithSidebar image/blog-3.avif";
import blog4 from "../../assets/WithSidebar image/blog-4.webp";
import blog5 from "../../assets/WithSidebar image/blog-5.webp";
import blog6 from "../../assets/WithSidebar image/blog-6.webp";
import blog11 from "../../assets/WithSidebar image/blog-11.webp";
import blog22 from "../../assets/WithSidebar image/blog-22.webp";

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const carouselElement = document.getElementById("relatedPostsCarousel");

        const handleSlide = (event) => {
            setActiveIndex(event?.to ?? 0);
        };

        if (carouselElement) {
            carouselElement.addEventListener("slid.bs.carousel", handleSlide);
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener("slid.bs.carousel", handleSlide);
            }
        };
    }, []);

    const relatedPosts = [blog1, blog2, blog3, blog4, blog5, blog6];

    return (
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 mb-5">
                        <div className="position-sticky" style={{ top: "30px" }}>
                            <div className="blog-input position-relative">
                                <h4 className="mb-3">Search</h4>
                                <input type="text" placeholder="Search..." className="search-input" />
                                <i className="ri-search-line search-icon"></i>
                            </div>

                            <div className="mt-5">
                                <h5>Recent Post</h5>
                            </div>

                            {[
                                { img: blog1, title: "Tips & Procedure To Apply Luxury Beauty Cosmetic", tag: "NATURAL CLEANSERS" },
                                { img: blog2, title: "The Best Way To Select Good High-End Cosmetic Products", tag: "COSMETICS" },
                                { img: blog3, title: "Lightweight Makeup To Enhance Your Natural Beauty...", tag: "MAKE UP" }
                            ].map((post, i) => (
                                <div className="blog-content d-flex align-items-center mb-4" key={i}>
                                    <img src={post.img} alt="recent" className="blog-image mt-3 me-3" width="65" height="95" />
                                    <div className="blog-icontent d-flex flex-column justify-content-center">
                                        <span className="mt-3">{post.tag}</span>
                                        <h6 className="d-inline mt-3">{post.title}</h6>
                                    </div>
                                </div>
                            ))}

                            <div className="blog-foot mt-5">
                                <h5>Tags</h5>
                                <p>Cosmetics Make Up Natural Cleansers Organic Skin Care</p>
                                <h4>Follow us Instagram</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 col-12 pt-4">
                        <div className="blog-head text-center">
                            <a href="#" className="text-decoration-none text-black">Cosmetics</a>
                            <h1 className="mt-4">Are You Washing Your Face Properly?</h1>
                            <p className="mt-4">
                                <span className="text-secondary">By</span> Hiếu Bùi |
                                <span className="text-secondary"> Jan 10, 2025</span>
                            </p>
                        </div>

                        <div className="blog-main">
                            <img src={blog11} width="100%" height="600" className="p-5" alt="Blog main" />

                            <p className="mt-4">
                                Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool...
                            </p>

                            <h4 className="my-4 ps-5">
                                I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing.
                            </h4>

                            <p>
                                We live in an era of globalization and the era of the woman...
                            </p>

                            <h5 className="my-4">Your imagination, our creation</h5>
                            <p>
                                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits...
                            </p>

                            <div className="d-flex justify-content-center mt-5">
                                <img src={blog22} className="img-fluid" alt="Secondary" />
                            </div>

                            <p className="mt-5">
                                Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool...
                            </p>

                            <div className="blog-menu d-flex justify-content-between mt-5 flex-wrap">
                                <nav className="navbar navbar-expand-lg">
                                    <ul className="navbar-nav flex-row flex-wrap">
                                        <li>
                                            <a href="#" className="text-decoration-none text-secondary ms-2">#cosmetics</a>
                                            <a href="#" className="text-decoration-none text-secondary ms-2">#natural Cleansers</a>
                                            <a href="#" className="text-decoration-none text-secondary ms-2">#organic</a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav className="navbar navbar-expand-lg">
                                    <span className="me-2">Share :</span>
                                    <ul className="navbar-nav flex-row">
                                        <li><a href="#" className="text-decoration-none text-black mx-2 fs-5"><i className="ri-facebook-circle-fill"></i></a></li>
                                        <li><a href="#" className="text-decoration-none text-black mx-2 fs-5"><i className="ri-twitter-x-line"></i></a></li>
                                        <li><a href="#" className="text-decoration-none text-black mx-2 fs-5"><i className="ri-mail-unread-fill"></i></a></li>
                                        <li><a href="#" className="text-decoration-none text-black mx-2 fs-5"><i className="ri-telegram-fill"></i></a></li>
                                    </ul>
                                </nav>
                            </div>

                            <hr />
                            <div className="text-end">
                                <h6><a href="#" className="nav-link text-secondary me-5 mt-4">Next</a></h6>
                                <div className="d-flex justify-content-end align-items-center">
                                    <span className="me-2">Glowing Skin Is A Result Of Proper Skincare</span>
                                    <a href="#" className="text-decoration-none fs-1">
                                        <i className="ri-arrow-drop-right-line text-secondary fw-lighter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="blog-posts">
                            <h2 className="text-center my-5">Related Posts</h2>

                            <div
                                id="relatedPostsCarousel"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                

                                <div className="carousel-inner">
                                    {[0, 1].map((index) => (
                                        <div
                                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                                            key={index}
                                        >
                                            <div className="row">
                                                {relatedPosts
                                                    .slice(index * 3, index * 3 + 3)
                                                    .map((img, idx) => (
                                                        <div className="col-md-4 mb-4" key={idx}>
                                                            <div className="img-hover">
                                                                <img
                                                                    src={img}
                                                                    alt={`Related post ${index * 3 + idx + 1}`}
                                                                    style={{
                                                                        width: "100%",
                                                                        height: "260px", // 🔹 perfect for balanced layout
                                                                        objectFit: "cover", // keeps image aspect ratio clean
                                                                        borderRadius: "10px", // optional: smoother edges
                                                                    }}
                                                                />
                                                            </div>
                                                            <span className="d-inline-block my-3 fs-6">
                                                                NATURAL CLEANSERS | JAN 10, 2025
                                                            </span>
                                                            <h5>Sample Blog Post Title {index * 3 + idx + 1}</h5>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation dots */}
                                <div className="d-flex justify-content-center mt-3 gap-3">
                                    <button
                                        className="btn btn-dark rounded-circle p-0"
                                        type="button"
                                        data-bs-target="#relatedPostsCarousel"
                                        data-bs-slide="prev"
                                        style={{
                                            width: "13px",
                                            height: "13px",
                                            opacity: 0.8,
                                            backgroundColor: "#000",
                                            border: "none",
                                            boxShadow: "none",
                                            outline: "none",
                                        }}
                                    />
                                    <button
                                        className="btn btn-dark rounded-circle p-0"
                                        type="button"
                                        data-bs-target="#relatedPostsCarousel"
                                        data-bs-slide="next"
                                        style={{
                                            width: "13px",
                                            height: "13px",
                                            opacity: 0.8,
                                            backgroundColor: "#000",
                                            border: "none",
                                            boxShadow: "none",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
