"use client";
import dynamic from "next/dynamic";

const SquidWidget = dynamic(
  () => import("@0xsquid/widget").then((mod) => mod.SquidWidget),
  { ssr: false }
);

export function SquidWidgetWrapperDynamic() {
  return (
    <SquidWidget
      config={{
        integratorId: process.env.NEXT_PUBLIC_INTEGRATOR_ID || "",
      }}
    />
  );
}
