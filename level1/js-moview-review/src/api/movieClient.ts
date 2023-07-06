import { TMDB } from '../contants';
import { MovieListResponse, MovieResponse } from '../types';
import qsStringify from '../utils/querystring';

class MovieClient {
  private readonly baseURL;
  private readonly apiKey;

  constructor() {
    this.baseURL = `${TMDB.BASE_URL}`;
    this.apiKey = `${TMDB.API_KEY}`;
  }

  async getPopularMovies(page: number): Promise<MovieListResponse> {
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

  async getInfiniteMovies() {
    const movies: MovieResponse[] = [];
    let currentPage = 1;
    let hasNextPage = true;
    let isLoading = false;

    const loadNextPage = async (): Promise<void> => {
      if (isLoading || !hasNextPage) {
        return;
      }

      isLoading = true;

      try {
        const { results, total_pages } = await this.getPopularMovies(
          currentPage,
        );

        if (results.length > 0) {
          movies.push(...results);
          currentPage++;
          hasNextPage = currentPage < total_pages;
        }
      } catch (error) {
        // 오류 처리
      } finally {
        isLoading = false;
      }
    };

    return {
      movies,
      loadNextPage,
      hasNextPage,
      isLoading,
    };
  }
}

const movieClient = new MovieClient();
export default movieClient;
