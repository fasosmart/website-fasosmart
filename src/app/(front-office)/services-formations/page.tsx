import { redirect } from "next/navigation";

/**
 * Redirection de l'ancienne page vers la nouvelle structure
 * /services-formations -> /services
 */
export default function ServicesFormationsPage() {
  redirect("/services");
}
