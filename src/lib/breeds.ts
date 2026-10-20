// Edit this list to match the breeds you actually keep and sell, and the real traits of YOUR animals.
// Photos go in public/breeds/<slug>.jpg (see public/breeds/README.txt).
export type Breed = {
  slug: string;
  name: string;
  note: string; // short line used on cards
  tagline: string;
  bestFor: string;
  size: string;
  growth: string;
  temperament: string;
  availability: string;
  traits: string[];
  about: string;
  photos?: string[]; // image addresses, the first is the main photo
};

export const BREEDS: Breed[] = [
  {
    slug: "dutch", name: "Dutch",
    note: "Small, calm and instantly recognisable, with attentive mothering.",
    tagline: "Small, calm and instantly recognisable.", bestFor: "Breeding stock and pets", size: "Small to medium", growth: "Moderate", temperament: "Calm", availability: "Coming soon",
    traits: ["Coloured head and hindquarters split by a white band", "Compact frame", "Calm and easy to handle", "Known as attentive mothers"],
    about: "Dutch rabbits are easy to recognise by their coloured head and hindquarters separated by a white band. They are small to medium sized, calm and easy to handle, and they are known as attentive mothers, which makes them a favourite for breeding stock and as pets.",
  },
  {
    slug: "hyla", name: "Hyla",
    note: "A commercial hybrid line built for fast, efficient meat production.",
    tagline: "Built for fast meat production.", bestFor: "Commercial meat production", size: "Medium to large", growth: "Very fast", temperament: "Calm", availability: "Coming soon",
    traits: ["Commercial hybrid meat line", "Fast growth to market weight", "Good litter sizes", "Offspring from your own breeding may vary from the parents"],
    about: "Hyla is a commercial hybrid meat line, bred for fast growth and good litter sizes. It is widely used in meat production. Because it is a hybrid line, rabbits bred from Hyla stock may not match their parents, so it suits farmers who want fast meat production.",
  },
  {
    slug: "broken-checkered", name: "Broken Checkered",
    note: "A striking spotted coat that stands out in any rabbitry.",
    tagline: "A striking spotted coat.", bestFor: "Breeding and meat", size: "Medium to large", growth: "Moderate", temperament: "Active", availability: "Coming soon",
    traits: ["Patches of colour breaking up a white body", "Easy to tell apart", "Suitable for breeding programmes"],
    about: "Broken Checkered rabbits are known for their spotted coat, with patches of colour breaking up a white body. They are an eye catching addition to any rabbitry and can be used in breeding programmes.",
  },
  {
    slug: "palomino", name: "Palomino",
    note: "A golden coat with a calm nature and a good carcass.",
    tagline: "A golden coat with a calm nature.", bestFor: "Meat, breeding and fur", size: "Medium to large", growth: "Moderate", temperament: "Calm", availability: "Coming soon",
    traits: ["Golden or cream coat", "Medium to large frame with a good carcass", "Calm and easy to handle", "Dual purpose for meat and fur"],
    about: "Palomino rabbits are named for their golden or cream coat. They are calm, medium to large rabbits with a good carcass, and they have long been kept as a dual purpose breed.",
  },
  {
    slug: "chinchilla", name: "Chinchilla",
    note: "Medium size with a dense coat and a solid meat carcass.",
    tagline: "Medium size, dense coat.", bestFor: "Meat, breeding and fur", size: "Medium", growth: "Moderate to fast", temperament: "Calm", availability: "Coming soon",
    traits: ["Dense grey coat with a banded pattern", "Solid, well fleshed carcass", "Gentle temperament", "Useful in mixed meat and breeding programmes"],
    about: "Chinchilla rabbits are known for a dense, silvery grey coat. They are medium sized with a solid carcass, which makes them useful both for meat and as breeding stock.",
  },
  {
    slug: "english-spotted", name: "English Spotted",
    note: "Lively and alert, with a distinctive spotted pattern.",
    tagline: "Lively, with a distinctive pattern.", bestFor: "Breeding stock and showing", size: "Medium", growth: "Moderate", temperament: "Lively", availability: "Coming soon",
    traits: ["Spots along the sides and a line of spots down the back", "Coloured markings on the nose, eyes and ears", "Slim, athletic build", "Active and alert"],
    about: "English Spotted rabbits are easy to recognise by the spots along their sides, the line down the spine and the coloured markings on the nose, ears and eyes. They are slim, active and alert, and are valued mainly as breeding stock and for showing.",
  },
];
