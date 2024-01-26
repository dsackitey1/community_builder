import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./Sphere.scss";

const Sphere = () => {
  const containerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const isDragging = useRef(false);

  const [generatedPhrases, setGeneratedPhrases] = useState([]);
  const colorRef = useRef(null);
  const cameraRef = useRef(null);
  const pointsRef = useRef(null);
  const intersectedRef = useRef(null);
  const isSelected = useRef(0);
  const scale = 1.3;
  const raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0.1 * scale;

  const maxPhrasesToShow = 3;

  const generateRandomPhrase = () => {
    const nouns = [ "software developers",
    "nurses",
    "teachers",
    "electricians",
    "graphic designers",
    "accountants",
    "marketing managers",
    "chefs",
    "police officers",
    "pharmacists",
    "data analysts",
    "web developers",
    "social workers",
    "dentists",
    "fitness trainers",
    "civil engineers",
    "veterinarians",
    "hr managers",
    "financial analysts",
    "architects",
    "plumbers",
    "journalists",
    "photographers",
    "librarians",
    "physical therapists",
    "flight attendants",
    "biomedical engineers",
    "sales representatives",
    "event planners",
    "interior designers",
    "environmental scientists",
    "mathematicians",
    "firefighters",
    "it support specialists",
    "real estate agents",
    "paramedics",
    "animators",
    "electricians",
    "makeup artists",
    "psychologists",
    "automotive mechanics",
    "wedding planners",
    "fashion designers",
    "geologists",
    "archaeologists",
    "public relations specialists",
    "software testers",
    "pharmacists",
    "network administrators",
    "human resources specialists",
    "physiotherapists",
    "social media managers",
    "biotechnologists",
    "electricians",
    "research scientists",
    "project managers",
    "financial advisors",
    "architectural drafters",
    "flight dispatchers",
    "chefs",
    "technical writers",
    "emergency medical technicians (EMTs)",
    "video game developers",
    "speech therapists",
    "insurance agents",
    "event coordinators",
    "personal trainers",
    "wedding photographers",
    "customer service representatives",
    "aerospace engineers",
    "urban planners",
    "cryptocurrency analysts",
    "content creators (YouTubers, bloggers)",
    "seo specialists",
    "occupational therapists",
    "landscape architects",
    "art directors",
    "judicial clerks",
    "gis specialists",
    "database administrators",
    "sound engineers",
    "investment analysts",
    "biomedical technicians",
    "financial planners",
    "forensic scientists",
    "cybersecurity analysts",
    "translators",
    "quality assurance testers",
    "mobile app developers",
    "culinary instructors",
    "brand managers",
    "technical support engineers",
    "market research analysts",
    "physical trainers",
    "crisis counselors",
    "solar panel installers",
    "occupational health and safety specialists",
    "marine biologists",
    "hvac technicians",
    "industrial designers",
    "gardening enthusiasts",
    "reading aficionados",
    "hiking enthusiasts",
    "painting hobbyists",
    "cooking enthusiasts",
    "photography enthusiasts",
    "writing enthusiasts",
    "gaming hobbyists",
    "cycling enthusiasts",
    "drawing hobbyists",
    "fishing enthusiasts",
    "travel enthusiasts",
    "singing hobbyists",
    "dancing enthusiasts",
    "collectors",
    "bird watching enthusiasts",
    "swimming enthusiasts",
    "musicians",
    "crafting enthusiasts",
    "woodworking enthusiasts",
    "knitting enthusiasts",
    "runners",
    "yoga enthusiasts",
    "meditation enthusiasts",
    "volunteers",
    "campers",
    "scrapbooking enthusiasts",
    "model builders",
    "surfers",
    "skateboarders",
    "mountain bikers",
    "chess enthusiasts",
    "sculptors",
    "candle making enthusiasts",
    "bloggers",
    "podcast enthusiasts",
    "diy project enthusiasts",
    "astrology enthusiasts",
    "board gamers",
    "home brewers",
    "calligraphy enthusiasts",
    "genealogy enthusiasts",
    "cookbook collectors",
    "metal detecting enthusiasts",
    "paintballing enthusiasts",
    "amateur astronomers",
    "rc hobbyists",
    "geocaching enthusiasts",
    "stargazing enthusiasts",
    "book club members",
    "movie enthusiasts",
    "gamers",
    "tech enthusiasts",
    "podcasters",
    "foodies",
    "wine enthusiasts",
    "history buffs",
    "art lovers",
    "language learners",
    "fashionistas",
    "photobook creators",
    "gardening hobbyists",
    "home decorators",
    "tea enthusiasts",
    "comic book collectors",
    "fitness enthusiasts",
    "karaoke singers",
    "board game enthusiasts",
    "virtual reality enthusiasts",
    "board game collectors",
    "tea drinkers",
    "craft beer enthusiasts",
    "virtual reality hobbyists",
    "art collectors",
    "music lovers",
    "film buffs",
    "animal lovers",
    "science enthusiasts",
    "technology hobbyists",
    "social media influencers",
    "creative writers",
    "travel bloggers",
    "fitness bloggers",
    "DIY project hobbyists",
    "interior decorators",
    "yoga practitioners",
    "meditation practitioners",
    "history enthusiasts",
    "philosophy enthusiasts",
    "astrology hobbyists",
    "film photographers",
    "digital artists",
    "collectible card gamers",
    "vloggers",
    "comic book enthusiasts",
    "fashion bloggers",
    "anime enthusiasts",
    "manga readers",
    "science fiction fans",
    "friends",
    "acquaintances",
    "colleagues",
    "neighbors",
    "classmates",
    "teammates",
    "mentors",
    "mentees",
    "coworkers",
    "supervisors",
    "subordinates",
    "partners",
    "spouses",
    "parents",
    "children",
    "siblings",
    "relatives",
    "roommates",
    "pals",
    "buddies",
    "companions",
    "confidantes",
    "supporters",
    "advisors",
    "advocates",
    "allies",
    "listeners",
    "conflict resolvers",
    "mediators",
    "peacemakers",
    "counselors",
    "guides",
    "role models",
    "co-conspirators",
    "collaborators",
    "contributors",
    "volunteers",
    "community members",
    "activists",
    "advocacy groups",
    "influencers",
    "followers",
    "leaders",
    "facilitators",
    "negotiators",
    "diplomats",
    "ambassadors",
    "participants",
    "organizers",
    "support groups",
    "team leaders",
    "event planners",
    "attendees",
    "partygoers",
    "celebrants",
    "celebrities",
    "fans",
    "enthusiasts",
    "patrons",
    "contributors",
    "subscribers",
    "commenters",
    "critics",
    "mentors",
    "protégés",
    "supporters",
    "followers",
    "advisors",
    "advisees",
    "colleagues",
    "peers",
    "members",
    "contributors",
    "partners",
    "collaborators",
    "participants",
    "organizers",
    "facilitators",
    "supporters",
    "volunteers",
    "activists",
    "advocates",
    "community leaders",
    "neighbors",
    "residents",
    "citizens",
    "constituents",
    "voters",
    "campaigners",
    "donors",
    "volunteers",
    "supporters",
    "activists",
    "members",
    "contributors",
    "participants",
    "organizers",
    "advocates",
    "support groups",
    "counselors",
    "listeners",
    "empathizers",
    "mediators",
    "conflict resolvers",
    "peers",
    "friends",
    "mentors",
    "protégés",
    "allies",
    "advocates",
    "supporters",
    "colleagues",
    "collaborators",
    "contributors",
    "partners"];
    const perspective = [
      "optimistic",
      "pessimistic",
      "realistic",
      "idealistic",
      "skeptical",
      "curious",
      "open-minded",
      "closed-minded",
      "analytical",
      "emotional",
      "logical",
      "intuitive",
      "creative",
      "pragmatic",
      "spiritual",
      "scientific",
      "philosophical",
      "ethical",
      "moral",
      "cynical",
      "hopeful",
      "critical",
      "supportive",
      "oppositional",
      "progressive",
      "conservative",
      "individualistic",
      "collectivist",
      "global",
      "local",
      "futuristic",
      "nostalgic",
      "feminist",
      "masculinist",
      "ecocentric",
      "anthropocentric",
      "egalitarian",
      "authoritarian",
      "inclusive",
      "exclusive",
      "subjective",
      "objective",
      "egalitarian",
      "hierarchical",
      "liberal",
      "conservative",
      "egalitarian",
      "meritocratic",
      "anarchist",
      "authoritarian",
      "progressive",
      "traditional",
      "holistic",
      "reductionist",
      "deconstructionist",
      "constructivist",
      "essentialist",
      "postmodern",
      "modern",
      "postcolonial",
      "anticolonial",
      "individualist",
      "communitarian",
      "humanistic",
      "technocentric",
      "neo-Luddite",
      "cosmopolitan",
      "localist",
      "intersectional",
      "colorblind",
      "color-conscious",
      "body-positive",
      "body-negative",
      "ableist",
      "disability-positive",
      "deaf-positive",
      "neurotypical",
      "neurodivergent",
      "futurist",
      "traditionalist",
      "anarcho-syndicalist",
      "libertarian",
      "populist",
      "elitist",
      "anarcho-communist",
      "objectivist",
      "cultural relativist",
      "cultural universalist",
      "nationalist",
      "internationalist",
      "secular",
      "religious",
      "fatalistic",
      "deterministic",
      "free will advocate",
      "existentialist",
      "stoic",
      "epicurean",
      "anarcha-feminist",
      "masculinist",
      "genderfluid",
      "binary",
      "queer-positive",
      "heteronormative",
      "human-centric",
      "non-human-centric",
      "post-humanist",
      "nihilistic",
      "utopian",
      "apocalyptic",
      "complacent",
      "discontented",
      "conformist",
      "nonconformist",
      "fatalistic",
      "opportunistic",
      "apathetic",
      "activist",
      "cynical",
      "pessimistic",
      "closed-minded",
      "skeptical",
      "oppositional",
      "critical",
      "fatalistic",
      "deterministic",
      "apathetic",
      "complacent",
      "discontented",
      "conformist",
      "nonconformist",
      "anarchistic",
      "elitist",
      "nihilistic",
      "utopian",
      "apocalyptic",
      "colorblind",
      "heteronormative",
      "ableist",
      "disability-negative",
      "deaf-negative",
      "neurotypical",
      "binary",
      "gender-negative",
      "anti-environmentalist",
      "anti-technology",
      "anti-progress",
      "anti-globalist",
      "anti-inclusive",
      "anti-diversity",
      "anti-change",
      "anti-science",
      "anti-education",
      "anti-feminist",
      "anti-masculinist",
      "anti-LGBTQ+",
      "anti-immigrant",
      "anti-social",
      "anti-religious",
      "anti-peace",
      "anti-cooperation",
      "anti-justice",
      "anti-human",
      "anti-animal-rights",
      "anti-mental-health",
      "anti-self-improvement",
      "anti-compassion",
      "technocentric",
      "neo-Luddite",
      "cosmopolitan",
      "localist",
      "intersectional",
      "colorblind",
      "color-conscious",
      "body-positive",
      "body-negative",
      "ableist",
      "disability-positive",
      "deaf-positive",
      "neurotypical",
      "neurodivergent",
      "futurist",
      "traditionalist",
      "anarcho-syndicalist",
      "libertarian",
      "populist",
      "elitist",
      "anarcho-communist",
      "objectivist",
      "cultural relativist",
      "cultural universalist",
      "nationalist",
      "internationalist",
      "secular",
      "religious",
      "fatalistic",
      "deterministic",
      "free will advocate",
      "existentialist",
      "stoic",
      "epicurean",
      "anarcha-feminist",
      "masculinist",
      "genderfluid",
      "binary",
      "queer-positive",
      "heteronormative",
      "human-centric",
      "non-human-centric",
      "post-humanist"
    ];
    const action = [
      "smile at a stranger",
      "plant a tree",
      "write a thank-you note",
      "volunteer at a local charity",
      "learn a new language",
      "cook a homemade meal",
      "exercise for 30 minutes",
      "read a book",
      "donate to a cause you care about",
      "write in a journal",
      "call a friend or family member",
      "practice mindfulness meditation",
      "organize a community clean-up",
      "take a walk in nature",
      "learn to play a musical instrument",
      "start a small garden",
      "send a handwritten letter to someone",
      "attend a cultural event or exhibition",
      "create art (painting, drawing, sculpture, etc.)",
      "take a digital detox for a day",
      "compliment a colleague or friend",
      "cook a meal for someone in need",
      "practice random acts of kindness",
      "learn a new skill online",
      "attend a live performance",
      "take a day trip to explore a new place",
      "share a positive affirmation",
      "host a game night with friends",
      "plan a surprise for someone",
      "join a local club or meetup group",
      "take up a new hobby",
      "donate blood",
      "mentor someone",
      "send a care package to a friend",
      "attend a workshop or seminar",
      "do a good deed anonymously",
      "express gratitude to someone who has helped you",
      "create a vision board",
      "cook a cultural dish from a different country",
      "practice a random act of environmental kindness",
      "write and perform a short skit or play",
      "learn to dance",
      "offer to babysit for a friend or family member",
      "start a community garden",
      "write a positive review for a local business",
      "host a neighborhood potluck",
      "create a DIY project",
      "take a photography walk and capture interesting scenes",
      "learn about a new culture",
      "organize a book club",
      "send a care package to a deployed military member",
      "host a themed dinner party",
      "learn about sustainable living practices",
      "start a gratitude journal",
      "practice deep breathing exercises",
      "write a poem",
      "join a sports league",
      "visit a local museum or historical site",
      "perform a random act of kindness for a stranger",
      "take part in a community service project",
      "organize a clothing or food drive",
      "take a dance class",
      "support local businesses",
      "write positive affirmations on sticky notes and share them",
      "attend a local farmers' market",
      "participate in a charity run or walk",
      "host a movie night with friends",
      "create a budget and savings plan",
      "volunteer at an animal shelter",
      "learn about a new era in history",
      "practice yoga",
      "write a letter to your future self",
      "attend a community meeting",
      "start a podcast or YouTube channel",
      "make a DIY gift for someone special",
      "learn about a new technology",
      "write a short story",
      "attend a local religious or spiritual gathering",
      "take up a DIY home improvement project",
      "host a game night with family",
      "create a self-care routine",
      "start a walking or running club",
      "participate in a community art project",
      "take a course on a topic you're passionate about",
      "write a letter of appreciation to a teacher or mentor",
      "attend a local festival or fair",
      "plan a day of self-reflection",
      "learn a magic trick",
      "try a new outdoor activity",
      "create a DIY vision board",
      "join a support group",
      "write a blog post about a topic you're passionate about",
      "attend a local farmers' market",
      "create a DIY home decor item",
      "learn about a new scientific discovery",
      "take a day trip to a nearby city",
      "participate in a community fitness class",
      "start a community book exchange",
      "write and perform a song",
      "plan a weekend getaway",
      "participate in a neighborhood clean-up",
      "organize a community garden",
      "host a neighborhood potluck",
      "create a DIY project for the community",
      "organize a clothing or food drive",
      "join a local club or meetup group",
      "start a walking or running club",
      "attend a community meeting",
      "support local businesses",
      "attend a local farmers' market",
      "participate in a charity run or walk",
      "take part in a community service project",
      "organize a book club for the neighborhood",
      "host a movie night for the community",
      "attend a local festival or fair",
      "plan a community-based day of self-reflection",
      "join a community support group",
      "write positive affirmations on sticky notes for the neighborhood",
      "create a DIY art project for the community",
      "organize a community storytelling event",
      "host a local religious or spiritual gathering",
      "attend a community fitness class",
      "participate in a community art project",
      "start a community book exchange",
      "organize and lead a community workshop or seminar",
      "host a community potluck dinner",
      "start a community podcast or YouTube channel",
      "organize a neighborhood game night",
      "participate in a community theater or musical performance",
      "attend a community-based workshop on sustainable living practices",
      "collaborate on a community-based budget and savings plan",
      "volunteer for local charities as a community",
      "organize a community-based workshop on a topic of interest",
      "participate in a community-based charity event",
      "host a neighborhood movie night",
      "create a community garden project",
      "organize a community-based DIY home improvement project",
      "plan a community day focused on self-care",
      "organize a community-based walking or running event",
      "start a community-based fitness or wellness club",
      "participate in a community-based art or photography project",
      "collaborate on a community-based course or learning opportunity",
      "organize a community-based music or arts festival",
      "start a community-based support group",
      "host a community-based blog or social media platform",
      "organize a community-based home decor project",
      "collaborate on a community-based science exploration day",
      "plan a community day trip to a nearby city",
      "participate in a community-based fitness class",
      "organize a community-based book exchange program",
      "collaborate on a community-based songwriting and performance event",
      "plan a weekend community getaway",
      "organize a community-based cooking class",
      "start a community-based coding or technology club",
      "collaborate on a community-based art exhibition",
      "plan a community-based environmental awareness campaign",
      "host a community-based language exchange meetup",
      "organize a community-based film or documentary screening",
      "collaborate on a community-based science fair",
      "start a community-based gardening club",
      "plan a community-based cultural exchange event",
      "organize a community-based photography contest",
      "collaborate on a community-based dance or performance workshop",
      "start a community-based entrepreneurship club",
      "host a community-based poetry or writing event",
      "organize a community-based health and wellness fair",
      "collaborate on a community-based educational webinar series",
      "start a community-based astronomy or stargazing club",
      "plan a community-based tech and innovation expo",
      "organize a community-based sports tournament or league",
      "collaborate on a community-based podcast series",
      "start a community-based arts and crafts club",
      "host a community-based talent show",
      "organize a community-based historical or cultural tour",
      "collaborate on a community-based sustainable living workshop",
      "start a community-based mindfulness and meditation group",
      "plan a community-based DIY and upcycling project",
      "organize a community-based bird-watching or nature walk",
      "collaborate on a community-based cooking competition",
      "start a community-based coding or programming workshop",
      "host a community-based fashion or design showcase",
      "organize a community-based outdoor adventure club",
      "collaborate on a community-based music jam session",
      "start a community-based community theater group",
      "plan a community-based tech and innovation hackathon",
      "organize a community-based cultural festival",
      "collaborate on a community-based storytelling and spoken word event",
      "start a community-based fitness challenge",
      "host a community-based talent exchange",
      "organize a community-based science and technology day",
      "collaborate on a community-based DIY home decor workshop",
      "start a community-based environmental cleanup initiative",
      "plan a community-based family fun day",
      "organize a community-based wellness retreat",
      "collaborate on a community-based arts and crafts fair",
      "start a community-based gardening and plant swap",
      "host a community-based photography walk or club",
      "organize a community-based outdoor film night",
      "collaborate on a community-based sustainable living seminar",
      "start a community-based language learning club",
      "plan a community-based virtual reality experience showcase",
      "read books",
      "watch movies",
      "go for walks",
      "cook meals",
      "have picnics",
      "listen to music",
      "play board games",
      "go hiking",
      "visit museums",
      "attend concerts",
      "practice yoga",
      "travel to new places",
      "play video games",
      "have barbecues",
      "take road trips",
      "explore parks",
      "learn new languages",
      "have game nights",
      "visit coffee shops",
      "go to spas",
      "host dinner parties",
      "go on bike rides",
      "visit art galleries",
      "take dance classes",
      "plant gardens",
      "take photography",
      "write poetry",
      "go camping",
      "do volunteer work",
      "create art",
      "exercise regularly",
      "go to the beach",
      "attend workshops",
      "meditate regularly",
      "adopt pets",
      "organize events",
      "learn musical instruments",
      "engage in community service",
      "join a book club",
      "practice mindfulness",
      "try new recipes",
      "play musical instruments",
      "practice meditation",
      "do DIY projects",
      "go fishing",
      "participate in marathons",
      "visit historical sites",
      "participate in sports",
      "try new restaurants",
      "attend theater performances",
      "do crossword puzzles",
      "take online courses",
      "have family game nights",
      "do karaoke",
      "go bird watching",
      "attend poetry readings",
      "go skiing",
      "attend comedy shows",
      "try new hobbies",
      "explore nature trails",
      "visit farmers' markets",
      "do home workouts",
      "engage in self-reflection",
      "go stargazing",
      "try out new board games",
      "join social clubs",
      "engage in creative writing",
      "go paddleboarding",
      "take painting classes",
      "participate in community gardening",
      "do coding projects",
      "attend wine tastings",
      "try out new fashion trends",
      "participate in photography contests",
      "attend cooking classes",
      "engage in storytelling",
      "join astronomy clubs",
      "practice calligraphy",
      "do woodworking projects",
      "attend poetry slams",
      "go mountain biking",
      "participate in environmental cleanups",
      "do geocaching",
      "attend language exchange meetups",
      "try out new hairstyles",
      "engage in bird photography",
      "take improv classes",
      "participate in charity runs",
      "do embroidery",
      "go scuba diving",
      "attend board game conventions",
      "try out new cocktail recipes",
      "engage in journaling",
      "go rock climbing",
      "participate in hackathons",
      "do sculpting",
      "attend music festivals",
      "try out virtual reality experiences",
      "engage in urban sketching",
      "go snorkeling",
      "participate in community theater",
      "do pottery",
      "attend film festivals"
    ];
    const setting = [
      "urban streets",
      "suburban neighborhoods",
      "rural farms",
      "coastal beaches",
      "mountain cabins",
      "forest clearings",
      "desert oases",
      "small villages",
      "big cities",
      "historical castles",
      "modern skyscrapers",
      "space stations",
      "underwater cities",
      "jungle canopies",
      "island resorts",
      "college campuses",
      "libraries",
      "coffee shops",
      "art studios",
      "tech startup offices",
      "medieval marketplaces",
      "futuristic megacities",
      "farmers' markets",
      "countryside inns",
      "bookstores",
      "botanical gardens",
      "nightclubs",
      "festival grounds",
      "amusement parks",
      "casinos",
      "carnivals",
      "zoos",
      "hospitals",
      "police stations",
      "fire stations",
      "school classrooms",
      "laboratories",
      "sports stadiums",
      "train stations",
      "airports",
      "harbors",
      "outer spaces",
      "post-apocalyptic wastelands",
      "cyberpunk alleys",
      "enchanted forests",
      "parallel universes",
      "ancient temple ruins",
      "film studios",
      "concert halls",
      "haunted mansions",
      "pristine meadows",
      "cosy cottages",
      "vibrant marketplaces",
      "hidden caves",
      "lush gardens",
      "mystical realms",
      "frozen tundras",
      "celestial bodies",
      "floating islands",
      "sunny beaches",
      "moonlit lakes",
      "whimsical wonderlands",
      "ancient libraries",
      "rustic barns",
      "cosmic nebulas",
      "quirky bookshops",
      "foggy moors",
      "teeming bazaars",
      "vast deserts",
      "deep canyons",
      "eerie graveyards",
      "grand ballrooms",
      "wind-swept dunes",
      "subterranean caverns",
      "celebrity red carpets",
      "underground bunkers",
      "gourmet kitchens",
      "magical academies",
      "skydiving adventures",
      "whale-watching excursions",
      "lush vineyards",
      "electric dance floors",
      "coral reefs",
      "hidden waterfalls",
      "exotic spice markets",
      "floating palaces",
      "cosmetic surgery clinics",
      "historical battlefields",
      "extraterrestrial colonies",
      "tropical rainforests",
      "ancient monasteries",
      "vintage boutiques",
      "archaeological dig sites",
      "fashion runway shows",
      "secret spy hideouts",
      "glacial landscapes",
      "futuristic laboratories",
      "underground jazz clubs",
      "abandoned amusement parks",
      "submarine exploration sites",
      "haunted shipwrecks"
    ];

    const randomPeople = nouns[Math.floor(Math.random() * nouns.length)];
    const randomPerspective =
      perspective[Math.floor(Math.random() * perspective.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomSetting = setting[Math.floor(Math.random() * setting.length)];

    return {
      text: `we are ${randomPeople} who are ${randomPerspective}, we ${randomAction} in ${randomSetting}`,
      color: colorRef.current,
    };
  };

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearColor(0x00000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;

    const geometry = new THREE.BufferGeometry();
    const particles = 700;
    const positions = new Float32Array(particles * 3);
    const colors = [];

    for (let i = 0; i < particles * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(1 - 2 * Math.random());

      const x = Math.sin(phi) * Math.cos(theta) * 2;
      const y = Math.sin(phi) * Math.sin(theta) * 2;
      const z = Math.cos(phi) * 2;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      colors.push(1, 1, 1);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    points.scale.set(1 * scale, 1 * scale, 1 * scale);

    scene.add(points);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      points.rotation.x += 0.001;
      points.rotation.y += 0.001;

      if (isSelected.current != 0) {
        console.log("intersected: ", intersectedRef.current);
        raycaster.setFromCamera(intersectedRef.current, camera);

        // calculate objects intersecting the picking ray
        var intersects = raycaster.intersectObjects([points]);
        console.log("points: ", points);

        console.log("intersects: ", intersects);

        if (intersects.length != 0) {
          console.log("intersected index: ", intersects[0].index);
          const index = intersects[0].index;
          setRandomColor(index);
          geometry.attributes.color.needsUpdate = true;
        }
        isSelected.current = 0;
      }

      renderer.render(scene, camera);
    };

    function setRandomColor(index) {
      geometry.attributes.color.setXYZ(
        index,
        colorRef.current.r,
        colorRef.current.g,
        colorRef.current.b
      );
    }

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const handleMouseDown = (event) => {
      isDragging.current = true;
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    const handleMouseMove = (event) => {
      if (isDragging.current) {
        const deltaY = (event.clientY - mouseY.current) / window.innerHeight;
        controls.rotateUp(2 * Math.PI * deltaY);
        mouseY.current = event.clientY;
      }

      let x = (event.clientX / window.innerWidth) * 2 - 1;
      let y = -(event.clientY / window.innerHeight) * 2 + 1;

      intersectedRef.current = { x, y };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    cameraRef.current = camera;
    pointsRef.current = points;

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleSphereClick = () => {
    raycaster.setFromCamera(intersectedRef.current, cameraRef.current);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects([pointsRef.current]);
    if (intersects.length != 0) {
      console.log("intersected index: ", intersects);
      isSelected.current = intersects[0].index;
      makePhrase();
    }
  };

  function makePhrase() {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();

    colorRef.current = { r, g, b };

    const randomPhrase = generateRandomPhrase();
    setGeneratedPhrases((prevPhrases) => [...prevPhrases, randomPhrase]);

    if (generatedPhrases.length > maxPhrasesToShow - 1) {
      setGeneratedPhrases((prevPhrases) => prevPhrases.slice(1));
    }
  }

  function colorToRGB(color) {
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div>
      <div className="title">
        <h1>
          the world is but a collection of communities. select yours. what will you build?
          {" "}
        </h1>
      </div>
      <div
        className="sphere"
        ref={containerRef}
        onClick={handleSphereClick}
      ></div>
      <div className="phrases">
        {generatedPhrases.map((phrase, index) => (
          <div
            key={index}
            className="generated-phrase"
            style={{ color: colorToRGB(phrase.color) }}
          >
            {phrase.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sphere;
