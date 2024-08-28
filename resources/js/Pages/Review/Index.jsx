import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';

export default function ReviewA() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleApproval = async (id) => {
    try {
      await axios.patch(`/api/reviews/${id}/approve`);
      setReviews(reviews.map(review => review.id === id ? { ...review, status: 'approved' } : review));
    } catch (error) {
      console.error('Failed to approve review:', error);
    }
  };

  return (
    <div>
      <h2>Review</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Review</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.review}</td>
              <td>{review.status}</td>
              <td>
                {review.status === 'pending' && (
                  <button onClick={() => handleApproval(review.id)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
