import NBB from `../images/New Bacon-ing Burger.png;`

export default function handler(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    const burgers = [
        {
            name: "New Bacon-ings Burger",
            episode: "Season 1, Episode 1: Human Flesh",
            description: "A classic all-beef patty topped with lettuce, cheddar cheese, onion, tomato, and bacon. It’s what George Washington was fighting for. It’s what the Statue of Liberty wishes it was holding instead of a dumb torch. Use the freshest ingredients you can find, down to the bun.",
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
              "Preheat your oven to 400°F. Cook your bacon, either in the oven or on the stovetop, until crispy. Drain the bacon and chop some of it while leaving 8 slices whole.",
              "Cook your French fries according to the instructions on page 9 (or the method of your choice).",
              "Combine the milk and egg in a large bowl. Coat the blanched fries and spread them on a baking sheet. Toss the fries with the chopped bacon and bake for 15 minutes until crispy.",
              "Shape the beef into 4 patties. Season with salt and pepper, cook them on a skillet, and top with cheddar cheese when almost done.",
              "Assemble your burger: bottom bun, lettuce, cheeseburger, tomato, bacon slices, onion, top bun. Serve with bacon-y fries."
            ],
            image: NBB
          }
    ];
    res.status(200).json(burgers);
}