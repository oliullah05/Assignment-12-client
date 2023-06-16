import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import moment from 'moment/moment';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [paymentData, setPaymentData] = useState([]);
    useEffect(() => {
        axiosSecure(`/payment/enrolled-classess?email=${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setPaymentData(res.data)
            })
    }, [axiosSecure, user])
    const paymentHistory = paymentData.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log(paymentHistory)

    return (
        <div className='container lg:w-3/4 mx-auto'>
            <h3 className='text-5xl font-bold text-center text-primary mb-6'>Your all payment history</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-primary'>
                            <th className='text-lg font-semibold'>#</th>
                            <th className='text-lg font-semibold'>Email</th>
                            <th className='text-lg font-semibold'>Class Name</th>
                            <th className='text-lg font-semibold'>Price</th>
                            <th className='text-lg font-semibold'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory?.map((classItem, index) => <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td>{classItem.enrolledClass.student_email}</td>
                                <td>{classItem.enrolledClass.class_name}</td>
                                <td>${classItem.enrolledClass.price}</td>                               
                                <td>{moment(classItem.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;