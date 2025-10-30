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

  // Calculate match percentage for each destination
  const destinationMatches = destinations.map(destination => {
    let matchScore = 0;
    let totalPossible = 0;

    Object.keys(traitScores).forEach(trait => {
      const userScore = traitScores[trait];
      const destScore = destination.traits[trait];

      // Calculate similarity (closer values = higher score)
      // Max trait score per question is 5, with 15 questions = 75 max per trait
      const maxTraitScore = 75;
      const difference = Math.abs(userScore - (destScore * 15));
      const similarity = maxTraitScore - difference;

      matchScore += Math.max(0, similarity);
      totalPossible += maxTraitScore;
    });

    const matchPercentage = Math.round((matchScore / totalPossible) * 100);

    return {
      destination,
      matchPercentage,
      traitScores: { ...traitScores }
    };
  });

  // Sort by match percentage and return the best match
  destinationMatches.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return {
    bestMatch: destinationMatches[0],
    allMatches: destinationMatches,
    userTraits: traitScores
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
