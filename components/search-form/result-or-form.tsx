'use client'

import { useState } from "react";
import VisaResultForm from "../search-results/visa-result-form";
import VisaSearch from "./visa-search";

export default function ResultOrSearch() {
    const [modifyOn, setmodifyOn] = useState(false);

    return (
        <div>
            {
                modifyOn ?
                    <div className="p-4 md:p-8">
                        <VisaSearch />
                    </div >
                    :
                    <VisaResultForm openSearchForm={() => { setmodifyOn(true) }} />
            }
        </div>
    );
}