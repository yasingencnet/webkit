import React from "react";

import Header from '@/components/Layout/Header/Header';
import Hero from '@/components/Blocks/Hero/Hero';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import Gallery from "@/components/Blocks/Gallery/Gallery";
import About from "@/components/Blocks/About/About";
import BlogPosts from "@/components/Blocks/BlogPosts/BlogPosts";

import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
  return (
    <>
        <Header></Header>
        <main>
            <Hero />
            <SelectedWorks />
            <SkillSet />
            <Gallery />
            <About />
            {/*<BlogPosts />*/}
        </main>
        <Footer></Footer>
    </>
  )
}
