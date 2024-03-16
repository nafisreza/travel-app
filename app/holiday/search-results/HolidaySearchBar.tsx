'use client'

import { useState } from "react";
import HolidaySearch from "../holiday-search";
import HolidayResultForm from "@/components/search-results/holiday-result-form";

export default function HolidaySearchBar() {
    const [modifyOn, setmodifyOn] = useState(false);

    return (
        <div>
            {
                modifyOn ?
                    <div className="p-4 md:p-8">
                        <HolidaySearch />
                    </div >
                    :
                    <HolidayResultForm openSearchForm={() => { setmodifyOn(true) }} />
            }
        </div>
    );
}