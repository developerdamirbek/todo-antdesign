import { useMutation } from '@tanstack/react-query';
import { request } from '../../../config/request';

export const useEditUsers = () => {
  return useMutation({
    mutationKey: ['editUser'],
    mutationFn: async ({ userId, userData }) => {
      const response = await request.put(`/users/${userId}`, userData);
      return response.data;
    },
  });
};
