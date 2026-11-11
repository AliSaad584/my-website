import { useState , useContext } from "react";
import {CoachContext} from "../context/CoachContext"
import PageHeader from "../components/common/PageHeader";
import CoachList from "../components/cards/CoachList";
import CoachForm from "../components/coaches/CoachForm";
import Button from "../components/common/Button";

const Coaches = () => {

    const { coaches } = useContext(CoachContext);

    const [showForm, setShowForm] = useState(false);

    return (
        <main className="page-container">

            <PageHeader
                title="MEET OUR COACHES"
                description="Get to know the people supporting our fitness community."
            />

            <div className="page-action">
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "CLOSE FORM" : "JOIN OUR TEAM"}
                </Button>
            </div>

            {showForm && <CoachForm />}

            <CoachList coaches={coaches} />

        </main>
    );
};

export default Coaches;