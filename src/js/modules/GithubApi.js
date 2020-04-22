export default class GithubApi {
  
  constructor(parametrs) {
    this._baseUrl = parametrs.baseUrl;
    this._owner = parametrs.owner;
    this._repository = parametrs.repository;
    this._target = parametrs.target;
    this._headers = parametrs.headers;
  }

  // получение коммитов
  getCommits() {
    return fetch(`${this._baseUrl}/repos/${this._owner}/${this._repository}/${this._target}`, {
      headers: {
        authorization: `${this._headers.authorization}`
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

}