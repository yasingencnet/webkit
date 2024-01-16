import React from "react";

import Hero from '@/components/Blocks/Hero/Hero';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import Gallery from "@/components/Blocks/Gallery/Gallery";
import About from "@/components/Blocks/About/About";
import BlogPosts from "@/components/Blocks/BlogPosts/BlogPosts";

export default function Home() {
  return (
      <>
          <Hero/>
          <SelectedWorks/>
          <SkillSet/>
          <Gallery />
          <About/>
      </>
  )
}
