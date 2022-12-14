import axios from "axios";
export default class apiservice {
  baseUri: string = "http://localhost:4000/api";

  createEmployee(data: any) {
    const url = `${this.baseUri}/signup`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }

  async forgetPassword(data: any) {
    const url = `${this.baseUri}/signup`;

    axios.post(url, data).then((response) => {
      if (response.data.length > 0) {
        return true;
      } else {
        return false;
      }
    });
  }

  async logIn(data: any) {
    const url = `${this.baseUri}/login`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }

  async geTodoList(data: any) {
    const url = `${this.baseUri}/getTodoList`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }

  async addTodoList(data: any) {
    const url = `${this.baseUri}/addTodoList`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }

  async delTodoList(data: any) {
    const url = `${this.baseUri}/delTodoList`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }

  async updateTodoList(data: any) {
    const url = `${this.baseUri}/updateTodoList`;
    const rbool = axios.post(url, data).then((response) => {
      return response.data;
    });
    return rbool;
  }
}
