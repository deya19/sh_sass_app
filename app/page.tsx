import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionList";

import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export default async function page() {
  // const companions = await getAllCompanions({ limit: 3 });
  // const recentSessionCompanions = await getRecentSessions(10);

  const [companions, recentSessionCompanions] = await Promise.all([
    getAllCompanions({ limit: 3 }),
    getRecentSessions(10),
  ]);

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
}
