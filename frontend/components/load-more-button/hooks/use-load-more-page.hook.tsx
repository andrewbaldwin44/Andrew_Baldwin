import { useCallback, useEffect, useState } from 'react';

export default function useLoadMorePage<TileType>({
  initialTiles,
  initialPaginationNumber,
  loadMoreCallback,
}: {
  initialTiles: TileType[];
  initialPaginationNumber: number;
  loadMoreCallback: (paginationNumber: { paginationNumber: number }) => Promise<{
    response: TileType[];
    paginationNumber: number;
  }>;
}) {
  const [loadedTiles, setLoadedTiles] = useState(initialTiles);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPaginationNumber, setCurrentPaginationNumber] = useState(initialPaginationNumber);

  useEffect(() => {
    setLoadedTiles(initialTiles);
    setIsLoading(false);
    setCurrentPaginationNumber(initialPaginationNumber);
  }, [initialTiles]);

  const onLoadMore = useCallback(async () => {
    setIsLoading(true);

    const { response, paginationNumber: newPaginationNumber } = await loadMoreCallback({
      paginationNumber: currentPaginationNumber,
    });

    setLoadedTiles([...loadedTiles, ...response]);
    setCurrentPaginationNumber(newPaginationNumber);

    setIsLoading(false);
  }, [currentPaginationNumber, loadMoreCallback, setLoadedTiles, setCurrentPaginationNumber]);

  return {
    onLoadMore,
    isLoading,
    loadedTiles,
    currentPaginationNumber,
  };
}
