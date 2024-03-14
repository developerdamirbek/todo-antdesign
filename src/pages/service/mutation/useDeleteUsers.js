// useDeleteUsers.js

import { useMutation } from '@tanstack/react-query';
import { request } from '../../../config/request';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/reducer/userReducer';

export const useDeleteUsers = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: async (userId) => {
      // Perform the delete request to the server
      await request.delete(`/users/${userId}`);
      
      // Dispatch the DELETE_USER action with the user ID
      dispatch(deleteUser(userId));
    },
  });
};
