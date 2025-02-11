"use client";

import { SquidWidget } from "@0xsquid/widget";

export function SquidWidgetWrapper() {
  return (
    <SquidWidget
      config={{
        integratorId: process.env.NEXT_PUBLIC_INTEGRATOR_ID || "",
      }}
    />
  );
}
