import { useState, useEffect } from 'react';
import { getUsers } from '../utils';
export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getUsers();
        setUsers(response.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrors(`Error: ${error.message}`);
      }
    };
    fetchUsers();
  }, []);
  return { users, loading, errors };
};