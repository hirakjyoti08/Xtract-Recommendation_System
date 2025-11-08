import { Suspense } from "react";
import SearchContent from "../../components/SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="loading-state">
        <div className="loading-spinner"></div>
        Loading search...
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}