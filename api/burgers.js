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
          image: 'https://res.cloudinary.com/dxbdiw4c7/image/upload/v1729401651/New_Bacon-ing_Burger_fonilp.png',
          servingSize: 4
      },
      {
        name: "Eggers Can’t Be Cheesers Burger",
        episode: "Season 3, Episode 11: Nude Beach",
        description: "An all-beef patty topped with American cheese and a fried egg sunny-side up. Served with hot sauce and a piece of lettuce on a plain bun. It’s eggscatly as eggstraordinary as it sounds. Eggs.",
        ingredients: [
          "1 pound ground beef",
          "8 slices American cheese",
          "4 large eggs",
          "4 English muffins",
          "Green leaf lettuce",
          "Hot sauce (optional, but better)",
          "Butter"
        ],
        steps: [
          "Make 4 patties, season both sides with salt and pepper, and cook the burgers. When they’re just about done, top with the cheese (2 slices per burger). Cover the pan if you’re cooking inside to help melt the cheese.",
          "In a large frying pan, cook your eggs sunny-side up over a bit of butter. No flipping these guys—that’s what sunny side up means.",
          "Toast your English muffins.",
          "Build your burger: Spread a tiny bit of butter on your toasted English muffins, then bottom muffin, cheeseburger, and egg on top. Finish it with a dash of hot sauce, and the muffin top.",
          "Grab a napkin—you’ll need it!"
        ],
        image: 'https://res.cloudinary.com/dxbdiw4c7/image/upload/v1729560932/lb0dmrxonsn5lbj6s09y.png',
        servingSize: 4      
      },
      {
        name: "A Good Manchego is Hard to Find Burger",
        episode: "Season 5, Episode 10: Late Afternoon in the Garden of Bob and Louise",
        description: "A burger topped with caramelized shallots, Manchego cheese, and a generous helping of fig jam. Fig jam! Banned. Banned!! Remember? From the show?",
        servings: 4,
        ingredients: [
          "2 tablespoons butter",
          "6 shallots, peeled and thinly sliced",
          "1 pound ground beef",
          "1 small block Manchego cheese, sliced",
          "Fig jam",
          "4 buns",
          "Arugula or Boston lettuce"
        ],
        steps: [

          "Melt the butter in a wide frying pan over medium-low heat. Add the shallots and stir to coat. Cook over fairly low heat, stirring occasionally, until the shallots are very soft and a deep, sticky golden-brown, about 15 to 20 minutes.",
          "Form 4 patties, season both sides with salt and pepper, and cook the burgers, melting a few slices of Manchego over each burger. Cov        steps: [er the pan or tent with foil to help the cheese melt.",
          "Build your burger: Bottom bun, then the cheeseburger, arugula, and sautéed shallots. Spread the fig jam on the top bun. Spread happiness in your face."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730076992/A_Good_Manchego_is_Hard_to_Find_Burger_keup9i.png",
        servingSize: 4
      
      
  }
      
  ];

  // Send the burger data as JSON
  res.status(200).json(burgers);
}
