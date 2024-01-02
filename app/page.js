import React from "react";

import Hero from '@/components/Hero/Hero';
import SkillSet from "@/components/SkillSet/SkillSet";
import SelectedWorks from "@/components/SelectedWorks/SelectedWorks";
import Gallery from "@/components/Gallery/Gallery";

import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/UI/CustomCursor/CustomCursor";
import BlogPosts from "@/components/BlogPosts/BlogPosts";

export default function Home() {
  return (
    <main>
        <Hero></Hero>
        <SkillSet></SkillSet>
        <SelectedWorks></SelectedWorks>
        <Gallery></Gallery>
        <BlogPosts></BlogPosts>
        <Footer></Footer>

        <CustomCursor></CustomCursor>
    </main>
  )
}
