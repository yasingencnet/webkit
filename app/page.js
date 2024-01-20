import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import Gallery from "@/components/Blocks/Gallery/Gallery";

export default function Home() {
    return (
        <>
            <Hero/>
            <SelectedWorks/>
            <SkillSet/>
            <ExperienceBlock/>
            <Gallery/>
        </>
    )
}
