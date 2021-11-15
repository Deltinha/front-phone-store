import { useContext } from 'react';
import UserContext from '../contexts/userContext';

function useAuthConfig() {
  const { user } = useContext(UserContext);
  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
}
export default useAuthConfig;
