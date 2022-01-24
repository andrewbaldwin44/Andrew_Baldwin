import Loader from 'components/loader/loader.component';

export interface ILoadMoreButton {
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, isLoading }: ILoadMoreButton) {
  console.log({ isLoading });
  return (
    <button
      className='btn btn-red w-64 block h-12 mx-auto'
      onClick={onLoadMore}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : 'Load More'}
    </button>
  );
}
