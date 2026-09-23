// Team directory data for Vakkeel & Associates.
//
// Shape consumed by the (planned) TeamGrid component:
//   - organizations: array — leadership titles span both entities, rendered on
//     separate lines / joined with a divider.
//   - category: filter bucket, e.g. the "management" tab in the filter bar.
//   - isHighlighted: top-level leadership — sort first and use the prominent
//     treatment.
//   - photo: null falls back to the gold-ring initials avatar. Replace with an
//     import from src/assets/team/ once real headshots are supplied.
import cmpkRaheemPhoto from "../assets/team/cmpk-raheem.webp";
import aboobackerSidheeqPhoto from "../assets/team/aboobacker-sidheeq.webp";

export const team = [
  {
    id: 1,
    name: "CMPK Raheem",
    role: "Founder & Managing Director",
    organizations: ["Vakkeel & Associates"],
    category: "management",
    photo: cmpkRaheemPhoto,
    isHighlighted: true,
  },
  {
    id: 2,
    name: "Aboobacker Sidheeq",
    role: "Chairman",
    organizations: ["Vakkeel & Associates"],
    category: "management",
    photo: aboobackerSidheeqPhoto,
    isHighlighted: true,
  },
];

export default team;
