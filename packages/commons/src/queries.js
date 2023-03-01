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


export function sanitizeVideoQueryData(data) {
  console.log(data?.videos?.data)
  return (data?.videos?.data || []).map((video) => ({
    id: video.id,
    title: video.attributes.title,
    product: video.attributes.product?.data.attributes,
    media: video.attributes.media.data.attributes,
    productImage:
    video.attributes.product?.data.attributes.image.data.attributes.url,
  }));
}
export function useVideosQuery() {
  const { loading, error, data } = useQuery(GET_VIDEOS);

  return { loading, error, data: sanitizeVideoQueryData(data) };
}
