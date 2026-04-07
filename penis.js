// NSFW Penis Reaction Mod v2 - Clickable in Special category

elements.dickseed = {
    color: "#8B4513",
    behavior: behaviors.POWDER,
    category: "special",        // Changed to "special" so it shows in the Special tab
    state: "solid",
    density: 1200,
    tempHigh: 200,
    stateHigh: "fire",
    reactions: {
        "water": { elem1: "pixel_penis", elem2: null, chance: 1 },
        "salt_water": { elem1: "pixel_penis", elem2: null },
        "dirty_water": { elem1: "pixel_penis", elem2: null },
        "pool_water": { elem1: "pixel_penis", elem2: null }
    },
    desc: "Place on ground, add water → turns into a pixel penis"
};

elements.pixel_penis = {
    color: ["#ffaa88", "#ff9977", "#ff8866"],   // Skin tone variations
    behavior: [
        "XX|XX|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|XX",
        "XX|CH|CH"   // Simple shaft + head shape
    ],
    category: "special",        // Also in Special tab
    state: "solid",
    density: 1300,
    tempHigh: 150,
    stateHigh: "fire",
    desc: "A proud pixelated penis. Your first NSFW creation."
};

// Optional silly extra
elements.cum = {
    color: "#f0f0ff",
    behavior: behaviors.LIQUID,
    category: "special",
    state: "liquid",
    density: 1025,
    viscosity: 0.7,
    tempHigh: 100,
    stateHigh: "steam",
    desc: "The natural consequence"
};

console.log("🍆 NSFW Penis mod v2 loaded! Both dickseed and pixel_penis are now in the Special tab.");