import React from "react";

import Header from '@/components/Layout/Header/Header';
import Hero from '@/components/Blocks/Hero/Hero';
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import Gallery from "@/components/Blocks/Gallery/Gallery";

import Footer from "@/components/Layout/Footer/Footer";
import CustomCursor from "@/components/UI/CustomCursor/CustomCursor";
import BlogPosts from "@/components/Blocks/BlogPosts/BlogPosts";
//import CodepenShowcase from "@/components/Blocks/CodepenShowcase/CodepenShowcase";

export default function Home() {
  return (
    <>
        <Header></Header>
        <main>
            <Hero></Hero>
            <SelectedWorks></SelectedWorks>
            <SkillSet></SkillSet>
            <Gallery></Gallery>
            <BlogPosts></BlogPosts>
            <CustomCursor></CustomCursor>
            {/*<CodepenShowcase></CodepenShowcase>*/}
        </main>
        <Footer></Footer>
    </>
  )
}
