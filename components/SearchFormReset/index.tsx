"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.searchForm') as HTMLFormElement;

        if(form) form.reset();
    }

    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className='text-gray-400'>
                <X className="size-5" />
            </Link>
        </button>
    )
}
export default SearchFormReset