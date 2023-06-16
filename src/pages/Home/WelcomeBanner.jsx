import React from 'react';


const WelcomeBanner = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row gap-6 justify-center'>
            <img src='https://plus.unsplash.com/premium_photo-1661769726567-9a31d3a22751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYWNoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt="" />
            <div className='lg:max-w-xl space-y-6'>
                <h2 className='font-bold text-4xl'><span className='text-primary'>Welcome At</span> <br /> mindSpark</h2>
                <div className='space-y-6 text-gray-800'>
                    <p>Mindspark is an online learning platform that offers a wide range of courses. It personalizes the learning experience with adaptive algorithms, tailoring content to individual needs. Courses cover subjects like math, science, language arts, and more. Interactive lessons, exercises, and assessments enhance learning. Progress tracking tools help monitor performance. Mindspark's user-friendly website makes it easy to navigate and engage with the courses. Overall, Mindspark provides personalized, interactive, and diverse learning opportunities for individuals seeking to expand their knowledge and skills.</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;