import axios from "axios/index";
import {StorageKeys} from "../utils/storagekeys";

export class ApiKey {
  constructor(key = "") {
    this.key = key;
  }
}

export class Api {
  // Routes
  static BASE = "http://visualtotal.com.br";
  static GUEST = "/guest";
  static LOGIN = "/login";
  static LOGOUT = "/logout";
  static KEEP_TOKEN = "/api/keeptoken";
  static CATEGORIES = "/api/categories";
  static PRODUCTS = "/api/products";

  // Headers
  // noinspection SpellCheckingInspection
  static HEADER_API_KEY = "apikey";

  static apiKey = new ApiKey();
  static axios = axios.create({
    baseURL: Api.BASE,
  });

  static login(email, password) {
    return Api.axios.post(Api.LOGIN, {
          email: email,
          password: password
        })
        .then(Api._handleNewApiToken);
  }

  static loginAsGuest() {
    return Api.axios.get(this.GUEST)
        .then(Api._handleNewApiToken);
  }

  static keepToken() {
    return Api.axios.get(this.KEEP_TOKEN)
        .then(Api._handleNewApiToken);
  }

  static _handleNewApiToken(res) {
    const newApiKey = res.data.apikey.key;

    localStorage.setItem(StorageKeys.APIKEY, newApiKey);
    Api.setApiKey(new ApiKey(newApiKey));

    return res;
  }

  static logout() {
    return Api.axios.post(Api.LOGOUT)
        .finally(() => {
          localStorage.removeItem(StorageKeys.APIKEY);
          Api.setApiKey();
        });
  }

  static setApiKey(apiKey = new ApiKey()) {
    Api.apiKey = typeof apiKey === 'string' ?
        new ApiKey(apiKey)
        : apiKey;
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

  static getAllProducts() {
    return this._getProducts();
  }
  
  static getProductsFeatured() {
    return this._getProducts({ featured_only: true });
  }

  static _getProducts(data = null, suffix = "") {
    suffix = suffix || "";
    return Api.axios.post(Api.PRODUCTS + suffix, data);
  }
}
