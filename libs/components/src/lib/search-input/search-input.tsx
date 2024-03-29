import { fontStyles, vars } from '@/styles';
import { elevatedButton, searchInput } from './search-input.css';

const SearchInput = () => {
  return (
    <div className={searchInput}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.33333 2.66667C4.756 2.66667 2.66666 4.756 2.66666 7.33333C2.66666 9.91066 4.756 12 7.33333 12C8.59063 12 9.73179 11.5028 10.5709 10.6943C10.5885 10.6714 10.6077 10.6495 10.6286 10.6286C10.6495 10.6077 10.6714 10.5885 10.6943 10.5709C11.5028 9.7318 12 8.59063 12 7.33333C12 4.756 9.91066 2.66667 7.33333 2.66667ZM12.0213 11.0785C12.8423 10.052 13.3333 8.75001 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C8.75 13.3333 10.052 12.8424 11.0785 12.0213L13.5286 14.4714C13.7889 14.7318 14.2111 14.7318 14.4714 14.4714C14.7317 14.2111 14.7317 13.7889 14.4714 13.5286L12.0213 11.0785Z"
            fill="#8A979D"
          />
        </svg>

        <p
          className={fontStyles.MANROPE_MED}
          style={{ color: vars.colors.onSurfaceVariant, fontWeight: 500 }}
        >
          Search
        </p>
      </div>
      <div className={elevatedButton}>
        <p className={fontStyles.MANROPE_MED}>/</p>
      </div>
    </div>
  );
};

export default SearchInput;
