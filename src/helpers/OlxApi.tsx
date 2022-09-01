import Cookies from "js-cookie";
import qs from "qs";

const baseURL = "http://alunos.b7web.com.br:501";

const httpFetch = async (method:any, endpoint:any, params:any) => {
  if (!params.token) {
    let token = Cookies.get("token");
    if (token) {
      params.token = token;
    }
  }

  let request;

  switch (method.toLowerCase()) {
    case "get":
      request = `${baseURL + endpoint}?${qs.stringify(params)}`;
      break;
    default:
      request = new Request(baseURL + endpoint, {
        method,
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        })
      });
  }

  const response = await fetch(request);

  const json = await response.json();

 

  return json;
};

const api = {
  login: async (email:any, password:any) => {
    const json = await httpFetch("POST", "/user/signin", { email, password });
    return json;
  }
};

export default () => api;