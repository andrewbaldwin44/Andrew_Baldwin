import Loader from 'components/loader/loader.component';
import { useTranslations } from 'hooks/use-translations';

export interface ILoadMoreButton {
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onLoadMore, isLoading }: ILoadMoreButton) {
  const { getTranslations } = useTranslations();

  return (
    <button
      className='btn btn-red w-64 block h-12 mx-auto'
      disabled={isLoading}
      onClick={onLoadMore}
    >
      {isLoading ? <Loader /> : getTranslations('buttons.loadMore')}
    </button>
  );
}
