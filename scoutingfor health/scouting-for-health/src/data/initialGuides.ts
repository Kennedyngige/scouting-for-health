import { EmergencyGuide } from '../types';

export const INITIAL_GUIDES: EmergencyGuide[] = [
  // --- LIFE-THREATENING EMERGENCIES ---
  {
    id: 'cpr-adult',
    category: 'medical',
    subCategory: 'Life-Threatening',
    title: 'CPR (Adult)',
    description: 'Cardiopulmonary resuscitation for adults who are unresponsive and not breathing.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Check scene safety. Tap shoulder and shout "Are you okay?".' },
      { stepNumber: 2, instruction: 'If unresponsive, call emergency services immediately.' },
      { stepNumber: 3, instruction: 'Check breathing for no more than 10 seconds.' },
      { stepNumber: 4, instruction: 'If not breathing, start compressions. Push hard and fast in center of chest (100-120/min).', timer: 30 },
      { stepNumber: 5, instruction: 'Give 2 rescue breaths if trained. Otherwise, continue hands-only CPR.' }
    ],
    doNot: ['Do not stop until help arrives or person wakes up.', 'Do not press on the stomach.'],
    callEmergencyIf: ['Person is unresponsive.', 'Person is not breathing or gasping.'],
    aftercare: ['Keep person warm and calm until help arrives.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'choking-adult',
    category: 'medical',
    subCategory: 'Life-Threatening',
    title: 'Choking (Adult)',
    description: 'First aid for an adult who cannot breathe due to a blocked airway.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Encourage them to cough if they can.' },
      { stepNumber: 2, instruction: 'If silent/unable to breathe: Give 5 back blows between shoulder blades.' },
      { stepNumber: 3, instruction: 'Give 5 abdominal thrusts (Heimlich maneuver). Pull inward and upward.' },
      { stepNumber: 4, instruction: 'Repeat cycles of 5 back blows and 5 thrusts.' }
    ],
    doNot: ['Do not slap back if they are coughing effectively.', 'Do not give water.'],
    callEmergencyIf: ['Person becomes unconscious.', 'Obstruction does not clear.'],
    aftercare: ['See a doctor afterwards, even if fine, to check for internal injury.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'severe-bleeding',
    category: 'medical',
    subCategory: 'Life-Threatening',
    title: 'Severe Bleeding',
    description: 'Control heavy bleeding to prevent shock and loss of life.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Apply direct pressure on the wound with a clean cloth or gloved hand.' },
      { stepNumber: 2, instruction: 'Keep pressure applied constantly. Do not check wound.' },
      { stepNumber: 3, instruction: 'If blood soaks through, add more layers. Do not remove original.' },
      { stepNumber: 4, instruction: 'Apply a tight bandage over the cloth.' }
    ],
    doNot: ['Do not remove objects impaled in the wound.', 'Do not use a tourniquet unless trained and absolutely necessary.'],
    callEmergencyIf: ['Bleeding is severe or does not stop.', 'Person shows signs of shock (pale, cold).'],
    aftercare: ['Keep victim lying down and warm.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'stroke',
    category: 'medical',
    subCategory: 'Life-Threatening',
    title: 'Stroke (FAST Test)',
    description: 'Identify stroke symptoms quickly using the FAST method.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Face: Ask them to smile. Does one side droop?' },
      { stepNumber: 2, instruction: 'Arms: Ask to raise both arms. Does one drift down?' },
      { stepNumber: 3, instruction: 'Speech: Ask to repeat a phrase. Is speech slurred?' },
      { stepNumber: 4, instruction: 'Time: If you see any of these signs, call emergency immediately.' }
    ],
    doNot: ['Do not give them food or drink.', 'Do not let them drive.'],
    callEmergencyIf: ['Any sign of the FAST test is positive.'],
    aftercare: ['Note the time symptoms started.'],
    lastUpdated: new Date().toISOString()
  },
  
  // --- INJURIES & TRAUMA ---
  {
    id: 'burns',
    category: 'medical',
    subCategory: 'Injuries & Trauma',
    title: 'Burns',
    description: 'Immediate care for heat or chemical burns to reduce damage.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Cool the burn under cool running water for at least 20 minutes.' },
      { stepNumber: 2, instruction: 'Remove jewelry or tight clothing near burn before swelling starts.' },
      { stepNumber: 3, instruction: 'Cover loosely with cling film or a clean, non-fluffy cloth.' }
    ],
    doNot: ['Do not use ice or ice water.', 'Do not break blisters.', 'Do not apply butter, ointments, or creams.'],
    callEmergencyIf: ['Burn is large, deep, or on face/hands/genitals.', 'Chemical or electrical burn.'],
    aftercare: ['Monitor for infection.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'fractures',
    category: 'medical',
    subCategory: 'Injuries & Trauma',
    title: 'Fractures (Broken Bones)',
    description: 'Support and immobilize broken bones.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Support the injured part with your hand or a cushion.' },
      { stepNumber: 2, instruction: 'Stop any bleeding by applying pressure around the bone, not on it.' },
      { stepNumber: 3, instruction: 'Immobilize with a sling or splint only if trained and moving is necessary.' }
    ],
    doNot: ['Do not try to realign the bone.', 'Do not move the person if spinal injury is suspected.'],
    callEmergencyIf: ['Bone is sticking out.', 'Limb is deformed or pale/blue.'],
    aftercare: ['Keep checking circulation beyond the injury.'],
    lastUpdated: new Date().toISOString()
  },

  // --- ILLNESS ---
  {
    id: 'anaphylaxis',
    category: 'medical',
    subCategory: 'Illness',
    title: 'Allergic Reaction (Anaphylaxis)',
    description: 'Severe life-threatening allergic reaction.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Use Epipen (auto-injector) immediately if available.' },
      { stepNumber: 2, instruction: 'Call emergency services.' },
      { stepNumber: 3, instruction: 'Lie person flat with legs raised (if breathing allows).' }
    ],
    doNot: ['Do not delay using the Epipen.', 'Do not stand them up quickly.'],
    callEmergencyIf: ['Difficulty breathing or swelling of tongue/throat.', 'Feeling faint or dizzy.'],
    aftercare: ['Must go to hospital even if they feel better.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'seizure',
    category: 'medical',
    subCategory: 'Illness',
    title: 'Seizures',
    description: 'Protecting a person during a convulsive seizure.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Clear space around them. Move dangerous objects.' },
      { stepNumber: 2, instruction: 'Place something soft under their head.' },
      { stepNumber: 3, instruction: 'Time the seizure.' },
      { stepNumber: 4, instruction: 'Once stopped, roll them onto their side (Recovery Position).' }
    ],
    doNot: ['Do not restrain them.', 'Do not put anything in their mouth.'],
    callEmergencyIf: ['Seizure lasts > 5 minutes.', 'Person is injured or does not wake up.', 'First time seizure.'],
    aftercare: ['Stay with them until fully alert.'],
    lastUpdated: new Date().toISOString()
  },

  // --- BITES & STINGS ---
  {
    id: 'snake-bite',
    category: 'medical',
    subCategory: 'Bites & Stings',
    title: 'Snake Bites',
    description: 'Emergency care for venomous snake bites.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Keep person calm and still to slow venom spread.' },
      { stepNumber: 2, instruction: 'Call emergency services immediately.' },
      { stepNumber: 3, instruction: 'Apply a pressure immobilization bandage if trained (for some snakes).' }
    ],
    doNot: ['Do not suck the venom.', 'Do not cut the wound.', 'Do not apply a tourniquet.'],
    callEmergencyIf: ['Always call for snake bites.'],
    aftercare: ['Mark the time of the bite.'],
    lastUpdated: new Date().toISOString()
  },

  // --- DISASTER GUIDANCE ---
  {
    id: 'earthquake',
    category: 'disaster',
    subCategory: 'Disaster',
    title: 'Earthquake',
    description: 'What to do during ground shaking.',
    emergencyNumbers: ['911'],
    steps: [
      { stepNumber: 1, instruction: 'DROP to your hands and knees.' },
      { stepNumber: 2, instruction: 'COVER your head and neck under a sturdy table.' },
      { stepNumber: 3, instruction: 'HOLD ON until shaking stops.' }
    ],
    doNot: ['Do not run outside during shaking.', 'Do not stand in doorways.'],
    callEmergencyIf: ['Someone is trapped or injured under debris.'],
    aftercare: ['Check for gas leaks and structural damage.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'house-fire',
    category: 'disaster',
    subCategory: 'Disaster',
    title: 'House Fire',
    description: 'Evacuating safely from a fire.',
    emergencyNumbers: ['911'],
    steps: [
      { stepNumber: 1, instruction: 'Stay low to the ground to avoid smoke.' },
      { stepNumber: 2, instruction: 'Check doors for heat with back of hand before opening.' },
      { stepNumber: 3, instruction: 'Get out and stay out.' }
    ],
    doNot: ['Do not go back inside for anything.', 'Do not use elevators.'],
    callEmergencyIf: ['Fire is spreading.', 'People are trapped inside.'],
    aftercare: ['Do not re-enter until declared safe by fire department.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'flood',
    category: 'disaster',
    subCategory: 'Disaster',
    title: 'Floods',
    description: 'Safety measures during flooding.',
    emergencyNumbers: ['911'],
    steps: [
      { stepNumber: 1, instruction: 'Move to higher ground immediately.' },
      { stepNumber: 2, instruction: 'Disconnect utilities if safe to do so.' },
      { stepNumber: 3, instruction: 'Avoid walking or driving through flood waters.' }
    ],
    doNot: ['Do not drive through flooded roads (Turn Around, Don\'t Drown).', 'Do not touch electrical equipment if wet.'],
    callEmergencyIf: ['Trapped by rising water.'],
    aftercare: ['Clean and disinfect everything that got wet.'],
    lastUpdated: new Date().toISOString()
  },

  // --- ENVIRONMENTAL ---
  {
    id: 'heatstroke',
    category: 'medical',
    subCategory: 'Environmental',
    title: 'Heatstroke',
    description: 'Life-threatening condition where body temperature rises dangerously high.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Move person to a cool, shaded area.' },
      { stepNumber: 2, instruction: 'Cool them rapidly: immerse in cold water or place ice packs on neck, armpits, groin.' },
      { stepNumber: 3, instruction: 'Remove excess clothing.' }
    ],
    doNot: ['Do not give fluids if they are unconscious or vomiting.'],
    callEmergencyIf: ['Person is confused, unconscious, or has a seizure.', 'Body temp > 40°C (104°F).'],
    aftercare: ['Rest in a cool place.'],
    lastUpdated: new Date().toISOString()
  },
  {
    id: 'hypothermia',
    category: 'medical',
    subCategory: 'Environmental',
    title: 'Hypothermia',
    description: 'Dangerously low body temperature.',
    emergencyNumbers: ['911', '112'],
    steps: [
      { stepNumber: 1, instruction: 'Move person to a warm, dry place.' },
      { stepNumber: 2, instruction: 'Remove wet clothing.' },
      { stepNumber: 3, instruction: 'Warm the center of the body (chest, neck, head, groin) using blankets or skin-to-skin contact.' }
    ],
    doNot: ['Do not use direct heat (hot water, heating pad) immediately.', 'Do not massage the limbs.'],
    callEmergencyIf: ['Person is unconscious or has no pulse.'],
    aftercare: ['Give warm (not hot) sweet drinks if alert.'],
    lastUpdated: new Date().toISOString()
  },

  // --- SAFETY & PREVENTION ---
  {
    id: 'first-aid-kit',
    category: 'medical',
    subCategory: 'Safety & Prevention',
    title: 'First Aid Kit Checklist',
    description: 'Essential items for your emergency kit.',
    emergencyNumbers: [],
    steps: [
      { stepNumber: 1, instruction: 'Basics: Plasters, sterile gauze dressings, bandages (triangular/crepe).' },
      { stepNumber: 2, instruction: 'Tools: Safety pins, scissors, tweezers, disposable gloves.' },
      { stepNumber: 3, instruction: 'Meds: Painkillers, antihistamines, antiseptic cream.' },
      { stepNumber: 4, instruction: 'Extras: Thermal blanket, cleansing wipes, distilled water.' }
    ],
    doNot: ['Do not keep expired medicines.', 'Do not keep kit in reach of children.'],
    callEmergencyIf: [],
    aftercare: ['Check and restock kit every 6 months.'],
    lastUpdated: new Date().toISOString()
  }
];
