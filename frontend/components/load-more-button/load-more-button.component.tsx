export interface ILoadMoreButton {
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, isLoading }: ILoadMoreButton) {
  return <button onClick={onLoadMore}>Load More</button>;
}
