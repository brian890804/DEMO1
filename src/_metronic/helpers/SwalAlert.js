import Swal from 'sweetalert2'
export function useSwalAlert() {
  const alert403 = () => Swal.fire({ icon: 'error', title: "錯誤", text:"錯誤代碼403", })
  const alert401 = () => Swal.fire({ icon: 'warning', title: "錯誤", text: "錯誤代碼401", })
  const alert400 = () => Swal.fire({ icon: 'error', title: "錯誤", text: "錯誤代碼400", })
  const alertSuccess = (request) => Swal.fire({ icon: 'success', title: '成功', text: request.text })
  const alertError = (request) => Swal.fire({ icon: 'error', title: '錯誤', text: request.text });
  return {
    alert400,
    alert401,
    alert403,
    alertSuccess,
    alertError
  };
}