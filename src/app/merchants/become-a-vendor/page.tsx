import { redirect } from "next/navigation";

/** Alias — live site uses /our-merchants/interest/ for Become a Vendor. */
export default function BecomeAVendorPage() {
  redirect("/merchants/interest");
}
