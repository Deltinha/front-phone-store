import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function useAuthConfig() {
  const { userInfo } = useContext(UserContext);
  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
}
export default useAuthConfig;