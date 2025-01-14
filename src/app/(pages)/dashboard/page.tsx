import Aside from "@/components/Aside";
import Main from "@/components/Main";
import "../../../styles/scrollbar.css";

export default function Dashboard() {
    return (
        <main className="w-full h-screen overflow-y-auto p-2 flex flex-col lg:flex-row gap-1 scrollbar">
            <Main />
            <Aside />
        </main>
    );
}
