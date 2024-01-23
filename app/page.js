import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import About from '@/components/Blocks/About/About';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import Gallery from "@/components/Blocks/Gallery/Gallery";
import Resume from "@/components/Blocks/Resume/Resume";
import CodepenShowcase from "@/components/Blocks/CodepenShowcase/CodepenShowcase";
import BlogPosts from "@/components/Blocks/BlogPosts/BlogPosts";

export default function Home() {
    return (
        <>
            <Hero/>
            <SelectedWorks/>
            <SkillSet/>
            <ExperienceBlock/>
            <Resume/>
            <Gallery/>
            {/*<About/>*/}
            {/*<CodepenShowcase/>*/}
            {/*<BlogPosts/>*/}
        </>
    )
}
