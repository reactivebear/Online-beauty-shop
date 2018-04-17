import axios from "axios/index";
import {StorageKeys} from "../utils/storagekeys";

export class ApiKey {
  constructor(key = "") {
    this.key = key;
  }
}

export class Api {
  // Routes
  static BASE = 'http://visualtotal.com.br';
  static LOGIN = '/login';

  // Headers
  // noinspection SpellCheckingInspection
  static HEADER_API_KEY = 'apikey';

  static apiKey = new ApiKey();
  static axios = axios.create({
    baseURL: Api.BASE,
  });
  static CATEGORIES = '/api/categories';

  static login(email, password) {
    return Api.axios.post(Api.LOGIN, {
          email: email,
          password: password
        })
        .then(res => {
          const newApiKey = res.data.apikey.key;

          localStorage.setItem(StorageKeys.APIKEY, newApiKey);
          Api.setApiKey(new ApiKey(newApiKey));

          return res;
        });
  }

  static setApiKey(apiKey = new ApiKey()) {
    Api.apiKey = apiKey;
    // Update axios' headers
    Api.axios = axios.create({
      ...Api.axios.defaults,
      headers: {
        [Api.HEADER_API_KEY]: Api.apiKey.key
      }
    });
  }

  static getAllCategories() {
    return this._getCategories();
  }
  static getProductCategories() {
    return this._getCategories("/product");
  }

  static getServiceCategories() {
    return this._getCategories("/service");
  }

  static _getCategories(suffix = "") {
    suffix = suffix || "";
    return Api.axios.get(Api.CATEGORIES + suffix);
  }
}
