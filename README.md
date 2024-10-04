# ObjectsSmasher

**ObjectsSmasher** is an interactive JavaScript game where objects move from all sides of the screen, and players must smash them using various tools. This game allows customizable rounds, objects, and smashing tools to enhance user experience.

## How to Use

### Step 1: Include the Script

Add the following script to the `<head>` section of your HTML file to load ObjectsSmasher:

```html
<script src="https://cdn.jsdelivr.net/gh/mfareedijaz/ObjectsSmasher@v1.1.1/dist/objectssmasher.min.js"></script>
```

### Step 2: Initialize the Game

Place this code in the `<body>` section to initialize the game:

```html
<script>
  ObjectSmasher(0, 2, 0, "ghost", "aim");
</script>
```

### Configuration Details

The `ObjectSmasher` function accepts five parameters to customize gameplay:

1. **First Parameter** (`number`): Number of rounds with one object coming from each screen side.
2. **Second Parameter** (`number`): Number of rounds with two objects from all sides.
3. **Third Parameter** (`number`): Number of rounds with three objects from each screen side. Customize these rounds as desired.
4. **Fourth Parameter** (`string`): Choose the object type that appears. Options include:
   - `football`
   - `spider`
   - `dollar`
   - `ghost`
   - `bomb`
5. **Fifth Parameter** (`string`): Select the tool used to hit objects. Options are:
   - `aim`
   - `wand`
   - `hammer`
   - `frog`
   - `player`

## Example Game Setup

In the above example:
- The game includes 0 rounds of single objects, 2 rounds with two objects, and 0 rounds with three objects.
- The target object is a **ghost**.
- The smashing tool is an **aim**.

Feel free to modify these parameters to create a unique gameplay experience.

## Getting Started

1. Clone or download the repository.
2. Edit the `<script>` tag in the `<body>` section of the HTML file to configure game settings.
3. Open the HTML file in a browser to start the game.

## Features

- **Multiple Rounds:** Customize up to three rounds with increasing object frequency.
- **Dynamic Characters:** Select from various objects like footballs, ghosts, and bombs.
- **Interactive Tools:** Choose different tools to interact with objects, enhancing game playability.
