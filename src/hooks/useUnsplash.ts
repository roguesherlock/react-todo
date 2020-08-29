import { useMemo } from "react";

const collectionId = "790982";

const collectionUrl = "https://source.unsplash.com/collection";

export default function useUnsplash() {
  const imgUrl = useMemo(() => {
    return `${collectionUrl}/${collectionId}/${window.screen.width}x${window.screen.height}`;
  }, []);
  return [imgUrl] as const;
}
