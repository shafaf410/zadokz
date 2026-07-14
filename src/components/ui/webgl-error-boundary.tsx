"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export class WebGLErrorBoundary extends React.Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export function WebGLFallback({
  className,
  message,
}: {
  className?: string;
  message: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[#F5F2EA] p-4 text-center text-charcoal",
        className
      )}
    >
      <p>{message}</p>
    </div>
  );
}
