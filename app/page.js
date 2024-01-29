import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import Resume from "@/components/Blocks/Resume/Resume";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import Ticker from '@/components/UI/Elements/Ticker/Ticker';
import BoldTitle from "@/components/UI/Cards/BoldTitle/BoldTitle";
import Gallery from "@/components/Blocks/Gallery/Gallery";

export default function Home() {
    return (
        <>
            <Hero/>
            <SelectedWorks/>
            <SkillSet/>
            <ExperienceBlock/>
            <BoldTitle></BoldTitle>
            <Resume/>
            <Gallery/>
        </>
    )
}
