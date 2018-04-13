import axios from "axios/index";

export class ApiKey {
  constructor(key = "") {
    this.key = key;
  }
}

export class Api {
  static BASE = 'http://visualtotal.com.br';
  static LOGIN = '/login';

  static apiKey = new ApiKey();

  static axios = axios.create({
    baseURL: Api.BASE,
  });

  static login(email, password) {
    return Api.axios.post(Api.LOGIN, {
      email: email,
      password: password
    });
  }

  static setApiKey(apiKey = new ApiKey()) {
    Api.apiKey = apiKey;
  }
}
