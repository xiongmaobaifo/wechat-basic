import request from './request'


const http = {
  get(parameter) {
    const {
      url,
      data,
      header,
      loading
    } = parameter;
    return request({
      method: "GET",
      url,
      data: JSON.stringify(data),
      header,
      loading
    });
  },
  post(parameter) {
    const {
      url,
      data,
      header,
      loading
    } = parameter;
    return request({
      method: "POST",
      url,
      data,
      header,
      loading
    });
  }
}

export default http