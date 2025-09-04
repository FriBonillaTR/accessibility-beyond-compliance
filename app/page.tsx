"use client";

import dynamic from "next/dynamic";

const PresentationApp = dynamic(() => import("../components/PresentationApp"), {
  ssr: false,
  loading: () => (
    <div className="loading-container">
      <div
        className="loading-spinner"
        role="status"
        aria-label="Loading presentation"
      >
        <span className="sr-only">Loading presentation...</span>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <div>
      <PresentationApp />
    </div>
  );
}
