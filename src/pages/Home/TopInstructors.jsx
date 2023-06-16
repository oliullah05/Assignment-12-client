import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        axios("https://assignment-12-server-henna.vercel.app/users/instructors")
            .then(res => {
                // console.log(res.data)
                setInstructors(res.data)
            })
    }, [])

    return (
        <div className='container mx-auto my-20'>
            <h3 className='font-bold text-5xl text-center text-primary mb-6'>Top Instructors</h3>
            <p className='text-xl font-bold mb-6 text-center'>Unlock Your Potential with Expert Guidance: Learn, Grow, and Excel with Our Inspiring Instructors!</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    instructors?.slice(0, 6).map(instructorItem => <div key={instructorItem._id} className="rounded-lg overflow-hidden shadow-lg">
                        <img className="w-full" src={instructorItem.image} alt={instructorItem.name} />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-2xl mb-2">{instructorItem.name}</h3>
                            <p className="text-gray-700 text-base font-semibold">Email: {instructorItem.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopInstructors;