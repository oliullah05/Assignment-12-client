import React, { useState } from 'react';
import useSelectedClassess from '../../../hooks/useSelectedClassess';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [selectedClasses, refetch] = useSelectedClassess();
    // console.log(selectedClasses)

    const handleDelete = (secItem) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-12-server-henna.vercel.app/selected-classess/${secItem._id}`)
                    .then(data => {
                        // console.log(data)
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
    }

    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h3 className='text-5xl font-bold text-primary mb-6 text-center'>Your all selected classes</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-primary'>
                            <th className='text-lg font-semibold'>#</th>
                            <th className='text-lg font-semibold'>Class Image</th>
                            <th className='text-lg font-semibold'>Class Name</th>
                            <th className='text-lg font-semibold'>Instructor Name</th>
                            <th className='text-lg font-semibold'>Price</th>
                            <th className='text-lg font-semibold'>Delete</th>
                            <th className='text-lg font-semibold'>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses?.map((selectedClass, index) => <tr key={selectedClass._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={selectedClass.class_image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{selectedClass.class_name}</td>
                                <td>{selectedClass.instructor_name}</td>
                                <td>${selectedClass.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(selectedClass)} className="btn btn-error text-lg"><FaTrashAlt /></button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${selectedClass._id}`} className="btn btn-success text-sm">Pay</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;