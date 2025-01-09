'use client'
import Contact from "@/components/Contact";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Cards from "@/components/Cards";

export default function Main() {
    return (
        <>
        <Header />
        <Banner />
        <Cards />
        <Contact />
        <Footer />
        </>
    );
}
