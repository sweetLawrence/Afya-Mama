function calculateGestationalAgeAndTrimester(lmpDate) {
    const lmp = new Date(lmpDate);
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const gestationalAgeWeeks = diffDays / 7;
    
    let trimester;
    if (gestationalAgeWeeks < 13) {
        trimester = 'First Trimester';
    } else if (gestationalAgeWeeks >= 13 && gestationalAgeWeeks < 27) {
        trimester = 'Second Trimester';
    } else if (gestationalAgeWeeks >= 27 && gestationalAgeWeeks <= 42) {
        trimester = 'Third Trimester';
    } else {
        trimester = 'Post-term';
    }

    return {
        weeks: gestationalAgeWeeks.toFixed(0),
        trimester: trimester
    };
}

const lmpDate = '2023-11-1';
const result = calculateGestationalAgeAndTrimester(lmpDate);
console.log(`Gestational Age: ${result.weeks} weeks`);
console.log(`Trimester: ${result.trimester}`);
