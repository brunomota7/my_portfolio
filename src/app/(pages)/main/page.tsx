import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Particles from "@/components/ui/particles";

export default function Main() {
    return (
        <>
        <main className="relative w-full h-auto flex flex-col bg-gray-900 from-gray-800 to-gray-900">
            <Particles id="particules-header"/>
            <div className="absolute w-full">
                <Header />
                <About />
                <Contact />
                <Footer />
            </div>
        </main>

        </>
    );
}
