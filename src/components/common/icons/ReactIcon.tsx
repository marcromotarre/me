const ReactIcon = ({
  color = "",
  outColor = "#61DAFB",
  inColor = "#61DAFB",
  size = 20,
  className = "",
}: ComponentProps) => {
  const ASPECT_RATIO = 0.91176470588;

  return (
    <svg
      className={className}
      width={size}
      height={size * ASPECT_RATIO}
      viewBox="0 0 78 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="39" cy="36" r="7" fill={color ? color : inColor} />
      <path
        d="M39 62.2768C44.5933 67.8317 50.11 71.1176 54.554 71.1176C56.0098 71.1176 57.389 70.8047 58.5383 70.1006C62.5226 67.7534 63.9784 61.8856 62.5992 53.5143C62.3694 52.0278 62.0629 50.5412 61.6798 48.9765C63.2122 48.5071 64.5914 48.0377 65.9705 47.5682C73.7092 44.517 78 40.2922 78 35.6762C78 30.9819 73.7092 26.7571 65.9705 23.7841C64.5914 23.2365 63.2122 22.767 61.6798 22.3758C62.0629 20.8111 62.3694 19.3246 62.5992 17.8381C63.9018 9.31023 62.446 3.3642 58.4617 1.01708C57.3124 0.312949 55.9332 0 54.4774 0C50.11 0 44.5167 3.28596 38.9234 8.84081C33.4067 3.28596 27.89 0 23.446 0C21.9902 0 20.611 0.312949 19.4617 1.01708C15.4774 3.3642 14.0216 9.23199 15.4008 17.6034C15.6306 19.0899 15.9371 20.5764 16.3202 22.1411C14.7878 22.6106 13.4086 23.08 12.0295 23.5494C4.29076 26.6007 0 30.8255 0 35.4415C0 40.1357 4.29076 44.3605 12.0295 47.3335C13.4086 47.8812 14.7878 48.3506 16.3202 48.7418C15.9371 50.3065 15.6306 51.793 15.4008 53.2796C14.0982 61.6509 15.554 67.597 19.4617 69.8658C20.611 70.57 21.9902 70.8829 23.446 70.8829C27.89 71.0394 33.4067 67.7534 39 62.2768ZM34.7092 51.7148C36.0884 51.793 37.5442 51.793 39 51.793C40.4558 51.793 41.9116 51.793 43.2908 51.7148C41.9116 53.5925 40.4558 55.3137 39 56.9567C37.5442 55.3137 36.0884 53.5925 34.7092 51.7148ZM25.2083 43.6564C25.9745 44.9864 26.664 46.2382 27.5069 47.49C25.1316 47.1771 22.9096 46.7859 20.7642 46.3164C21.4538 44.204 22.22 42.0134 23.1395 39.8228C23.7525 41.0745 24.442 42.4046 25.2083 43.6564ZM20.7642 24.8012C22.9096 24.3318 25.1316 23.9406 27.5069 23.6276C26.7407 24.8794 25.9745 26.1312 25.2083 27.4613C24.442 28.7913 23.7525 30.0431 23.1395 31.3731C22.1434 29.1043 21.3772 26.9136 20.7642 24.8012ZM24.9784 35.5197C25.9745 33.4073 27.0472 31.2949 28.2731 29.1825C29.4224 27.1483 30.725 25.1142 32.0275 23.08C34.3261 22.9235 36.6248 22.8453 39 22.8453C41.4519 22.8453 43.7505 22.9235 45.9725 23.08C47.3517 25.1142 48.5776 27.1483 49.7269 29.1825C50.9528 31.2949 52.0255 33.4073 53.0216 35.5197C52.0255 37.6321 50.9528 39.7445 49.7269 41.8569C48.5776 43.8911 47.275 45.9253 45.9725 47.9594C43.6739 48.1159 41.3752 48.1941 39 48.1941C36.5481 48.1941 34.2495 48.1159 32.0275 47.9594C30.6483 45.9253 29.4224 43.8911 28.2731 41.8569C27.0472 39.7445 25.9745 37.6321 24.9784 35.5197ZM54.9371 31.2949L52.8684 27.383C52.1022 26.053 51.4126 24.8012 50.5697 23.5494C52.945 23.8624 55.167 24.2535 57.3124 24.723C56.6228 26.9136 55.8566 29.1042 54.9371 31.2949ZM54.9371 39.7445C55.8566 41.9352 56.6228 44.1258 57.3124 46.2382C55.167 46.7076 52.945 47.0988 50.5697 47.4118C51.336 46.16 52.1022 44.9082 52.8684 43.5781C53.558 42.4046 54.2475 41.0745 54.9371 39.7445ZM56.6994 66.8928C56.0864 67.284 55.3202 67.4405 54.4774 67.4405C50.723 67.4405 46.0491 64.311 41.4519 59.6168C43.6739 57.1914 45.8193 54.4531 47.9646 51.4019C51.5658 51.0889 55.0138 50.5412 58.2318 49.7589C58.6149 51.1671 58.8448 52.5754 59.0747 53.9837C60.1473 60.6339 59.3045 65.4063 56.6994 66.8928ZM60.6837 25.6618C69.2652 28.1654 74.3988 31.999 74.3988 35.5197C74.3988 38.571 70.8743 41.6222 64.668 44.0476C63.442 44.517 62.0629 44.9864 60.6837 45.3776C59.6876 42.1699 58.4617 38.8839 56.9293 35.5197C58.4617 32.1555 59.7642 28.8695 60.6837 25.6618ZM54.554 3.59891C55.3969 3.59891 56.0864 3.75539 56.776 4.14657C59.3045 5.63308 60.224 10.3273 59.1513 17.0557C58.9214 18.3857 58.6149 19.794 58.3084 21.2805C55.0904 20.5764 51.6424 20.0287 48.0413 19.6375C45.9725 16.5863 43.7505 13.848 41.5285 11.4226C46.1257 6.80664 50.7996 3.59891 54.554 3.59891ZM43.2908 19.3246C41.9116 19.2464 40.4558 19.2464 39 19.2464C37.5442 19.2464 36.0884 19.2464 34.7092 19.3246C36.0884 17.4469 37.5442 15.7257 39 14.0827C40.4558 15.7257 41.9116 17.5251 43.2908 19.3246ZM21.3006 4.14657C21.9136 3.75539 22.6798 3.59891 23.5226 3.59891C27.277 3.59891 31.9509 6.7284 36.5481 11.4226C34.3261 13.848 32.1807 16.5863 30.0354 19.6375C26.4342 19.9505 22.9862 20.4982 19.7682 21.2805C19.3851 19.8723 19.1552 18.464 18.9253 17.0557C17.8527 10.4056 18.6955 5.71132 21.3006 4.14657ZM17.3163 45.3776C8.73477 42.874 3.60118 39.0404 3.60118 35.5197C3.60118 32.4685 7.12574 29.4172 13.332 26.9918C14.558 26.5224 15.9371 26.053 17.3163 25.6618C18.3124 28.8695 19.5383 32.1555 21.0707 35.5197C19.5383 38.8839 18.2358 42.2481 17.3163 45.3776ZM18.9253 53.9837C19.1552 52.6537 19.4617 51.2454 19.7682 49.7589C22.9862 50.463 26.4342 51.0107 30.0354 51.4019C32.1041 54.4531 34.3261 57.1914 36.5481 59.6168C31.9509 64.2328 27.277 67.4405 23.5226 67.4405C22.6798 67.4405 21.9902 67.284 21.3006 66.8928C18.6955 65.4063 17.8527 60.6339 18.9253 53.9837Z"
        fill={color ? color : outColor}
      />
    </svg>
  );
};

export type ComponentProps = {
  color?: string;
  outColor?: string;
  inColor?: string;
  size?: number;
  className?: string;
  "data-testid"?: string;
};
export default ReactIcon;
