import Aside from "@/components/Aside";
import Main from "@/components/Main";

export default function Dashboard() {
    return (
        <main className="w-full h-auto p-2 flex flex-col lg:flex-row gap-1">
            <Main />
            <Aside />
        </main>
    );
}
