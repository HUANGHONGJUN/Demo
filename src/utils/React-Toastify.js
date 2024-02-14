import Observable from "./Observable";
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';
function logger(data) {
    console.log(data);
}

function toastify(data) {
    toast(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type:'success'
    })
}

//将观察者（function）塞进去
Observable.subscribe(logger);
Observable.subscribe(toastify);

export { logger, toastify }