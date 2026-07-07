"use client";

import { useEffect } from "react";
import { captureUtmFromUrl } from "@/lib/utm";
import { track } from "@/lib/analytics";

/** Renders nothing. Captures UTM params once on mount and fires ViewContent. */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmFromUrl();
    track("ViewContent", { page: window.location.pathname });
  }, []);
  return null;
}
