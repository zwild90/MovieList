import axios from 'axios';
import { Movie } from '../types/Movie';
import { RottenTomatoeMovie } from '../types/RottenTomatoeMovie';

const baseurl = 'https://79frdp12pn-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=175588f6e5f8319b27702e4cc4013561&x-algolia-application-id=79FRDP12PN';
const hitsPerPage = 10;
const clickAnalytics = false;

export const getsuggestions = async (substring: string): Promise<RottenTomatoeMovie[]> => {
  const payload = {
    requests: [
      {
        indexName: 'content_rt',
        query: substring,
        params: `filters=rtId%20%3E%200%20AND%20isEmsSearchable%20%3D%201&hitsPerPage=${hitsPerPage}&analyticsTags=%5B%22header_search%22%5D&clickAnalytics=${clickAnalytics}`,
      },
    ],
  };

  try {
    const result = await axios.post(baseurl, payload);
    if (result.data.results.length === 0) {
      return [];
    }
    return result.data.results[0].hits;
  } catch (err) {
    console.error(err);
  }
}

export const mapRTSuggestions = (rtList: RottenTomatoeMovie[]): Movie[] => {
  return rtList.map(x => {
    return {
      title: x.title,
      year: x.releaseYear,
      posterUrl: x.posterImageUrl,
      cast: x.castCrew?.cast || [],
      directors: x.castCrew?.crew?.Director || [],
      genres: x.genres,
      watched: false,
      dateAdded: 0
    };
  });
}