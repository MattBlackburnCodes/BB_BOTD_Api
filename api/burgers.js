export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const burgers = [
    {
      name: "New Bacon-ings Burger",
      episode: "Season 1, Episode 1: Human Flesh",
      description: "A juicy all-beef burger topped with crisp bacon, melted cheddar, fresh tomato slices, and crunchy lettuce, served with a side of golden fries.",
      ingredients: [
        "1 lb ground beef",
        "1/2 lb thick-cut bacon",
        "4 slices cheddar cheese",
        "Green leaf lettuce",
        "1 large tomato, sliced",
        "1/2 red onion, sliced",
        "4 burger buns",
        "Salt and pepper",
        "French fries (for serving)"
      ],
      steps: [
        "Preheat a skillet over medium heat and cook the bacon until crispy. Transfer bacon to paper towels to drain.",
        "Form the ground beef into four patties. Season with salt and pepper on both sides.",
        "In the same skillet, cook the patties to your desired doneness, flipping once. Add a slice of cheddar to each patty in the last minute to melt.",
        "Toast the buns lightly in the skillet or in a toaster.",
        "Assemble the burger: On the bottom bun, layer lettuce, a patty, bacon, tomato, and onion slices. Top with the other half of the bun.",
        "Serve with a side of golden fries."
      ],
      image: 'https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730857666/New_Bacon-ing_Burger_fonilp.png',
      servingSize: 4
    },
    {
      name: "If Looks Could Kale Burger",
      episode: "Season 2, Episode 7: Moody Foodie",
      description: "A Mediterranean-inspired burger with an orzo salad topping and crispy kale chips.",
      ingredients: [
        "1 lb ground beef",
        "1/2 cup cooked orzo",
        "1 bunch kale, destemmed",
        "1 tbsp olive oil",
        "2 garlic cloves, minced",
        "4 whole-grain buns",
        "2 tbsp red wine vinegar",
        "Salt and pepper"
      ],
      steps: [
        "Preheat oven to 300°F. Arrange the kale leaves on a baking sheet, drizzle with olive oil, and sprinkle with salt. Bake for 10-15 minutes, flipping halfway, until crispy.",
        "In a mixing bowl, combine the cooked orzo, minced garlic, red wine vinegar, salt, and pepper. Mix well and set aside.",
        "Shape the ground beef into four patties, seasoning with salt and pepper. Cook patties in a skillet until they reach your desired doneness.",
        "Toast the buns in the skillet or toaster.",
        "To assemble, place orzo salad on the bottom bun, add a patty, and top with crispy kale. Finish with the top bun."
      ],
      image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730338000/If_Looks_Could_Kale_Burger_n2oyke.png",
      servingSize: 4
    },
    {
      name: "Eggers Can’t Be Cheesers Burger",
      episode: "Season 3, Episode 11: Nude Beach",
      description: "A hearty burger with gooey American cheese and a sunny-side-up egg on a toasted English muffin.",
      ingredients: [
        "1 lb ground beef",
        "8 slices American cheese",
        "4 large eggs",
        "4 English muffins, toasted",
        "Green leaf lettuce",
        "Salt, pepper, and hot sauce (optional)",
        "Butter"
      ],
      steps: [
        "Divide and shape the ground beef into four equal patties. Season with salt and pepper.",
        "Cook the patties in a skillet, melting two slices of American cheese on each patty as they finish cooking.",
        "Melt butter in another skillet and crack the eggs. Cook sunny-side-up without flipping for about 3-4 minutes.",
        "Toast the English muffins until golden brown.",
        "Assemble by placing lettuce on the bottom muffin, then the patty with melted cheese, and top with a fried egg. Add a dash of hot sauce if desired, then cover with the top muffin."
      ],
      image: 'https://res.cloudinary.com/dxbdiw4c7/image/upload/v1729560932/lb0dmrxonsn5lbj6s09y.png',
      servingSize: 4      
    },
    {
      name: "Do the Brussel Burger",
      episode: "Season 2, Episode 3: Synchronized Swimming",
      description: "A savory bacon burger topped with sautéed Brussels sprouts and roasted pistachios, finished with sour cream.",
      ingredients: [
        "1 lb ground beef",
        "1/2 lb bacon",
        "1/3 lb Brussels sprouts, thinly sliced",
        "1/4 cup pistachios, chopped",
        "4 buns",
        "Green leaf lettuce",
        "Sour cream",
        "Salt and pepper"
      ],
      steps: [
        "Cook bacon until crispy in a skillet. Drain and set aside, reserving the bacon fat.",
        "In the bacon fat, sauté the Brussels sprouts over medium-high heat for 3-4 minutes, then add pistachios and cook until lightly browned. Set aside.",
        "Form the ground beef into four patties, season with salt and pepper, and cook in the skillet.",
        "Toast the buns in the same skillet.",
        "To assemble, layer lettuce on the bottom bun, add a patty, bacon, Brussels sprouts mixture, and a dollop of sour cream. Cover with the top bun."
      ],
      image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730252153/Do_the_Brussel_Burger_zwvvhg.png",
      servingSize: 4
    },
    {
      name: "Poblano Picasso Burger",
      episode: "Season 1, Episode 8: Art Crawl",
      description: "A Southwestern burger with spicy poblano salsa verde, fresh tomatoes, and creamy Monterey Jack cheese.",
      ingredients: [
        "1 lb ground beef",
        "4 slices Monterey Jack cheese",
        "1 poblano pepper",
        "4 tomatillos, quartered",
        "1 jalapeño",
        "4 buns",
        "Green leaf lettuce",
        "1 large tomato, sliced",
        "Salt and pepper",
        "Olive oil"
      ],
      steps: [
        "Preheat the broiler. Arrange the poblano, tomatillos, and jalapeño on a baking sheet and broil until charred, about 5-8 minutes.",
        "Transfer broiled veggies to a blender with a pinch of salt and a drizzle of olive oil. Blend into a salsa.",
        "Shape ground beef into four patties, season, and cook to desired doneness. Melt Monterey Jack cheese on each patty in the final minutes.",
        "To assemble, spread salsa verde on the bottom bun, add lettuce, a cheesy patty, tomato slices, and cover with the top bun."
      ],
      image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730252390/Poblano_Picasso_Burger_firekz.png",
      servingSize: 4
    },
    {
      name: "It’s Fun to Eat at the Rye-MCA Burger",
      episode: "Season 2, Episode 6: Dr. Yap",
      description: "A rye bread burger with cheddar, caramelized onions, horseradish, and lettuce.",
      ingredients: [
        "1 lb ground beef",
        "1/2 medium onion, sliced",
        "1 tbsp butter",
        "4 slices cheddar cheese",
        "8 slices rye bread, toasted",
        "4 tsp horseradish",
        "Green leaf lettuce",
        "Salt and pepper"
      ],
      steps: [
        "Melt butter in a skillet over medium heat. Add sliced onions and cook until golden and caramelized, about 10-15 minutes.",
        "Shape ground beef into four patties, season, and cook in the skillet, melting cheddar on top in the last few minutes.",
        "Toast rye bread in a toaster or skillet.",
        "Assemble: Spread horseradish on the top slice of each sandwich, layer lettuce, patty, and caramelized onions between rye slices."
      ],
      image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730338001/It_s_Fun_to_Eat_at_the_Rye-MCA_Burger_oaugu3.png",
      servingSize: 4
    },
    {      
      name: "A Good Manchego is Hard to Find Burger",
      episode: "Season 5, Episode 10: Late Afternoon in the Garden of Bob and Louise",
      description: "A savory beef burger topped with melted Manchego cheese, caramelized shallots, and a generous layer of sweet fig jam, all nestled in a soft bun with fresh arugula for a slightly peppery bite.",
      ingredients: [
        "1 lb ground beef",
        "1/2 cup fig jam",
        "1/4 lb Manchego cheese, sliced",
        "6 shallots, thinly sliced",
        "4 buns",
        "Arugula",
        "Salt and pepper",
        "2 tbsp olive oil"
      ],
      steps: [
        "Heat olive oil in a skillet over medium heat. Add sliced shallots and cook, stirring occasionally, until they are golden brown and caramelized, about 15-20 minutes. Remove from heat and set aside.",
        "While the shallots are cooking, form the ground beef into four equal patties. Season both sides with salt and pepper.",
        "In the same skillet, cook the patties to your desired doneness, about 4-5 minutes per side. Place a slice of Manchego cheese on each patty during the last minute of cooking to let it melt.",
        "Lightly toast the buns in a toaster or on a grill pan until golden brown.",
        "To assemble the burger, spread a generous layer of fig jam on the top half of each bun. On the bottom half, layer arugula leaves, a cooked patty with melted Manchego, and caramelized shallots. Close with the top bun.",
        "Serve immediately and enjoy the sweet and savory flavors in every bite!"
      ],
      image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730076992/A_Good_Manchego_is_Hard_to_Find_Burger_keup9i.png",
      servingSize: 4
    }
      
    
  ];

  res.status(200).json(burgers);
}
