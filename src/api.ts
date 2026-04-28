interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins(): Promise<ICoin[]> {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId:string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId:string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId:string) {
    return fetch(
        `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
    ).then((response) => response.json());
}