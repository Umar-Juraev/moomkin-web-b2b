"use client"
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:hide">
        <Header />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="md:hide">
        <Footer />
      </footer>
    </div>
  );
}