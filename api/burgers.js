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
          "Form 4 patties, season both sides with salt and pepper, and cook the burgers, melting a few slices of Manchego over each burger. Cover the pan or tent with foil to help the cheese melt.",
          "Build your burger: Bottom bun, then the cheeseburger, arugula, and sautéed shallots. Spread the fig jam on the top bun. Spread happiness in your face."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730076992/A_Good_Manchego_is_Hard_to_Find_Burger_keup9i.png",
        servingSize: 4
      },
      {
        name: "Totally Radish Burger",
        episode: "Season 1, Episode 5: Hamburger Dinner Theater",
        description: "An all-beef patty topped with a refreshingly crunchy-creamy-spicy mix of crème fraîche, cucumbers, dill, and radishes.",
        ingredients: [
          "1 cucumber, peeled",
          "About 10-12 radishes",
          "1/3 cup crème fraîche",
          "1 tablespoon chopped fresh dill",
          "1 pound ground beef",
          "Green leaf lettuce",
          "4 French rolls (plain buns are fine, too)"
        ],
        steps: [
          "Use a microplane to grate the cucumber and the radishes into a medium bowl. Add the crème fraîche and the dill and mix.",
          "Form 4 patties, season both sides with salt and pepper, and cook your burgers.",
          "Build your burger: Put some lettuce and a burger on the bottom roll, some of that delicious radish-cucumber mixture, top bun.",
          "Add the garnish. Did you forget? We just talked about it. You know what, it's fine. I don't know why I'm making such a big deal about it."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730250715/Totally_Radish_Burger_wgiqd8.png",
        servingSize: 4
      },
      {
        name: "Do the Brussel Burger",
        episode: "Season 2, Episode 3: Synchronized Swimming",
        description: "A lightly seasoned bacon burger topped with sautéed sprouts and pistachios.",
        ingredients: [
          "1/2 pound bacon",
          "1/3 pound Brussels sprouts, thinly sliced",
          "1/4 cup shelled pistachios, roughly chopped",
          "1 pound ground beef",
          "4 buns",
          "Green leaf lettuce",
          "Sour cream"
        ],
        steps: [
          "Cook your bacon on the stove in a large frying pan set over low heat. Cook the bacon until it's crispy, but not too crispy.",
          "Transfer your bacon to paper towels, and throw your Brussels sprouts into that delicious bacon fat; increase the heat to medium-high.",
          "Once the sprouts start to brown a bit, add the pistachios. Stir for about a minute, then remove from heat and set aside.",
          "Season the beef with the salt and pepper, form 4 patties, and cook your burgers in the same pan.",
          "Build your burger: Bottom bun, burger, bacon, Brussels sprouts mixture, a dollop of sour cream, and your top bun. Dollop. Dollop. That's a great word, dollop."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730252153/Do_the_Brussel_Burger_zwvvhg.png",
        servingSize: 4
      },
      {
        name: "Poblano Picasso Burger",
        episode: "Season 1, Episode 8: Art Crawl",
        description: "An all-beef patty topped with a spicy poblano salsa verde, fresh tomatoes, and Monterey Jack cheese.",
        ingredients: [
          "1/4 cup chopped white onions",
          "1 teaspoon butter",
          "1 large poblano pepper, stemmed, halved lengthwise, and seeded",
          "4 tomatillos, husked and quartered",
          "1 jalapeño pepper",
          "1 pound ground beef",
          "4 slices Monterey Jack cheese",
          "4 buns",
          "Green leaf lettuce",
          "1 large tomato, thickly sliced"
        ],
        steps: [
          "Preheat your broiler.",
          "Cook the onions in a small frying pan with butter over medium-high heat until translucent.",
          "Put the poblano and tomatillos in a small casserole dish and place 6 inches under the broiler for 5 to 10 minutes, until the skins start to brown.",
          "Add the cooked onions, broiled poblano and tomatillos, and the jalapeño to a food processor or blender, and puree; set aside.",
          "Form 4 patties, season both sides with salt and pepper, and cook the burgers as you normally would, making sure to melt a heavy helping of Monterey Jack on top.",
          "Build your burger: Bottom bun, cheeseburger, a generous helping of salsa verde, tomato, and the top bun."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730252390/Poblano_Picasso_Burger_firekz.png",
        servingSize: 4
      },
      {
        name: "It's Fun to Eat at the Rye-MCA Burger",
        episode: "Season 2, Episode 6: Dr. Yap",
        description: "All-beef patties on rye bread topped with cheddar cheese, brown mustard, caramelized onions, and horseradish.",
        ingredients: [
          "1 tablespoon butter",
          "1/2 medium onion, sliced",
          "1 pound ground beef",
          "Thickly sliced cheddar cheese, up to 1/2-inch thick",
          "Sliced rye bread",
          "Boston or green leaf lettuce",
          "4 teaspoons prepared horseradish (or 1 avocado, sliced)",
          "Brown mustard"
        ],
        steps: [
          "Melt the butter in a wide frying pan over medium-low heat. Add the onion and stir to coat. Cook over low heat, stirring occasionally, until the onions are soft and a sticky golden-brown, about 20 to 30 minutes.",
          "Make patties, season both sides with salt and pepper, and cook them as you normally would. Just before they finish cooking, lay a thick slice of cheddar cheese over each patty, and cover or tent to help the cheese melt.",
          "Build your burger: Rye bread, lettuce, cheeseburger, caramelized onions, a spoonful of horseradish (or a couple of slices of avocado), and another piece of rye bread with brown mustard slathered all over it."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730338001/It_s_Fun_to_Eat_at_the_Rye-MCA_Burger_oaugu3.png",
        servingSize: 4
      },
      {
        name: "If Looks Could Kale Burger",
        episode: "Season 2, Episode 7: Moody Foodie",
        description: "An all-beef patty topped with Mediterranean-style orzo salad and crispy kale chips.",
        ingredients: [
          "3 1/2 cups low-sodium chicken stock",
          "3/4 cup orzo",
          "4 whole wheat or whole-grain buns",
          "8 bunches kale, thick stems removed",
          "Olive oil",
          "2 sprigs fresh rosemary",
          "4 cloves garlic, minced",
          "1 pound ground beef",
          "2 tablespoons red wine vinegar",
          "Kosher salt and pepper"
        ],
        steps: [
          "Bring chicken stock to a boil in a medium saucepan, add orzo, and cook for 10 minutes. Drain thoroughly and transfer to a large mixing bowl.",
          "Wash and dry the kale leaves thoroughly. Sprinkle lightly with salt.",
          "Bake for 10 minutes, flip, rotate, and bake for an additional 5 minutes until crispy but not burnt. Set aside.",
          "Preheat your oven to 300°F. Add the orzo salad ingredients: rosemary, olive oil, minced garlic, red wine vinegar, salt, and pepper. Mix well.",
          "Make the burgers: Form 4 patties, season both sides with salt and pepper, and cook them as you normally would.",
          "Build your burger: Bottom bun, orzo salad, cheeseburger, crispy kale, top bun."
        ],
        image: "https://res.cloudinary.com/dxbdiw4c7/image/upload/v1730338000/If_Looks_Could_Kale_Burger_n2oyke.png",
        servingSize: 4
      }
      
      

      

      
  ];

  // Send the burger data as JSON
  res.status(200).json(burgers);
}
