import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const Reviews = ({ reviews }) => {
    return (
        <div>
            <Head title="Reviews" />

            <h1>Reviews</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Review</th>
                        <th>Rating</th>
                        <th>Bank ID</th>
                        <th>User ID</th>
                        <th>Status</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id}>
                            <td>{review.id}</td>
                            <td>{review.review}</td>
                            <td>{review.rating}</td>
                            <td>{review.bank_id}</td>
                            <td>{review.user_id}</td>
                            <td>{review.status}</td>
                            <td>{new Date(review.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;