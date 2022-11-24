class StockService {
  externalUrl: string = process.env.REACT_APP_EXTERNAL_BASE_URL as string;
  localApiUrl: string = process.env.REACT_APP_API_HOST as string;
  async autocompleteData(): Promise<any> {
    const response = await fetch(
      `${this.externalUrl}/stocks?source=docs&exchange=NYSE`
    );

    return response.json();
  }

  async addStockToUser(body: any): Promise<any> {
    const response = await fetch(`${this.localApiUrl}/user/add-stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const statusCode = response.status;
    const data = await response.json();
    return { statusCode, data };
  }

  async getStocks(id?: number): Promise<any> {
    const response = await fetch(`${this.localApiUrl}/user/get-stocks/${id}`);

    return response.json();
  }
}

const stockService = new StockService();
export default stockService;
