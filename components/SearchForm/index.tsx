import { Search } from 'lucide-react';
import Form from "next/form";
import SearchFormReset from '../SearchFormReset';

export default function SearchForm({query}:{query?: string}) {
  return (
    <Form
      action="/"
      scroll={false}
      className="max-w-[320px] min-h-[50px] bg-secondary border rounded-sm outline-none focus:outline-none mt-8 px-5 flex justify-center items-center gap-5 searchForm"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="flex-1 w-full bg-secondary h-auto outline-none text-gray-400"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset/>}
        <button type="submit" className='text-gray-400'><Search /></button>
      </div>
    </Form>
  );
}
