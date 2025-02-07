import { redirect } from "next/navigation";

export default function RootPage() {
  // redirect to /home, can also choose to redirect to login
  redirect("/home");
}