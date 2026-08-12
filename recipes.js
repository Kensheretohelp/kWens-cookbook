// kWen's Cookbook — August 2026 canon recipe patch
// Paste this AFTER the existing `const RECIPES = [...]` declaration in recipes.js.
// Existing matching recipes are replaced; missing recipes are added.

(function () {
  const PATCH_RECIPES = [
  {
    "title": "Beef Pho with Brisket, Blade Roast, Bones & Oxtail",
    "category": "Soups & Stews",
    "meta": "Large-batch weekend beef pho with bones, optional oxtail, brisket, blade roast, raw striploin at service, charred aromatics, toasted spices, and an overnight defat.",
    "ingredients": [
      "4–5 lb beef soup bones",
      "2–3 lb oxtail, optional but recommended",
      "2–3 lb beef brisket",
      "2–3 lb bottom blade roast",
      "Raw striploin, sliced paper-thin, for serving",
      "2 large onions, halved",
      "1 large piece ginger, halved lengthwise",
      "4–5 star anise",
      "2 cinnamon sticks",
      "1 tbsp coriander seeds",
      "1 tsp fennel seeds",
      "4–5 whole cloves",
      "4–5 cardamom pods, optional",
      "About 20 black peppercorns",
      "1/3 cup fish sauce",
      "Yellow rock sugar, to taste",
      "Salt, to taste",
      "Rice noodles, green onions, Thai basil, bean sprouts, lime, hoisin, and sriracha, for serving"
    ],
    "method": [
      "Place the beef bones in a large stockpot, cover with cold water, bring to a hard boil, and parboil for about 5 minutes to remove impurities.",
      "Drain completely, rinse the bones thoroughly, and clean the pot.",
      "Char the onions and ginger over a flame, under the broiler, or in a dry cast-iron pan until well browned.",
      "Toast the star anise, cinnamon sticks, coriander, fennel, cloves, cardamom if using, and black peppercorns in a dry pan for 1–2 minutes, just until fragrant.",
      "Return the cleaned bones to the pot. Add the optional oxtail, brisket, bottom blade roast, charred onion and ginger, and toasted spices.",
      "Cover with fresh cold water and bring to a very gentle simmer. Skim foam and impurities as needed.",
      "Simmer very gently for about 8 hours. Remove the brisket after roughly 2–3 hours, once tender enough to slice. The bottom blade roast can remain in the broth longer.",
      "Strain the broth carefully. Season with 1/3 cup fish sauce, yellow rock sugar, and salt, adjusting to taste.",
      "Cool the broth, refrigerate overnight, and remove the hardened fat the next day.",
      "Reheat the broth until piping hot. Cook rice noodles separately.",
      "Place noodles in bowls with sliced cooked brisket and/or blade roast plus very thin raw striploin. Ladle the boiling-hot broth over the raw beef so it cooks in the bowl.",
      "Finish with green onions and Thai basil, with other garnishes at the table."
    ],
    "note": "Canon overnight pho process. Bones are parboiled only about 5 minutes. Oxtail is optional but recommended. Use 4–5 star anise, 2 cinnamon sticks, 1/3 cup fish sauce, yellow rock sugar, and raw striploin at service.",
    "tags": [
      "Soups & Stews",
      "Canon Complete",
      "Freezer Friendly"
    ],
    "image": "images/beef-pho-with-brisket-blade-roast-bones-and-oxtail.JPG"
  },
  {
    "title": "Mémère’s Crepes",
    "category": "Baking & Breakfast",
    "meta": "Old family-style sour-milk crepes with a very thin batter and crisp edges.",
    "ingredients": [
      "125 g (1 cup) all-purpose flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp vinegar",
      "1 tsp baking powder",
      "Extra milk, only if needed to make the batter very runny",
      "Canola oil, for the pan"
    ],
    "method": [
      "Stir 1 tbsp vinegar into 1 cup milk and let stand a few minutes to make the sour milk.",
      "Whisk together the flour and baking powder.",
      "Add the egg and sour milk and whisk until mostly smooth.",
      "If needed, add a little extra milk until the batter is thin, loose, and much runnier than pancake batter.",
      "Heat a stainless-steel skillet over medium heat and add a small amount of canola oil.",
      "Pour in a thin layer of batter and swirl the pan to spread it.",
      "Cook until the edges are crisp and the top is mostly set.",
      "Flip and cook briefly on the second side.",
      "Repeat with the remaining batter, adding a little more oil as needed."
    ],
    "note": "Canon family version: 1 cup milk plus 1 tablespoon vinegar. No butter in the batter; the runny batter and lightly oiled stainless pan give the crisp edges.",
    "tags": [
      "Breakfast",
      "Family Favorite",
      "Canon Complete"
    ],
    "image": "images/memeres-crepes.JPG"
  },
  {
    "title": "Spanish Rice with Salsa, Tomato Paste & Corn",
    "category": "Basics",
    "meta": "Easy seasoned basmati rice with salsa, tomato paste, frozen corn, and cumin.",
    "ingredients": [
      "1 tbsp olive oil",
      "1 small onion, finely diced",
      "2 cloves garlic, minced",
      "1 cup basmati rice",
      "2 tbsp (30 ml) tomato paste",
      "1 cup salsa",
      "2 cups chicken broth or water",
      "1 cup frozen corn",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp ground cumin",
      "1/2 tsp chili powder or paprika, optional"
    ],
    "method": [
      "Heat olive oil in a saucepan over medium heat.",
      "Cook onion until softened, about 4–5 minutes.",
      "Add garlic and cook 30 seconds.",
      "Add basmati rice and toast lightly for 1–2 minutes.",
      "Stir in tomato paste until the rice is evenly coated.",
      "Add salsa, broth, frozen corn, salt, pepper, cumin, and optional chili powder or paprika.",
      "Bring to a simmer.",
      "Cover, reduce heat to low, and cook until the rice is tender and the liquid is absorbed, about 15–18 minutes.",
      "Rest covered for 5 minutes, then fluff with a fork."
    ],
    "note": "Canon update: frozen corn is included and cumin is part of the recipe, not optional.",
    "tags": [
      "Basics",
      "Side",
      "Canon Complete"
    ],
    "image": "images/spanish-rice-with-salsa-and-tomato-paste.JPG"
  },
  {
    "title": "Parmesan Crusted Pork Loin",
    "category": "Main Dishes",
    "meta": "Oven-roasted pork loin with a savoury Parmesan-herb crust.",
    "ingredients": [
      "1 boneless pork loin roast, about 2–3 lb",
      "1 tbsp olive oil",
      "1 tbsp Dijon mustard",
      "1/2 cup finely grated Parmesan cheese",
      "1/3 cup breadcrumbs",
      "1 tsp garlic powder",
      "1 tsp dried parsley",
      "1/2 tsp dried thyme",
      "1/2 tsp black pepper",
      "1/2 tsp salt"
    ],
    "method": [
      "Preheat oven to 400°F / 205°C.",
      "Pat the pork loin dry and season lightly with salt and pepper.",
      "Mix Parmesan, breadcrumbs, garlic powder, parsley, thyme, pepper, and salt.",
      "Brush the pork with olive oil and Dijon mustard.",
      "Press the Parmesan mixture firmly over the top and sides of the roast.",
      "Place the pork on a rack set inside a baking sheet or roasting pan so hot air can circulate underneath.",
      "Roast until the centre reaches 145°F / 63°C, roughly 40–60 minutes depending on thickness.",
      "Rest 10 minutes before slicing."
    ],
    "note": "Best oven method: roast on a rack over a baking sheet rather than directly on foil. Pull at 145°F / 63°C and rest before slicing.",
    "tags": [
      "Main Dishes",
      "Pork",
      "Canon Complete"
    ],
    "image": "images/parmesan-crusted-pork-loin.JPG"
  },
  {
    "title": "Salted Toffee Cookie Bars",
    "category": "Desserts",
    "meta": "Soft brown-sugar cookie bars topped with homemade toffee sauce, flaky salt, and dark or semi-sweet chocolate drizzle.",
    "ingredients": [
      "Cookie base: 1 cup (227 g) unsalted butter, melted",
      "1 cup (220 g) packed light brown sugar",
      "1/2 cup (100 g) granulated sugar",
      "2 eggs, room temperature",
      "1 tsp (5 ml) vanilla extract",
      "2 cups (245 g) all-purpose flour, spooned and levelled",
      "1/2 tsp (2.5 g) baking soda",
      "1/4 tsp (1 g) baking powder",
      "1 tsp (3 g) cornstarch",
      "1/2 tsp (3 g) salt",
      "Toffee sauce: 28 g (2 tbsp) unsalted butter",
      "73 g (1/3 cup) packed brown sugar",
      "60 g (2 tbsp + 2 tsp) light corn syrup",
      "21 ml (1 tbsp + 1 tsp) heavy whipping cream",
      "6 g (2 tsp) cornstarch",
      "10 ml (2 tsp) water",
      "Pinch flaky sea salt",
      "1.7 ml (1/3 tsp) vanilla extract",
      "4 oz dark or semi-sweet chocolate, melted, for drizzling"
    ],
    "method": [
      "Preheat oven to 350°F / 175°C and line a 9 x 13-inch pan with parchment.",
      "Whisk melted butter, brown sugar, and granulated sugar until smooth.",
      "Whisk in eggs and vanilla.",
      "In another bowl combine flour, baking soda, baking powder, cornstarch, and salt.",
      "Fold the dry ingredients into the wet ingredients just until combined.",
      "Spread evenly in the prepared pan and bake until the edges are golden and the centre is set, about 22–28 minutes. Cool.",
      "For the toffee sauce, melt the butter with brown sugar and corn syrup over medium-low heat.",
      "Stir in the cream and bring to a gentle simmer.",
      "Mix the cornstarch and water into a slurry, stir it into the sauce, and cook briefly until glossy and thickened.",
      "Remove from heat and stir in vanilla and a pinch of flaky sea salt.",
      "Spread or drizzle the toffee over the cooled cookie base.",
      "Drizzle with melted dark or semi-sweet chocolate and finish with a little extra flaky salt if desired.",
      "Let set before slicing into bars."
    ],
    "note": "Canon recipe added July 2026.",
    "tags": [
      "Desserts",
      "Baking",
      "Canon Complete"
    ],
    "image": "images/salted-toffee-cookie-bars.JPG"
  },
  {
    "title": "Smoky BBQ Chicken, Wax Bean & Pepper Skillet",
    "category": "Main Dishes",
    "meta": "Smoky BBQ chicken breast skillet with green pepper and yellow wax beans, served with roasted potatoes and golden beets.",
    "ingredients": [
      "2 chicken breasts, cut into bite-size pieces",
      "1 green bell pepper, sliced or diced",
      "2 cups yellow wax beans, trimmed and cut into bite-size pieces",
      "1 tbsp olive oil",
      "1 tsp smoked paprika",
      "1/2 tsp onion powder",
      "Salt and black pepper, to taste",
      "1/2–3/4 cup BBQ sauce, to taste",
      "Roasted potatoes, for serving",
      "1–2 golden beets, peeled and diced, to roast with the potatoes"
    ],
    "method": [
      "Heat olive oil in a large skillet over medium-high heat.",
      "Season the chicken with smoked paprika, onion powder, salt, and pepper.",
      "Cook the chicken until browned and nearly cooked through.",
      "Add the green pepper and yellow wax beans and cook until crisp-tender.",
      "Reduce heat slightly and stir in the BBQ sauce.",
      "Cook another few minutes until the chicken is fully cooked and everything is well coated.",
      "For the side, roast diced potatoes and diced golden beets together until browned and tender.",
      "Serve the smoky BBQ chicken, wax beans, and peppers with the roasted potatoes and golden beets."
    ],
    "note": "Final tested version: no corn and no garlic. The diced golden beets roasted with the potatoes were a keeper.",
    "tags": [
      "Main Dishes",
      "Chicken",
      "Family Favorite",
      "Canon Complete"
    ],
    "image": "images/smoky-bbq-chicken-wax-bean-pepper-skillet.JPG"
  }
];

  const replaceAliases = {
    "Spanish Rice with Salsa, Tomato Paste & Corn": ["Spanish Rice with Salsa & Tomato Paste"],
    "Parmesan Crusted Pork Loin": ["Parmesan Pork Loin", "Parmesan-Crusted Pork Loin"]
  };

  function upsertRecipe(recipe) {
    const aliases = [recipe.title, ...(replaceAliases[recipe.title] || [])];
    const idx = RECIPES.findIndex(r => aliases.includes(r.title));
    if (idx >= 0) {
      RECIPES.splice(idx, 1, recipe);
    } else {
      RECIPES.push(recipe);
    }
  }

  PATCH_RECIPES.forEach(upsertRecipe);
})();
