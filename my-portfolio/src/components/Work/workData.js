/**
 * Work log content.
 *
 * TITLES are taken verbatim from the "Shoffr Work" Notion page.
 * Everything else (summary, problem / approach / impact, tech chips) is a
 * PLACEHOLDER DRAFT written from the title alone — rewrite it with the real
 * details from each Notion section, then flip SHOW_DRAFT_BANNER to false.
 */

export const SHOW_DRAFT_BANNER = true;

export const COMPANY = "Shoffr";

export const CATEGORIES = [
  "Algo & Systems",
  "Frontend",
  "Backend",
  "Integrations",
  "Internal Tools",
];

export const WORK_ITEMS = [
  {
    id: "01",
    slug: "trip-prioritization-algorithm",
    title: "Trip Prioritization Algorithm",
    category: "Algo & Systems",
    tagline:
      "Scoring engine that ranks the next trip to be offered, so the best trip surfaces first instead of the nearest one.",
    tech: ["Node.js", "MongoDB", "Aggregation Pipeline"],
    problem:
      "When many trips are open at once, partners had no deterministic way to know which one to act on first, so good trips sat unnoticed while low-value ones got picked up.",
    approach:
      "Built a weighted scoring layer that ranks open trips by the signals that matter to the network, and exposed that ranking to the matching flow so the top trip is always the one presented first. Weights were kept in config so they could be tuned without a release.",
    impact:
      "Reordering happens on read, so nothing had to be migrated; the ranking could be adjusted per city as the network grew.",
    links: { gh: "", demo: "" },
  },
  {
    id: "02",
    slug: "co-passenger-modules-partner-portal",
    title: "Co-passenger Modules in Partner Portal",
    category: "Frontend",
    tagline:
      "Partner-facing screens to add, review and manage co-passengers on a booked trip.",
    tech: ["React", "React Bootstrap", "REST API"],
    problem:
      "Co-passengers were handled over chat and phone because the portal had no place to record them, which left trips and their actual headcount out of sync.",
    approach:
      "Shipped a self-serve co-passenger module in the partner portal: partners attach co-passengers to a trip, see who is on board, and edit or remove riders before departure. Validation lives on the client and the server so a bad headcount can't be saved.",
    impact:
      "Cut the back-and-forth per trip and gave the ops team a single source of truth for who is travelling.",
    links: { gh: "", demo: "" },
  },
  {
    id: "03",
    slug: "backend-frontend-synchronisation",
    title: "Backend–Frontend Synchronisation",
    category: "Backend",
    tagline:
      "Contract and state-sync layer that keeps the portal UI and the API showing the same truth.",
    tech: ["Node.js", "Express", "React", "Web Sockets"],
    problem:
      "The UI drifted from the database after writes on other clients — stale trip lists, ghost statuses, and support tickets that were really cache problems.",
    approach:
      "Standardised response shapes and error codes across endpoints, moved the client onto a single store with optimistic updates plus reconciliation on ack, and pushed status changes to the open session instead of waiting for a poll.",
    impact:
      "Status changes now reflect in the portal without a refresh, and endpoint contracts are documented in one place.",
    links: { gh: "", demo: "" },
  },
  {
    id: "04",
    slug: "b2b-partnership-webpage",
    title: "B2B Partnership Webpage",
    category: "Frontend",
    tagline:
      "Landing page and enquiry flow for onboarding corporate travel partners.",
    tech: ["React", "Tailwind CSS", "Form API"],
    problem:
      "Corporate partners had no clear place to read what the B2B offering is or to ask for it, so every enquiry arrived through a personal number.",
    approach:
      "Built a conversion-focused page explaining the partnership model, pricing shape and onboarding steps, with a qualified enquiry form that routes leads to the right team with the company context attached.",
    impact:
      "Inbound partner enquiries became structured and trackable instead of scattered across chats.",
    links: { gh: "", demo: "" },
  },
  {
    id: "05",
    slug: "automated-flight-delay-handling",
    title: "Automated Flight-Delay Handling",
    category: "Integrations",
    tagline:
      "Delay watcher that re-times pickups and notifies everyone affected, without an operator touching it.",
    tech: ["Node.js", "Cron Worker", "Flight Status API", "Notifications"],
    problem:
      "A delayed inbound flight silently broke the connected trip; ops found out from the customer, not from the system.",
    approach:
      "Added a scheduled watcher that tracks flight status for trips with an air leg, recomputes the pickup window on delay, notifies rider and partner, and raises a ticket only when the shift exceeds what automation is allowed to absorb.",
    impact:
      "Most delay cases now resolve before a human sees them; the ones that escalate arrive with context already attached.",
    links: { gh: "", demo: "" },
  },
  {
    id: "06",
    slug: "address-functionality",
    title: "Address Functionality",
    category: "Frontend",
    tagline:
      "Autocomplete, saved places and a verified pickup/drop point picker across booking and profiles.",
    tech: ["React", "Google Maps API", "Geocoding", "MongoDB"],
    problem:
      "Free-text addresses were the top cause of unreachable pickups and of two bookings for the same trip being priced from different locations.",
    approach:
      "Replaced raw text inputs with a suggestions-driven picker that stores a resolved place id and coordinates alongside the human-readable line, plus saved places for repeat riders and a manual pin fallback for places the geocoder misses.",
    impact:
      "Pickup points are now machine-checkable, which made the cancellation and pricing logic far less ambiguous.",
    links: { gh: "", demo: "" },
  },
  {
    id: "07",
    slug: "paytm-payment-link",
    title: "Paytm Payment Link",
    category: "Integrations",
    tagline:
      "Stable-amount payment links for collecting trip dues off-app, with reconciliation built in.",
    tech: ["Node.js", "Paytm APIs", "Webhooks", "Checksum"],
    problem:
      "Riders who wouldn't pay in-app were chased manually, and finance reconciled by matching UPI screenshots against a spreadsheet.",
    approach:
      "Generated a payment link per due from the ops console, verified the callback checksum before trusting it, and wrote the settled transaction straight back onto the booking so the due closes itself.",
    impact:
      "Collection moved from screenshots and reminders to a link, a webhook and a closed due.",
    links: { gh: "", demo: "" },
  },
  {
    id: "08",
    slug: "ops-ticketing-system",
    title: "Ops Ticketing System",
    category: "Internal Tools",
    tagline:
      "Lightweight internal ticketing for field and support exceptions, with assignment, SLA and status flow.",
    tech: ["Node.js", "React", "MongoDB", "Nodemailer"],
    problem:
      "Exceptions lived in a WhatsApp group — no owner, no ageing, no record of what was actually fixed.",
    approach:
      "Built a ticket queue with category and priority, assignment to the right desk, status transitions with an audit trail, and ageing/SLA flags so a stale ticket escalates on its own. Escalations from automation land here too, so the machine and the humans feed one queue.",
    impact:
      "Ops finally had a number for open exceptions, and the delay automation got somewhere to hand off to.",
    links: { gh: "", demo: "" },
  },
];

export const WORK_BY_SLUG = (slug) =>
  WORK_ITEMS.find((item) => item.slug === slug);
