"use client";

import { useEffect, useState } from "react";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div id="loader" className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
        <div className="spinner" />
      </div>
    );
  }

  return <>{children}</>;
}
