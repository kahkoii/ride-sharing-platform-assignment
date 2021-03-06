import axios from "axios";

const passengerBaseURL = "http://localhost:5001/api/v1/passenger";
const driverBaseURL = "http://localhost:5002/api/v1/driver";

const apiLogin = async (accType: string, email: string, phone: string) => {
  const res = await axios({
    method: "post",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) + "/session",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({
      email,
      phone,
    }),
  });
  return res;
};

const apiLogout = async (token: string, accType: string) => {
  const res = await axios({
    method: "delete",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) +
      "/session?token=" +
      token,
  });
  return res;
};

const apiVerifyToken = async (token: string, accType: string) => {
  const res = await axios({
    method: "get",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) +
      "/session?token=" +
      token,
  });
  return res;
};

const apiRegister = async (accType: string, accDetails: any) => {
  const res = await axios({
    method: "post",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) + "/account",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(accDetails),
  });
  return res;
};

const apiGetDetails = async (accType: string, token: string) => {
  const res = await axios({
    method: "get",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) +
      "/account?token=" +
      token,
    headers: { "Content-Type": "application/json" },
  });
  return res;
};

const apiEdit = async (accType: string, token: string, accDetails: any) => {
  const res = await axios({
    method: "put",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) +
      "/account?token=" +
      token,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(accDetails),
  });
  return res;
};

const apiDelete = async (accType: string, token: string) => {
  const res = await axios({
    method: "delete",
    url:
      (accType === "passenger" ? passengerBaseURL : driverBaseURL) +
      "/account?token=" +
      token,
  });
  return res;
};

const apiGetPassengerHistory = async (token: string) => {
  const res = await axios({
    method: "get",
    url: passengerBaseURL + "/history?token=" + token,
  });
  return res;
};

export {
  apiLogin,
  apiLogout,
  apiVerifyToken,
  apiRegister,
  apiGetDetails,
  apiEdit,
  apiDelete,
  apiGetPassengerHistory,
};
