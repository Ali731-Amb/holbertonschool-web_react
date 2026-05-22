// Interface MajorCredits avec brand
interface MajorCredits {
  credits: number;
  _brand: 'major'; // Brand unique pour identifier MajorCredits
}

// Interface MinorCredits avec brand
interface MinorCredits {
  credits: number;
  _brand: 'minor'; // Brand unique pour identifier MinorCredits
}

// Fonction qui additionne deux MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Fonction qui additionne deux MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Tests
const major1: MajorCredits = { credits: 30, _brand: 'major' };
const major2: MajorCredits = { credits: 20, _brand: 'major' };

const minor1: MinorCredits = { credits: 10, _brand: 'minor' };
const minor2: MinorCredits = { credits: 15, _brand: 'minor' };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
