export const questions = [
  // Section 1: Travel Personality
  {
    id: 1,
    section: "Travel Personality",
    question: "Why do you travel?",
    options: [
      { text: "Adventure & adrenaline", value: "adventure", traits: { energy: 5, luxury: 1, culture: 2, relaxation: 1 } },
      { text: "Cultural immersion & learning", value: "culture", traits: { energy: 3, luxury: 2, culture: 5, relaxation: 2 } },
      { text: "Relaxation & escape", value: "relaxation", traits: { energy: 1, luxury: 3, culture: 2, relaxation: 5 } },
      { text: "Luxury & indulgence", value: "luxury", traits: { energy: 2, luxury: 5, culture: 2, relaxation: 4 } },
      { text: "Social media & experiences", value: "social", traits: { energy: 4, luxury: 3, culture: 3, relaxation: 1 } },
      { text: "Family & connection", value: "family", traits: { energy: 2, luxury: 2, culture: 3, relaxation: 3 } }
    ]
  },
  {
    id: 2,
    section: "Travel Personality",
    question: "How do you plan trips?",
    options: [
      { text: "Months in advance, detailed itinerary", value: "planner", traits: { energy: 2, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Few weeks ahead, loose structure", value: "balanced", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 3 } },
      { text: "Last minute, spontaneous", value: "spontaneous", traits: { energy: 5, luxury: 2, culture: 2, relaxation: 2 } },
      { text: "Someone else plans for me", value: "delegate", traits: { energy: 2, luxury: 4, culture: 2, relaxation: 4 } }
    ]
  },
  {
    id: 3,
    section: "Travel Personality",
    question: "Who do you travel with?",
    options: [
      { text: "Solo adventurer", value: "solo", traits: { energy: 4, luxury: 2, culture: 4, relaxation: 3 } },
      { text: "Romantic partner", value: "couple", traits: { energy: 3, luxury: 4, culture: 3, relaxation: 4 } },
      { text: "Family with kids", value: "family", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 2 } },
      { text: "Group of friends", value: "friends", traits: { energy: 5, luxury: 2, culture: 3, relaxation: 2 } }
    ]
  },
  {
    id: 4,
    section: "Travel Personality",
    question: "What's your budget comfort zone per trip?",
    options: [
      { text: "Under £1,000", value: "budget", traits: { energy: 4, luxury: 1, culture: 3, relaxation: 2 } },
      { text: "£1,000-£3,000", value: "moderate", traits: { energy: 3, luxury: 2, culture: 3, relaxation: 3 } },
      { text: "£3,000-£7,000", value: "comfortable", traits: { energy: 3, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "£7,000-£15,000", value: "premium", traits: { energy: 2, luxury: 4, culture: 4, relaxation: 4 } },
      { text: "£15,000+", value: "luxury", traits: { energy: 2, luxury: 5, culture: 3, relaxation: 5 } }
    ]
  },
  {
    id: 5,
    section: "Travel Personality",
    question: "How often do you travel internationally?",
    options: [
      { text: "First time / Very rarely", value: "rare", traits: { energy: 3, luxury: 2, culture: 3, relaxation: 3 } },
      { text: "Once every few years", value: "occasional", traits: { energy: 3, luxury: 2, culture: 3, relaxation: 3 } },
      { text: "Once a year", value: "annual", traits: { energy: 3, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "2-3 times per year", value: "frequent", traits: { energy: 4, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "4+ times per year", value: "very-frequent", traits: { energy: 4, luxury: 4, culture: 5, relaxation: 3 } }
    ]
  },

  // Section 2: Lifestyle & Preferences
  {
    id: 6,
    section: "Lifestyle & Preferences",
    question: "What's your ideal vacation activity?",
    options: [
      { text: "Beach & water sports", value: "beach", traits: { energy: 4, luxury: 3, culture: 2, relaxation: 5 } },
      { text: "Museums & historical sites", value: "museums", traits: { energy: 2, luxury: 3, culture: 5, relaxation: 2 } },
      { text: "Nightlife & restaurants", value: "nightlife", traits: { energy: 5, luxury: 4, culture: 3, relaxation: 1 } },
      { text: "Hiking & outdoor adventures", value: "hiking", traits: { energy: 5, luxury: 1, culture: 3, relaxation: 3 } },
      { text: "Shopping & urban exploration", value: "shopping", traits: { energy: 3, luxury: 4, culture: 4, relaxation: 2 } },
      { text: "Wellness & spa retreats", value: "wellness", traits: { energy: 1, luxury: 5, culture: 2, relaxation: 5 } }
    ]
  },
  {
    id: 7,
    section: "Lifestyle & Preferences",
    question: "How adventurous are you with food?",
    options: [
      { text: "Stick to familiar cuisines", value: "familiar", traits: { energy: 2, luxury: 3, culture: 1, relaxation: 3 } },
      { text: "Try local dishes but play it safe", value: "cautious", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 3 } },
      { text: "Eat everything, love street food", value: "adventurous", traits: { energy: 5, luxury: 2, culture: 5, relaxation: 2 } },
      { text: "Fine dining experiences only", value: "fine-dining", traits: { energy: 2, luxury: 5, culture: 4, relaxation: 4 } }
    ]
  },
  {
    id: 8,
    section: "Lifestyle & Preferences",
    question: "What's your accommodation preference?",
    options: [
      { text: "5-star luxury hotels", value: "luxury-hotel", traits: { energy: 2, luxury: 5, culture: 2, relaxation: 5 } },
      { text: "Boutique hotels", value: "boutique", traits: { energy: 3, luxury: 4, culture: 4, relaxation: 4 } },
      { text: "Airbnb/local stays", value: "local", traits: { energy: 3, luxury: 2, culture: 5, relaxation: 3 } },
      { text: "Hostels/budget options", value: "budget", traits: { energy: 4, luxury: 1, culture: 3, relaxation: 2 } },
      { text: "Resorts with all amenities", value: "resort", traits: { energy: 2, luxury: 4, culture: 1, relaxation: 5 } }
    ]
  },
  {
    id: 9,
    section: "Lifestyle & Preferences",
    question: "What's your ideal climate?",
    options: [
      { text: "Hot & tropical", value: "tropical", traits: { energy: 3, luxury: 3, culture: 2, relaxation: 5 } },
      { text: "Warm & Mediterranean", value: "mediterranean", traits: { energy: 3, luxury: 4, culture: 4, relaxation: 4 } },
      { text: "Mild & temperate", value: "temperate", traits: { energy: 3, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Cool & crisp", value: "cool", traits: { energy: 4, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Varied/doesn't matter", value: "varied", traits: { energy: 4, luxury: 3, culture: 4, relaxation: 3 } }
    ]
  },
  {
    id: 10,
    section: "Lifestyle & Preferences",
    question: "What's your biggest travel stress point?",
    options: [
      { text: "Long flights", value: "flights", traits: { energy: 2, luxury: 4, culture: 3, relaxation: 3 } },
      { text: "Language barriers", value: "language", traits: { energy: 2, luxury: 3, culture: 2, relaxation: 2 } },
      { text: "Safety concerns", value: "safety", traits: { energy: 2, luxury: 4, culture: 2, relaxation: 2 } },
      { text: "Being away from work", value: "work", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 2 } },
      { text: "Travel logistics/planning", value: "logistics", traits: { energy: 2, luxury: 4, culture: 3, relaxation: 3 } },
      { text: "Budget constraints", value: "budget", traits: { energy: 3, luxury: 1, culture: 3, relaxation: 2 } }
    ]
  },

  // Section 3: Deeper Psychographics
  {
    id: 11,
    section: "Deeper Psychographics",
    question: "What Arsenal value resonates most with you?",
    options: [
      { text: "Loyalty & tradition (The Arsenal Way)", value: "loyalty", traits: { energy: 2, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Excellence & ambition (Trophies)", value: "excellence", traits: { energy: 4, luxury: 4, culture: 3, relaxation: 2 } },
      { text: "Unity & teamwork (Squad mentality)", value: "unity", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 3 } },
      { text: "Innovation & progress (Modern football)", value: "innovation", traits: { energy: 4, luxury: 3, culture: 4, relaxation: 2 } },
      { text: "Passion & energy (Fan culture)", value: "passion", traits: { energy: 5, luxury: 2, culture: 3, relaxation: 2 } }
    ]
  },
  {
    id: 12,
    section: "Deeper Psychographics",
    question: "What's your current life stage?",
    options: [
      { text: "Young professional, building career", value: "young-pro", traits: { energy: 5, luxury: 2, culture: 4, relaxation: 2 } },
      { text: "Established career, enjoying success", value: "established", traits: { energy: 3, luxury: 4, culture: 4, relaxation: 3 } },
      { text: "Family-focused, kids at home", value: "family", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 3 } },
      { text: "Empty nester, rediscovering freedom", value: "empty-nester", traits: { energy: 3, luxury: 4, culture: 5, relaxation: 4 } },
      { text: "Retired, time to travel", value: "retired", traits: { energy: 2, luxury: 4, culture: 5, relaxation: 5 } }
    ]
  },
  {
    id: 13,
    section: "Deeper Psychographics",
    question: "Your dream trip involves:",
    options: [
      { text: "Ticking off bucket list landmarks", value: "bucket-list", traits: { energy: 3, luxury: 3, culture: 5, relaxation: 2 } },
      { text: "Disconnecting from technology", value: "disconnect", traits: { energy: 2, luxury: 3, culture: 3, relaxation: 5 } },
      { text: "Creating social media content", value: "content", traits: { energy: 4, luxury: 3, culture: 3, relaxation: 1 } },
      { text: "Learning new skills", value: "learning", traits: { energy: 3, luxury: 2, culture: 5, relaxation: 2 } },
      { text: "Meeting new people", value: "social", traits: { energy: 5, luxury: 2, culture: 4, relaxation: 2 } },
      { text: "Strengthening relationships", value: "relationships", traits: { energy: 2, luxury: 3, culture: 3, relaxation: 4 } }
    ]
  },
  {
    id: 14,
    section: "Deeper Psychographics",
    question: "What triggers you to book a trip?",
    options: [
      { text: "Amazing deal/discount", value: "deal", traits: { energy: 3, luxury: 2, culture: 3, relaxation: 3 } },
      { text: "Special occasion", value: "occasion", traits: { energy: 3, luxury: 4, culture: 3, relaxation: 4 } },
      { text: "Spontaneous urge", value: "spontaneous", traits: { energy: 5, luxury: 2, culture: 3, relaxation: 2 } },
      { text: "Scheduled annual trip", value: "scheduled", traits: { energy: 3, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Invitation from friends", value: "invitation", traits: { energy: 4, luxury: 3, culture: 3, relaxation: 2 } },
      { text: "Work/business requirement", value: "work", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 2 } }
    ]
  },
  {
    id: 15,
    section: "Deeper Psychographics",
    question: "What's your Emirates flying experience?",
    options: [
      { text: "Never flown Emirates", value: "never", traits: { energy: 3, luxury: 2, culture: 3, relaxation: 3 } },
      { text: "Once, years ago", value: "once", traits: { energy: 3, luxury: 3, culture: 3, relaxation: 3 } },
      { text: "Occasionally for special trips", value: "occasional", traits: { energy: 3, luxury: 3, culture: 4, relaxation: 3 } },
      { text: "Regular flyer", value: "regular", traits: { energy: 4, luxury: 4, culture: 4, relaxation: 3 } },
      { text: "Skywards member", value: "skywards", traits: { energy: 4, luxury: 4, culture: 5, relaxation: 4 } },
      { text: "Business/First class passenger", value: "premium", traits: { energy: 3, luxury: 5, culture: 4, relaxation: 5 } }
    ]
  }
];
