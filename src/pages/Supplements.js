import { useState } from "react";
import supplementsData from "../data/supplementsData";

import PageHeader from "../components/common/PageHeader";
import SupplementList from "../components/cards/SupplementList";

const Supplements = () => {

    const [supplements] = useState(supplementsData);

    return (
        <main className="page-container">

            <PageHeader
                title="MarketPlace"
                description="Discover our store , and choose you supplement ."
            />

            <SupplementList supplements={supplements} />

        </main>
    );
};

export default Supplements;