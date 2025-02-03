import { toast } from "react-toastify";


export const API_URL = "https://root2.futureservices.services/";
export const API_URL_Img = "https://root2.futureservices.services/uploads/";
export const onlinUrl = "https://react.futureservices.services/"
// export const Img_Url = "http://localhost:30011/public";
export const showToast = (message, type = "default") => {
 
  const options = { autoClose: 5000 };
  const msg = typeof message === "object" ? message.msg : message;

  switch (type) {
    case "success":
      toast.success(msg, options);
      break;
    case "error":
      toast.error(msg, options);
      break;
    case "info":
      toast.info(msg, options);
      break;
    case "warn":
      toast.warn(msg, options);
      break;
    default:
      toast(msg, options);
      break;
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;

  const tokenPayload = JSON.parse(atob(token.split(".")[1]));
  const expiryTime = tokenPayload.exp * 1000;
  const currentTime = Date.now();

  return currentTime >= expiryTime;
};
