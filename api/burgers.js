//import NBB from '../images/New Bacon-ing Burger.png';
export default function handler(req, res) {
  // Enable CORS for all domains
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle pre-flight requests
  if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
  }

  const burgers = [
      {
          name: "New Bacon-ings Burger",
          episode: "Season 1, Episode 1: Human Flesh",
          description: "A classic all-beef patty topped with lettuce, cheddar cheese, onion, tomato, and bacon.",
          ingredients: [
            "1 pound bacon",
            "French fries",
            "1 pound ground beef",
            "1 cup whole milk",
            "1 large egg",
            "4 buns",
            "Green leaf lettuce",
            "1 large tomato, sliced",
            "1 red onion, sliced"
          ],
          steps: [
            "Preheat your oven to 400°F. Cook your bacon, either in the oven or on the stovetop, until crispy.",
            "Cook your French fries according to the instructions.",
            "Combine the milk and egg in a large bowl. Coat the fries and bake for 15 minutes until crispy.",
            "Shape the beef into 4 patties. Season with salt and pepper, cook them on a skillet, and top with cheddar cheese.",
            "Assemble your burger: bottom bun, lettuce, cheeseburger, tomato, bacon slices, onion, top bun. Serve with bacon-y fries."
          ],
          image: 'https://res.cloudinary.com/dxbdiw4c7/image/upload/v1729401651/New_Bacon-ing_Burger_fonilp.png'
      }
  ];

  // Send the burger data as JSON
  res.status(200).json(burgers);
}
