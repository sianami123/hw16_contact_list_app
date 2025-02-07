import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://api.alikooshesh.ir:3000";

const API_ROUTES = {
  GET_ALL_CONTACTS: `/api/records/contacts`,
  CREATE_CONTACT: `/api/records/contacts`,
  UPDATE_CONTACT: `/api/records/contacts`,
  DELETE_CONTACT: `/api/records/contacts`,
  LOGIN: `/api/users/login`,
};

const API_KEY = "siacontacts";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");

  config.headers["api_key"] = API_KEY;

  if (token && !config.url?.includes("/login")) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response?.status === 400 || error.response?.status === 401) &&
      !error.response?.config?.url?.includes("/login")
    ) {
      Cookies.remove("accessToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

async function getAllContacts(id?: string) {
  const url = id
    ? `${API_ROUTES.GET_ALL_CONTACTS}/${id}`
    : API_ROUTES.GET_ALL_CONTACTS;
  const response = await api.get(url);
  return response;
}

async function createContact(
  fName: string,
  lName: string,
  phoneNumber: string,
  relative: string,
  email: string
) {
  const response = await api.post(API_ROUTES.CREATE_CONTACT, {
    fName,
    lName,
    phoneNumber,
    relative,
    email,
  });
  return response;
}

async function updateContact(
  id?: string,
  fName?: string,
  lName?: string,
  phoneNumber?: string,
  relative?: string,
  email?: string
) {
  const response = await api.put(API_ROUTES.UPDATE_CONTACT, {
    id,
    fName,
    lName,
    phoneNumber,
    relative,
    email,
  });
  return response;
}

async function deleteContact(id: string) {
  const response = await api.delete(`${API_ROUTES.DELETE_CONTACT}/${id}`);
  console.log(response);
  return response;
}

async function login(email: string, password: string) {
  const response = await api.post(API_ROUTES.LOGIN, { email, password });
  return response;
}

export { getAllContacts, createContact, updateContact, deleteContact, login };
