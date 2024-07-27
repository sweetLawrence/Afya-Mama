
// const commonTests = {
//     VitalSigns: [
//       { name: 'Blood Pressure', key: 'bloodPressure' },
//       { name: 'Heart Rate', key: 'heartRate' },
//       { name: 'Respiratory Rate', key: 'respiratoryRate' },
//       { name: 'Oxygen Saturation', key: 'oxygenSaturation' },
//       { name: 'Temperature', key: 'temperature' }
//     ],
//     BMI: [
//       { name: 'BMI', key: 'bmi' }
//     ],
//     RBS: [
//       { name: 'RBS', key: 'rbs' }
//     ],
//     GeneralExam: [
//       { name: 'General Health', key: 'generalExam' }
//     ]
//   };
  
//   const trimesterTests = {
//     firstTrimester: {
//       AbdominalExam: [], 
//       FHR: [], 
//       FH: [], 
//       CEFW: [] 
//     },
//     secondTrimester: {
//       AbdominalExam: [
//         { name: 'Fundal Height', key: 'abdominalExam' }
//       ],
//       FHR: [
//         { name: 'FHR', key: 'fhr' }
//       ],
//       FH: [
//         { name: 'FH', key: 'fh' }
//       ],
//       CEFW: []
//     },
//     thirdTrimester: {
//       AbdominalExam: [
//         { name: 'Fundal Height', key: 'abdominalExam' }
//       ],
//       FHR: [
//         { name: 'FHR', key: 'fhr' }
//       ],
//       FH: [
//         { name: 'FH', key: 'fh' }
//       ],
//       CEFW: [
//         { name: 'CEFW', key: 'cefw' }
//       ]
//     }
//   };
  
//   export { commonTests, trimesterTests };
  







// const commonTests = {
//   VitalSigns: [
//     { name: 'Blood Pressure (120/80mmHg)', key: 'bloodPressure'},
//     { name: 'Heart Rate (60-100 bpm)', key: 'heartRate' },
//     { name: 'Respiratory Rate (12-18 breaths/min)', key: 'respiratoryRate' },
//     { name: 'Oxygen Saturation', key: 'oxygenSaturation' },
//     { name: 'Temperature (36.5-37.5°C)', key: 'temperature' }
//   ],
//   BMI: [
//     { name: 'BMI', key: 'bmi' }
//   ],
//   RBS: [
//     { name: 'RBS', key: 'rbs' }
//   ],
//   // GeneralExam: [
//   //   { name: 'Pallor (No pallor/Pallor)', key: 'pallor' },
//   //   { name: 'Jaundice (No jaundice/Scleral jaundice)', key: 'jaundice' },
//   //   { name: 'Lymphadenopathy (No lymphadenopathy/Cervical, inguinal lymph nodes present)', key: 'lymphadenopathy' },
//   //   { name: 'Cyanosis (No cyanosis/Central or peripheral cyanosis present)', key: 'cyanosis' },
//   //   { name: 'Weight (Normal/Obese)', key: 'weight' },
//   //   { name: 'Height', key: 'height' },
//   //   { name: 'BMI (Normal/Obese/Underweight)', key: 'bmiEvaluation' },
//   //   { name: 'Vital Signs (Values and comments)', key: 'vitalSignsEvaluation' },
//   //   { name: 'Temperature (36.5-37.5°C)', key: 'temperatureEvaluation' },
//   //   { name: 'Pulse (60-100 bpm)', key: 'pulseEvaluation' },
//   //   { name: 'Respiratory Rate (12-18 breaths/min)', key: 'respiratoryRateEvaluation' }
//   // ]
//   GeneralExam: [
//     { name: 'Pallor', key: 'pallor' },
//     { name: 'Jaundice', key: 'jaundice' },
//     { name: 'Lymphadenopathy', key: 'lymphadenopathy' },
//     { name: 'Cyanosis', key: 'cyanosis' },
//     { name: 'Weight', key: 'weight' },
//     { name: 'Height', key: 'height' },
//     { name: 'BMI', key: 'bmiEvaluation' },
//     { name: 'Vital Signs', key: 'vitalSignsEvaluation' },
//     { name: 'Temperature', key: 'temperatureEvaluation' },
//     { name: 'Pulse', key: 'pulseEvaluation' },
//     { name: 'Respiratory Rate', key: 'respiratoryRateEvaluation' }
//   ]
// };

// const trimesterTests = {
//   firstTrimester: {
//     AbdominalExam: [], 
//     FHR: [], 
//     FH: [], 
//     CEFW: [] 
//   },
//   secondTrimester: {
//     AbdominalExam: [
//       { name: 'Fundal Height', key: 'fundalHeight' }
//     ],
//     FHR: [
//       { name: 'Fetal Heart Rate (FHR)', key: 'fhr' }
//     ],
//     FH: [
//       { name: 'Fundal Height (FH)', key: 'fh' }
//     ],
//     CEFW: []
//   },
//   thirdTrimester: {
//     AbdominalExam: [
//       { name: 'Fundal Height', key: 'fundalHeight' }
//     ],
//     FHR: [
//       { name: 'Fetal Heart Rate (FHR)', key: 'fhr' }
//     ],
//     FH: [
//       { name: 'Fundal Height (FH)', key: 'fh' }
//     ],
//     CEFW: [
//       { name: 'Clinical Estimated Fetal Weight (CEFW)', key: 'cefw' }
//     ]
//   }
// };

// export { commonTests, trimesterTests };



const commonTests = {
  VitalSigns: [
    { name: 'Blood Pressure', key: 'bloodPressure', placeholder: '120/80mmHg', options: ['Normal', 'High', 'Low'] },
    { name: 'Heart Rate', key: 'heartRate', placeholder: '60-100 bpm', options: ['Normal', 'High', 'Low'] },
    { name: 'Respiratory Rate', key: 'respiratoryRate', placeholder: '12-18 breaths/min', options: ['Normal', 'High', 'Low'] },
    { name: 'Oxygen Saturation', key: 'oxygenSaturation', placeholder: '95-100%', options: ['Normal', 'Low'] },
    { name: 'Temperature', key: 'temperature', placeholder: '36.5-37.5°C', options: ['Normal', 'High', 'Low'] }
  ],
  BMI: [
    { name: 'BMI', key: 'bmi', placeholder: 'Value', options: ['Normal', 'Obese', 'Underweight'] }
  ],
  RBS: [
    { name: 'RBS', key: 'rbs', placeholder: 'Value', options: ['Normal', 'High', 'Low'] }
  ],
  GeneralExam: [
    { name: 'Pallor', key: 'pallor', options: ['No pallor', 'Pallor'] },
    { name: 'Jaundice', key: 'jaundice', options: ['No jaundice', 'Scleral jaundice'] },
    { name: 'Lymphadenopathy', key: 'lymphadenopathy', options: ['No lymphadenopathy', 'Cervical, inguinal lymph nodes present'] },
    { name: 'Cyanosis', key: 'cyanosis', options: ['No cyanosis', 'Central cyanosis', 'Peripheral cyanosis'] },
    { name: 'Weight', key: 'weight', placeholder: 'kg', options: ['Normal', 'Obese'] },
    { name: 'Height', key: 'height', placeholder: 'cm', options: [] }
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
      { name: 'Fundal Height', key: 'fundalHeight', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
    ],
    FHR: [
      { name: 'Fetal Heart Rate', key: 'fhr', placeholder: '110-160 bpm', options: ['Normal', 'High', 'Low'] }
    ],
    FH: [
      { name: 'Fundal Height', key: 'fh', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
    ],
    CEFW: []
  },
  thirdTrimester: {
    AbdominalExam: [
      { name: 'Fundal Height', key: 'fundalHeight', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
    ],
    FHR: [
      { name: 'Fetal Heart Rate', key: 'fhr', placeholder: '110-160 bpm', options: ['Normal', 'High', 'Low'] }
    ],
    FH: [
      { name: 'Fundal Height', key: 'fh', placeholder: 'cm', options: ['Normal', 'Abnormal'] }
    ],
    CEFW: [
      { name: 'Clinical Estimated Fetal Weight', key: 'cefw', placeholder: 'kg', options: ['Normal', 'Abnormal'] }
    ]
  }
};

export { commonTests, trimesterTests };
