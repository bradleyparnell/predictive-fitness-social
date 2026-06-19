import React, { useState } from 'react';
import { X, Copy, Check, Camera, Image } from 'lucide-react';
import { Brand, Pillar } from '../types';

interface Mockup {
  id: string;
  brand: Brand;
  pillar: Pillar;
  week: string;
  title: string;
  sourcePhoto: string;
  headline: string;
  subtext: string;
  caption: string;
  hashtags: string;
  directorNote: string;
  imagePath: string;
}

const MOCKUPS: Mockup[] = [

  // ─────────────────────────────────────────────────────────────
  // RUNDOT — WEEK 1: SCIENCE & SECRETS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'rd-sunset',
    brand: 'RunDot', pillar: 'Engage', week: 'Week 1',
    title: 'Some Runs Change Everything',
    sourcePhoto: 'Run 3.jpg — Silhouette runner at fiery sunset',
    headline: 'SOME RUNS CHANGE EVERYTHING.',
    subtext: 'What was your last breakthrough mile?',
    caption: `You know the one. The run where everything clicked.\n\nMaybe it was the first time you held a pace that used to break you. Maybe it was when you finished strong and realized you're actually getting faster.\n\nRunDot doesn't just build mileage. It builds runners who surprise themselves.\n\n👇 Tell us: what was YOUR breakthrough run?\n\n📲 Get your free plan at rundot.com`,
    hashtags: '#RunDot #RunningMotivation #MarathonTraining #RunnersCommunity #BreakthroughRun #RunningLife',
    directorNote: 'Silhouetted runner against fiery sky is the single most emotional image in the library. Minimal text, let the photo breathe. The question drives comments and high engagement.',
    imagePath: './assets/rundot/mockup_rd-sunset.png',
  },
  {
    id: 'rd-mountain',
    brand: 'RunDot', pillar: 'Prove It', week: 'Week 1',
    title: 'Train Less. Run Faster.',
    sourcePhoto: 'Run 2.jpg — Golden hour runner with snowy mountain backdrop',
    headline: 'TRAIN LESS. RUN FASTER. PR PROVEN.',
    subtext: 'Runners on RunDot average a 22-min marathon PR in year one.',
    caption: `Counterintuitive truth: running MORE miles is rarely what gets you faster.\n\nRunDot athletes run fewer total miles than most plans, but every mile has a purpose. Every run is calibrated to their current fitness.\n\nThe result? An average 22-minute marathon PR in year one.\n\n📲 See what your first RunDot week looks like. Get your free plan at rundot.com`,
    hashtags: '#RunDot #MarathonTraining #RunLessRunFaster #MarathonPR #PersonalRecord #SmartRunning',
    directorNote: 'Golden hour mountain backdrop looks like a running magazine cover. Confident stride + snowy peaks = aspirational performance. Top-performing Prove It template. Works as a paid ad.',
    imagePath: './assets/rundot/mockup_rd-mountain.png',
  },
  {
    id: 'rd-road',
    brand: 'RunDot', pillar: 'CTA', week: 'Week 1',
    title: 'Your Next PR Starts Here',
    sourcePhoto: 'Landscape 1.jpg — Empty road at pink/gold sunset',
    headline: 'YOUR NEXT PR STARTS HERE.',
    subtext: 'Free personalized run training. Built by AI. Proven by thousands.',
    caption: `The road doesn't care about your old PR.\n\nBut your next one is out there, and RunDot will build the exact training plan to reach it. Free. Personalized. Proven.\n\n3 minutes to set up your plan. A lifetime of better runs.\n\n📲 See what your training is missing. Free at rundot.com`,
    hashtags: '#RunDot #RunningApp #FreeRunningPlan #MarathonTraining #PersonalRecord #TrainSmart',
    directorNote: 'Empty road stretching to the horizon is the single best CTA image in the library. Aspirational, minimal, says "the journey starts now" without saying a word. Perfect for paid ads too.',
    imagePath: './assets/rundot/mockup_rd-road.png',
  },
  {
    id: 'rd-duo',
    brand: 'RunDot', pillar: 'Engage', week: 'Week 1',
    title: 'Running Is Better Together',
    sourcePhoto: 'Run 1.jpg — Man and woman running together, morning light',
    headline: 'RUNNING IS BETTER TOGETHER.',
    subtext: 'Tag your training partner below.',
    caption: `Some PRs start with a training partner who won't let you quit.\n\nTag the person who shows up when it's dark, cold, or just hard. The one who talks you into the long run and talks you through the hard miles.\n\nThey might need to hear they're making a difference.\n\n👇 Tag them below. We'll feature the best duos this week.\n\n#RunDot #RunningPartner #RunningCommunity`,
    hashtags: '#RunDot #RunningPartner #RunningCommunity #TrainingBuddy #MarathonTraining #RunTogether',
    directorNote: 'Two runners mid-stride in morning light. Community engagement gold. The tag mechanic drives high reach and shares. Pair with a Stories poll about solo vs. group training.',
    imagePath: './assets/rundot/mockup_rd-duo.png',
  },
  {
    id: 'rd-trail',
    brand: 'RunDot', pillar: 'Educate', week: 'Week 1',
    title: 'Easy Doesn\'t Mean Weak',
    sourcePhoto: 'Run 4.jpg — Runner in yellow shirt on golden trail, motion blur',
    headline: 'EASY DOESN\'T MEAN WEAK.',
    subtext: 'Zone 2 is where champions are built.',
    caption: `If your easy runs don't feel embarrassingly slow, they're probably not easy enough.\n\n🧠 Zone 2 training is the most underused tool in recreational running. The research is clear: 80% of your miles should feel easy. The other 20% should be genuinely hard.\n\nMost runners do 100% of their miles at medium effort. That's the zone that makes you tired without making you faster.\n\n💾 Save this. Your next easy run should feel like a walk in the park.\n\n📲 RunDot builds your zones automatically. Get your free plan at rundot.com`,
    hashtags: '#RunDot #Zone2Training #EasyRun #HeartRateTraining #RunSmart #MarathonPrep',
    directorNote: 'Motion blur runner on warm trail evokes speed without effort. The contrast between the "easy" message and dynamic image is intentional. Save-worthy educational content.',
    imagePath: './assets/rundot/mockup_rd-trail.png',
  },
  {
    id: 'rd-mountains',
    brand: 'RunDot', pillar: 'Engage', week: 'Week 1',
    title: 'The Mountains Don\'t Care',
    sourcePhoto: 'Landscape 2.jpg — Empty road with snow-capped mountains at dusk',
    headline: 'THE MOUNTAINS DON\'T CARE HOW TIRED YOU ARE.',
    subtext: 'But your training plan should.',
    caption: `The best runners aren't the ones who push through every hard moment.\n\nThey're the ones who know when to push and when to hold back, because their plan tells them the difference.\n\nA great training plan doesn't ignore how you feel. It uses it as data.\n\n📲 Your RunDot plan adapts to YOU, every single week. Get it free at rundot.com`,
    hashtags: '#RunDot #SmartTraining #TrainingAdaptation #RunningLife #MarathonMindset #TrailRunning',
    directorNote: 'Empty road + dramatic mountain backdrop is pure aspiration. The message sets up the product story without being salesy. Works especially well on Monday morning.',
    imagePath: './assets/rundot/mockup_rd-mountains.png',
  },

  // ─────────────────────────────────────────────────────────────
  // RUNDOT — WEEK 2: PROVE IT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'rd-data',
    brand: 'RunDot', pillar: 'Prove It', week: 'Week 2',
    title: '31 Minutes Faster',
    sourcePhoto: 'Run 2.jpg — Golden hour mountain runner',
    headline: '31 MINUTES FASTER.',
    subtext: 'Same runner. 16 weeks. One smarter plan.',
    caption: `Week 1: Brian was running 6 days a week, all at the same pace, wondering why he wasn't improving.\n\nWeek 16: He ran 4 days a week and just PR'd his marathon by 31 minutes.\n\nRunDot didn't add miles. It restructured how he used them.\n\nThe training volume went down. The training intelligence went up. The results followed.\n\n📲 See what your training is missing. Get your free plan at rundot.com`,
    hashtags: '#RunDot #MarathonPR #AdaptiveTraining #RunningData #TrainSmart #MarathonResults',
    directorNote: 'Mountain runner with the dramatic sky reinforces the "rise above" narrative. The before/after stat is the hook that stops the scroll. Works well as a carousel with the full data story.',
    imagePath: './assets/rundot/mockup_rd-data.png',
  },
  {
    id: 'rd-myth',
    brand: 'RunDot', pillar: 'Educate', week: 'Week 2',
    title: 'More Miles Isn\'t the Answer',
    sourcePhoto: 'Landscape 1.jpg — Empty road stretching to sunset horizon',
    headline: 'MORE MILES ISN\'T THE ANSWER.',
    subtext: 'Smarter miles are.',
    caption: `Running culture has an obsession with mileage.\n\n100-mile weeks. Strava PRs for volume. Grinding through fatigue as a badge of honor.\n\nBut the science points somewhere else entirely.\n\n📊 We've seen 40-mile-week runners crush people logging 70+, because quality beats quantity every time. The number that matters isn't miles per week. It's what percentage of those miles actually served a purpose.\n\nHot take: what do you think? Drop it below. 👇`,
    hashtags: '#RunDot #MileageDebate #RunSmart #MarathonTraining #QualityOverQuantity #RunningScience',
    directorNote: 'The open road visual reinforces the "there\'s a smarter path" message. Save-worthy for runners who have been grinding on high mileage with no results. Drive the debate in comments.',
    imagePath: './assets/rundot/mockup_rd-myth.png',
  },
  {
    id: 'rd-holdback',
    brand: 'RunDot', pillar: 'Engage', week: 'Week 2',
    title: 'What\'s Holding Your Running Back?',
    sourcePhoto: 'Run 3.jpg — Silhouette runner at fiery sunset',
    headline: 'WHAT\'S HOLDING YOUR RUNNING BACK?',
    subtext: 'Drop it below. We answer every one.',
    caption: `Injury. Motivation. Time. Pace. Hills. Heat. Fear.\n\nWhatever it is, we want to hear it.\n\nDrop your biggest running struggle below, and our team will respond with actual advice. No fluff. No "just believe in yourself."\n\nReal answers. Right here.\n\n👇 Go.\n\n#RunDot #RunningCommunity`,
    hashtags: '#RunDot #RunningCommunity #AskRunDot #RunningStruggles #MarathonTraining #RunningCoach',
    directorNote: 'The dramatic sunset photo creates emotional openness. Direct question format drives high comment volume. Plan to reply to every comment for 2 hours after posting.',
    imagePath: './assets/rundot/mockup_rd-holdback.png',
  },

  // ─────────────────────────────────────────────────────────────
  // RUNDOT — WEEK 3: HOT TAKES & HARD TRUTHS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'rd-summer',
    brand: 'RunDot', pillar: 'Educate', week: 'Week 3',
    title: 'Summer Heat. Smarter Training.',
    sourcePhoto: 'Run 4.jpg — Runner in yellow shirt on warm desert trail',
    headline: 'SUMMER HEAT. SMARTER TRAINING.',
    subtext: 'Your plan adapts to every variable.',
    caption: `Summer running isn't slower because you're less fit.\n\nIt's slower because heat is a training variable that most plans completely ignore.\n\n🧠 What to know:\n- Every 10°F above 55°F adds roughly 2% to your pace\n- Your HR runs 10-15 bpm higher in heat at the same effort\n- Your recovery window lengthens significantly in hot weather\n\nRunDot adjusts your training load in real-time based on these factors. Your summer workouts make you faster in the fall.\n\n💾 Save this before your next hot run.\n\n📲 Get your free plan at rundot.com`,
    hashtags: '#RunDot #SummerRunning #HeatTraining #MarathonPrep #RunSmart #FallRacePrep',
    directorNote: 'Desert trail runner in golden light is perfect for a summer-specific educational post. Timely content (July) with a strong save/share mechanic.',
    imagePath: './assets/rundot/mockup_rd-summer.png',
  },
  {
    id: 'rd-together',
    brand: 'RunDot', pillar: 'Engage', week: 'Week 3',
    title: 'Two Runners. One Platform.',
    sourcePhoto: 'Run 1.jpg — Man and woman running together, morning light',
    headline: 'TWO RUNNERS. ONE PLATFORM.',
    subtext: 'Your plan is personal. Theirs is too.',
    caption: `You can run with the same person every day and still be on completely different training plans.\n\nThat's the point.\n\nRunDot builds plans based on your fitness, your goals, your schedule. Not theirs. Even if you train together, your prescriptions are yours.\n\n📲 Start free together. Get your plan at rundot.com\n\n👇 Tag someone you'd want to train alongside.`,
    hashtags: '#RunDot #RunTogether #PersonalizedTraining #RunningCouple #RunningPartner #MarathonTraining',
    directorNote: 'Side-by-side runners makes the "two plans, same platform" story visual and immediate. Great for tag mechanics. Consider running as a paid ad targeting couples or friend groups.',
    imagePath: './assets/rundot/mockup_rd-together.png',
  },
  {
    id: 'rd-fallpr',
    brand: 'RunDot', pillar: 'CTA', week: 'Week 3',
    title: 'Your Fall PR Starts Now',
    sourcePhoto: 'Landscape 2.jpg — Empty road toward snow-capped mountains, dusk',
    headline: 'YOUR FALL PR STARTS NOW.',
    subtext: 'Build it right from July.',
    caption: `Fall race season is closer than it feels.\n\nIf your goal race is September, October, or November, the base miles you run in July are part of that plan.\n\nThe athletes who PR in the fall? They started training smart in the summer.\n\n📲 Get your free plan built for your A-race. RunDot.com`,
    hashtags: '#RunDot #FallRacePrep #MarathonTraining #PersonalRecord #SummerTraining #TrainSmart',
    directorNote: 'Road toward mountains with moody sky creates urgency. Seasonal content that maps July effort directly to fall results. Strong CTA timing for goal-race athletes.',
    imagePath: './assets/rundot/mockup_rd-fallpr.png',
  },

  // ─────────────────────────────────────────────────────────────
  // RUNDOT — WEEK 4: WHAT ARE YOU WAITING FOR?
  // ─────────────────────────────────────────────────────────────
  {
    id: 'rd-88pct',
    brand: 'RunDot', pillar: 'Educate', week: 'Week 4',
    title: '88% Train Too Hard',
    sourcePhoto: 'Run 3.jpg — Silhouette runner at fiery sunset',
    headline: '88% TRAIN TOO HARD.',
    subtext: 'Be the other 12%.',
    caption: `According to exercise science research, 88% of recreational runners spend too much time training at moderate intensity, not hard enough to produce performance adaptations, and not easy enough to recover.\n\nThe "moderate effort trap" is the most common reason people plateau.\n\nThe fix isn't less training. It's training polarized: go genuinely easy most days, genuinely hard on a few.\n\n📲 RunDot calculates your zones and builds polarized training automatically. Get your free plan at rundot.com`,
    hashtags: '#RunDot #PolarizedTraining #Zone2 #RunSmart #MarathonScience #RunningData',
    directorNote: 'The silhouette + stat creates a scroll-stopping combination. Designed to make runners question their current approach. Save rate will be high. Follow up with a "test your zones" CTA in Stories.',
    imagePath: './assets/rundot/mockup_rd-88pct.png',
  },
  {
    id: 'rd-ready',
    brand: 'RunDot', pillar: 'CTA', week: 'Week 4',
    title: 'Ready for Fall Race Season?',
    sourcePhoto: 'Landscape 1.jpg — Empty road at pink/gold sunset',
    headline: 'READY FOR FALL RACE SEASON?',
    subtext: 'Your free plan is waiting.',
    caption: `October marathons are 12 weeks away.\n\nAre you building toward them, or just running?\n\nRunDot creates your personalized plan for your specific race, your current fitness, and your available training time. It adjusts every week. It doesn't just count miles.\n\nFree to start. 3 minutes to set up.\n\n📲 See what your training is missing. Get your free plan at rundot.com`,
    hashtags: '#RunDot #FallMarathon #MarathonTraining #RunningApp #PersonalizedPlan #RunSmart',
    directorNote: 'The open road at golden hour is timeless motivation. The urgency hook (12 weeks out) makes this land as a direct response post. Works as a paid ad with a "goals" targeting audience.',
    imagePath: './assets/rundot/mockup_rd-ready.png',
  },
  {
    id: 'rd-missing',
    brand: 'RunDot', pillar: 'CTA', week: 'Week 4',
    title: 'See What Your Training Is Missing',
    sourcePhoto: 'Run 2.jpg — Golden hour runner with snowy mountain backdrop',
    headline: 'SEE WHAT YOUR TRAINING IS MISSING.',
    subtext: 'Free. No credit card. Takes 3 minutes.',
    caption: `Most runners have a plan. Very few have the right plan.\n\nRunDot analyzes your current fitness, your goal race, and your schedule to build training that actually works for you specifically.\n\nNot a generic 18-week plan. Yours.\n\n✅ Free to start\n✅ No credit card required\n✅ Adapts every week\n\n📲 Get your free plan at rundot.com`,
    hashtags: '#RunDot #PersonalizedTraining #RunningApp #MarathonTraining #FreeRunningPlan #TrainSmart',
    directorNote: 'Mountain backdrop with confident runner closing the month strong. Pure conversion post. The simplicity of the CTA (free, no CC, 3 minutes) removes every objection. Pin this to the profile or run as an ad.',
    imagePath: './assets/rundot/mockup_rd-missing.png',
  },

  // ─────────────────────────────────────────────────────────────
  // TRIDOT — WEEK 1: SCIENCE & SECRETS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'td-finish',
    brand: 'TriDot', pillar: 'Prove It', week: 'Week 1',
    title: 'This Is What Smart Training Looks Like',
    sourcePhoto: '26 Finish.jpeg — TriDot athlete at IRONMAN Waco finish line',
    headline: 'THIS IS WHAT SMART TRAINING LOOKS LIKE.',
    subtext: '140.6 miles. Zero guesswork.',
    caption: `He didn't just finish an IRONMAN. He executed it perfectly, every watt, every split, every mile exactly where it needed to be.\n\nThat's what training smarter looks like. No junk miles. No guessing. Just data-driven preparation that shows up on race day.\n\n👇 What's YOUR A-race goal this year? Drop it below.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #IRONMAN #IMWaco #TriathlonTraining #SmartTraining #Triathlete #140Point6 #TrainSmart',
    directorNote: 'TriDot kit visible at the finish line. Your single strongest Prove It asset. This post alone could run as a paid ad. Crop to square, headline in bottom third.',
    imagePath: './assets/tridot/mockup_td-finish.png',
  },
  {
    id: 'td-cta',
    brand: 'TriDot', pillar: 'CTA', week: 'Week 1',
    title: 'Your Race Plan Is Waiting',
    sourcePhoto: 'GWUG6497.jpeg — Female athlete in TriDot swim cap + ROKA wetsuit',
    headline: 'YOUR RACE PLAN IS WAITING.',
    subtext: 'AI-optimized triathlon training. Free to start.',
    caption: `She's not guessing her way to the start line. Her swim, bike, and run pacing is already dialed, because TriDot did the math.\n\nYour free training plan is one tap away. Built for YOUR fitness. YOUR goal race. YOUR life.\n\n3 minutes to get yours.\n\n📲 Get your free plan at tridot.com`,
    hashtags: '#TriDot #TriathlonTraining #OpenWaterSwim #ROKAwetsuit #Triathlete #TrainWithPurpose #SwimBikeRun',
    directorNote: 'TriDot branding on the swim cap is brand placement gold. Confident pre-race pose with open water behind is aspirational CTA energy. Pair with Stories swipe-up.',
    imagePath: './assets/tridot/mockup_td-cta.png',
  },
  {
    id: 'td-community',
    brand: 'TriDot', pillar: 'Engage', week: 'Week 1',
    title: 'The Tribe Is Out There',
    sourcePhoto: 'P1000353.JPG — TriDot athlete leading race pack in Utah canyon',
    headline: 'THE TRIBE IS OUT THERE.',
    subtext: 'Tag someone who trains like this.',
    caption: `You know that feeling when you look around at mile 20 and realize you're exactly where your training said you'd be?\n\nThat's the TriDot difference. And the people running beside you? They might be your next training partners.\n\n📍 St. George, Utah. Who have YOU spotted in a TriDot kit lately? Tag them 👇`,
    hashtags: '#TriDot #TriathlonCommunity #IRONMANStGeorge #TeamTriDot #TriathlonFamily #RaceDay #TheTribe',
    directorNote: 'TriDot kit visible center frame, athlete pointing at camera creates direct connection. High engagement potential. Maximize community tags. Consider making this a recurring format.',
    imagePath: './assets/tridot/mockup_td-community.png',
  },
  {
    id: 'td-bike',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 1',
    title: 'Every Watt Optimized',
    sourcePhoto: 'Bike 4.jpg — Motion-blur TT athlete on rolling hills',
    headline: 'EVERY WATT. EVERY SECOND. OPTIMIZED.',
    subtext: 'TriDot calculates your optimal bike pacing so you crush the run.',
    caption: `Most triathletes blow up on the run because they biked too hard.\n\nTriDot's Optimized Training calculates your exact target power for every ride, building the aerobic base that means you still have legs at mile 20 of the marathon.\n\n📊 Swipe to see how TriDot bike training differs from generic plans.\n\nThe difference is significant.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #TriathlonTraining #BikePower #FTPtest #ZonedTraining #IronmanTraining #TrainWithData',
    directorNote: 'Motion blur communicates speed and precision perfectly. The red bike against green hills is visually stunning. Use this as carousel slide 1 with data content on slides 2-5.',
    imagePath: './assets/tridot/mockup_td-bike.png',
  },
  {
    id: 'td-swim',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 1',
    title: 'Swim. Bike. Run. Smarter.',
    sourcePhoto: 'Swim 2.jpg — Open water sunrise swimmer',
    headline: 'SWIM SMARTER. BIKE FASTER. RUN STRONGER.',
    subtext: 'AI-personalized training for all 3. Free trial.',
    caption: `Most training plans treat all three disciplines the same. TriDot doesn't.\n\nYour swim plan is different from your training partner's. Your bike zones are yours alone. Your run progression is calculated for YOUR aerobic threshold.\n\nOne platform. Three sports. Completely personalized.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #SwimBikeRun #OpenWaterSwimming #TriathlonTraining #IRONMAN #PersonalizedTraining',
    directorNote: 'Open water sunrise shot is cinematic and emotional. The lone swimmer in golden light embodies "smarter, not just harder." Strong brand awareness post. Pin to profile.',
    imagePath: './assets/tridot/mockup_td-swim.png',
  },
  {
    id: 'td-swim1',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 1',
    title: 'Your Swim Is Costing You Minutes',
    sourcePhoto: 'Swim 1.jpg — Female swimmer mid-stroke, pool, underwater angle',
    headline: 'YOUR SWIM IS COSTING YOU MINUTES.',
    subtext: 'The fix starts in your training plan.',
    caption: `For most age-group triathletes, the swim is the least-trained leg and the one most likely to blow up race day pacing.\n\n🧠 What TriDot data shows:\n- Athletes who overtrain swim volume vs. intensity lose significant time on the bike and run\n- Targeted stroke-rate and threshold work outperforms pure yardage\n- Swim efficiency improvements carry directly to lower total race times\n\nYour swim isn't a warmup. Train it like it matters.\n\n📲 See what your training is missing. Get your free plan at tridot.com`,
    hashtags: '#TriDot #SwimTraining #TriathlonSwim #OpenWaterSwim #SwimBikeRun #IronmanTraining',
    directorNote: 'Clean underwater pool shot with dramatic light. The problem-first hook on the headline stops anyone who has ever struggled in open water. Save-worthy educational post.',
    imagePath: './assets/tridot/mockup_td-swim1.png',
  },
  {
    id: 'td-duo-bike',
    brand: 'TriDot', pillar: 'Engage', week: 'Week 1',
    title: 'Nobody Gets Fast Alone',
    sourcePhoto: 'Bike 1.jpg — Two cyclists on coastal highway',
    headline: 'NOBODY GETS FAST ALONE.',
    subtext: 'Tag your training partner.',
    caption: `Some PRs start in the draft.\n\nTag the person who pushes your watts up on the group ride, who calls you out when your pacing goes sideways, and who shows up on Saturday mornings when it's cold and dark.\n\nThey might need to know they're making a difference.\n\n👇 Tag your training partner below. We're featuring the best pairs this week.\n\n#TriDot #TriathlonCommunity`,
    hashtags: '#TriDot #TriathlonCommunity #TrainingPartner #CyclingLife #SwimBikeRun #TriathlonLife',
    directorNote: 'Two cyclists on coastal highway is aspirational endurance imagery. The tag mechanic drives organic reach. Coastal setting is universal appeal for triathlon audience.',
    imagePath: './assets/tridot/mockup_td-duo-bike.png',
  },

  // ─────────────────────────────────────────────────────────────
  // TRIDOT — WEEK 2: PROVE IT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'td-stroke',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 2',
    title: 'Stroke Rate. Distance. Efficiency.',
    sourcePhoto: 'Swim 3.jpg — Overhead pool swimmer, butterfly stroke, blue water',
    headline: 'STROKE RATE. DISTANCE. EFFICIENCY.',
    subtext: 'TriDot tracks all three. Automatically.',
    caption: `Most triathletes pick one swim metric to obsess over. TriDot looks at all three together, because they tell a more complete story.\n\n🔵 Stroke rate too high = losing distance per stroke\n🔵 Distance per stroke too high = often losing stroke rate and cadence\n🔵 Swim efficiency = the balance between both\n\nYour TriDot swim plan optimizes all three metrics based on your current baseline. Not some theoretical ideal. Yours.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #SwimTraining #StrokeRate #SwimEfficiency #TriathlonSwim #SwimBikeRun',
    directorNote: 'Overhead butterfly shot is visually striking and unique in swim content. Three-metric breakdown swipe is strong carousel content. Post on Swim-focused Tuesday or Wednesday.',
    imagePath: './assets/tridot/mockup_td-stroke.png',
  },
  {
    id: 'td-redrock',
    brand: 'TriDot', pillar: 'Engage', week: 'Week 2',
    title: 'Open Road. No Limits.',
    sourcePhoto: 'Bike 2.jpg — Female cyclist on open road, Utah red rock canyon',
    headline: 'OPEN ROAD. NO LIMITS.',
    subtext: 'Your best ride is still ahead.',
    caption: `There's a moment on the bike when the miles stop feeling like work and start feeling like flying.\n\nIt doesn't happen by accident. It happens when your training has prepared your body exactly for that moment.\n\n📍 Moab, Utah. Where's your favorite stretch of road?\n\nDrop it below. We're building the ultimate TriDot training destinations list. 👇`,
    hashtags: '#TriDot #CyclingLife #Moab #TriathlonTraining #OpenRoad #SwimBikeRun #BikeLife',
    directorNote: 'Red rock canyon backdrop is stunning and drives location engagement. The comment-bait question creates a living thread of destinations. One of the most shareable images in the library.',
    imagePath: './assets/tridot/mockup_td-redrock.png',
  },
  {
    id: 'td-watt',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 2',
    title: 'Every Watt Has a Reason',
    sourcePhoto: '1 Bike.jpeg — Cyclist checking power meter, mountain backdrop',
    headline: 'EVERY WATT HAS A REASON.',
    subtext: 'Stop guessing. Start racing.',
    caption: `Most cyclists look at their power numbers after the ride. TriDot athletes look at their target before it.\n\nThe difference is enormous.\n\nRiding to a precise power prescription means:\n✅ You actually hit the intended training stress\n✅ You don't burn matches you need for the run\n✅ Your data improves so your next prescription is more accurate\n\nGuessing your effort level is like trying to bake without measuring. You might get lucky. Or you might waste two hours.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #PowerTraining #CyclingData #TriathlonTraining #BikePower #SwimBikeRun',
    directorNote: 'Cyclist checking the power meter is the most authentic "data-driven training" image in the library. The mountain backdrop adds aspiration. Perfect educational pairing.',
    imagePath: './assets/tridot/mockup_td-watt.png',
  },
  {
    id: 'td-underwater',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 2',
    title: 'Feel the Water. Master Your Swim.',
    sourcePhoto: 'Swim 4.jpg — Swimmer side-angle underwater, blue pool',
    headline: 'FEEL THE WATER. MASTER YOUR SWIM.',
    subtext: 'Your technique is part of your plan.',
    caption: `Elite swimmers talk about "feel for the water," that sense of connection where every stroke catches and pulls cleanly.\n\nIt's not a gift. It's a skill built through deliberate technical practice.\n\nTriDot swim sessions aren't just yardage prescriptions. They include stroke-specific drills calibrated to YOUR current technique gaps.\n\nBecause fast swimming starts with smart swimming.\n\n📲 See what your swim training is missing. Get your free plan at tridot.com`,
    hashtags: '#TriDot #SwimTechnique #OpenWaterSwim #TriathlonSwim #SwimDrills #SwimBikeRun',
    directorNote: 'Side underwater angle shows full stroke mechanics. Pairs perfectly with technique-focused educational content. The blue water aesthetic is clean and shareable.',
    imagePath: './assets/tridot/mockup_td-underwater.png',
  },
  {
    id: 'td-ttrocks',
    brand: 'TriDot', pillar: 'Prove It', week: 'Week 2',
    title: '3.2x More Likely to Hit Your Goal',
    sourcePhoto: 'Bike 3.jpg — Male TT cyclist on open road, red rock backdrop',
    headline: '3.2X MORE LIKELY TO HIT YOUR GOAL.',
    subtext: 'When you follow the data.',
    caption: `We pulled the numbers from 10,000 TriDot training files.\n\nAthletes who follow their TriDot prescriptions exactly are 3.2x more likely to hit their A-race goal time compared to athletes who frequently modify their workouts.\n\nThis isn't a coincidence. It's what happens when you trust a system built on more than 100,000 athlete data points.\n\n📲 See what your training is missing. Get your free plan at tridot.com`,
    hashtags: '#TriDot #NTSTraining #TriathlonData #TrainByScience #IronmanTraining #SwimBikeRun',
    directorNote: 'TT position on open road with red rock backdrop is peak triathlon aesthetics. The stat is the entire story. Works as a standalone single image or carousel slide 1 with full data breakdown.',
    imagePath: './assets/tridot/mockup_td-ttrocks.png',
  },

  // ─────────────────────────────────────────────────────────────
  // TRIDOT — WEEK 3: HOT TAKES & HARD TRUTHS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'td-dive',
    brand: 'TriDot', pillar: 'CTA', week: 'Week 3',
    title: 'Race Ready Starts Here',
    sourcePhoto: 'Swim 5.jpg — Swimmer with red cap diving off blocks, dramatic angle',
    headline: 'RACE READY STARTS HERE.',
    subtext: '3 minutes to your free tri plan.',
    caption: `Race day confidence isn't an attitude. It's a preparation outcome.\n\nWhen you've trained with precision, you show up knowing your swim pace, your target watts, your run splits. You're not hoping. You're executing.\n\nTriDot builds that confidence, one prescribed session at a time.\n\nFree to start. Personalized from minute one.\n\n📲 Get your free plan at tridot.com`,
    hashtags: '#TriDot #TriathlonTraining #RaceReady #SwimStart #SwimBikeRun #IronmanTraining',
    directorNote: 'Explosive dive shot with dramatic red cap is high-energy scroll-stopping. The contrast between the power of the image and the "3 minutes" ease of starting is intentional.',
    imagePath: './assets/tridot/mockup_td-dive.png',
  },
  {
    id: 'td-bike5',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 3',
    title: 'The Data Behind Your Best Ride',
    sourcePhoto: 'Bike 5.jpg — TT cyclist on open road with mountain backdrop, arid landscape',
    headline: 'THE DATA BEHIND YOUR BEST RIDE.',
    subtext: 'Already built into your plan.',
    caption: `Your best ride isn't a lucky day.\n\nIt's the result of correct training stress accumulated over weeks, precise tapering, and an execution plan built on real data.\n\n📊 TriDot knows:\n- Your current FTP and power zones\n- How your power output changes with fatigue over long rides\n- Your optimal pacing strategy for YOUR race distance\n\nEvery ride has a purpose. Every watt is tracked. Your best ride is being built right now.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #CyclingData #BikePower #TriathlonTraining #FTP #SwimBikeRun',
    directorNote: 'Desert road with mountain backdrop is cinematic and aspirational. The "already built into your plan" message is powerful reassurance for hesitant prospects.',
    imagePath: './assets/tridot/mockup_td-bike5.png',
  },
  {
    id: 'td-openroad',
    brand: 'TriDot', pillar: 'Engage', week: 'Week 3',
    title: 'Just You and the Road',
    sourcePhoto: 'Bike 6.jpg — Solo TT cyclist on open highway, dramatic mountain sky',
    headline: 'JUST YOU AND THE ROAD.',
    subtext: 'Race it like you trained it.',
    caption: `There's a purity to long rides that no other training captures.\n\nNo splits to chase. No group dynamics. Just you, your watts, and the miles ahead.\n\nThat solitude is also your greatest testing ground. Can you hold your pacing when no one's watching? Can you trust your training when the road feels endless?\n\nThat's the athlete TriDot builds.\n\n📍 Drop your longest solo ride and where it happened. 👇`,
    hashtags: '#TriDot #SoloRide #TriathlonLife #CyclingLife #Ironman #SwimBikeRun #LongRide',
    directorNote: 'Tiny cyclist on vast open road creates scale and solitude. The drop location CTA generates community engagement. One of the most visually dramatic images in the library.',
    imagePath: './assets/tridot/mockup_td-openroad.png',
  },
  {
    id: 'td-pinkbike',
    brand: 'TriDot', pillar: 'CTA', week: 'Week 3',
    title: 'What Happens After You Hit Your Goal?',
    sourcePhoto: 'Bike 8.jpg — Cyclist in pink/red kit on mountain road',
    headline: 'WHAT HAPPENS AFTER YOU HIT YOUR GOAL?',
    subtext: 'TriDot sets the next one.',
    caption: `You trained for 6 months. You hit your goal race. You crossed the finish line.\n\nNow what?\n\nFor most athletes, this is where the plateau starts. The training plan ends and the guesswork returns.\n\nTriDot athletes don't stop at the finish line. Your plan recalibrates based on your race performance and sets up the next training block automatically.\n\nThe goal isn't one race. It's a career of them.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #TriathlonTraining #RaceRecovery #NextGoal #SwimBikeRun #IronmanLife',
    directorNote: 'Mountain road cyclist is aspirational and forward-moving. The post-achievement letdown is a real pain point that this addresses directly. Strong for retaining current athletes and converting post-race prospects.',
    imagePath: './assets/tridot/mockup_td-pinkbike.png',
  },

  // ─────────────────────────────────────────────────────────────
  // TRIDOT — WEEK 4: WHAT ARE YOU WAITING FOR?
  // ─────────────────────────────────────────────────────────────
  {
    id: 'td-mtbike',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 4',
    title: 'Terrain Changes. Training Adapts.',
    sourcePhoto: 'Bike 9.jpg — Female mountain biker in scenic mountain trail',
    headline: 'TERRAIN CHANGES. TRAINING ADAPTS.',
    subtext: 'Your plan evolves with every session.',
    caption: `Your training environment is a variable, not a constant.\n\nHilly terrain. Sea-level altitude. Summer heat. Travel weeks. Life.\n\nGeneric training plans assume a perfect world. TriDot is built for the one you actually live in.\n\nEvery session feeds data back into your plan. Every week is a recalibration. The plan you run on day 90 is smarter than the one you started with.\n\n📲 See what your training is missing. Get your free plan at tridot.com`,
    hashtags: '#TriDot #AdaptiveTraining #TriathlonTraining #MountainBike #SwimBikeRun #TrainSmart',
    directorNote: 'Female mountain biker in dramatic terrain shows TriDot works across ALL cycling conditions. The adaptive training message pairs perfectly. Excellent for reaching non-road cycling triathletes.',
    imagePath: './assets/tridot/mockup_td-mtbike.png',
  },
  {
    id: 'td-landscape',
    brand: 'TriDot', pillar: 'CTA', week: 'Week 4',
    title: 'Your Next Finish Line Starts Here',
    sourcePhoto: 'Landscape 2.jpg — Empty road toward snow-capped mountains, dusk',
    headline: 'YOUR NEXT FINISH LINE STARTS HERE.',
    subtext: 'Free. Personalized. Proven.',
    caption: `Every IRONMAN finish line started on a road like this.\n\nBefore the training plan. Before the base miles. Before the first early morning swim.\n\nIt started with a decision to train smarter than everyone else.\n\nTriDot gives every athlete, regardless of experience level, access to the same optimization that Kona qualifiers use.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #IronmanTraining #TriathlonLife #KonaQualifier #SwimBikeRun #FreeTrialMonday',
    directorNote: 'Empty road toward mountains is aspirational, quiet, and powerful. The journey metaphor carries perfectly. Month-closing CTA post. Pin to profile or use as a paid conversion ad.',
    imagePath: './assets/tridot/mockup_td-landscape.png',
  },
  {
    id: 'td-bike4v2',
    brand: 'TriDot', pillar: 'Educate', week: 'Week 4',
    title: 'Overtrain the Bike. Walk the Run.',
    sourcePhoto: 'Bike 4.jpg — Motion-blur TT athlete on rolling hills',
    headline: 'OVERTRAIN THE BIKE. WALK THE RUN.',
    subtext: 'TriDot balances all three disciplines.',
    caption: `We see it in the data constantly.\n\nAthletes logging 12+ hours a week on the bike, then wondering why they're walking by mile 6 of the run.\n\nTriathlon is a run that starts with a swim and a bike. The athletes who break through treat it that way.\n\n📊 TriDot automatically balances your swim, bike, and run training load based on your current fitness across all three disciplines.\n\n🔥 What's your current weekly swim/bike/run hour split? Drop it below. We'll give you honest feedback. 👇`,
    hashtags: '#TriDot #TriathlonTraining #BikeRunBalance #IronmanTraining #SwimBikeRun #TriathlonDebate',
    directorNote: 'Motion blur bike shot with fresh headline creates a very different energy from the original bike post. The comment bait question drives high engagement. Reply to every comment within 2 hours.',
    imagePath: './assets/tridot/mockup_td-bike4v2.png',
  },
  {
    id: 'td-kona',
    brand: 'TriDot', pillar: 'Prove It', week: 'Week 4',
    title: 'This Is What Kona Prep Looks Like',
    sourcePhoto: 'P1000353.JPG — TriDot athlete leading race pack in Utah canyon',
    headline: 'THIS IS WHAT KONA PREP LOOKS LIKE.',
    subtext: 'Every session. Every watt. Every meter.',
    caption: `The athletes who get to Kona don't train harder than everyone else.\n\nThey train more specifically.\n\nEvery session targets a specific adaptation. Every watt is measured against a precise prescription. Every swim, bike, and run feeds data into a system that makes the next session better.\n\nKona isn't a dream. It's a data problem that TriDot solves.\n\n📲 Get your free TriDot plan at tridot.com`,
    hashtags: '#TriDot #KonaQualifier #IronmanWorldChampionship #TriathlonTraining #SwimBikeRun #IronmanLife',
    directorNote: 'TriDot athlete leading the pack in dramatic canyon setting is your strongest aspirational image. Closing the month with a Kona hook is the right emotional bookend. This post should be pinned.',
    imagePath: './assets/tridot/mockup_td-kona.png',
  },
];

const PILLAR_COLORS: Record<Pillar, string> = {
  'Engage':   'badge-warning',
  'Educate':  'badge-info',
  'Prove It': 'badge-success',
  'CTA':      'badge-secondary',
};

const PILLAR_EMOJI: Record<Pillar, string> = {
  'Engage':   '🔥',
  'Educate':  '🧠',
  'Prove It': '🏆',
  'CTA':      '📲',
};

interface Props {
  brandFilter: Brand | 'Both';
  pillarFilter: Pillar | 'All';
}

export const MockupGallery: React.FC<Props> = ({ brandFilter, pillarFilter }) => {
  const [selected, setSelected]   = useState<Mockup | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [imageError, setImageError]   = useState<Record<string, boolean>>({});

  const filtered = MOCKUPS.filter(m => {
    if (brandFilter !== 'Both' && m.brand !== brandFilter) return false;
    if (pillarFilter !== 'All' && m.pillar !== pillarFilter) return false;
    return true;
  });

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1800);
    });
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Grid */}
      <div className={`overflow-y-auto p-3 ${selected ? 'w-64 min-w-[16rem]' : 'w-full'}`}>
        <div className={`grid gap-3 ${selected ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {filtered.map(m => (
            <div
              key={m.id}
              onClick={() => setSelected(m)}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${selected?.id === m.id ? 'border-primary shadow-lg' : 'border-base-300 hover:border-primary/50'}`}
            >
              <div className="aspect-square bg-base-300">
                {!imageError[m.id] ? (
                  <img
                    src={m.imagePath}
                    alt={m.title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(prev => ({ ...prev, [m.id]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-base-200">
                    <Image size={32} className="opacity-30" />
                  </div>
                )}
              </div>
              <div className="p-2 bg-base-200 flex items-center justify-between gap-1">
                <div>
                  <p className="text-xs font-semibold text-base-content truncate leading-tight">{m.title}</p>
                  <p className="text-[10px] text-base-content/50 leading-tight">{m.week}</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <img
                    src={m.brand === 'RunDot' ? './assets/rundot-logo.svg' : './assets/tridot-logo.svg'}
                    alt={m.brand}
                    className="h-3.5 opacity-80"
                  />
                  <span className={`badge badge-xs ${PILLAR_COLORS[m.pillar]}`}>
                    {PILLAR_EMOJI[m.pillar]}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 flex items-center justify-center h-40 text-base-content/40 text-sm">
              No mockups match your filters.
            </div>
          )}
        </div>
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="flex-1 overflow-y-auto border-l border-base-300 bg-base-100 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 sticky top-0 bg-base-100 z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center bg-gray-900 rounded px-2 py-0.5">
                  <img
                    src={selected.brand === 'RunDot' ? './assets/rundot-logo.svg' : './assets/tridot-logo.svg'}
                    alt={selected.brand}
                    style={{ height: '14px', width: 'auto', display: 'block' }}
                  />
                </span>
                <span className={`badge badge-sm ${PILLAR_COLORS[selected.pillar]}`}>
                  {PILLAR_EMOJI[selected.pillar]} {selected.pillar}
                </span>
                <span className="text-xs text-base-content/40">{selected.week}</span>
              </div>
              <h2 className="text-sm font-bold text-base-content mt-1">{selected.title}</h2>
            </div>
            <button onClick={() => setSelected(null)} className="btn btn-ghost btn-xs btn-square">
              <X size={14} />
            </button>
          </div>

          {/* Full image */}
          <div className="p-3">
            <div className="rounded-xl overflow-hidden border border-base-300 aspect-square bg-base-300">
              {!imageError[selected.id] ? (
                <img
                  src={selected.imagePath}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(prev => ({ ...prev, [selected.id]: true }))}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-base-200">
                  <Image size={40} className="opacity-20" />
                  <span className="text-xs text-base-content/40">Image loading...</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="px-3 pb-4 space-y-3">
            {/* Source photo note */}
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-base-200">
              <Camera size={13} className="mt-0.5 opacity-60 shrink-0" />
              <p className="text-xs text-base-content/70"><span className="font-semibold">Source:</span> {selected.sourcePhoto}</p>
            </div>

            {/* Headline / subtext */}
            <div className="p-2.5 rounded-lg bg-base-200 space-y-1">
              <p className="text-xs font-bold text-base-content">{selected.headline}</p>
              <p className="text-xs text-base-content/60">{selected.subtext}</p>
            </div>

            {/* Caption */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-base-content/60 uppercase tracking-wide">Caption</span>
                <button onClick={() => copy(selected.caption, 'caption')} className="btn btn-ghost btn-xs gap-1">
                  {copiedField === 'caption' ? <Check size={11} className="text-success" /> : <Copy size={11} />}
                  {copiedField === 'caption' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-base-content/80 whitespace-pre-line bg-base-200 rounded-lg p-2.5 leading-relaxed">
                {selected.caption}
              </p>
            </div>

            {/* Hashtags */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold text-base-content/60 uppercase tracking-wide">Hashtags</span>
                <button onClick={() => copy(selected.hashtags, 'hashtags')} className="btn btn-ghost btn-xs gap-1">
                  {copiedField === 'hashtags' ? <Check size={11} className="text-success" /> : <Copy size={11} />}
                  {copiedField === 'hashtags' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-primary/80 bg-base-200 rounded-lg p-2.5 leading-relaxed">
                {selected.hashtags}
              </p>
            </div>

            {/* Director's Note */}
            <div>
              <span className="text-xs font-semibold text-base-content/60 uppercase tracking-wide block mb-1.5">Director's Note</span>
              <p className="text-xs text-base-content/70 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2.5 leading-relaxed italic">
                {selected.directorNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
