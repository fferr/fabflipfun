import { useQuery, gql } from '@apollo/client';

const videoAttributes = gql`
  fragment VideoAttributes on Video {
    title
    product {
      data {
        id
        attributes {
          name
          brand
          description
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
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
`;

export const GET_VIDEO_BY_ID = gql`
  query GetVideoById($id: ID!) {
    video(id: $id) {
      data {
        id
        attributes {
          ...VideoAttributes
        }
      }
    }
  }
  ${videoAttributes}
`;

export const GET_VIDEOS = gql`
  query GetVideos {
    videos(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          ...VideoAttributes
        }
      }
    }
  }
  ${videoAttributes}
`;

export function useVideosQuery() {
  const { loading, error, data, previousData } = useQuery(GET_VIDEOS);

  return { loading, error, data, previousData };
}

export function sanitizeVideoQueryData(data) {
  return (data?.videos?.data || []).map((video) => ({
    id: video.id,
    title: video.attributes.title,
    product: video.attributes.product.data.attributes,
    media: video.attributes.media.data.attributes,
    productImage:
      video.attributes.product.data.attributes.image.data.attributes.url,
  }));
}
