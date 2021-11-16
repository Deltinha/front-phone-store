import { toast } from 'react-toastify';

export default function ToastError(text) {
  return toast.error(text, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
