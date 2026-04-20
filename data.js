/* ==========================================================================
   MASTER PLAN — ACTIONABLE ITEMS (single source of truth)
   ==========================================================================

   Schema:
     id        — unique stable identifier (use kebab-case, section-prefixed)
     section   — top-level section key: 'health' | 'care' | 'wardrobe' | 'training'
     subsection— second-level key within section
     phases    — array of phase numbers (1-6) when this item applies
     text      — human-readable description
     href      — link to canonical location of this item in the docs
     kind      — 'habit' | 'milestone' | 'purchase' | 'routine' | 'reference'

   This file seeds the phase, roadmap, and checklist views. Items will be
   added here as each section is built out. Treat this as the canonical
   list — pages render FROM this where possible rather than duplicating.
   ========================================================================== */

window.MasterPlanData = {
  // Phase descriptors used across views
  phases: [
    { n: 1, name: 'Foundation',      months: '1\u20132',   summary: 'Consistent habits. Address dandruff, KP, hemorrhoids. Nail care baseline.' },
    { n: 2, name: 'Build',           months: '3\u20134',   summary: 'Add toner, scalp treatments, leave-in. Makeup research begins.' },
    { n: 3, name: 'Expand',          months: '5\u20137',   summary: 'Vitamin C serum, first makeup products, deep conditioning, body recomp.' },
    { n: 4, name: 'Refine',          months: '8\u201311',  summary: 'Retinol, makeup techniques, fragrance sampling, french-tip practice.' },
    { n: 5, name: 'Integrate',       months: '12\u201315', summary: 'Integrated lip color, Korean beauty looks, fragrance collection.' },
    { n: 6, name: 'Sustain',         months: '16+',        summary: 'Full routine internalized. Columbus/OSU planning. Independent living.' },
  ],

  items: [
    // ========== CARE ==========
    // Supplements — all phases
    { id: 'care-supp-biotin',    section: 'care', subsection: 'supplements', phases: [1,2,3,4,5,6],
      kind: 'habit', text: 'Biotin with food', href: 'care/supplements.html' },
    { id: 'care-supp-vitd',      section: 'care', subsection: 'supplements', phases: [1,2,3,4,5,6],
      kind: 'habit', text: 'Vitamin D with food', href: 'care/supplements.html' },
    { id: 'care-supp-zinc',      section: 'care', subsection: 'supplements', phases: [1,2,3,4,5,6],
      kind: 'habit', text: 'Zinc with food (never on empty stomach)', href: 'care/supplements.html' },

    // Skincare — daily routines
    { id: 'care-skin-am-cleanse', section: 'care', subsection: 'skincare', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'AM: CeraVe cleanser + moisturizer + lip balm + cuticle oil', href: 'care/skincare.html' },
    { id: 'care-skin-pm-cleanse', section: 'care', subsection: 'skincare', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'PM: CeraVe cleanser + moisturizer', href: 'care/skincare.html' },
    { id: 'care-skin-toner',      section: 'care', subsection: 'skincare', phases: [2,3,4,5,6],
      kind: 'routine', text: 'PM: Add toner after cleanser', href: 'care/skincare.html' },
    { id: 'care-skin-vitc',       section: 'care', subsection: 'skincare', phases: [3,4,5,6],
      kind: 'routine', text: 'AM: Add vitamin C serum before moisturizer', href: 'care/skincare.html' },
    { id: 'care-skin-retinol',    section: 'care', subsection: 'skincare', phases: [4,5,6],
      kind: 'routine', text: 'PM: Add retinol (slowly, 2\u00d7/week build-up)', href: 'care/skincare.html' },

    // Hair
    { id: 'care-hair-mon',  section: 'care', subsection: 'hair', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Monday hair wash \u2014 Head & Shoulders', href: 'care/hair.html' },
    { id: 'care-hair-thu',  section: 'care', subsection: 'hair', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Thursday hair wash \u2014 Shea Moisture', href: 'care/hair.html' },
    { id: 'care-hair-oil',  section: 'care', subsection: 'hair', phases: [2,3,4,5,6],
      kind: 'routine', text: 'Pre-wash scalp oil treatment (Sundays)', href: 'care/hair.html' },
    { id: 'care-hair-mask', section: 'care', subsection: 'hair', phases: [3,4,5,6],
      kind: 'routine', text: 'Monthly deep conditioning mask', href: 'care/hair.html' },

    // Nails
    { id: 'care-nails-sun', section: 'care', subsection: 'nails', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Sunday nail day \u2014 soak, file, buff, polish', href: 'care/nails.html' },
    { id: 'care-nails-frenchtip', section: 'care', subsection: 'nails', phases: [4,5,6],
      kind: 'milestone', text: 'Practice french tips', href: 'care/nails.html' },

    // Makeup
    { id: 'care-makeup-research', section: 'care', subsection: 'makeup', phases: [2],
      kind: 'milestone', text: 'Research YouTube channels, build visual vocabulary', href: 'care/makeup.html' },
    { id: 'care-makeup-first',    section: 'care', subsection: 'makeup', phases: [3],
      kind: 'purchase',  text: 'First products: tinted moisturizer, concealer, brow gel, mascara, lip balm', href: 'care/makeup.html' },
    { id: 'care-makeup-eye',      section: 'care', subsection: 'makeup', phases: [4],
      kind: 'milestone', text: 'Eye techniques \u2014 liner, shadow blending', href: 'care/makeup.html' },
    { id: 'care-makeup-lip',      section: 'care', subsection: 'makeup', phases: [5],
      kind: 'milestone', text: 'Integrated lip color', href: 'care/makeup.html' },

    // Fragrance
    { id: 'care-frag-sample', section: 'care', subsection: 'fragrance', phases: [4],
      kind: 'purchase', text: 'Scent Split sample order \u2014 Replica + niche feminine', href: 'care/fragrance.html' },
    { id: 'care-frag-collect', section: 'care', subsection: 'fragrance', phases: [5,6],
      kind: 'purchase', text: 'Full-bottle additions from favorite samples', href: 'care/fragrance.html' },

    // ========== HEALTH ==========
    // Fitness
    { id: 'health-fit-mon', section: 'health', subsection: 'fitness', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Monday workout (full body, glute emphasis)', href: 'health/fitness.html' },
    { id: 'health-fit-wed', section: 'health', subsection: 'fitness', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Wednesday workout (full body, glute emphasis)', href: 'health/fitness.html' },
    { id: 'health-fit-fri', section: 'health', subsection: 'fitness', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Friday workout (full body, glute emphasis)', href: 'health/fitness.html' },
    { id: 'health-fit-mobility', section: 'health', subsection: 'fitness', phases: [1,2,3,4,5,6],
      kind: 'habit', text: 'Daily 5-min morning mobility', href: 'health/fitness.html' },
    { id: 'health-fit-stretch', section: 'health', subsection: 'fitness', phases: [1,2,3,4,5,6],
      kind: 'routine', text: 'Post-workout stretch (5-10 min)', href: 'health/fitness.html' },
    { id: 'health-fit-yoga', section: 'health', subsection: 'fitness', phases: [2,3,4,5,6],
      kind: 'habit', text: '90-day yoga bootcamp (self-driven slots)', href: 'health/fitness.html' },

    // Medical / HRT (placeholder — to be expanded when section is built)
    { id: 'health-hrt-placeholder', section: 'health', subsection: 'medical-hrt', phases: [1,2,3,4,5,6],
      kind: 'reference', text: 'Medical/HRT tracking (section to be built)', href: 'health/medical-hrt.html' },

    // Mental Health (quick-reference, not phase-tagged — always relevant)
    { id: 'health-mental-reference', section: 'health', subsection: 'mental-health', phases: [1,2,3,4,5,6],
      kind: 'reference', text: 'Mental health toolkit \u2014 state-based quick reference', href: 'health/mental-health.html' },

    // Diet (placeholder)
    { id: 'health-diet-placeholder', section: 'health', subsection: 'diet', phases: [1,2,3,4,5,6],
      kind: 'reference', text: 'Diet/nutrition (section to be built)', href: 'health/diet.html' },

    // ========== FINANCES (part of care plan currently) ==========
    { id: 'fin-debtfree',   section: 'care', subsection: 'finances', phases: [1,2],
      kind: 'milestone', text: 'Debt free (by Month 5\u20136)', href: 'care/finances.html' },
    { id: 'fin-1k',         section: 'care', subsection: 'finances', phases: [2,3],
      kind: 'milestone', text: '$1k savings (Month 7\u20138)', href: 'care/finances.html' },
    { id: 'fin-5k',         section: 'care', subsection: 'finances', phases: [4,5],
      kind: 'milestone', text: '$5k savings (Month 15\u201316)', href: 'care/finances.html' },
    { id: 'fin-columbus',   section: 'care', subsection: 'finances', phases: [5,6],
      kind: 'milestone', text: 'Columbus/OSU planning active', href: 'care/finances.html' },

    // ========== WARDROBE CAPSULE (build order) ==========
    { id: 'wardrobe-turtleneck',  section: 'wardrobe', subsection: 'capsule', phases: [1,2],
      kind: 'purchase', text: 'Black fine-knit turtleneck (Phase 1\u20132 priority \u2014 foundation)',
      href: 'wardrobe/capsule/tops.html' },
    { id: 'wardrobe-white-tee',   section: 'wardrobe', subsection: 'capsule', phases: [1,2],
      kind: 'purchase', text: 'White fitted tee (Phase 1\u20132 priority \u2014 foundation)',
      href: 'wardrobe/capsule/tops.html' },
    { id: 'wardrobe-tights',      section: 'wardrobe', subsection: 'capsule', phases: [1,2],
      kind: 'purchase', text: 'Black opaque tights (infrastructure, not accessory)',
      href: 'wardrobe/capsule/accessories.html' },
    { id: 'wardrobe-mary-janes',  section: 'wardrobe', subsection: 'capsule', phases: [1,2],
      kind: 'purchase', text: 'Black Mary Janes, low block heel',
      href: 'wardrobe/capsule/shoes.html' },
    { id: 'wardrobe-silk-skirt',  section: 'wardrobe', subsection: 'capsule', phases: [2,3],
      kind: 'purchase', text: 'Black midi skirt \u2014 silk or bias-cut',
      href: 'wardrobe/capsule/bottoms.html' },
    { id: 'wardrobe-wool-coat',   section: 'wardrobe', subsection: 'capsule', phases: [2,3],
      kind: 'purchase', text: 'Long wool coat, black or charcoal',
      href: 'wardrobe/capsule/outerwear.html' },
    { id: 'wardrobe-silk-blouse', section: 'wardrobe', subsection: 'capsule', phases: [3,4],
      kind: 'purchase', text: 'Cream/ivory silk blouse \u2014 notch collar',
      href: 'wardrobe/capsule/tops.html' },
    { id: 'wardrobe-slip-dress',  section: 'wardrobe', subsection: 'capsule', phases: [3,4],
      kind: 'purchase', text: 'Black silk slip dress (midi)',
      href: 'wardrobe/capsule/dresses.html' },
    { id: 'wardrobe-cardigan',    section: 'wardrobe', subsection: 'capsule', phases: [3,4],
      kind: 'purchase', text: 'Soft oversized cardigan, cream or grey',
      href: 'wardrobe/capsule/outerwear.html' },
    { id: 'wardrobe-trench',      section: 'wardrobe', subsection: 'capsule', phases: [4,5],
      kind: 'purchase', text: 'Cream or camel trench coat',
      href: 'wardrobe/capsule/outerwear.html' },
    { id: 'wardrobe-pleated',     section: 'wardrobe', subsection: 'capsule', phases: [4,5],
      kind: 'purchase', text: 'Cream pleated midi skirt (tenniscore anchor)',
      href: 'wardrobe/capsule/bottoms.html' },
    { id: 'wardrobe-nap-dress',   section: 'wardrobe', subsection: 'capsule', phases: [5,6],
      kind: 'purchase', text: 'Nap dress or equivalent (romantic workhorse)',
      href: 'wardrobe/capsule/dresses.html' },

    // Wigs (priority order)
    { id: 'wardrobe-wig-nyx-silver',    section: 'wardrobe', subsection: 'wigs', phases: [3,4],
      kind: 'purchase', text: 'Wig #1 \u2014 Nyx, Silver Oyster-R', href: 'wardrobe/wigs.html' },
    { id: 'wardrobe-wig-haute',         section: 'wardrobe', subsection: 'wigs', phases: [4,5],
      kind: 'purchase', text: 'Wig #2 \u2014 Haute, Catalina Blonde', href: 'wardrobe/wigs.html' },
    { id: 'wardrobe-wig-bryony',        section: 'wardrobe', subsection: 'wigs', phases: [5,6],
      kind: 'purchase', text: 'Wig #3 \u2014 Bryony, cooler colorway TBD', href: 'wardrobe/wigs.html' },
    { id: 'wardrobe-wig-hallie',        section: 'wardrobe', subsection: 'wigs', phases: [5,6],
      kind: 'purchase', text: 'Wig #4 \u2014 Hallie, Moonstone', href: 'wardrobe/wigs.html' },
    { id: 'wardrobe-wig-nyx-watermelon',section: 'wardrobe', subsection: 'wigs', phases: [6],
      kind: 'purchase', text: 'Wig #5 \u2014 Nyx, Watermelon (fashion color)', href: 'wardrobe/wigs.html' },

    // ========== TRAINING (placeholders \u2014 milestones added during section build) ==========
    { id: 'training-voice-foundation', section: 'training', subsection: 'voice', phases: [1,2],
      kind: 'milestone', text: 'Voice: foundation \u2014 higher pitch on command', href: 'training/voice.html' },
    { id: 'training-voice-control',    section: 'training', subsection: 'voice', phases: [2,3],
      kind: 'milestone', text: 'Voice: control \u2014 sustain through full sentence', href: 'training/voice.html' },
    { id: 'training-voice-resonance',  section: 'training', subsection: 'voice', phases: [3,4],
      kind: 'milestone', text: 'Voice: resonance \u2014 forward placement', href: 'training/voice.html' },
    { id: 'training-voice-integration',section: 'training', subsection: 'voice', phases: [4,5],
      kind: 'milestone', text: 'Voice: integration \u2014 passes in controlled environments', href: 'training/voice.html' },
    { id: 'training-voice-default',    section: 'training', subsection: 'voice', phases: [6],
      kind: 'milestone', text: 'Voice: default \u2014 automatic without conscious effort', href: 'training/voice.html' },

    { id: 'training-posture-standing', section: 'training', subsection: 'posture', phases: [1,2,3],
      kind: 'milestone', text: 'Posture: standing \u2014 hip shift, elbow position', href: 'training/posture.html' },
    { id: 'training-posture-walking',  section: 'training', subsection: 'posture', phases: [2,3,4],
      kind: 'milestone', text: 'Posture: walking \u2014 foot placement, hip engagement', href: 'training/posture.html' },
    { id: 'training-posture-heels',    section: 'training', subsection: 'presentation', phases: [4,5],
      kind: 'milestone', text: 'Presentation: walking in heels (low to higher)', href: 'training/presentation.html' },
  ],

  // helpers
  byPhase(phase) {
    return this.items.filter(i => i.phases.includes(phase));
  },
  bySection(section) {
    return this.items.filter(i => i.section === section);
  },
  groupBySection(items) {
    const groups = {};
    items.forEach(i => {
      const key = i.section;
      if (!groups[key]) groups[key] = [];
      groups[key].push(i);
    });
    return groups;
  },
};
