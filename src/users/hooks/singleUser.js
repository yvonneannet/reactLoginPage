import { useState, useEffect } from 'react';
import { getSingleUser } from '../utils';
export const useGetSingleUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        setLoading(true);
        const response = await getSingleUser(userId);
        if (response) {
          setUser(response);
        } else {
          setError('User not found');
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(`Error: ${error.message}`);
      }
    };
    fetchSingleUser();
  }, [userId]);
  return { user, loading, error };
};