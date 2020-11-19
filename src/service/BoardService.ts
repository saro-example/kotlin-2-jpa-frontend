import Result from "@/models/Result";

export default class BoardService {

  public static getList(callback: (result: any[]) => void) {
    fetch(`/api/board`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
        .then((e) => e.json())
        .then(res => callback(res));
  }

  public static addArticle(name: string, password: string, content: string, callback: (result: Result<any>) => void) {
    fetch(`/api/board`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, password, content})
    })
        .then((e) => e.json())
        .then(res => callback(Result.assign(res)));
  }
}
