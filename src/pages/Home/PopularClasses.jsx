import React from 'react';
import useClasses from '../../hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(classItem => classItem.status === "approved");
    const sortedClasses = approvedClasses.sort((a, b) => b.enrolled_students - a.enrolled_students);
    // console.log(sortedClasses)
    return (
        <div className='container mx-auto my-12'>
            <h2 className='font-bold text-primary text-5xl text-center mb-6'>Top Enrolled Classes</h2>
            <p className='text-xl font-bold mb-6 text-center'>
Unlock the power of communicatns with our popular language classes designed for an unforgettable summer camp experienc!!</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    sortedClasses?.slice(0, 6).map(classItem => <div key={classItem._id} className="rounded-lg overflow-hidden shadow-lg">
                        <img className="w-full" src={classItem.class_image} alt={classItem.language} />
                        <ul className="px-6 py-4 ">
                            <li className="font-bold text-2xl mb-2 list-disc">{classItem.language}</li>
                            <li className="text-gray-700 text-base list-disc font-semibold">Instructor: {classItem.instructor_name}</li>
                            <li className="text-gray-700 text-base list-disc font-semibold">Price: $ <span className='text-primary'>{classItem.price}</span></li>
                            <li className="text-gray-700 text-base list-disc font-semibold">Enrolled Students: {classItem.enrolled_students}</li>
                        </ul>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;
