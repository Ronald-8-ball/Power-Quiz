const QUESTIONS = {
    maths: [
        {
        question: "What is the derivative of x^2 ?",
        options: ["2x", "x", "x^2", "1"],
        answer: 0,
        },
        {
        question: "What is the value of π (approximately)?",
        options: ["2.14", "3.14", "4.13", "1.73"],
        answer: 1,
        },
        {
        question: "What is 12 × 8?",
        options: ["96", "86", "108", "110"],
        answer: 0,
        },
        {
        question: "Solve for x: 2x + 3 = 11.",
        options: ["4", "5", "3", "2"],
        answer: 0,
        },
        {
        question: "What is the next prime number after 7?",
        options: ["9", "10", "11", "13"],
        answer: 2,
        },
        {
        question: "What is the area of a circle with radius r?",
        options: ["2πr", "πr^2", "πr", "πr^3"],
        answer: 1,
        },
    ],

    chemistry: [
        {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2", "H2O", "HO2"],
        answer: 2,
        },
        {
        question: "pH value less than 7 indicates a substance is:",
        options: ["Basic", "Neutral", "Acidic", "Alkaline"],
        answer: 2,
        },
        {
        question: "Which gas is produced when an acid reacts with a metal?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        answer: 1,
        },
        {
        question: "Atomic number indicates the number of which particle?",
        options: ["Neutrons", "Protons", "Electrons", "Atoms"],
        answer: 1,
        },
        {
        question: "Which element is a noble gas?",
        options: ["Oxygen", "Nitrogen", "Argon", "Iron"],
        answer: 2,
        },
        {
        question: "What type of bond involves sharing electron pairs between atoms?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        answer: 1,
        },
    ],

    physics: [
        {
        question: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: 0,
        },
        {
        question: "Light travels fastest in which medium?",
        options: ["Air", "Vacuum", "Water", "Glass"],
        answer: 1,
        },
        {
        question: "What is the acceleration due to gravity on Earth (approx)?",
        options: ["9.8 m/s^2", "8.9 m/s^2", "10.8 m/s^2", "1 g"],
        answer: 0,
        },
        {
        question: "Which quantity is a scalar?",
        options: ["Velocity", "Acceleration", "Speed", "Displacement"],
        answer: 2,
        },
        {
        question: "Sound cannot travel through which of these?",
        options: ["Solids", "Liquids", "Gases", "Vacuum"],
        answer: 3,
        },
        {
        question: "Electric current is measured in: ",
        options: ["Volts", "Ohms", "Amperes", "Watts"],
        answer: 2,
        },
    ],

    biology: [
        {
        question: "What is the basic unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        answer: 2,
        },
        {
        question: "Plants make food by which process?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
        answer: 2,
        },
        {
        question: "Which blood cells help fight infection?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: 1,
        },
        {
        question: "DNA stands for:",
        options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Dicarboxy Nucleotide Acid", "None"],
        answer: 0,
        },
        {
        question: "Which organ pumps blood around the body?",
        options: ["Lungs", "Liver", "Heart", "Kidney"],
        answer: 2,
        },
        {
        question: "The largest organ in the human body is: ",
        options: ["Heart", "Skin", "Liver", "Lungs"],
        answer: 1,
        },
    ],

    geography: [
        {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3,
        },
        {
        question: "The longest river in the world is:",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: 1,
        },
        {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: 1,
        },
        {
        question: "Mount Everest is found in which mountain range?",
        options: ["Andes", "Alps", "Himalayas", "Rockies"],
        answer: 2,
        },
        {
        question: "The study of maps is called:",
        options: ["Geology", "Cartography", "Meteorology", "Ecology"],
        answer: 1,
        },
        {
        question: "Latitude lines run in which direction?",
        options: ["North-South", "East-West", "Diagonal", "Vertical"],
        answer: 1,
        },
    ],

    english: [
        {
        question: "Choose the correctly punctuated sentence:",
        options: ["Its a nice day.", "It's a nice day.", "Its' a nice day.", "It is' a nice day."],
        answer: 1,
        },
        {
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Elated", "Angry", "Weak"],
        answer: 1,
        },
        {
        question: "Which is a noun?",
        options: ["Run", "Beautiful", "Teacher", "Quickly"],
        answer: 2,
        },
        {
        question: "Identify the verb in this sentence: 'She runs daily.'",
        options: ["She", "runs", "daily", "She runs"],
        answer: 1,
        },
        {
        question: "Which word is an adjective?",
        options: ["Quick", "Run", "Happiness", "Swiftly"],
        answer: 0,
        },
        {
        question: "Plural of 'mouse' is:",
        options: ["mouses", "mice", "mousees", "meese"],
        answer: 1,
        },
    ],

    literature: [
        {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: 1,
        },
        {
        question: "A short story is generally shorter than a:",
        options: ["Novel", "Poem", "Essay", "Letter"],
        answer: 0,
        },
        {
        question: "Which literary device uses exaggeration for effect?",
        options: ["Metaphor", "Hyperbole", "Alliteration", "Irony"],
        answer: 1,
        },
        {
        question: "A narrative poem that tells a story is called:",
        options: ["Sonnet", "Epic", "Haiku", "Limerick"],
        answer: 1,
        },
        {
        question: "What is the main character in a story called?",
        options: ["Antagonist", "Protagonist", "Narrator", "Author"],
        answer: 1,
        },
        {
        question: "A poem of 14 lines is called:",
        options: ["Ode", "Sonnet", "Ballad", "Epic"],
        answer: 1,
        },
    ],

    agriculture: [
        {
        question: "Which is a major cereal crop?",
        options: ["Rice", "Tomato", "Apple", "Orange"],
        answer: 0,
        },
        {
        question: "Which practice improves soil fertility?",
        options: ["Monocropping", "Deforestation", "Crop rotation", "Overgrazing"],
        answer: 2,
        },
        {
        question: "Which tool is commonly used for tilling soil?",
        options: ["Plough", "Hammer", "Saw", "Drill"],
        answer: 0,
        },
        {
        question: "What is irrigation?",
        options: ["Removing pests", "Supplying water to crops", "Harvesting", "Planting"],
        answer: 1,
        },
        {
        question: "Which is an organic method of pest control?",
        options: ["Chemical sprays", "Biological control", "Burning", "Flooding"],
        answer: 1,
        },
        {
        question: "Legumes are important because they:",
        options: ["Provide nitrogen to soil", "Are always root crops", "Require no water", "Are poisonous"],
        answer: 0,
        },
    ],
}

export default QUESTIONS
