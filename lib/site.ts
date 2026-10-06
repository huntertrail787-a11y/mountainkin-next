// Edit these two lines with your real details.
export const WHATSAPP = "910000000000"; // 91 + your 10-digit number
export const EMAIL = "hello@mountainkin.in";

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}` + (text ? `?text=${encodeURIComponent(text)}` : "");

export const pillars = [
  ["Rooted in the Himalayas", "Our products and experiences come from Uttarakhand, from the farmers, guides and families who know this land best."],
  ["Pure and natural food", "Traditional grains, pulses and spices, with no artificial additives, the way mountain kitchens have always cooked."],
  ["Real people, real stories", "MountainKin began with one trail walk and a rescued mountain dog. We are not a faceless brand, we are a community."],
  ["Good for people, animals and place", "Every purchase and every trek supports mountain families, animal care and a cleaner Himalaya."],
];

export const foods = [
  { name: "Ragi", sub: "Mandua, finger millet", benefit: "Naturally gluten-free and a good source of calcium and fibre.", use: "Use for rotis, porridge, dosa and baby food." },
  { name: "Jhangora", sub: "Barnyard millet", benefit: "Naturally gluten-free, light and easy to digest, with good fibre.", use: "Cook as rice, khichdi or kheer." },
  { name: "Pahadi Rajma", sub: "Mountain kidney beans", benefit: "Plant protein and fibre in a small bean that turns soft and creamy.", use: "Slow-cook with rice for a filling meal." },
  { name: "Pahadi Pulses", sub: "Dals of Uttarakhand", benefit: "Protein-rich, hearty dals that keep you full for longer.", use: "Everyday dal and traditional mountain dishes." },
  { name: "Chemical-free Spices", sub: "Haldi, mirch, dhania", benefit: "Pure spices with no artificial colour or additives, for real flavour.", use: "Everyday cooking and tempering." },
  { name: "Pisyun Loon", sub: "Pahadi flavoured salt", benefit: "Stone-ground salt with mountain herbs and spices, full of taste.", use: "Enjoy with fruit, roti or cucumber." },
  { name: "Pahadi Cow Ghee", sub: "Traditional mountain staple", benefit: "Rich, aromatic clarified butter for everyday cooking and traditional recipes.", use: "Dal, roti, rice, parathas and tempering." },
  { name: "Organic Himalayan Honey", sub: "Natural mountain sweetness", benefit: "A naturally sweet pantry staple for drinks, breakfast and everyday recipes.", use: "Tea, porridge, toast or straight from the spoon." },
];

export const focus = [
  ["Awareness", "Sharing knowledge about healthy food, mountain life and protecting nature."],
  ["Happiness", "Trails, gatherings and shared meals that bring people closer."],
  ["Cleanliness drives", "Community clean-ups of trails, villages and viewpoints."],
  ["Help for the needy", "Supporting families and communities who need a hand."],
  ["Animal and pet care", "Rescue, feeding, vaccination and adoption support for strays and mountain dogs."],
  ["Himalayan culture", "Keeping local food, stories and traditions alive."],
];
