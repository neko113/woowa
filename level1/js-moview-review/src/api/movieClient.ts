import { TMDB } from '../contants';
import { MovieListResponse } from '../types';
import qsStringify from '../utils/querystring';

class MovieClient {
  private readonly baseURL;
  private readonly apiKey;

  constructor() {
    this.baseURL = `${TMDB.API_BASE_URL}`;
    this.apiKey = `${TMDB.API_KEY}`;
  }

  async getPopularMovieList(page: number): Promise<MovieListResponse> {
    const querystring = qsStringify(
      {
        api_key: this.apiKey,
        language: 'ko-KR',
        page,
      },
      true,
    );

    const response = await fetch(`${this.baseURL}/movie/popular${querystring}`);
    if (!response.ok) throw new Error('API 호출에 실패했습니다.');
    return await response.json();
  }

  async getSearchMovieList(
    query: string,
    page: number,
  ): Promise<MovieListResponse> {
    const querystring = qsStringify(
      {
        api_key: this.apiKey,
        language: 'ko-KR',
        query,
        page,
      },
      true,
    );

    const response = await fetch(`${this.baseURL}/search/movie${querystring}`);
    if (!response.ok) throw new Error('API 호출에 실패했습니다.');
    return await response.json();
  }
}

const movieClient = new MovieClient();
export default movieClient;
