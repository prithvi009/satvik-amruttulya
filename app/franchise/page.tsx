import { redirect } from "next/navigation";

// The landing page IS the franchise page in v1 — redirect so any link/ad
// pointing at /franchise still lands correctly.
export default function FranchiseRedirect() {
  redirect("/#lead-form");
}
