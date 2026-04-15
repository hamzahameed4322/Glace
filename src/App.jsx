import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Hero } from './components/sections/Hero';
import { StorySection } from './components/sections/StorySection';
import { FlavorsSection } from './components/sections/FlavorsSection';

import { LocateSection } from './components/sections/LocateSection'; // Globe Section
import { DeveloperSection } from './components/sections/DeveloperSection';
import { HeroHighlight } from './components/ui/HeroHighlight';
import {GallerySection} from './components/sections/GallerySection';
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col">
              {/* 1. Hero Section */}
              <section id="home">
                <Hero />
              </section>
<button>Just testing</button>
              {/* 2. Flavors Section (Bento Grid with Highlighting) */}
              <FlavorsSection /> 

              {/* 3. Branches Section (Draggable Cards - "Char Chand" Part) */}
             <GallerySection />

              {/* 4. Story Section (With Dots Highlight) */}
              <section id="story">
                <HeroHighlight>
                  <StorySection />
                </HeroHighlight>
              </section>

              {/* 5. Locate Section (Interactive Globe & Links) */}
              <LocateSection />
              <DeveloperSection/>
            </div>
          } />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;