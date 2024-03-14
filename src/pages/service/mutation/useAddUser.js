import { useMutation } from '@tanstack/react-query';
import {request} from '../../../config/request';

export const useAddUser = () => {
  return useMutation({
    mutationKey: ['addUser'],
    mutationFn: async (userData) => {
      const response = await request.post('/users', userData);
      return response.data;
    },
  });
};