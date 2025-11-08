"use client";
import { Suspense } from "react";
import PaperDetailContent from "./PaperDetailContent";
import "./PaperDetail.css";

export default function PaperDetailPage() {
  return (
    <Suspense fallback={
      <div className="paper-detail-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading paper details...</p>
        </div>
      </div>
    }>
      <PaperDetailContent />
    </Suspense>
  );
}