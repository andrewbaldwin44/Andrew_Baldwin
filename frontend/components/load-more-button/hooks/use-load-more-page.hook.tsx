import { useCallback, useEffect, useState } from 'react';

export default function useLoadMorePage<TileType>({
  initialTiles,
  initialPaginationNumber,
  loadMoreCallback,
}: {
  initialTiles: TileType[];
  initialPaginationNumber: number;
  // eslint-disable-next-line no-unused-vars
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
  }, [initialTiles, initialPaginationNumber]);

  const onLoadMore = useCallback(async () => {
    setIsLoading(true);

    const { response, paginationNumber: newPaginationNumber } = await loadMoreCallback({
      paginationNumber: currentPaginationNumber,
    });

    setLoadedTiles([...loadedTiles, ...response]);
    setCurrentPaginationNumber(newPaginationNumber);

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPaginationNumber, loadMoreCallback, setLoadedTiles, setCurrentPaginationNumber]);

  return {
    onLoadMore,
    isLoading,
    loadedTiles,
    currentPaginationNumber,
  };
}
