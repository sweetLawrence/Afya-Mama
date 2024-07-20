
const commonTests = {
    VitalSigns: [
      { name: 'Blood Pressure', key: 'bloodPressure' },
      { name: 'Heart Rate', key: 'heartRate' },
      { name: 'Respiratory Rate', key: 'respiratoryRate' },
      { name: 'Oxygen Saturation', key: 'oxygenSaturation' },
      { name: 'Temperature', key: 'temperature' }
    ],
    BMI: [
      { name: 'BMI', key: 'bmi' }
    ],
    RBS: [
      { name: 'RBS', key: 'rbs' }
    ],
    GeneralExam: [
      { name: 'General Health', key: 'generalExam' }
    ]
  };
  
  const trimesterTests = {
    firstTrimester: {
      AbdominalExam: [], 
      FHR: [], 
      FH: [], 
      CEFW: [] 
    },
    secondTrimester: {
      AbdominalExam: [
        { name: 'Fundal Height', key: 'abdominalExam' }
      ],
      FHR: [
        { name: 'FHR', key: 'fhr' }
      ],
      FH: [
        { name: 'FH', key: 'fh' }
      ],
      CEFW: []
    },
    thirdTrimester: {
      AbdominalExam: [
        { name: 'Fundal Height', key: 'abdominalExam' }
      ],
      FHR: [
        { name: 'FHR', key: 'fhr' }
      ],
      FH: [
        { name: 'FH', key: 'fh' }
      ],
      CEFW: [
        { name: 'CEFW', key: 'cefw' }
      ]
    }
  };
  
  export { commonTests, trimesterTests };
  