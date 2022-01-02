export interface ILoadMoreButton {
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, isLoading }: ILoadMoreButton) {
  return (
    <button className='btn btn-red w-64 block mx-auto mb-10' onClick={onLoadMore}>
      Load More
    </button>
  );
}
