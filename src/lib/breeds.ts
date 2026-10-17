// Edit this list to match the breeds you actually keep and sell.
// Photos go in public/breeds/<slug>.jpg (see public/breeds/README.txt).
export type Breed = { slug: string; name: string; note: string };

export const BREEDS: Breed[] = [
  { slug: "new-zealand-white", name: "New Zealand White", note: "The standard meat breed. Fast growing with a good carcass." },
  { slug: "californian", name: "Californian", note: "Compact and calm, with a high meat to bone ratio and good mothering." },
  { slug: "chinchilla", name: "Chinchilla", note: "Medium size with a dense coat and a solid meat carcass." },
  { slug: "flemish-giant", name: "Flemish Giant", note: "The largest breed. Often used for size in breeding programmes." },
];
