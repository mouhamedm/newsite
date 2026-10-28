export const SITE = {
  name: "Sylva",
  studio: "Sylva Atelier",
  meta: "©2026 · Forêt / Lumière",
  tagline: "La forêt,\nramenée à la lumière.",
  description:
    "Un atelier de paysage. Les images arrivent en courbe, se posent au centre, puis s’effacent dans le grain.",
} as const;

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMAGES = [
  {
    src: unsplash("photo-1441974231531-c6227db76b6e"),
    alt: "Sous-bois baigné de lumière",
  },
  {
    src: unsplash("photo-1501785888041-af3ef285b470"),
    alt: "Lac de montagne au petit jour",
  },
  {
    src: unsplash("photo-1418065460487-3e41a6c84dc5"),
    alt: "Forêt dans la brume",
  },
  {
    src: unsplash("photo-1470071459604-3b5ec3a7fe05"),
    alt: "Collines dans le brouillard",
  },
  {
    src: unsplash("photo-1433086966358-54859d0ed716"),
    alt: "Cascade entre les roches",
  },
  {
    src: unsplash("photo-1501854140791-b6f1b00aaa65"),
    alt: "Vallée verte vue d’en haut",
  },
  {
    src: unsplash("photo-1472214103451-9374bd1c798e"),
    alt: "Prairie au soleil levant",
  },
  {
    src: unsplash("photo-1518173946687-a4c8892ceef4"),
    alt: "Mousse et fougères",
  },
  {
    src: unsplash("photo-1469474968028-56623f02e42e"),
    alt: "Montagne dans la lumière dorée",
  },
  {
    src: unsplash("photo-1470770841072-f978cf4d019e"),
    alt: "Maison au bord du lac",
  },
];

export const WORK_ITEMS = [
  {
    image: unsplash("photo-1501785888041-af3ef285b470"),
    title: "Lac d’altitude",
  },
  {
    image: unsplash("photo-1441974231531-c6227db76b6e"),
    title: "Canopée",
  },
  {
    image: unsplash("photo-1418065460487-3e41a6c84dc5"),
    title: "Brume",
  },
  {
    image: unsplash("photo-1433086966358-54859d0ed716"),
    title: "Cascade",
  },
  {
    image: unsplash("photo-1501854140791-b6f1b00aaa65"),
    title: "Vallée",
  },
  {
    image: unsplash("photo-1470071459604-3b5ec3a7fe05"),
    title: "Crête",
  },
  {
    image: unsplash("photo-1469474968028-56623f02e42e"),
    title: "Soleil",
  },
  {
    image: unsplash("photo-1518173946687-a4c8892ceef4"),
    title: "Mousse",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Œuvre",
    links: [
      { label: "Index", href: "#work" },
      { label: "Paysages", href: "#work" },
      { label: "Carnets", href: "#atelier" },
    ],
  },
  {
    title: "Atelier",
    links: [
      { label: "À propos", href: "#atelier" },
      { label: "Matière", href: "#atelier" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@sylva.studio", href: "mailto:hello@sylva.studio" },
      { label: "Forêt / Lumière", href: "#contact" },
    ],
  },
];
