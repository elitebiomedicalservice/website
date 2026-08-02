import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'oxymed-inteli',
    name: 'Oxymed Inteli',
    brand: 'Oxymed',
    category: 'Oxygen Concentrators',
    series: 'Smart Series',
    tagline: 'Smarter oxygen therapy with a built-in pulse oximeter',
    shortDesc: 'Continuous SpO₂ monitoring with automatic flow adjustment for safer, personalized oxygen therapy.',
    fullDesc: 'The Oxymed Inteli is an advanced Smart Series oxygen concentrator featuring integrated pulse oximetry. It continuously tracks patient SpO₂ saturation in real-time and dynamically adapts oxygen output flow to patient needs. Its closed-loop cycle keeps therapy consistent, safe, and worry-free for home care.',
    badge: 'Bluetooth Enabled',
    warranty: '3 Years',
    image: '/products/oxymed-inteli.png',
    purity: '93% ± 3%',
    bluetoothEnabled: true,
    highlights: [
      'Continuous SpO₂ Monitoring via built-in oximeter',
      'Auto Flow Adjustment based on patient saturation',
      'Closed-Loop cycle keeps oxygen therapy consistent',
      'Bluetooth enabled for smart health tracking'
    ],
    features: [
      {
        number: '1',
        title: 'Continuous SpO₂ Monitoring',
        description: 'Built-in pulse oximeter tracks oxygen saturation in real time continuously.'
      },
      {
        number: '2',
        title: 'Auto Flow Adjustment',
        description: 'Oxygen output adapts automatically to the patient\'s real-time physiological needs.'
      },
      {
        number: '3',
        title: 'Monitor · Adjust · Deliver',
        description: 'A closed-loop cycle keeps oxygen therapy consistent, effective, and safe.'
      },
      {
        number: '4',
        title: 'Smarter, Safer, Personalized',
        description: 'Designed for individualized, worry-free home care with smart connectivity.'
      }
    ],
    specs: [
      { label: 'Category', value: 'Smart Series Oxygen Concentrator' },
      { label: 'Monitoring', value: 'Built-in Pulse Oximeter (SpO₂)' },
      { label: 'Flow Mode', value: 'Auto-Adjusting Continuous Flow' },
      { label: 'Connectivity', value: 'Bluetooth Enabled' },
      { label: 'Safety Cycle', value: 'Closed-Loop Auto Flow Control' },
      { label: 'Warranty', value: '3 Years Manufacturer Warranty' }
    ],
    packageIncludes: [
      'Oxymed Inteli Oxygen Concentrator Unit',
      'Integrated Pulse Oximeter Sensor Cable',
      'High-Efficiency Humidifier Bottle',
      'Nasal Cannula & Oxygen Tubing',
      'Air Filters (Intake & HEPA filter)',
      'User Manual & Warranty Card'
    ],
    idealFor: [
      'Patients needing fluctuating oxygen delivery during sleep or exertion',
      'Home oxygen therapy requiring continuous SpO₂ oversight',
      'Elderly patients needing automated flow adjustment'
    ]
  },
  {
    id: 'oxymed-cure-5lpm',
    name: 'Oxymed Cure 5 LPM',
    brand: 'Oxymed',
    category: 'Oxygen Concentrators',
    series: '5 LPM',
    tagline: 'Whisper-quiet medical concentrator with touch display & voice guidance',
    shortDesc: 'Delivers 93% ± 3% oxygen purity at continuous flow with <35 dB ultra-quiet operation and low 280 W power draw.',
    fullDesc: 'The Oxymed Cure 5 LPM is a medical-grade oxygen concentrator built for patients with demanding respiratory conditions. It features an integrated oxygen purity analyzer, inbuilt nebulizer, auto-diagnostic system, and an interactive touch display with voice guidance — operating at a whisper-quiet noise level under 35 dB while consuming only 280 W of power.',
    badge: 'Ultra Quiet <35 dB',
    warranty: '3 Years',
    image: '/products/oxymed-cure-5lpm.png',
    flowRate: '0.5 – 5 LPM',
    purity: '93% ± 3%',
    noiseLevel: '< 35 dB',
    powerDraw: '280 W',
    highlights: [
      '93% ± 3% Medical Oxygen Purity',
      'Ultra Quiet Operation under 35 dB',
      'Touch Display & Voice Guidance',
      'Energy efficient 280 W power consumption',
      'Inbuilt Oxygen Purity Analyzer & Nebulizer'
    ],
    features: [
      {
        title: '93% ± 3% Purity Output',
        description: 'Delivers stable, medical-grade oxygen output across all flow rates from 0.5 to 5 LPM.'
      },
      {
        title: 'Ultra Quiet Operation (<35 dB)',
        description: 'Advanced sound dampening allows patients to sleep peacefully without background motor noise.'
      },
      {
        title: 'Touch Display & Voice Guidance',
        description: 'Modern touchscreen interface complemented by clear spoken voice prompts for seamless operation.'
      },
      {
        title: 'Built-in Purity Analyzer & Nebulizer',
        description: 'Real-time oxygen purity verification and integrated aerosol medication delivery.'
      }
    ],
    specs: [
      { label: 'Flow Rate', value: '0.5 – 5 LPM Continuous Flow' },
      { label: 'Oxygen Purity', value: '93% ± 3%' },
      { label: 'Noise Level', value: '< 35 dB (Ultra Quiet)' },
      { label: 'Power Draw', value: '280 W Energy Saver' },
      { label: 'Display Interface', value: 'Color Touch Display + Voice Guidance' },
      { label: 'Special Features', value: 'Built-in Purity Analyzer, Nebulizer, Auto-Diagnostic' },
      { label: 'Warranty', value: '3 Years Warranty' }
    ],
    packageIncludes: [
      'Oxymed Cure 5 LPM Machine',
      'Nebulizer Kit & Aerosol Mask',
      'Humidifier Bottle',
      'Adult Nasal Cannula (2 Sets)',
      'Spare Air Filters',
      'Power Cable & Manual'
    ],
    idealFor: [
      'Patients needing continuous 24/7 home oxygen therapy',
      'Users sensitive to noise during night-time rest',
      'Patients requiring combined oxygen and nebulization treatments'
    ]
  },
  {
    id: 'oxymed-mini-5lpm',
    name: 'Oxymed Mini 5 LPM',
    brand: 'Oxymed',
    category: 'Oxygen Concentrators',
    series: 'Home Care',
    tagline: 'Compact, feature-rich home oxygen concentrator weighing 13.9 kg',
    shortDesc: 'Delivers ≥90% medical oxygen with digital flow regulator, real-time purity analyzer, and folding LCD screen.',
    fullDesc: 'The Oxymed Mini 5 LPM is a compact, feature-rich home oxygen concentrator known for reliable delivery of medical-grade oxygen (≥90%). Weighing just 13.9 kg, it incorporates a digital flow regulator, real-time oxygen purity analyzer, built-in nebulizer, and an adjustable folding LCD screen for maximum practical convenience in daily home therapy.',
    badge: '3 Years Warranty',
    warranty: '3 Years',
    image: '/products/oxymed-mini-5lpm.png',
    flowRate: 'Up to 5 LPM',
    purity: '≥ 90%',
    weight: '13.9 kg',
    highlights: [
      'Weighs only 13.9 kg for easy household mobility',
      '≥90% Medical-Grade Oxygen output',
      'Digital flow regulator & real-time purity analyzer',
      'Folding LCD display for ergonomic viewing angles',
      'Built-in nebulizer function'
    ],
    features: [
      {
        title: 'Compact & Portable Design (13.9 kg)',
        description: 'Significantly lighter than traditional concentrators, making it effortless to roll between rooms.'
      },
      {
        title: 'Folding LCD Screen',
        description: 'Adjustable display panel ensures clear visibility from standing or sitting positions.'
      },
      {
        title: 'Digital Flow Regulator & Purity Monitor',
        description: 'Provides exact digital setting of flow rate and constant real-time purity feedback.'
      },
      {
        title: 'Integrated Nebulizer Port',
        description: 'Eliminates the need for a separate nebulizer machine for aerosol therapy.'
      }
    ],
    specs: [
      { label: 'Flow Rate', value: '1 – 5 LPM' },
      { label: 'Oxygen Purity', value: '≥ 90%' },
      { label: 'Weight', value: '13.9 kg' },
      { label: 'Display', value: 'Adjustable Folding LCD Screen' },
      { label: 'Nebulizer Function', value: 'Inbuilt Nebulizer Port' },
      { label: 'Purity Monitoring', value: 'Real-time Digital Analyzer' },
      { label: 'Warranty', value: '3 Years Warranty' }
    ],
    packageIncludes: [
      'Oxymed Mini 5 LPM Concentrator',
      'Humidifier Bottle',
      'Nasal Cannula Kit',
      'Nebulizer Accessories',
      'Air Filters',
      'User Manual & Warranty Certificate'
    ],
    idealFor: [
      'Daily home oxygen therapy requiring moderate mobility',
      'Patients looking for a compact footprint in bedrooms or living areas'
    ]
  },
  {
    id: 'evox-5lpm',
    name: 'Evox Oxygen Concentrator',
    brand: 'Evox',
    category: 'Oxygen Concentrators',
    series: 'Home Care',
    tagline: 'Dependable continuous-flow concentrator with digital LED screen',
    shortDesc: 'Delivers 93% ± 3% oxygen purity up to 5 LPM with real-time digital LED screen, built-in nebulizer, and safety alarms.',
    fullDesc: 'The Evox Oxygen Concentrator is a highly dependable, continuous-flow medical device delivering 93% ± 3% oxygen purity at flow rates of up to 5 LPM. Highly favored for home use, it features a digital LED screen with real-time oxygen purity output, built-in nebulizer, and safety alarm systems for peace of mind.',
    badge: 'Highly Favored for Home Use',
    warranty: '3 Years',
    image: '/products/evox-5lpm.png',
    flowRate: 'Up to 5 LPM',
    purity: '93% ± 3%',
    highlights: [
      'Continuous-flow output up to 5 LPM',
      '93% ± 3% Oxygen Purity',
      'Digital LED screen showing real-time purity',
      'Built-in nebulizer & safety alarm system',
      '3-Year comprehensive warranty'
    ],
    features: [
      {
        title: 'High-Purity Continuous Flow',
        description: 'Consistently provides 93% ± 3% oxygen purity to support respiratory wellness.'
      },
      {
        title: 'Digital LED Screen',
        description: 'Clear digital display showing flow rate, purity levels, timer, and operational hours.'
      },
      {
        title: 'Comprehensive Safety Alarms',
        description: 'Audible and visual alerts for low purity, power interruption, or flow blockages.'
      },
      {
        title: 'Integrated Nebulizer Support',
        description: 'Inbuilt aerosol outlet for convenient medication inhalation.'
      }
    ],
    specs: [
      { label: 'Flow Range', value: '0.5 – 5 LPM Continuous Flow' },
      { label: 'Oxygen Purity', value: '93% ± 3%' },
      { label: 'Display Panel', value: 'Digital LED Screen' },
      { label: 'Nebulizer Output', value: 'Built-in Aerosol Function' },
      { label: 'Safety Alarms', value: 'Power Loss, Low Purity, High/Low Pressure' },
      { label: 'Warranty', value: '3 Years Manufacturer Warranty' }
    ],
    packageIncludes: [
      'Evox 5 LPM Concentrator Machine',
      'Humidifier Jar',
      'Adult Nasal Cannulas',
      'Nebulizer Kit',
      'Replaceable Air Intake Filters',
      'User Manual'
    ],
    idealFor: [
      'Reliable daily continuous oxygen therapy at home',
      'Patients needing visual LED feedback on oxygen purity'
    ]
  },
  {
    id: 'oxymed-p2-portable',
    name: 'Oxymed Portable Oxygen Concentrator',
    brand: 'Oxymed',
    category: 'Portable Oxygen',
    series: 'POC Series (P2)',
    tagline: 'Ultra lightweight 1.98 kg portable concentrator — FAA approved for flight',
    shortDesc: 'Weighs just 1.98 kg with 5 pulse flow settings, 90–93% purity, and FAA approval for in-flight travel.',
    fullDesc: 'Weighing just 1.98 kg, the Oxymed P2 is the lightest and smallest portable oxygen machine on the market. It delivers oxygen at up to 5 pulse flow settings while maintaining 90–93% purity across all flow rates — giving you the freedom to stay active and travel wherever the day takes you. FAA approved for commercial flight use.',
    badge: 'FAA Approved for Flight',
    warranty: '3 Years',
    image: '/products/oxymed-p2-portable.png',
    flowRate: '5 Pulse Flow Settings',
    purity: '90% – 93%',
    weight: '1.98 kg',
    flightApproved: true,
    highlights: [
      'Ultra Lightweight — only 1.98 kg',
      'FAA Approved for commercial airline flights',
      '5 Pulse flow delivery settings',
      'Maintains 90–93% oxygen purity across all settings',
      'Includes shoulder bag, lithium battery & car charger'
    ],
    features: [
      {
        title: 'Ultra Lightweight (1.98 kg)',
        description: 'The smallest and lightest portable oxygen concentrator available, designed for active lifestyles.'
      },
      {
        title: 'FAA Approved for In-Flight Use',
        description: 'Certified for onboard airline usage so you can travel worldwide with complete confidence.'
      },
      {
        title: '5 Pulse Flow Settings',
        description: 'Delivers intelligent pulse-dose oxygen triggered by patient inhalation.'
      },
      {
        title: '3-Year Comprehensive Warranty',
        description: 'Backed by manufacturer warranty and local service support across Kerala.'
      }
    ],
    specs: [
      { label: 'Weight', value: '1.98 kg (including battery)' },
      { label: 'Flow Settings', value: '1 to 5 Pulse Flow Settings' },
      { label: 'Oxygen Purity', value: '90% – 93%' },
      { label: 'Airline Approval', value: 'FAA Approved for In-Flight Use' },
      { label: 'Battery Life', value: 'High capacity lithium-ion battery' },
      { label: 'Power Options', value: 'AC Wall Power, DC Car Adapter, Internal Battery' },
      { label: 'Warranty', value: '3 Years Manufacturer Warranty' }
    ],
    packageIncludes: [
      'Oxymed P2 Portable Oxygen Concentrator',
      'Rechargeable Lithium-Ion Battery Pack',
      'Custom Shoulder Carrying Bag & Strap',
      'AC Power Supply & Cord',
      'DC Car Adapter Charger',
      'Nasal Cannula Kit',
      'Air Filters & User Manual'
    ],
    idealFor: [
      'Active individuals who travel, take flights, or enjoy outdoor activities',
      'Patients needing lightweight portable oxygen support away from home'
    ]
  },
  {
    id: 'evox-twinpap-b19',
    name: 'Evox TwinPAP B19',
    brand: 'Evox',
    category: 'Sleep & Respiratory Therapy',
    series: 'BiPAP Series',
    tagline: 'Multi-mode BiPAP device supporting CPAP, S, T, S/T, AutoS & Auto CPAP',
    shortDesc: 'Non-invasive respiratory support device designed for sleep apnea and complex breathing disorders with dual pressure support.',
    fullDesc: 'The EVOX BiPAP/TwinPAP B19 Machine is a medical device designed to provide respiratory support for individuals with sleep-related breathing disorders such as sleep apnea or respiratory insufficiency. It delivers pressurized air through a mask to keep the airway open during sleep, supporting CPAP, S, T, S/T, AutoS (Auto BiPAP), and Auto CPAP modes to meet diverse therapeutic requirements.',
    badge: 'Multi-Therapy Modes',
    warranty: '2 Years',
    image: '/products/evox-twinpap-b19.png',
    modes: ['CPAP', 'S', 'T', 'S/T', 'AutoS (Auto BiPAP)', 'Auto CPAP'],
    highlights: [
      'Supports CPAP, S, T, S/T, AutoS, and Auto CPAP modes',
      'Dual pressure settings (IPAP / EPAP) for easy exhalation',
      'Treats Obstructive Sleep Apnea (OSA) & COPD',
      'Integrated heated humidification for nasal comfort',
      '2-Year warranty with local technical support'
    ],
    features: [
      {
        title: 'Comprehensive Therapy Modes',
        description: 'Supports CPAP, Spontaneous (S), Timed (T), Spontaneous/Timed (S/T), Auto BiPAP (AutoS), and Auto CPAP.'
      },
      {
        title: 'Dual Pressure Relief (IPAP/EPAP)',
        description: 'Provides higher pressure on inhalation and lower pressure on exhalation for maximum comfort.'
      },
      {
        title: 'Sleep Apnea & COPD Support',
        description: 'Effective therapy for Obstructive Sleep Apnea, hypopnea, and chronic respiratory failure.'
      },
      {
        title: 'Integrated Humidifier',
        description: 'Keeps airways moist and prevents dryness or throat irritation during night therapy.'
      }
    ],
    specs: [
      { label: 'Device Category', value: 'Bi-Level Positive Airway Pressure (BiPAP)' },
      { label: 'Therapy Modes', value: 'CPAP, S, T, S/T, AutoS, Auto CPAP' },
      { label: 'Pressure Range', value: '4 – 25 cmH₂O' },
      { label: 'Humidification', value: 'Integrated Heated Humidifier' },
      { label: 'Data Storage', value: 'SD Card & On-screen Sleep Report' },
      { label: 'Warranty', value: '2 Years Warranty' }
    ],
    packageIncludes: [
      'EVOX TwinPAP B19 Machine',
      'Integrated Heated Humidifier Chamber',
      'Nasal / Full Face CPAP Mask',
      'Flexible Air Tubing',
      'Power Adapter & Cable',
      'Carrying Case',
      'User Manual'
    ],
    idealFor: [
      'Patients needing versatile bilevel pressure support (CPAP or BiPAP)',
      'Individuals suffering from OSA, COPD, or hypoventilation'
    ]
  },
  {
    id: 'bmc-g2s-v25-vt',
    name: 'BMC G2S V25 VT BiPAP',
    brand: 'BMC',
    category: 'Sleep & Respiratory Therapy',
    series: 'BiPAP Series',
    tagline: 'Advanced BiPAP machine with Target Tidal Volume (VT) control',
    shortDesc: 'Non-invasive BiPAP machine featuring Target Tidal Volume control, CPAP, S, T, S/T modes, complete with mask & carry case.',
    fullDesc: 'An advanced, non-invasive Bi-level Positive Airway Pressure (BiPAP) machine used to treat conditions like Obstructive Sleep Apnea (OSA), COPD, and respiratory insufficiency. Features multiple therapy modes (CPAP, S, T, S/T) and specialized Target Tidal Volume (VT) control, complete with carry case, mask, and accessories.',
    badge: 'Target Tidal Volume (VT)',
    warranty: '2 Years',
    image: '/products/bmc-g2s-v25-vt.png',
    modes: ['CPAP', 'S', 'T', 'S/T', 'VT Control'],
    highlights: [
      'Target Tidal Volume (VT) specialized control algorithm',
      'Multiple therapy modes: CPAP, S, T, S/T',
      'Treats OSA, COPD & respiratory insufficiency',
      'Complete accessory kit including mask and carry case',
      '2-Year warranty with local engineering support'
    ],
    features: [
      {
        title: 'Target Tidal Volume (VT) Algorithm',
        description: 'Automatically adjusts pressure support to maintain a target ventilation volume prescribed by physicians.'
      },
      {
        title: '4 Therapy Modes (CPAP, S, T, S/T)',
        description: 'Offers full flexibility for spontaneous and timed respiratory rate control.'
      },
      {
        title: 'Complete Out-of-the-Box Kit',
        description: 'Includes premium mask, flexible tubing, power cord, filters, and durable padded carry case.'
      },
      {
        title: 'Real-Time Compliance Monitoring',
        description: 'Tracks AHI, usage hours, leak rates, and tidal volume stats for physician review.'
      }
    ],
    specs: [
      { label: 'Model', value: 'BMC G2S V25 VT' },
      { label: 'Therapy Modes', value: 'CPAP, S, T, S/T, Target VT' },
      { label: 'IPAP Pressure', value: '4 – 25 cmH₂O' },
      { label: 'EPAP Pressure', value: '4 – 25 cmH₂O' },
      { label: 'Respiration Rate', value: '5 – 30 bpm' },
      { label: 'Target Tidal Volume', value: '150 – 1500 mL' },
      { label: 'Warranty', value: '2 Years Warranty' }
    ],
    packageIncludes: [
      'BMC G2S V25 VT BiPAP Machine',
      'Integrated Heated Humidifier',
      'Premium BiPAP Mask',
      'Flexible Air Hose',
      'Filters & Power Supply',
      'Padded Travel Carry Case',
      'User Manual'
    ],
    idealFor: [
      'Patients requiring Target Tidal Volume ventilation (VT control)',
      'COPD or respiratory failure management under physician prescription'
    ]
  },
  {
    id: 'oxymed-bipap-st',
    name: 'Oxymed BiPAP ST',
    brand: 'Oxymed',
    category: 'Sleep & Respiratory Therapy',
    series: 'AirSmart Series',
    tagline: 'Feature-rich respiratory device with German-Engineered Turbine',
    shortDesc: 'Compact AirSmart BPAP ST/30 machine built with a German-engineered turbine for smooth airflow performance and daily wellness support.',
    fullDesc: 'The Oxymed BPAP ST/30 – AirSmart Machine is a compact, feature-rich respiratory support device designed for individuals seeking non-invasive breathing assistance as part of their wellness routine under professional guidance. Built with a precision German-Engineered Turbine for smooth, consistent airflow performance and user-friendly controls.',
    badge: 'German-Engineered Turbine',
    warranty: '3 Years',
    image: '/products/oxymed-bipap-st.png',
    modes: ['CPAP', 'S', 'T', 'S/T'],
    highlights: [
      'German-Engineered Turbine for smooth, quiet airflow',
      'User-Friendly controls with intuitive navigation screen',
      'Multiple therapy modes (CPAP, S, T, S/T)',
      'Daily wellness ready for non-invasive breathing routines',
      '3-Year comprehensive warranty'
    ],
    features: [
      {
        title: 'German-Engineered Turbine',
        description: 'Precision-built turbine engine for ultra-smooth pressure ramps, silent operation, and long lifespan.'
      },
      {
        title: 'User-Friendly Controls',
        description: 'Simple, intuitive interface designed for effortless daily operation by patients or caregivers.'
      },
      {
        title: 'Multiple Therapy Modes',
        description: 'Supports a range of smart features for guided non-invasive breathing support.'
      },
      {
        title: 'Daily Wellness Ready',
        description: 'Suitable for everyday breathing wellness routines and prescribed clinical respiratory therapy.'
      }
    ],
    specs: [
      { label: 'Model', value: 'Oxymed BPAP ST/30 – AirSmart' },
      { label: 'Turbine Engine', value: 'German-Engineered High-Precision Turbine' },
      { label: 'Therapy Modes', value: 'CPAP, S, T, S/T (Up to 30 cmH₂O)' },
      { label: 'User Interface', value: 'Color LCD Screen & Control Dial' },
      { label: 'Humidification', value: 'Inbuilt Heated Humidifier' },
      { label: 'Warranty', value: '3 Years Warranty' }
    ],
    packageIncludes: [
      'Oxymed BiPAP ST AirSmart Main Unit',
      'Heated Humidifier Water Chamber',
      'Respiratory Mask & Headgear',
      'Tubing Hose',
      'Power Supply & Cable',
      'Travel Carry Bag',
      'User Manual'
    ],
    idealFor: [
      'Patients requiring smooth, high-pressure BiPAP ST therapy up to 30 cmH₂O',
      'Users looking for reliable German motor engineering and quiet operation'
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
