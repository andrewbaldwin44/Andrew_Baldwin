import { useState, useCallback } from 'react';

// interface IUseLoadMorePage

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

  const onLoadMore = useCallback(async () => {
    setIsLoading(true);

    const { response, paginationNumber: newPaginationNumber } = await loadMoreCallback({
      paginationNumber: currentPaginationNumber,
    });

    setLoadedTiles([...loadedTiles, ...response]);
    setCurrentPaginationNumber(newPaginationNumber);

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPaginationNumber]);

  return {
    onLoadMore,
    isLoading,
    loadedTiles,
    currentPaginationNumber,
  };
}
