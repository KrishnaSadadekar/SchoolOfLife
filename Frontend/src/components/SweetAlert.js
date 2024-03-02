import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const SweetAlert=()=>
{

    let timerInterval;
    Swal.fire({
      title: "Wait for a moment!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });


};

export const ErroAlert=()=>
{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please check your Backend Server!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
};

export const PaymentSuccess=()=>
{
    Swal.fire({
        position: 'top',
        icon: "success",
        title: "Congrations ! Welcome to School Of Life",
        showConfirmButton: false,
        timer: 1500
      });
}