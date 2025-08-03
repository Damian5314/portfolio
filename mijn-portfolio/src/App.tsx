import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ProjectsApp from './pages/ProjectsApp';  // ← Alleen ProjectsApp importeren
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'nl' | 'en'>('nl');

  const handleLanguageChange = (lang: 'nl' | 'en') => {
    setLanguage(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation language={language} onLanguageChange={handleLanguageChange} />
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route path="/projects" element={<ProjectsApp language={language} />} />
              <Route path="/projects/:id" element={<ProjectsApp language={language} />} />
              <Route path="/about" element={<About language={language} />} />
              <Route path="/contact" element={<Contact language={language} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;