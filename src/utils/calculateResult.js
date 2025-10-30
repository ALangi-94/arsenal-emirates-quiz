import { destinations } from '../data/destinations';

export const calculateResult = (answers) => {
  // Initialize scores for each trait
  const traitScores = {
    energy: 0,
    luxury: 0,
    culture: 0,
    relaxation: 0
  };

  // Calculate total trait scores from all answers
  answers.forEach(answer => {
    if (answer && answer.traits) {
      Object.keys(answer.traits).forEach(trait => {
        traitScores[trait] += answer.traits[trait];
      });
    }
  });

  // Normalize user scores to 0-5 scale (same as destinations)
  const normalizedUserTraits = {};
  Object.keys(traitScores).forEach(trait => {
    // Max possible score per trait is 75 (15 questions × max 5 per question)
    // Normalize to 1-5 scale
    normalizedUserTraits[trait] = (traitScores[trait] / 75) * 5;
  });

  // Calculate match percentage for each destination using Euclidean distance
  const destinationMatches = destinations.map(destination => {
    // Calculate Euclidean distance between user profile and destination
    let sumSquaredDifferences = 0;

    Object.keys(normalizedUserTraits).forEach(trait => {
      const userValue = normalizedUserTraits[trait];
      const destValue = destination.traits[trait];
      const difference = userValue - destValue;
      sumSquaredDifferences += difference * difference;
    });

    // Calculate distance (lower is better)
    const distance = Math.sqrt(sumSquaredDifferences);

    // Convert distance to match percentage (0 distance = 100% match)
    // Maximum possible distance is sqrt(4 * 5^2) = sqrt(100) = 10
    // So we use (10 - distance) / 10 * 100 to get percentage
    const maxDistance = Math.sqrt(4 * 25); // sqrt of 4 traits * 5^2 max difference
    const matchPercentage = Math.max(0, Math.round(((maxDistance - distance) / maxDistance) * 100));

    return {
      destination,
      matchPercentage,
      traitScores: { ...traitScores },
      normalizedTraits: { ...normalizedUserTraits },
      distance
    };
  });

  // Sort by match percentage (higher is better)
  destinationMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return {
    bestMatch: destinationMatches[0],
    allMatches: destinationMatches,
    userTraits: traitScores,
    normalizedTraits: normalizedUserTraits
  };
};

export const getTraitDescription = (traitScores) => {
  const total = Object.values(traitScores).reduce((sum, val) => sum + val, 0);
  const percentages = {};

  Object.keys(traitScores).forEach(trait => {
    percentages[trait] = Math.round((traitScores[trait] / total) * 100);
  });

  return percentages;
};
