import { useQuery, gql } from '@apollo/client';

export const GET_VIDEOS = gql`
  query GetVideos {
    videos {
      data {
        id
        attributes {
          title
          product {
            data {
              id
              attributes {
                name
                brand
                description
                price
                createdAt
                updatedAt
              }
            }
          }
          media {
            data {
              id
              attributes {
                url
                name
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`;

export function useVideosQuery() {
  const { loading, error, data } = useQuery(GET_VIDEOS);

  return { loading, error, data };
}

export function sanitizeVideoQueryData(data) {
  return (data?.videos?.data || []).map((video) => ({
    id: video.id,
    title: video.attributes.title,
    product: video.attributes.product.data.attributes,
    media: video.attributes.media.data.attributes,
  }));
}
