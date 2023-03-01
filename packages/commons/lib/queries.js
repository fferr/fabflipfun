import { useQuery, gql } from "@apollo/client";
export const GET_VIDEOS = gql`
  query GetVideos {
    videos {
      data {
        attributes {
          title
          media {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export function useVideosQuery() {
  const {
    loading,
    error,
    data
  } = useQuery(GET_VIDEOS);
  return {
    loading,
    error,
    data
  };
}