import React from 'react';
import socialIcons from '../../assets/Group9969.png'

const Footer = () => {
    return (
        <div className='bg-slate-950'>
            <div className='my-container text-white space-y-10'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <div className='space-y-6 px-2'>
                        <h3 className='font-bold text-3xl'>MindSpark</h3>
                        <p className='text-gray-500'>Ignite Your Learning Journey with Diverse Course Offerings</p>
                        <img src={socialIcons} alt="" />
                    </div>

                    {/* Community
Learners




Tech Blog */}


                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Community</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Learners</p>
                            <p>Partners</p>
                            <p>Blogs</p>
                            <p>Beta Testers</p>
                            <p>Teaching Center</p>
                        </div>
                    </div>

                    


                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Legal</h4>
                        <div className='text-gray-500 space-y-3'>
                            <p>Terms Of Use</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Policy</p>
                            <p>Money Back Policy</p>
                        </div>
                    </div>
                    <div className='space-y-4 pl-5'>
                        <h4 className='text-xl font-bold'>Contact</h4>
                        <div className='text-gray-500 space-y-3'>
                        <p>New York, USA <br />
    123 Elm Street, Australia</p>
<p>+1 555 - 123 - 4567</p>
<p>
    info@example.com <br />
    support@example.com
</p>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center text-gray-500'>
                    <p>@2023 MindSpark. All Rights Reserved</p>
                    <p>Powered by MindSpark</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;