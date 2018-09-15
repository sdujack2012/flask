import axios from "axios";

// const API_BASE = "https://teg-jamie-testing.appspot.com";
const API_BASE = "http://localhost:5000/api";

const createDefaultOptions = () => ({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const buildURL = path => {
  return path[0] === "/" ? `${API_BASE}${path}` : `${API_BASE}/${path}`;
};

const processRes = res => {
  const { meta, data } = res;
  return meta ? { meta, data } : { data };
};

function get(path, options = {}) {
  return axios({
    method: "get",
    url: buildURL(path),
    headers: {
      ...createDefaultOptions(),
      ...options
    }
  }).then(processRes);
}

function post(path, data, options = {}) {
  return axios({
    method: "post",
    url: buildURL(path),
    headers: {
      ...createDefaultOptions(),
      ...options
    },
    data
  }).then(processRes);
}

function put(path, data, options = {}) {
  return axios({
    method: "put",
    url: buildURL(path),
    headers: {
      ...createDefaultOptions(),
      ...options
    }.then(processRes)
  });
}

function del(path, data, options = {}) {
  return axios({
    method: "put",
    url: buildURL(path),
    headers: {
      ...createDefaultOptions(),
      ...options
    },
    data
  });
}

export default {
  buildURL,
  get,
  post,
  put,
  delete: del
};
