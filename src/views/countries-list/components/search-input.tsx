import { ChangeEvent, useState } from 'react';
import { useHistory } from "react-router";
import qs from 'query-string';
import useQueryParams from '../../../hooks/use-query-params';

const SearchInput = () => {
  const query = useQueryParams();
  const { push } = useHistory();
  const [searchQuery, setSearchQuery] = useState<string>(
    query.get("search") ?? ""
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    const parsed = qs.parse(window.location.search);
    const searchString = qs.stringify({...parsed, search: event.target.value}, { skipEmptyString: true });
    push({
      search: searchString,
    });
  }

  return (
    <div className="shadow flex">
      <input
        className="w-full rounded p-2 focus:outline-none"
        type="search"
        placeholder="Search by name or alpha2Code..."
        value={searchQuery}
        onChange={handleChange}
      />
      <span className="flex justify-start items-center bg-white w-auto pr-2">
        <svg
          version="1.1"
          className="h-4 text-dark"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
            c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
            C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
            S32.459,40,21.983,40z"
          />
        </svg>
      </span>
    </div>
  );
}

export default SearchInput;