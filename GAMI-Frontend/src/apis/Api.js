import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

// creating route
export const testApi = () => Api.get("/");

// register route
export const registerApi = (data) => Api.post("/api/user/register", data);

// Login route
export const loginApi = (data) => Api.post("/api/user/login", data);

// Add product route
export const addProductApi = (data) =>
  Api.post("/api/product/add", data, config);

// get all products route
export const getAllProductsApi = () => Api.get("/api/product/get_products");

// get single product route
export const getSingleProductApi = (id) =>
  Api.get(`/api/product/get_product/${id}`);

// update product route
export const updateProductApi = (id, data) =>
  Api.put(`/api/product/update_product/${id}`, data, config);

// delete product route
export const deleteProductApi = (id) =>
  Api.delete(`/api/product/delete_product/${id}`, config);

// create order
export const createOrderApi = (data) =>
  Api.post("/api/orders/create", data, config);

// get orders by user d
export const getOrdersByUserApi = () =>
  Api.get("/api/orders/get_single", config);

// get all orders
export const getAllOrdersApi = () => Api.get("/api/orders/get_all");

// update order status
export const updateOrderStatusApi = (id, data) =>
  Api.put(`/api/orders/change_status/${id}`, data, config);

// search products
export const searchProductsApi = (query) =>
  Api.get(`/api/product/search_product/${query}`);

// count products
export const getCount = () => Api.get("/api/product/count");

// forgot password
export const forgotPasswordApi = (data) =>
  Api.post("/api/user/forgot_password", data);

export const create_course_contend = (id, data) =>
  Api.put(`/api/product/add_couse_contend/${id}`, data, config);

export const enroll_in_course = (id, data) =>
  Api.post(`/api/orders/enroll_course/${id}`, data, config);

//get_user_enroll_courses
export const get_user_enroll_courses = () =>
  Api.get(`/api/orders/get_user_enroll_courses`, config);

//get-single-couse
export const get_single_couse = (id) =>
  Api.get(`/api/orders/get_single_couse/${id}`, config);

//update_progress
export const update_progress = (id, data) =>
  Api.put(`/api/orders/update_progress/${id}`,data, config);
