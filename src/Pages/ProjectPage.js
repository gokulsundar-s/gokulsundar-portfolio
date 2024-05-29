import React from "react";
import Project1 from '../Components/Project1';
import Project2 from '../Components/Project2';
import Project3 from '../Components/Project3';
import Project4 from '../Components/Project4';
import Project5 from '../Components/Project5';
import Project6 from '../Components/Project6';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectPage() {
    const responsive = {
        desktop: {breakpoint: { max: 3000, min: 800 }, items: 1, slidesToSlide: 1},
        tablet: {breakpoint: { max: 800, min: 464 }, items: 1, slidesToSlide: 1},
        mobile: {breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1}
    };
    
    return (
        <div className = "page-container">
            <h1 className = "page-header" id = "page-5">PROJECTS</h1>
            
            <div className = "projects-box-container">
                <Carousel swipeable={true} draggable={true} showDots={true} responsive={responsive}
                    ssr={true} infinite={true} autoPlaySpeed={1000} keyBoardControl={true}
                    customTransition="all .5" transitionDuration={500} containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style custom-dots" itemClass="carousel-item-padding-40-px">
                    
                    <div><Project1/></div>
                    <div><Project2/></div>
                    <div><Project3/></div>
                    <div><Project4/></div>
                    <div><Project5/></div>
                    <div><Project6/></div>
                </Carousel>
            </div>
        </div>
    )
}