import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <Carousel autoPlay>
            <div>
                <img className='max-w-[100%] max-h-[70vh]'  src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
            </div>
            <div>
                <img className='max-w-[100%] max-h-[70vh]'  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
                <img className='max-w-[100%] max-h-[70vh]'  src="https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.webp?b=1&s=170667a&w=0&k=20&c=rR8QkCJuP2rRLXgDHwHwgZGtqHDFf4WFhIz_FpB9IRs=" />
            </div>
            <div>
                <img className='max-w-[100%] max-h-[70vh]'  src="https://plus.unsplash.com/premium_photo-1682787495017-a8f4c7584868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            </div>
           
        </Carousel>
    );
};

export default Banner;