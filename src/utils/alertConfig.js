/* eslint-disable import/prefer-default-export */
import Swal from 'sweetalert2';

export const Alert = Swal.mixin({
  customClass: {
    container: '',
    popup: '',
    header: '',
    title: '',
    closeButton: '',
    icon: '',
    image: '',
    content: '',
    htmlContainer: '',
    input: '',
    inputLabel: '',
    validationMessage: '',
    actions: '',
    confirmButton: 'alert-btn',
    denyButton: '',
    cancelButton: '',
    loader: '',
    footer: '.',
  },
});
