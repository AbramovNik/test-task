export default class DBService {
  _apiBase = "http://localhost:3000/members";

  getItems = async () => {
    const response = await fetch(`${this._apiBase}`);
    if (!response.ok) {
      throw new Error("Server Error");
    }
    const result = await response.json();
    document.cookie =
      "cook_name=" +
      JSON.stringify(result) +
      "; expires=" +
      new Date(Date.now() + 7 * 86400000).toGMTString();
    return result;
  };
}
