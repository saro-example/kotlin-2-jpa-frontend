export default class BoardService {

  public static getArticles(stockId: string, query: string, lessThenFeedNo: number,  callback: (result: any[]) => void) {
    fetch(`/api/feeds?stockId=${encodeURIComponent(stockId)}&query=${encodeURIComponent(query)}&lessThenFeedNo=${lessThenFeedNo}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
    })
        .then((e) => e.json())
        .then(res => callback(res));
  }

}
