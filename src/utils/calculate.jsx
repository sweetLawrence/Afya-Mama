export default function calculateGestationalAgeAndTrimester(lmpDate,dob) {
    const lmp = new Date(lmpDate);
    const today = new Date();
    const diffTime = today - lmp;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const gestationalAgeWeeks = diffDays / 7;
    
    let trimester;
    if (gestationalAgeWeeks < 13) {
        trimester = '1st';
    } else if (gestationalAgeWeeks >= 13 && gestationalAgeWeeks < 27) {
        trimester = '2nd';
    } else if (gestationalAgeWeeks >= 27 && gestationalAgeWeeks <= 42) {
        trimester = '3rd';
    } else {
        trimester = 'Post-term';
    }


    const ageDiffTime = today - new Date(dob);
    const ageDate = new Date(ageDiffTime);
    const ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);

    return {
        weeks: gestationalAgeWeeks.toFixed(0),
        trimester: trimester,
        age: ageYears
    };
}

// const lmpDate = '2023-11-1';
// const result = calculateGestationalAgeAndTrimester(lmpDate);
// console.log(`Gestational Age: ${result.weeks} weeks`);
// console.log(`Trimester: ${result.trimester}`);
