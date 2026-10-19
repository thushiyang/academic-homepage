const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const progressBar = document.querySelector(".scroll-progress span");
const year = document.querySelector("#year");
const metaDescription = document.querySelector('meta[name="description"]');
const languageButtons = document.querySelectorAll("[data-language]");

const translations = {
  en: {
    brandAria: "Of Love and Family home",
    brandTitle: "Of Love and Family",
    brandSubtitle: "Personal Chronicle",
    menu: "Menu",
    navAria: "Main navigation",
    languageAria: "Language",
    researchHome: "Research Homepage",
    researchHomeAria: "Return to the research homepage",
    navPrologue: "Prologue",
    navChapters: "Chronicle",
    navEncounters: "Encounters",
    navTrials: "Trials",
    navHomecoming: "Homecoming",
    navNotes: "Memories",
    navGallery: "Azeroth",
    navAbout: "About",
    heroEyebrow: "A Personal Chronicle & Acknowledgement",
    heroTitle: "Of\u00a0\u00a0Love and Family",
    heroSubtitle: "爱与家庭",
    heroIntro: "Beyond research, I am shaped by family and friendship, by journeys taken and people encountered along the way. This is a slowly growing personal chronicle of how love gives every journey a place to return to.",
    heroCastAria: "A small fellowship of recurring characters",
    cast1Alt: "Male lead, a fuller-faced short-haired human paladin in golden armor",
    cast2Alt: "Female lead, a front-facing human priest illuminated by holy light",
    cast3Alt: "A human baby from a warm fantasy world",
    cast3ComingAria: "Looking Forward",
    cast3Coming: "Looking Forward",
    cast4Alt: "A centered blue-eyed Ragdoll kitten tilting its head gently to the left",
    heroVolumesAria: "Choose between the real-world and virtual-world collections",
    volumeRealLabel: "Volume I · Real World",
    volumeRealTitle: "Of Love and Family",
    volumeVirtualLabel: "Volume II · Virtual World",
    volumeVirtualTitle: "Another World: Azeroth",
    heroFigureAria: "A bright and quiet street in Stormwind",
    heroCaption: "Every journey begins by remembering the way home.",
    chaptersTitle: "Chapters for Family and Time",
    chaptersIntro: "The river of time flows into the sea, and at last we go our separate ways. No harbor is a place to stay forever. In my memory, there is a crossroads bright with phoenix blossoms—and there are the friends I cherish most.",
    chapter1Title: "Where Home Begins",
    chapter1Body: "A chapter about family and life shared together—preserving the voices and moments worth remembering.",
    chapter1Status: "Awaiting stories",
    chapter2Title: "Those Who Walk Beside Us",
    chapter2Body: "About friends, mentors, colleagues, and the encounters that make the world feel wider.",
    chapter2Status: "Awaiting consent",
    chapter3Title: "Notes by the Hearth",
    chapter3Body: "Reflections on choice, responsibility, distance, and belonging after the day’s research is done.",
    chapter3Status: "Private drafts",
    trialsTitle: "Face the Shadows. Protect What Matters.",
    trialsBody: "Life does not always follow an easy road. The storms we weather together teach us responsibility, give us courage, and remind us why the way home matters.",
    trialsNote: "Like a journey through Azeroth, research brings both opportunity and challenge, with each unanswered question opening another path forward.",
    trial1Title: "Guardianship",
    trial1Body: "Decide what deserves\nprotection; then choose\nhow you will act.",
    trial2Title: "Fellowship",
    trial2Body: "Hard roads are rarely\ncompleted by walking\nentirely alone.",
    trial3Title: "Endurance",
    trial3Body: "Let patience and planning\nmake room for reflection\nover sudden impulse.",
    homecomingAlt: "An Azeroth National Geographic parchment map with illustrated sailing routes across the Great Sea",
    homecomingCaption: "Azeroth National Geographic",
    homecomingTitle: "Travel Far. Return with Clarity.",
    homecomingBody: "City gates, cathedral bells, and the light of morning are only the story’s outer shell. Homecoming begins after difficulty, when we choose to return to those we love and understand companionship, responsibility, and everyday life anew.",
    homecomingQuote: "“Returning” does not end the adventure. It brings the courage gained along the road back into the world we cherish.",
    homecomingLink: "Continue to the Gallery",
    notesEyebrow: "Photo Galleries",
    notesTitle: "Journeys in Frames",
    notesIntro: "A growing collection arranged by theme. Swipe, drag, or use the arrows to move through each gallery.",
    notesWeddingTitle: "Love Actually",
    notesWeddingIntro: "Family gatherings, wedding day, anniversaries, and the small traditions that continue to make life together feel like home.",
    notesResearchTitle: "Stand by Me",
    notesResearchIntro: "Remembering those who walk beside me through study and research, while treasuring the warm encounters of everyday life. These people and moments bring new discoveries, fresh perspectives, warmth, and laughter to the journey.",
    notesCatsTitle: "Small Paws at Home",
    notesCatsIntro: "Quiet mornings, curious looks, and the small daily adventures of our Ragdoll kitten.",
    photoCategory1: "Family, Marriage & Anniversaries",
    photoCategory2: "Research Journey & Friends",
    photoCategory4: "Fur Babies · Cats Understand You",
    photoCategory1Aria: "Family, marriage, and anniversary photographs",
    photoCategory2Aria: "Research, friends, and everyday life photographs",
    photoCategory4Aria: "Fur babies and cats who understand you photographs",
    photoTabsAria: "Photo gallery categories",
    galleryPrev: "Previous photographs",
    galleryNext: "Next photographs",
    galleryOverviewOpen: "All Photos",
    galleryOverviewKicker: "Photo Library",
    galleryOverviewClose: "Close all photos",
    galleryLightboxOpen: "Open large view",
    galleryLightboxClose: "Close large photo",
    galleryLightboxPrevious: "Previous photo",
    galleryLightboxNext: "Next photo",
    photo1Title: "Wedding Day",
    photo2Title: "The Ring Exchange",
    photo3Title: "New Year Reunion",
    familyTsinghuaPhotoTitle: "Family at Tsinghua",
    anniversaryRomePhoto1Title: "Two Years · Roman Holiday",
    anniversaryRomePhoto2Title: "Colosseum",
    anniversaryRomePhoto3Title: "Spanish Steps",
    anniversaryRomePhoto4Title: "Ancient Temple",
    anniversaryRomePhoto5Title: "Mouth of Truth",
    anniversaryRomePhoto6Title: "Trevi Fountain",
    anniversaryRomePhoto7Title: "Anniversary Toast",
    anniversaryRomePhoto8Title: "Hand in Hand",
    anniversaryRomePhoto9Title: "Vittoriano",
    anniversaryConanPhoto1Title: "Three Years · Detective Conan",
    anniversaryConanPhoto2Title: "Universal Studios",
    anniversaryConanPhoto3Title: "Marina Bay",
    anniversaryConanPhoto4Title: "Marina Bay Sands",
    anniversaryConanPhoto5Title: "Spectra Light Show",
    anniversaryConanPhoto6Title: "Esplanade Waterfront",
    anniversaryConanPhoto7Title: "A Clue in Hand",
    anniversaryConanPhoto8Title: "Haji Lane",
    anniversaryConanPhoto9Title: "Merlion Skyline",
    anniversaryThronesPhoto1Title: "Four Years · Ice and Fire",
    anniversaryThronesPhoto2Title: "Streets of Braavos",
    anniversaryThronesPhoto3Title: "The Great Sept",
    anniversaryThronesPhoto4Title: "A Dramatic Fall",
    anniversaryThronesPhoto5Title: "Royal Wedding Steps",
    anniversaryThronesPhoto6Title: "Duel Reenactment",
    anniversaryThronesPhoto7Title: "Dragonstone Coast",
    anniversaryThronesPhoto8Title: "Dragonstone Steps",
    anniversaryThronesPhoto9Title: "Dragonstone Sunset",
    photo4Title: "Questions & Challenges",
    photo5Title: "Fieldwork & Routes",
    photo6Title: "Colleagues & Discovery",
    photo7Title: "Beside the Hearth",
    photo8Title: "Days with Friends",
    catPhoto1Title: "Boxed Up",
    catPhoto2Title: "Game Night",
    catPhoto3Title: "Street Cat Hello",
    catPhoto4Title: "Floor Companion",
    catPhoto5Title: "Nap by the Table",
    catPhoto6Title: "Winter Street Friend",
    catPhoto7Title: "Sofa Lookout",
    catPhoto8Title: "Bedtime Sprawl",
    catPhoto9Title: "Warm Embrace",
    catPhoto10Title: "Curled by the Pillow",
    catPhoto11Title: "Stretching Across the Bed",
    catPhoto12Title: "Dinner Is Ready",
    catPhoto13Title: "Bedside Company",
    catPhoto14Title: "Night Street Cats",
    catPhoto15Title: "Biscuit Inspector",
    catPhoto16Title: "Belly Up",
    catPhoto17Title: "A Very Big Hug",
    catPhoto18Title: "Choosing Dinner",
    catPhoto19Title: "Garden Friend",
    catPhoto20Title: "Window-Sill Nap",
    catPhoto21Title: "Another Cat to Hold",
    catPhoto22Title: "Research Supervisor",
    catPhoto23Title: "Too Much Love",
    catPhoto24Title: "Toy Corner Guard",
    catPhoto25Title: "Watching the Game",
    catPhoto26Title: "Reaching for the Screen",
    catPhoto27Title: "Bedtime Together",
    catPhoto28Title: "Pillow-Side Morning",
    catPhoto29Title: "High Perch",
    catPhoto30Title: "Little Cat in Motion",
    catPhoto31Title: "Tucked In",
    catPhoto32Title: "Doorway Companion",
    catPhoto33Title: "Paw to the Lips",
    catPhoto34Title: "No More Kisses",
    catPhoto35Title: "Shoulder Passenger",
    catPhoto36Title: "Close Enough",
    catPhoto37Title: "Late-Night Desk Mate",
    catPhoto38Title: "Office Inspector",
    catPhoto39Title: "Cat Grass",
    catPhoto40Title: "Street-Side Breakfast",
    catPhoto41Title: "Office Visitor",
    catPhoto42Title: "Sharing a Snack",
    catPhoto43Title: "A Family in the Sun",
    catPhoto44Title: "Kitten Selfie",
    catPhoto45Title: "Laptop Nap",
    catPhoto46Title: "Through the Window",
    researchPhoto1Title: "Graduation Together",
    researchPhoto2Title: "Seek Truth from Facts",
    researchPhoto3Title: "A Family Moment",
    researchPhoto4Title: "The Classroom Years",
    researchPhoto5Title: "Toward the Next Chapter",
    researchPhoto6Title: "Classmates and Mentors",
    researchPhoto7Title: "Among the Willows",
    researchPhoto8Title: "One More Portrait",
    researchPhoto9Title: "At Graduation",
    researchPhoto10Title: "A Wider Horizon",
    researchPhoto11Title: "Thinking Ahead",
    researchPhoto12Title: "Graduation on the Bench",
    researchPhoto13Title: "Research Companions Reunited",
    researchPhoto14Title: "Research Gathering",
    friendsPhoto1Title: "Friends by the Lake",
    friendsPhoto2Title: "Friends in the City",
    friendsPhoto3Title: "Graduate Admissions Exam",
    friendsPhoto4Title: "A Gentle Encounter",
    friendsPhoto5Title: "Around the Little One",
    friendsPhotoLittleOneGrownTitle: "The Little One, All Grown Up",
    friendsPhoto6Title: "Campus Reunion",
    friendsPhoto7Title: "Behind the Lens",
    friendsPhoto8Title: "Friends Beneath the Motto",
    friendsPhoto9Title: "Wedding Toast",
    friendsPhoto10Title: "Beside the Bride",
    friendsPhoto11Title: "Friends at Graduation",
    friendsPhoto12Title: "Table Tennis Break",
    friendsPhoto13Title: "Student Awards Day",
    friendsPhoto14Title: "Student Association Team",
    friendsPhoto15Title: "On the Way to the Wedding",
    friendsPhoto16Title: "Wedding Room Laughter",
    friendsPhoto17Title: "A Quiet Wait",
    friendsPhoto18Title: "Quietly, All This Time",
    friendsPhoto19Title: "Evening on the Court",
    friendsPhoto20Title: "First Day at Tianjin University",
    friendsPhoto21Title: "Mountain Outing",
    friendsPhoto22Title: "A Little One's Curiosity",
    friendsPhoto23Title: "Sharing a Bite",
    friendsPhoto25Title: "The Little One, Growing Up",
    friendsPhoto24Title: "Research Through the Lens",
    friendsPhoto26Title: "Tsinghua Marathon Team",
    friendsPhoto27Title: "After the Finish",
    friendsPhoto28Title: "Friends at Xianglu Peak",
    friendsPhoto29Title: "Plateau Field Station",
    friendsPhoto30Title: "Badminton Reunion",
    friendsPhoto31Title: "Mentors and Colleagues",
    friendsPhoto32Title: "New Voices on Stage",
    friendsPhoto33Title: "Beside the Exhibition",
    friendsPhoto34Title: "Working Through the Details",
    friendsPhoto35Title: "An Unlikely Friend",
    friendsPhoto36Title: "Together on the Court",
    friendsPhoto37Title: "Research Side by Side",
    friendsPhoto38Title: "Beside the Carrier",
    friendsPhoto39Title: "By the Goal",
    friendsPhoto40Title: "Chasing the Ball",
    friendsPhoto41Title: "Basketball in Motion",
    friendsPhoto42Title: "Friends Beneath the Trees",
    friendsPhoto43Title: "Setting Out on the Lake",
    friendsPhoto44Title: "New Year Gathering",
    friendsPhoto45Title: "A Mentor's Smile",
    friendsPhoto46Title: "Drawing Game",
    friendsPhoto47Title: "A Visit with a Mentor",
    friendsPhoto48Title: "On the Way to the Picnic",
    friendsPhoto49Title: "Study Room at Night",
    friendsPhoto50Title: "Sharing a Taste",
    friendsPhoto51Title: "A Warm Meeting",
    friendsPhoto52Title: "A Lighthearted Presentation",
    friendsPhoto53Title: "Friends at the Event",
    friendsPhoto55Title: "Tea Break Together",
    friendsPhoto56Title: "Volunteer Team",
    friendsPhoto57Title: "A Shared Evening",
    friendsPhoto58Title: "Badminton Afterglow",
    friendsPhoto59Title: "A Quiet Portrait",
    friendsPhoto60Title: "Friends at the Banquet",
    friendsPhoto61Title: "A Rest Between Sessions",
    friendsPhoto62Title: "Photographer on the Track",
    friendsPhoto63Title: "Graduation Day Smile",
    friendsPhoto64Title: "Tying the Scarf",
    friendsPhoto65Title: "Supper with a Friend",
    friendsPhoto66Title: "Graduation at Huadi Road",
    friendsPhoto67Title: "With a Mentor on Campus",
    friendsPhoto68Title: "Cat on My Lap",
    friendsPhoto69Title: "Calling the Shot",
    friendsPhoto70Title: "Three Friends on the Grassland",
    friendsPhoto71Title: "Graduation Passing By",
    friendsPhoto72Title: "Climbing the Dune",
    friendsPhoto73Title: "A Drink with Friends",
    friendsPhoto74Title: "An Evening Gathering",
    friendsPhoto75Title: "Graduation on the Steps",
    friendsPhoto76Title: "Classroom Wit",
    friendsPhoto77Title: "Beside the Movie Poster",
    friendsPhoto78Title: "Believe in Yourself",
    friendsPhoto79Title: "A Kiss by the Fire",
    friendsPhoto80Title: "Finding Each Other at Night",
    friendsPhoto81Title: "A Toast by the Sea",
    friendsPhoto82Title: "A Night Around the Table",
    friendsPhoto83Title: "After the Last Round",
    friendsPhoto84Title: "Beside the Horse",
    friendsPhoto85Title: "Friends Before the Dunes",
    friendsPhoto86Title: "Together Under the Desert Sky",
    friendsPhoto87Title: "Resting on the Sand",
    friendsPhoto88Title: "Two Friends in the Dunes",
    friendsPhoto89Title: "Across the Dune Sea",
    friendsPhoto90Title: "A Desert Ride",
    friendsPhoto91Title: "Graduation by the Water",
    friendsPhoto92Title: "A Quiet Pause After Graduation",
    friendsPhoto93Title: "A Handstand on the Track",
    friendsPhoto94Title: "A Portrait Beneath the Trees",
    friendsPhoto95Title: "A Playful Graduation Moment",
    friendsPhoto96Title: "A Photograph Within a Photograph",
    friendsPhoto97Title: "Graduation Beneath the Statue",
    friendsPhoto98Title: "By the Ivy-Covered Gate",
    friendsPhoto99Title: "Climbing Together",
    friendsPhoto101Title: "Beside the School Monument",
    friendsPhoto102Title: "Quietly by the Lake",
    friendsPhoto103Title: "Focused at Work",
    friendsPhoto104Title: "Looking Back on Graduation Day",
    friendsPhoto105Title: "A Wedding Day Portrait",
    friendsPhoto106Title: "A Reunion Selfie",
    friendsPhoto107Title: "Portrait by the Window",
    friendsPhoto108Title: "Meeting at AGU25",
    friendsPhoto109Title: "Coffee in New Orleans",
    friendsPhoto110Title: "Road Trip Companions",
    friendsPhoto111Title: "Behind the Camera",
    friendsPhoto112Title: "By the Mississippi",
    friendsPhoto113Title: "A Cheerful Reunion",
    friendsPhoto114Title: "Friends Around the Table",
    friendsPhoto115Title: "A Visit at the Office",
    friendsPhoto116Title: "Leaving a Message",
    friendsPhoto117Title: "Gifts at the Door",
    friendsPhoto118Title: "Supper at Sunset",
    friendsPhoto119Title: "Resting Above the Valley",
    friendsPhoto120Title: "At the AGU25 Poster",
    friendsPhoto121Title: "Catching Up Together",
    friendsPhoto122Title: "Sharing the Research",
    friendsPhoto123Title: "Preparing the Feast",
    friendsPhoto124Title: "Along the Green Corridor",
    friendsPhoto125Title: "A Playful Stop",
    friendsPhoto126Title: "Riding Through the Night",
    friendsPhoto127Title: "Friends in the Tropical Garden",
    friendsPhoto128Title: "A Magical Banquet",
    friendsPhoto129Title: "Night at Marina Bay",
    note1Alt: "A warmly lit tavern beside a Stormwind canal",
    note1Title: "The Story Behind a Photograph",
    note1Body: "A photograph, its time and place, the permission of those pictured, and a brief text will be added after review.",
    note2Alt: "A different view across Stormwind beneath a bright sky",
    note2Title: "People Met Along the Way",
    note2Body: "Recording the understanding an encounter brings, without disclosing personal information that need not be public.",
    note3Alt: "Stormwind Harbor, its ships and city walls beneath a clear sky",
    note3Title: "A Day Beyond Research",
    note3Body: "Games, reading, walks, and time with family are also part of a researcher’s complete world.",
    galleryTitle: "An Unframed Gallery",
    galleryIntro: "A visual atlas of Azeroth—its cities, roads, wilderness, and distant horizons—framing the stories and memories of another world.",
    ngaEyebrow: "Another World · Azeroth",
    ngaTitle: "My Name Is Macro",
    ngaIntro: "Six class journals on macros—an archive of the characters, battles, and memories that shaped my other life in Azeroth.",
    ngaPlatform: "Hall of Azeroth Forum",
    ngaCollectionAria: "My Name Is Macro: six class journals on NGA",
    classWarlock: "Warlock",
    talentWarlock: "Demonology",
    classPriest: "Priest",
    talentPriest: "Shadow",
    classMage: "Mage",
    talentMage: "Fire–Frost Hybrid",
    classPaladin: "Paladin",
    talentPaladin: "Spell-Power Hybrid",
    classRogue: "Rogue",
    talentRogue: "Combat",
    classWarrior: "Warrior",
    talentWarrior: "Fury",
    classDetailPreview: "Character archive preview",
    classDetailKicker: "Character journal",
    classDetailOpen: "Read the original NGA journal",
    readWarlockJournal: "Read the Warlock Journal",
    readPriestJournal: "Read the Priest Journal",
    readMageJournal: "Read the Mage Journal",
    readPaladinJournal: "Read the Paladin Journal",
    readRogueJournal: "Read the Rogue Journal",
    readWarriorJournal: "Read the Warrior Journal",
    classDetailClose: "Close character profile",
    officialReference: "Class description adapted from Blizzard's",
    officialWarlockProfile: "official Warlock profile",
    officialPriestProfile: "official Priest profile",
    officialMageProfile: "official Mage profile",
    officialPaladinProfile: "official Paladin profile",
    officialRogueProfile: "official Rogue profile",
    officialWarriorProfile: "official Warrior profile",
    detailWarlockBody: "Warlocks turn forbidden power into opportunity, weakening enemies from afar while demonic servants fight at their side. Demonology centers on commanding those demons and transforming the force of that army into devastating power.",
    detailWarlockAlt: "A Demonology Warlock commanding fel-green power beside a towering demon",
    detailWarlockSceneAlt: "A player character facing two wrecked red-sailed ships from a small tropical island",
    detailWarlockSceneCaption: "A field note from Azeroth: an encounter beyond the familiar route.",
    detailPriestBody: "Priests call on spiritual power to heal the wounded, shield their companions, and confront enemies through both Light and Shadow. The Shadow path turns that duality inward, bending minds and sustaining pressure through lingering magic.",
    detailPriestAlt: "A winged Priest channeling radiant magic beside an open spellbook",
    detailPriestSceneAlt: "Two mounted players riding together through the purple streets of Darnassus",
    detailPriestSceneCaption: "A quiet passage through Darnassus, where Light and Shadow share the same road.",
    detailMageBody: "Mages turn disciplined study into control over the battlefield. Fire delivers fast, explosive pressure; Frost slows and confines opponents before shattering them. This hybrid journal follows the rhythm between sudden combustion and deliberate control.",
    detailMageAlt: "A Mage standing between surging Fire and Frost magic",
    detailMageSceneAlt: "A Mage and Water Elemental facing the Dark Portal beneath a fiery sky in the Blasted Lands",
    detailMageSceneCaption: "Before the Dark Portal: Fire for momentum, Frost for control.",
    detailPaladinBody: "Paladins carry the Light into the front line, combining plate armor, healing, protection, and holy power to defend companions or judge their enemies. This spell-power hybrid journal follows the balance between support and offense—knowing when to restore, when to shield, and when to strike.",
    detailPaladinAlt: "Four Alliance Paladins in radiant gold armor standing before Stormwind beneath holy light",
    detailPaladinSceneAlt: "A red-and-gold Paladin standing beneath the Stormwind gate statue and Alliance banners",
    detailPaladinSceneCaption: "At Stormwind's gate: faith, discipline, and the Light held in readiness.",
    detailRogueBody: "Rogues open combat from the shadows, build precise attack sequences, and turn accumulated advantage into decisive finishing blows. This Combat journal is about tempo, target selection, interrupts, and knowing exactly when to disappear.",
    detailRogueAlt: "A red-and-black armored Rogue emerging from the shadow of a second figure",
    detailRogueSceneAlt: "A small Rogue running toward the monumental gates of Stormwind",
    detailRogueSceneCaption: "Through the gates of Stormwind: move quietly, choose the moment, then strike.",
    detailWarriorBody: "Warriors meet danger head-on, relying on heavy armor, practiced weapon skills, and the momentum of close combat. This Fury journal follows relentless attacks, rapid reactions, and the discipline required to keep a clear plan amid the rush of battle.",
    detailWarriorAlt: "An Alliance Warrior wielding a lightning-charged greatsword beneath storm clouds and blue lion banners",
    detailWarriorSceneAlt: "A Warrior standing beneath the Stormwind gate statue with a green-glowing sword",
    detailWarriorSceneCaption: "At Stormwind's gate: a lone Warrior returns beneath the watch of stone and steel.",
    gallery1Title: "The Mage Quarter",
    gallery2Title: "Harbor and Horizon",
    gallery3Title: "A Port Beyond the City",
    gallery4Title: "Ships on the Wild Shore",
    aboutTitle: "Know the Researcher—and the World the Researcher Cherishes",
    aboutBody1: "An academic homepage presents research questions, publications, and projects. Of Love and Family preserves the quieter foundations beneath that work: the support of family, the perspective offered by friends, and the ways life experience shapes judgment and responsibility.",
    aboutBody2: "This space brings together two parts of my life: a real-world chronicle of family, friendship, and journeys, and the remarkable opportunities and challenges encountered while traveling through Azeroth.",
    privacyTitle: "With Gratitude",
    privacy1: "To family, for giving every journey a place to return to",
    privacy2: "To friends, for walking beside me through uncertain roads",
    privacy3: "To mentors and colleagues, for trust, patience, and shared purpose",
    privacy4: "To the worlds—real and imagined—that continue to inspire curiosity",
    footerTitle: "Of Love and Family",
    footerSubtitle: "爱与家庭",
    footerLegal: "Visual references: World of Warcraft® and related material.",
    footerPrototype: "A personal chronicle",
    footerTop: "Back to the beginning"
  },
  zh: {
    brandAria: "爱与家庭首页",
    brandTitle: "爱与家庭",
    brandSubtitle: "Personal Chronicle",
    menu: "目录",
    navAria: "主要目录",
    languageAria: "语言",
    researchHome: "研究主页",
    researchHomeAria: "返回研究主页",
    navPrologue: "序章",
    navChapters: "家庭纪事",
    navEncounters: "旅途相逢",
    navTrials: "试炼",
    navHomecoming: "归途",
    navNotes: "回忆",
    navGallery: "艾泽拉斯",
    navAbout: "关于",
    heroEyebrow: "私人纪事与致谢",
    heroTitle: "爱与家庭",
    heroSubtitle: "Of Love and Family",
    heroIntro: "在研究之外，我也被家人、朋友、旅途，以及那些短暂却重要的相遇塑造。这里是一册缓慢生长的个人纪事，记录爱如何让漫长的道路拥有归处。",
    heroCastAria: "四位会在纪事中反复出现的同行者",
    cast1Alt: "男主角，脸型圆润、留短发并身披金色铠甲的人类圣骑士",
    cast2Alt: "女主角，沐浴圣光的正面人类女牧师",
    cast3Alt: "温暖奇幻世界中的人类小宝宝",
    cast3ComingAria: "期待",
    cast3Coming: "期待",
    cast4Alt: "正面居中、向画面左侧轻微歪头的蓝眼布偶小猫咪",
    heroVolumesAria: "选择现实世界或虚拟世界作品",
    volumeRealLabel: "第一册 · 现实世界",
    volumeRealTitle: "爱与家庭",
    volumeVirtualLabel: "第二册 · 虚拟世界",
    volumeVirtualTitle: "另一个世界：艾泽拉斯",
    heroFigureAria: "阳光照耀下安静明亮的暴风城主街",
    heroCaption: "每一次远行，都从记得归途开始。",
    chaptersTitle: "写给家人与时间的章节",
    chaptersIntro: "时光的河入海流，终于我们分头走。没有哪个港口是永远的停留。脑海之中有一个凤凰花开的路口，有我最珍惜的朋友。",
    chapter1Title: "家的来处",
    chapter1Body: "记录家庭、成长与共同生活的章节，保存值得被记住的声音、习惯和片段。",
    chapter1Status: "等待故事",
    chapter2Title: "同行的人",
    chapter2Body: "关于朋友、师长、同事，以及旅途中让世界变得更宽广的相遇。",
    chapter2Status: "等待许可",
    chapter3Title: "炉边札记",
    chapter3Body: "当一天的研究结束后，写下关于选择、责任、远方和归属的思考。",
    chapter3Status: "私人草稿",
    trialsTitle: "迎着阴影，守住要守护的人",
    trialsBody: "人生的路并非总是平坦。那些一起面对风雨的时刻，让我们懂得责任，鼓起勇气，也更加明白归途为何珍贵。",
    trialsNote: "科研如同穿行于艾泽拉斯，机遇与挑战总会相伴；每一个尚未回答的问题，都可能开启新的道路。",
    trial1Title: "守护",
    trial1Body: "先确认什么值得被保护，\n再决定应当如何行动，\n然后把决定付诸实践。",
    trial2Title: "协作",
    trial2Body: "最艰难漫长的道路，\n很少能由一个人，\n完全独自走到终点。",
    trial3Title: "坚持",
    trial3Body: "让准备、耐心和复盘，\n取代一时冲动的选择，\n再作出更清醒的决定。",
    homecomingAlt: "艾泽拉斯国家地理羊皮卷地图，绘有横跨无尽之海的航线",
    homecomingCaption: "艾泽拉斯国家地理",
    homecomingTitle: "远行，也清醒地归来",
    homecomingBody: "城门、教堂钟声和清晨的光，只是故事的外壳。真正的归途，是在经历困难之后，仍愿意回到家人身边，重新理解陪伴、责任与日常生活。",
    homecomingQuote: "“归来”不是结束冒险，而是把旅途中获得的勇气，带回自己所珍惜的世界。",
    homecomingLink: "继续前往画廊",
    notesEyebrow: "分类画廊",
    notesTitle: "旅途影集",
    notesIntro: "按主题持续扩充的照片收藏。可滑动、拖动或使用箭头浏览每一组画廊。",
    notesWeddingTitle: "爱在日常",
    notesWeddingIntro: "记录家人团聚、婚礼、纪念日，以及让共同生活始终拥有归属感的日常仪式。",
    notesResearchTitle: "伴我同行",
    notesResearchIntro: "记录求学与科研路上的同行者，也珍藏日常生活中的温暖相遇。正是这些人和时刻，为旅途带来新的发现、不同的视角、温暖与欢笑。",
    notesCatsTitle: "家里的小脚印",
    notesCatsIntro: "记录安静的清晨、好奇的目光，以及布偶小猫咪每天的小小冒险。",
    photoCategory1: "家庭、婚姻与纪念日",
    photoCategory2: "科研与朋友",
    photoCategory4: "毛孩子 · 猫咪懂你",
    photoCategory1Aria: "家庭、婚姻与纪念日照片",
    photoCategory2Aria: "科研、朋友与日常生活照片",
    photoCategory4Aria: "毛孩子与懂你的猫咪照片",
    photoTabsAria: "照片画廊类别",
    galleryPrev: "上一组照片",
    galleryNext: "下一组照片",
    galleryOverviewOpen: "全部照片",
    galleryOverviewKicker: "照片图库",
    galleryOverviewClose: "关闭全部照片",
    galleryLightboxOpen: "放大查看",
    galleryLightboxClose: "关闭大图",
    galleryLightboxPrevious: "上一张照片",
    galleryLightboxNext: "下一张照片",
    photo1Title: "婚礼当天",
    photo2Title: "交换戒指",
    photo3Title: "新春团聚",
    familyTsinghuaPhotoTitle: "清华园全家福",
    anniversaryRomePhoto1Title: "两周年 · 罗马假日",
    anniversaryRomePhoto2Title: "罗马斗兽场",
    anniversaryRomePhoto3Title: "西班牙阶梯",
    anniversaryRomePhoto4Title: "古神庙前",
    anniversaryRomePhoto5Title: "真理之口",
    anniversaryRomePhoto6Title: "特莱维喷泉",
    anniversaryRomePhoto7Title: "周年举杯",
    anniversaryRomePhoto8Title: "牵手同行",
    anniversaryRomePhoto9Title: "祖国祭坛",
    anniversaryConanPhoto1Title: "三周年 · 名侦探柯南",
    anniversaryConanPhoto2Title: "环球影城",
    anniversaryConanPhoto3Title: "滨海湾畔",
    anniversaryConanPhoto4Title: "滨海湾金沙",
    anniversaryConanPhoto5Title: "光影水舞",
    anniversaryConanPhoto6Title: "滨海艺术中心",
    anniversaryConanPhoto7Title: "手中的线索",
    anniversaryConanPhoto8Title: "哈芝巷",
    anniversaryConanPhoto9Title: "鱼尾狮天际线",
    anniversaryThronesPhoto1Title: "四周年 · 冰与火之歌",
    anniversaryThronesPhoto2Title: "布拉佛斯街巷",
    anniversaryThronesPhoto3Title: "贝勒大圣堂",
    anniversaryThronesPhoto4Title: "戏剧性倒下",
    anniversaryThronesPhoto5Title: "王室婚礼阶梯",
    anniversaryThronesPhoto6Title: "决斗重现",
    anniversaryThronesPhoto7Title: "龙石岛海岸",
    anniversaryThronesPhoto8Title: "龙石岛阶梯",
    anniversaryThronesPhoto9Title: "龙石岛落日",
    photo4Title: "问题与挑战",
    photo5Title: "野外工作与路线",
    photo6Title: "同事与发现",
    photo7Title: "围炉而坐",
    photo8Title: "与朋友相聚",
    catPhoto1Title: "纸箱里的小猫",
    catPhoto2Title: "游戏之夜",
    catPhoto3Title: "街角相遇",
    catPhoto4Title: "地板上的陪伴",
    catPhoto5Title: "桌边小憩",
    catPhoto6Title: "冬日街猫",
    catPhoto7Title: "沙发上的瞭望",
    catPhoto8Title: "被窝里的自在",
    catPhoto9Title: "温暖的拥抱",
    catPhoto10Title: "枕边蜷睡",
    catPhoto11Title: "伸展的一天",
    catPhoto12Title: "开饭啦",
    catPhoto13Title: "床边陪伴",
    catPhoto14Title: "夜色里的猫咪",
    catPhoto15Title: "点心检查员",
    catPhoto16Title: "四脚朝天",
    catPhoto17Title: "大大的拥抱",
    catPhoto18Title: "挑选晚餐",
    catPhoto19Title: "花园里的朋友",
    catPhoto20Title: "窗台午睡",
    catPhoto21Title: "又一位猫朋友",
    catPhoto22Title: "科研监督员",
    catPhoto23Title: "爱得有点用力",
    catPhoto24Title: "玩具角守卫",
    catPhoto25Title: "一起看游戏",
    catPhoto26Title: "想加入游戏",
    catPhoto27Title: "一起赖床",
    catPhoto28Title: "枕边清晨",
    catPhoto29Title: "高处巡视",
    catPhoto30Title: "猫咪动态",
    catPhoto31Title: "盖好被子",
    catPhoto32Title: "门边陪伴",
    catPhoto33Title: "爪爪封口",
    catPhoto34Title: "不许再亲",
    catPhoto35Title: "肩头乘客",
    catPhoto36Title: "凑得很近",
    catPhoto37Title: "深夜桌伴",
    catPhoto38Title: "办公室巡视",
    catPhoto39Title: "猫草初长",
    catPhoto40Title: "街边早餐",
    catPhoto41Title: "办公室访客",
    catPhoto42Title: "分享零食",
    catPhoto43Title: "阳光下的一家",
    catPhoto44Title: "小猫合影",
    catPhoto45Title: "笔记本上的午睡",
    catPhoto46Title: "窗后的相遇",
    researchPhoto1Title: "毕业同行",
    researchPhoto2Title: "实事求是",
    researchPhoto3Title: "温柔的家庭时刻",
    researchPhoto4Title: "岁月如梭",
    researchPhoto5Title: "走向下一章",
    researchPhoto6Title: "同窗与师长",
    researchPhoto7Title: "柳荫之下",
    researchPhoto8Title: "再留一张合影",
    researchPhoto9Title: "毕业留影",
    researchPhoto10Title: "更广阔的前路",
    researchPhoto11Title: "静思下一步",
    researchPhoto12Title: "毕业长椅留影",
    researchPhoto13Title: "科研伙伴重聚",
    researchPhoto14Title: "科研聚会",
    friendsPhoto1Title: "湖畔好友",
    friendsPhoto2Title: "城市里的朋友",
    friendsPhoto3Title: "研招考试相逢",
    friendsPhoto4Title: "温柔的相遇",
    friendsPhoto5Title: "围着小朋友",
    friendsPhotoLittleOneGrownTitle: "小朋友长大了",
    friendsPhoto6Title: "校园重逢",
    friendsPhoto7Title: "镜头之间",
    friendsPhoto8Title: "校训前的朋友",
    friendsPhoto9Title: "婚礼举杯",
    friendsPhoto10Title: "陪在新娘身边",
    friendsPhoto11Title: "毕业时的朋友",
    friendsPhoto12Title: "乒乓球时光",
    friendsPhoto13Title: "科技颁奖日",
    friendsPhoto14Title: "科协伙伴",
    friendsPhoto15Title: "去接亲",
    friendsPhoto16Title: "婚房里的笑声",
    friendsPhoto17Title: "安静等候",
    friendsPhoto18Title: "一直很安静",
    friendsPhoto19Title: "球场傍晚",
    friendsPhoto20Title: "初识天大",
    friendsPhoto21Title: "山间同行",
    friendsPhoto22Title: "小朋友的好奇",
    friendsPhoto23Title: "分享一口",
    friendsPhoto25Title: "小朋友长大了",
    friendsPhoto24Title: "镜头中的科研",
    friendsPhoto26Title: "清华校园马拉松",
    friendsPhoto27Title: "完赛之后",
    friendsPhoto28Title: "香炉峰同行",
    friendsPhoto29Title: "高原试验站",
    friendsPhoto30Title: "羽毛球重聚",
    friendsPhoto31Title: "师友同仁",
    friendsPhoto32Title: "新声登台",
    friendsPhoto33Title: "展览留影",
    friendsPhoto34Title: "一起推敲细节",
    friendsPhoto35Title: "特别的朋友",
    friendsPhoto36Title: "球场合影",
    friendsPhoto37Title: "并肩科研",
    friendsPhoto38Title: "舰旁同行",
    friendsPhoto39Title: "门前一刻",
    friendsPhoto40Title: "追球",
    friendsPhoto41Title: "运球时刻",
    friendsPhoto42Title: "林间好友",
    friendsPhoto43Title: "泛舟出发",
    friendsPhoto44Title: "新年联欢",
    friendsPhoto45Title: "师长笑颜",
    friendsPhoto46Title: "你画我猜",
    friendsPhoto47Title: "拜访师长",
    friendsPhoto48Title: "去往野餐",
    friendsPhoto49Title: "夜读时光",
    friendsPhoto50Title: "分享一串",
    friendsPhoto51Title: "温暖相逢",
    friendsPhoto52Title: "趣味分享",
    friendsPhoto53Title: "活动同行",
    friendsPhoto55Title: "茶歇相伴",
    friendsPhoto56Title: "志愿同行",
    friendsPhoto57Title: "相聚一晚",
    friendsPhoto58Title: "羽毛球场留影",
    friendsPhoto59Title: "静静一刻",
    friendsPhoto60Title: "宴会上的朋友",
    friendsPhoto61Title: "会场小憩",
    friendsPhoto62Title: "跑道上的摄影师",
    friendsPhoto63Title: "毕业日微笑",
    friendsPhoto64Title: "系上围巾",
    friendsPhoto65Title: "与朋友夜宵",
    friendsPhoto66Title: "花堤路毕业留影",
    friendsPhoto67Title: "校园师生合影",
    friendsPhoto68Title: "膝上猫咪",
    friendsPhoto69Title: "跑道边的指挥",
    friendsPhoto70Title: "草原上的三人行",
    friendsPhoto71Title: "毕业季擦肩",
    friendsPhoto72Title: "一起攀沙丘",
    friendsPhoto73Title: "朋友小聚",
    friendsPhoto74Title: "夜晚相聚",
    friendsPhoto75Title: "台阶上的毕业合影",
    friendsPhoto76Title: "课堂趣味一刻",
    friendsPhoto77Title: "海报旁的留影",
    friendsPhoto78Title: "相信自己",
    friendsPhoto79Title: "篝火旁的吻",
    friendsPhoto80Title: "夜色中相遇",
    friendsPhoto81Title: "海边举杯",
    friendsPhoto82Title: "围桌夜话",
    friendsPhoto83Title: "最后一轮之后",
    friendsPhoto84Title: "马儿身旁",
    friendsPhoto85Title: "沙丘前的伙伴",
    friendsPhoto86Title: "沙海晴空下",
    friendsPhoto87Title: "沙地小憩",
    friendsPhoto88Title: "沙丘双人行",
    friendsPhoto89Title: "穿越沙海",
    friendsPhoto90Title: "沙海驰行",
    friendsPhoto91Title: "水畔毕业季",
    friendsPhoto92Title: "毕业后的片刻",
    friendsPhoto93Title: "跑道倒立",
    friendsPhoto94Title: "树影中的她",
    friendsPhoto95Title: "毕业季玩笑",
    friendsPhoto96Title: "照片里的旧时光",
    friendsPhoto97Title: "雕像前的毕业合影",
    friendsPhoto98Title: "藤蔓门前",
    friendsPhoto99Title: "一起向上攀",
    friendsPhoto101Title: "校碑前留影",
    friendsPhoto102Title: "湖畔静坐",
    friendsPhoto103Title: "专注工作",
    friendsPhoto104Title: "毕业日回望",
    friendsPhoto105Title: "婚礼日合影",
    friendsPhoto106Title: "老友相聚",
    friendsPhoto107Title: "窗边留影",
    friendsPhoto108Title: "AGU25相逢",
    friendsPhoto109Title: "新奥尔良咖啡时光",
    friendsPhoto110Title: "同行路上",
    friendsPhoto111Title: "镜头前后",
    friendsPhoto112Title: "密西西比河畔",
    friendsPhoto113Title: "欢笑重逢",
    friendsPhoto114Title: "围桌相聚",
    friendsPhoto115Title: "办公室相聚",
    friendsPhoto116Title: "留下一句话",
    friendsPhoto117Title: "带着礼物登门",
    friendsPhoto118Title: "夕阳下的晚餐",
    friendsPhoto119Title: "山谷之上小憩",
    friendsPhoto120Title: "AGU25海报前",
    friendsPhoto121Title: "相谈甚欢",
    friendsPhoto122Title: "科研分享",
    friendsPhoto123Title: "准备盛宴",
    friendsPhoto124Title: "绿廊同行",
    friendsPhoto125Title: "古炮旁的玩笑",
    friendsPhoto126Title: "夜游途中",
    friendsPhoto127Title: "热带花园同行",
    friendsPhoto128Title: "魔法宴会",
    friendsPhoto129Title: "滨海湾之夜",
    note1Alt: "暴风城运河旁温暖灯光中的旅店",
    note1Title: "一张照片背后的故事",
    note1Body: "照片、时间、人物许可与一段简短文字将在内容审核后加入。",
    note2Alt: "晴朗天空下从另一角度望向暴风城",
    note2Title: "旅途中遇见的人",
    note2Body: "记录相遇带来的理解，而不是公开不必要的个人信息。",
    note3Alt: "晴朗天空下的暴风城港口、船只与城墙",
    note3Title: "研究之外的一天",
    note3Body: "生活中的游戏、阅读、散步和家庭时光，也构成研究者的完整世界。",
    galleryTitle: "尚未装裱的画廊",
    galleryIntro: "一册关于艾泽拉斯的视觉图志：城市、道路、荒野与远方的地平线，共同映照另一个世界里的故事与记忆。",
    ngaEyebrow: "另一个世界 · 艾泽拉斯大陆",
    ngaTitle: "我的名字叫宏",
    ngaIntro: "六篇关于魔兽世界的职业手记，保存我在艾泽拉斯大陆经历的战斗与回忆。",
    ngaPlatform: "NGA · 艾泽拉斯议事厅",
    ngaCollectionAria: "我的名字叫宏：NGA 六职业作品集",
    classWarlock: "术士",
    talentWarlock: "恶魔学识",
    classPriest: "牧师",
    talentPriest: "暗影",
    classMage: "法师",
    talentMage: "冰火混合",
    classPaladin: "圣骑士",
    talentPaladin: "法伤混合",
    classRogue: "盗贼",
    talentRogue: "战斗",
    classWarrior: "战士",
    talentWarrior: "狂暴",
    classDetailPreview: "角色档案预览",
    classDetailKicker: "角色手记",
    classDetailOpen: "阅读 NGA 原帖",
    readWarlockJournal: "阅读术士手记",
    readPriestJournal: "阅读牧师手记",
    readMageJournal: "阅读法师手记",
    readPaladinJournal: "阅读圣骑士手记",
    readRogueJournal: "阅读盗贼手记",
    readWarriorJournal: "阅读战士手记",
    classDetailClose: "关闭角色档案",
    officialReference: "职业描述参考暴雪",
    officialWarlockProfile: "术士官方介绍",
    officialPriestProfile: "牧师官方介绍",
    officialMageProfile: "法师官方介绍",
    officialPaladinProfile: "圣骑士官方介绍",
    officialRogueProfile: "盗贼官方介绍",
    officialWarriorProfile: "战士官方介绍",
    detailWarlockBody: "术士将禁忌力量化为机会，以黑暗法术从远处削弱敌人，并让恶魔仆从在身旁作战。恶魔学识专精以统御恶魔为核心，将整个恶魔军团的力量转化为毁灭性的攻势。",
    detailWarlockAlt: "一名恶魔学识术士在巨型恶魔身旁驾驭邪能",
    detailWarlockSceneAlt: "一名角色站在热带小岛上，面对两艘红帆破船",
    detailWarlockSceneCaption: "来自艾泽拉斯的现场札记：一次偏离熟悉路线的相遇。",
    detailPriestBody: "牧师以精神力量治疗伤者、守护同伴，也在圣光与暗影之间直面敌人。暗影之道将这种双重性引向内心，以心灵法术扰动意志，并用持续的暗影力量施加压力。",
    detailPriestAlt: "一名带有羽翼的牧师在展开的法术书旁引导圣光",
    detailPriestSceneAlt: "两名骑乘角色并肩穿过达纳苏斯紫色的街道",
    detailPriestSceneCaption: "穿行达纳苏斯：圣光与暗影共享同一条道路。",
    detailMageBody: "法师把严谨的研习转化为对战场的掌控：火焰带来迅速而猛烈的爆发，冰霜则迟滞并限制敌人，再将其击碎。这篇冰火混合手记记录的，正是瞬间燃烧与审慎控制之间的节奏。",
    detailMageAlt: "一名法师站在翻涌的火焰与冰霜魔法之间",
    detailMageSceneAlt: "一名法师与水元素在火红天空下望向诅咒之地的黑暗之门",
    detailMageSceneCaption: "黑暗之门前：以火焰推进，以冰霜掌控。",
    detailPaladinBody: "圣骑士将圣光带到前线，以板甲、治疗、防护与神圣力量守护同伴，也审判敌人。这篇法伤混合圣骑士手记记录支援与进攻之间的平衡：何时治疗，何时守护，又何时挥下武器。",
    detailPaladinAlt: "四名身披辉耀金甲的联盟圣骑士沐浴圣光，立于暴风城前",
    detailPaladinSceneAlt: "一名红金铠甲圣骑士站在暴风城大门雕像与联盟战旗下",
    detailPaladinSceneCaption: "暴风城大门之下：信念、纪律与圣光蓄势以待。",
    detailRogueBody: "盗贼从阴影中发起战斗，以精确的连续攻击积累优势，再用终结技作出决定性一击。这篇战斗盗贼手记关注节奏、目标选择、打断时机，以及何时重新隐入暗影。",
    detailRogueAlt: "一名红黑铠甲盗贼从另一道潜行者身影前现身",
    detailRogueSceneAlt: "一名小个子盗贼正跑向暴风城宏伟的城门",
    detailRogueSceneCaption: "穿过暴风城门：安静移动，等待时机，然后出手。",
    detailWarriorBody: "战士正面迎击危险，依靠重甲、娴熟的武器技艺与近身战斗积累攻势。这篇狂暴战士手记记录连续猛攻、快速反应，以及如何在战斗最激烈时仍保持清晰的行动计划。",
    detailWarriorAlt: "一名联盟战士在暴风云与蓝色雄狮战旗下手持雷电缠绕的巨剑",
    detailWarriorSceneAlt: "一名战士手持泛着绿光的剑，站在暴风城大门雕像下",
    detailWarriorSceneCaption: "暴风城大门之下：孤身归来的战士，在石像与铁甲的注视中驻足。",
    gallery1Title: "法师区",
    gallery2Title: "港口与地平线",
    gallery3Title: "城外的港湾",
    gallery4Title: "蛮荒海岸的船",
    aboutTitle: "认识研究者，也认识研究者所珍惜的世界",
    aboutBody1: "学术主页展示研究问题、论文和项目；《爱与家庭》则保存这些工作背后更安静的部分：家庭给予的支持、朋友带来的视野，以及人生经历如何塑造一个人的判断与责任感。",
    aboutBody2: "这里连接我生活中的两个世界：现实世界中关于家庭、友谊与旅途的纪事，以及艾泽拉斯旅途中的奇妙机遇与挑战。",
    privacyTitle: "致谢",
    privacy1: "感谢家人，让每一次远行都有归处",
    privacy2: "感谢朋友，在不确定的道路上与我同行",
    privacy3: "感谢导师与同事给予的信任、耐心和共同目标",
    privacy4: "感谢现实与想象中的世界，不断唤起好奇与热爱",
    footerTitle: "爱与家庭",
    footerSubtitle: "Of Love and Family",
    footerLegal: "素材来源：World of Warcraft® 及相关周边。",
    footerPrototype: "私人纪事",
    footerTop: "返回卷首"
  }
};

const setLanguage = (language) => {
  const lang = language === "zh" ? "zh" : "en";
  const copy = translations[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "爱与家庭 | Of Love and Family" : "Of Love and Family | 爱与家庭";
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      lang === "zh"
        ? "爱与家庭——关于家人、朋友、旅途，以及另一个世界的私人纪事。"
        : "Of Love and Family—a personal chronicle of family, friendship, journeys, and another life in Azeroth."
    );
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("love-and-family-language", lang);
  } catch (error) {
    // Language switching still works when browser storage is unavailable.
  }
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let initialLanguage = "en";
try {
  initialLanguage = localStorage.getItem("love-and-family-language") || "en";
} catch (error) {
  initialLanguage = "en";
}
setLanguage(initialLanguage);

const classProfileButtons = document.querySelectorAll("[data-class-profile]");
const classDetail = document.querySelector("#nga-class-detail");
const classDetailClose = classDetail?.querySelector(".nga-class-detail-close");
const classDetailImage = classDetail?.querySelector(".nga-class-detail-image");
const classDetailTitle = classDetail?.querySelector(".nga-class-detail-title");
const classDetailTalent = classDetail?.querySelector(".nga-class-detail-talent");
const classDetailBody = classDetail?.querySelector(".nga-class-detail-body");
const classDetailScene = classDetail?.querySelector(".nga-class-detail-scene");
const classDetailSceneImage = classDetail?.querySelector(".nga-class-detail-scene-image");
const classDetailAttribution = classDetail?.querySelector(".nga-class-detail-attribution");
const classDetailOfficial = classDetail?.querySelector(".nga-class-detail-official");
const classDetailSource = classDetail?.querySelector(".nga-class-detail-source");
const classDetailSourceLabel = classDetail?.querySelector(".nga-class-detail-source-label");
let activeClassProfile = null;
let classDetailHideTimer = null;

const closeClassDetail = (returnFocus = false) => {
  if (!classDetail || classDetail.hidden) return;
  const activeButton = activeClassProfile;
  classDetail.classList.remove("is-open");
  classProfileButtons.forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-expanded", "false");
  });
  activeClassProfile = null;
  document.body.classList.remove("class-profile-modal-open");
  window.clearTimeout(classDetailHideTimer);
  classDetailHideTimer = window.setTimeout(() => {
    classDetail.hidden = true;
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280);
  if (returnFocus) activeButton?.focus();
};

const openClassDetail = (button) => {
  if (!classDetail || !classDetailImage || !classDetailTitle || !classDetailTalent || !classDetailBody || !classDetailSource || !classDetailSourceLabel) return;
  const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  const copy = translations[language];
  const profile = button.dataset.classProfile;
  const isSameProfile = activeClassProfile === button && !classDetail.hidden;

  if (isSameProfile) {
    closeClassDetail(true);
    return;
  }

  window.clearTimeout(classDetailHideTimer);
  classDetail.hidden = false;
  document.body.classList.add("class-profile-modal-open");
  classDetail.dataset.activeClass = profile;
  const usesEditorialArt = Boolean(button.dataset.detailSrc);
  const sceneSrc = button.dataset.sceneSrc || "";
  const readKey = button.dataset.readKey || "classDetailOpen";
  classDetail.classList.toggle("has-editorial-art", usesEditorialArt);
  classDetailImage.src = button.dataset.detailSrc || button.dataset.symbolSrc;
  classDetailImage.dataset.i18nAlt = button.dataset.altKey;
  classDetailImage.alt = copy[button.dataset.altKey] || "";
  classDetailTitle.dataset.i18n = button.dataset.titleKey;
  classDetailTitle.textContent = copy[button.dataset.titleKey] || "";
  classDetailTalent.dataset.i18n = button.dataset.talentKey;
  classDetailTalent.textContent = copy[button.dataset.talentKey] || "";
  classDetailBody.dataset.i18n = button.dataset.bodyKey;
  classDetailBody.textContent = copy[button.dataset.bodyKey] || "";
  classDetailSource.href = button.dataset.sourceUrl;
  classDetailSourceLabel.dataset.i18n = readKey;
  classDetailSourceLabel.textContent = copy[readKey] || copy.classDetailOpen;

  if (classDetailScene && classDetailSceneImage) {
    classDetailScene.hidden = !sceneSrc;
    classDetailSceneImage.src = sceneSrc;
    classDetailSceneImage.dataset.i18nAlt = button.dataset.sceneAltKey || "";
    classDetailSceneImage.alt = copy[button.dataset.sceneAltKey] || "";
  }

  if (classDetailAttribution && classDetailOfficial) {
    const officialUrl = button.dataset.officialUrl || "";
    const officialKey = button.dataset.officialKey || "officialWarlockProfile";
    classDetailAttribution.hidden = !officialUrl;
    classDetailOfficial.href = officialUrl || "#";
    classDetailOfficial.dataset.i18n = officialKey;
    classDetailOfficial.textContent = copy[officialKey] || "";
  }

  classProfileButtons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-expanded", String(isActive));
  });
  activeClassProfile = button;

  window.requestAnimationFrame(() => {
    classDetail.classList.add("is-open");
    classDetailClose?.focus({ preventScroll: true });
  });
};

classProfileButtons.forEach((button) => {
  button.addEventListener("click", () => openClassDetail(button));
});

classDetailClose?.addEventListener("click", () => closeClassDetail(true));
classDetail?.addEventListener("click", (event) => {
  if (event.target === classDetail) closeClassDetail(true);
});
classDetail?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeClassDetail(true);
  if (event.key !== "Tab") return;
  const focusable = [...classDetail.querySelectorAll("button:not([disabled]), a[href]")]
    .filter((element) => element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

if (year) year.textContent = new Date().getFullYear();

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  if (progressBar) progressBar.style.width = `${progress * 100}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const photoOverviewDialog = document.querySelector("#photo-overview-dialog");
const photoOverviewTitle = photoOverviewDialog?.querySelector("[data-photo-overview-title]");
const photoOverviewCount = photoOverviewDialog?.querySelector("[data-photo-overview-count]");
const photoOverviewGrid = photoOverviewDialog?.querySelector("[data-photo-overview-grid]");
const photoOverviewClose = photoOverviewDialog?.querySelector("[data-photo-overview-close]");
let photoOverviewReturnFocus = null;

const closePhotoOverview = () => {
  if (!photoOverviewDialog?.open) return;
  photoOverviewDialog.close();
};

photoOverviewClose?.addEventListener("click", closePhotoOverview);
photoOverviewDialog?.addEventListener("click", (event) => {
  if (event.target === photoOverviewDialog) closePhotoOverview();
});
photoOverviewDialog?.addEventListener("close", () => {
  document.body.classList.remove("photo-overview-open");
  photoOverviewReturnFocus?.focus();
  photoOverviewReturnFocus = null;
});

const photoLightboxDialog = document.createElement("dialog");
photoLightboxDialog.className = "photo-lightbox-dialog";
photoLightboxDialog.innerHTML = `
  <div class="photo-lightbox-panel">
    <div class="photo-lightbox-stage">
      <img class="photo-lightbox-image" alt="" />
      <button class="photo-lightbox-nav photo-lightbox-prev" type="button" data-i18n-aria="galleryLightboxPrevious"><span aria-hidden="true">&#8249;</span></button>
      <button class="photo-lightbox-nav photo-lightbox-next" type="button" data-i18n-aria="galleryLightboxNext"><span aria-hidden="true">&#8250;</span></button>
    </div>
    <footer class="photo-lightbox-caption">
      <strong data-photo-lightbox-title></strong>
      <span data-photo-lightbox-count></span>
    </footer>
    <button class="photo-lightbox-close" type="button" data-i18n-aria="galleryLightboxClose"><span aria-hidden="true">&times;</span></button>
  </div>`;
document.body.appendChild(photoLightboxDialog);

const photoLightboxImage = photoLightboxDialog.querySelector(".photo-lightbox-image");
const photoLightboxTitle = photoLightboxDialog.querySelector("[data-photo-lightbox-title]");
const photoLightboxCount = photoLightboxDialog.querySelector("[data-photo-lightbox-count]");
const photoLightboxCloseButton = photoLightboxDialog.querySelector(".photo-lightbox-close");
const photoLightboxPreviousButton = photoLightboxDialog.querySelector(".photo-lightbox-prev");
const photoLightboxNextButton = photoLightboxDialog.querySelector(".photo-lightbox-next");
let photoLightboxSlides = [];
let photoLightboxIndex = 0;
let photoLightboxTrack = null;
let photoLightboxSlideScrollLeft = null;

const pageLanguage = () => document.documentElement.lang === "zh-CN" ? "zh" : "en";

const refreshPhotoLightboxLabels = () => {
  const copy = translations[pageLanguage()];
  photoLightboxCloseButton.setAttribute("aria-label", copy.galleryLightboxClose);
  photoLightboxPreviousButton.setAttribute("aria-label", copy.galleryLightboxPrevious);
  photoLightboxNextButton.setAttribute("aria-label", copy.galleryLightboxNext);
};

const renderPhotoLightbox = () => {
  const slide = photoLightboxSlides[photoLightboxIndex];
  const sourceImage = slide?.querySelector("img");
  if (!slide || !sourceImage) return;
  const title = slide.querySelector("figcaption strong")?.textContent?.trim() || sourceImage.alt || "";
  const number = slide.querySelector("figcaption span")?.textContent?.trim() || String(photoLightboxIndex + 1).padStart(2, "0");
  photoLightboxImage.src = sourceImage.currentSrc || sourceImage.getAttribute("src") || "";
  photoLightboxImage.alt = sourceImage.alt || title;
  photoLightboxTitle.textContent = title;
  photoLightboxCount.textContent = `${number} / ${photoLightboxSlides.length}`;
  photoLightboxPreviousButton.disabled = photoLightboxIndex <= 0;
  photoLightboxNextButton.disabled = photoLightboxIndex >= photoLightboxSlides.length - 1;
  photoLightboxDialog.setAttribute("aria-label", `${title} · ${number} / ${photoLightboxSlides.length}`);
};

const movePhotoLightbox = (direction) => {
  const nextIndex = Math.max(0, Math.min(photoLightboxSlides.length - 1, photoLightboxIndex + direction));
  if (nextIndex === photoLightboxIndex) return;
  photoLightboxIndex = nextIndex;
  renderPhotoLightbox();
};

const openPhotoLightbox = ({ slides, index, track, slideScrollLeft }) => {
  const slide = slides[index];
  if (!slide?.querySelector("img")) return;
  photoLightboxSlides = slides;
  photoLightboxIndex = index;
  photoLightboxTrack = track;
  photoLightboxSlideScrollLeft = slideScrollLeft;
  refreshPhotoLightboxLabels();
  renderPhotoLightbox();
  document.body.classList.add("photo-lightbox-open");
  photoLightboxDialog.showModal();
  photoLightboxCloseButton.focus({ preventScroll: true });
};

const closePhotoLightbox = () => {
  if (photoLightboxDialog.open) photoLightboxDialog.close();
};

photoLightboxCloseButton.addEventListener("click", closePhotoLightbox);
photoLightboxPreviousButton.addEventListener("click", () => movePhotoLightbox(-1));
photoLightboxNextButton.addEventListener("click", () => movePhotoLightbox(1));
photoLightboxDialog.addEventListener("click", (event) => {
  if (event.target === photoLightboxDialog) closePhotoLightbox();
});
photoLightboxDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePhotoLightbox(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    movePhotoLightbox(1);
  }
  if (event.key === "Home") {
    event.preventDefault();
    photoLightboxIndex = 0;
    renderPhotoLightbox();
  }
  if (event.key === "End") {
    event.preventDefault();
    photoLightboxIndex = Math.max(photoLightboxSlides.length - 1, 0);
    renderPhotoLightbox();
  }
});
photoLightboxDialog.addEventListener("close", () => {
  document.body.classList.remove("photo-lightbox-open");
  const currentSlide = photoLightboxSlides[photoLightboxIndex];
  if (currentSlide && photoLightboxTrack && photoLightboxSlideScrollLeft) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    photoLightboxTrack.scrollTo({ left: photoLightboxSlideScrollLeft(currentSlide), behavior: reduceMotion ? "auto" : "smooth" });
    currentSlide.focus({ preventScroll: true });
  }
  photoLightboxImage.removeAttribute("src");
  photoLightboxSlides = [];
  photoLightboxTrack = null;
  photoLightboxSlideScrollLeft = null;
});

let fixedScrollbarId = 0;
const createFixedGalleryScrollbar = (scroller, anchor) => {
  const scrollbar = document.createElement("div");
  const thumb = document.createElement("span");
  fixedScrollbarId += 1;
  if (!scroller.id) scroller.id = `photo-scroller-${fixedScrollbarId}`;
  scrollbar.className = "photo-fixed-scrollbar";
  scrollbar.tabIndex = 0;
  scrollbar.setAttribute("role", "scrollbar");
  scrollbar.setAttribute("aria-controls", scroller.id);
  scrollbar.setAttribute("aria-orientation", "horizontal");
  scrollbar.setAttribute("aria-valuemin", "0");
  scrollbar.setAttribute("aria-valuemax", "100");
  scrollbar.setAttribute("aria-label", `${scroller.getAttribute("aria-label") || "Photo gallery"} scroll position`);
  thumb.className = "photo-fixed-scrollbar-thumb";
  thumb.setAttribute("aria-hidden", "true");
  scrollbar.appendChild(thumb);
  anchor.insertAdjacentElement("afterend", scrollbar);

  let updateFrame = 0;
  const update = () => {
    updateFrame = 0;
    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
    const travel = Math.max(scrollbar.clientWidth - thumb.offsetWidth, 0);
    const progress = maxScroll > 0 ? Math.min(Math.max(scroller.scrollLeft / maxScroll, 0), 1) : 0;
    scrollbar.hidden = maxScroll <= 1;
    thumb.style.transform = `translateX(${progress * travel}px)`;
    scrollbar.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  };
  const scheduleUpdate = () => {
    if (!updateFrame) updateFrame = window.requestAnimationFrame(update);
  };
  const scrollFromPointer = (clientX, behavior = "auto") => {
    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
    const rect = scrollbar.getBoundingClientRect();
    const travel = Math.max(rect.width - thumb.offsetWidth, 0);
    const thumbLeft = Math.min(Math.max(clientX - rect.left - thumb.offsetWidth / 2, 0), travel);
    const progress = travel > 0 ? thumbLeft / travel : 0;
    scroller.scrollTo({ left: progress * maxScroll, behavior });
  };

  scrollbar.addEventListener("pointerdown", (event) => {
    if (event.target === thumb) return;
    scrollFromPointer(event.clientX, "smooth");
  });

  let draggingThumb = false;
  let dragOffset = 0;
  thumb.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    draggingThumb = true;
    dragOffset = event.clientX - thumb.getBoundingClientRect().left;
    thumb.classList.add("is-dragging");
    thumb.setPointerCapture(event.pointerId);
  });
  thumb.addEventListener("pointermove", (event) => {
    if (!draggingThumb) return;
    const rect = scrollbar.getBoundingClientRect();
    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
    const travel = Math.max(rect.width - thumb.offsetWidth, 0);
    const thumbLeft = Math.min(Math.max(event.clientX - rect.left - dragOffset, 0), travel);
    scroller.scrollLeft = travel > 0 ? (thumbLeft / travel) * maxScroll : 0;
  });
  const stopThumbDrag = () => {
    draggingThumb = false;
    thumb.classList.remove("is-dragging");
  };
  thumb.addEventListener("pointerup", stopThumbDrag);
  thumb.addEventListener("pointercancel", stopThumbDrag);

  scrollbar.addEventListener("keydown", (event) => {
    const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
    const step = Math.max(scroller.clientWidth * 0.22, 80);
    let target = null;
    if (event.key === "ArrowLeft") target = scroller.scrollLeft - step;
    if (event.key === "ArrowRight") target = scroller.scrollLeft + step;
    if (event.key === "PageUp") target = scroller.scrollLeft - scroller.clientWidth * 0.8;
    if (event.key === "PageDown") target = scroller.scrollLeft + scroller.clientWidth * 0.8;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = maxScroll;
    if (target === null) return;
    event.preventDefault();
    scroller.scrollTo({ left: Math.min(Math.max(target, 0), maxScroll), behavior: "smooth" });
  });

  scroller.addEventListener("scroll", scheduleUpdate, { passive: true });
  scroller.addEventListener("load", scheduleUpdate, true);
  scroller.addEventListener("loadedmetadata", scheduleUpdate, true);
  if ("ResizeObserver" in window) {
    const scrollbarObserver = new ResizeObserver(scheduleUpdate);
    scrollbarObserver.observe(scroller);
    scrollbarObserver.observe(scrollbar);
  }
  scheduleUpdate();
  return scrollbar;
};

document.querySelectorAll("[data-gallery-row]").forEach((gallery) => {
  const track = gallery.querySelector(".photo-gallery-track");
  const previousButton = gallery.querySelector("[data-gallery-prev]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  if (!track || !previousButton || !nextButton) return;

  if (gallery.id === "photo-cats") {
    const kittenSelfie = track.querySelector('[data-i18n="catPhoto44Title"]')?.closest(".photo-slide");
    const fifthSlide = track.querySelectorAll(".photo-slide")[4];

    if (kittenSelfie && fifthSlide && kittenSelfie !== fifthSlide) {
      track.insertBefore(kittenSelfie, fifthSlide);
    }

  }

  track.querySelectorAll(".photo-slide").forEach((slide, index) => {
    const number = slide.querySelector("figcaption span");
    if (number) number.textContent = String(index + 1).padStart(2, "0");
  });

  const slides = Array.from(track.querySelectorAll(".photo-slide"));
  const slideScrollLeft = (slide) => slide.offsetLeft - (slides[0]?.offsetLeft || 0);
  const openSlideInLightbox = (slide) => {
    const index = slides.indexOf(slide);
    if (index < 0) return;
    openPhotoLightbox({ slides, index, track, slideScrollLeft });
  };

  slides.forEach((slide) => {
    if (!slide.querySelector("img")) return;
    slide.classList.add("is-lightbox-enabled");
    slide.tabIndex = 0;
    slide.setAttribute("role", "button");
    slide.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openSlideInLightbox(slide);
    });
  });
  const tailSpacer = document.createElement("span");
  tailSpacer.className = "photo-gallery-tail";
  tailSpacer.setAttribute("aria-hidden", "true");
  track.appendChild(tailSpacer);

  const refreshTailSpace = () => {
    const lastSlide = slides.at(-1);
    if (!lastSlide) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const width = Math.max(track.clientWidth - lastSlide.getBoundingClientRect().width - gap, 0);
    tailSpacer.style.width = `${width}px`;
  };

  slides.forEach((slide) => {
    const media = slide.querySelector("img, video");
    if (!media) return;
    media.addEventListener("load", refreshTailSpace);
    media.addEventListener("loadedmetadata", refreshTailSpace);
  });
  if ("ResizeObserver" in window) {
    const tailObserver = new ResizeObserver(refreshTailSpace);
    tailObserver.observe(track);
    const lastSlide = slides.at(-1);
    if (lastSlide) tailObserver.observe(lastSlide);
  }
  requestAnimationFrame(refreshTailSpace);

  const thumbnailNav = document.createElement("div");
  thumbnailNav.className = "photo-thumbnail-nav";
  thumbnailNav.setAttribute("role", "navigation");
  thumbnailNav.setAttribute("aria-label", track.getAttribute("aria-label") || "Photo thumbnails");

  const thumbnailButtons = slides.map((slide, index) => {
    const button = document.createElement("button");
    const sourceImage = slide.querySelector("img");
    const sourceVideo = slide.querySelector("video");
    const number = slide.querySelector("figcaption span")?.textContent?.trim() || String(index + 1).padStart(2, "0");

    button.type = "button";
    button.className = "photo-thumbnail";
    button.dataset.slideIndex = String(index);

    if (sourceImage) {
      const image = document.createElement("img");
      image.src = sourceImage.getAttribute("src") || "";
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      button.appendChild(image);
    } else if (sourceVideo) {
      const video = document.createElement("video");
      video.src = sourceVideo.getAttribute("src") || "";
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-hidden", "true");
      button.appendChild(video);

      const playMark = document.createElement("span");
      playMark.className = "photo-thumbnail-play";
      playMark.setAttribute("aria-hidden", "true");
      playMark.textContent = "▶";
      button.appendChild(playMark);
    }

    const numberMark = document.createElement("span");
    numberMark.className = "photo-thumbnail-number";
    numberMark.textContent = number;
    button.appendChild(numberMark);

    button.addEventListener("click", () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: slideScrollLeft(slide), behavior: reduceMotion ? "auto" : "smooth" });
    });

    thumbnailNav.appendChild(button);
    return button;
  });

  track.insertAdjacentElement("afterend", thumbnailNav);
  createFixedGalleryScrollbar(track, track);
  createFixedGalleryScrollbar(thumbnailNav, thumbnailNav);

  const overviewButton = document.createElement("button");
  const overviewLabel = document.createElement("span");
  const overviewCount = document.createElement("b");
  const overviewLanguage = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  overviewButton.type = "button";
  overviewButton.className = "photo-gallery-overview-button";
  overviewButton.dataset.i18nAria = "galleryOverviewOpen";
  overviewButton.setAttribute("aria-label", translations[overviewLanguage].galleryOverviewOpen);
  overviewLabel.dataset.i18n = "galleryOverviewOpen";
  overviewLabel.textContent = translations[overviewLanguage].galleryOverviewOpen;
  overviewCount.textContent = String(slides.length);
  overviewButton.append(overviewLabel, overviewCount);
  previousButton.insertAdjacentElement("beforebegin", overviewButton);

  overviewButton.addEventListener("click", () => {
    if (!photoOverviewDialog || !photoOverviewTitle || !photoOverviewCount || !photoOverviewGrid) return;
    const currentIndex = slides.reduce((bestIndex, slide, index) => {
      const bestDistance = Math.abs(slideScrollLeft(slides[bestIndex]) - track.scrollLeft);
      const distance = Math.abs(slideScrollLeft(slide) - track.scrollLeft);
      return distance < bestDistance ? index : bestIndex;
    }, 0);
    const fragment = document.createDocumentFragment();
    photoOverviewGrid.replaceChildren();
    photoOverviewTitle.textContent = gallery.querySelector(".photo-gallery-header h3")?.textContent?.trim() || translations[overviewLanguage].galleryOverviewOpen;
    photoOverviewCount.textContent = String(slides.length);

    slides.forEach((slide, index) => {
      const item = document.createElement("button");
      const sourceImage = slide.querySelector("img");
      const sourceVideo = slide.querySelector("video");
      const title = slide.querySelector("figcaption strong")?.textContent?.trim() || "";
      const number = String(index + 1).padStart(2, "0");
      item.type = "button";
      item.className = "photo-overview-item";
      item.setAttribute("role", "listitem");
      item.setAttribute("aria-label", `${number} · ${title}`);
      item.classList.toggle("is-active", index === currentIndex);

      if (sourceImage) {
        const image = document.createElement("img");
        image.src = sourceImage.getAttribute("src") || "";
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        item.appendChild(image);
      } else if (sourceVideo) {
        const video = document.createElement("video");
        video.src = sourceVideo.getAttribute("src") || "";
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.setAttribute("aria-hidden", "true");
        item.appendChild(video);
        const playMark = document.createElement("span");
        playMark.className = "photo-overview-item-play";
        playMark.setAttribute("aria-hidden", "true");
        playMark.textContent = "▶";
        item.appendChild(playMark);
      }

      const numberMark = document.createElement("span");
      numberMark.className = "photo-overview-item-number";
      numberMark.textContent = number;
      item.appendChild(numberMark);
      item.addEventListener("click", () => {
        if (sourceImage) {
          closePhotoOverview();
          window.requestAnimationFrame(() => openPhotoLightbox({ slides, index, track, slideScrollLeft }));
          return;
        }
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        track.scrollTo({ left: slideScrollLeft(slide), behavior: reduceMotion ? "auto" : "smooth" });
        closePhotoOverview();
        track.focus({ preventScroll: true });
      });
      fragment.appendChild(item);
    });

    photoOverviewGrid.appendChild(fragment);
    photoOverviewReturnFocus = overviewButton;
    document.body.classList.add("photo-overview-open");
    photoOverviewDialog.showModal();
    photoOverviewGrid.querySelector(".is-active")?.scrollIntoView({ block: "center" });
  });

  const refreshThumbnailLabels = () => {
    const copy = translations[pageLanguage()];
    thumbnailButtons.forEach((button, index) => {
      const title = slides[index].querySelector("figcaption strong")?.textContent?.trim() || "";
      const number = slides[index].querySelector("figcaption span")?.textContent?.trim() || String(index + 1).padStart(2, "0");
      button.setAttribute("aria-label", `${number} · ${title}`);
      button.title = title;
      if (slides[index].querySelector("img")) {
        slides[index].setAttribute("aria-label", `${copy.galleryLightboxOpen}: ${number} · ${title}`);
      }
    });
  };

  const labelObserver = new MutationObserver(refreshThumbnailLabels);
  labelObserver.observe(track, { childList: true, subtree: true, characterData: true });
  refreshThumbnailLabels();

  const updateThumbnailState = () => {
    if (!slides.length) return;
    const currentIndex = slides.reduce((bestIndex, slide, index) => {
      const bestDistance = Math.abs(slideScrollLeft(slides[bestIndex]) - track.scrollLeft);
      const distance = Math.abs(slideScrollLeft(slide) - track.scrollLeft);
      return distance < bestDistance ? index : bestIndex;
    }, 0);

    thumbnailButtons.forEach((button, index) => {
      const isActive = index === currentIndex;
      button.classList.toggle("is-active", isActive);
      if (isActive) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });

    const currentThumbnail = thumbnailButtons[currentIndex];
    if (currentThumbnail) {
      const centeredLeft = currentThumbnail.offsetLeft - (thumbnailNav.clientWidth - currentThumbnail.clientWidth) / 2;
      thumbnailNav.scrollTo({ left: centeredLeft, behavior: "smooth" });
    }
  };

  const updateControls = () => {
    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
    previousButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maxScroll - 2;
    updateThumbnailState();
  };

  const moveGallery = (direction) => {
    if (!slides.length) return;
    const currentIndex = slides.reduce((bestIndex, slide, index) => {
      const bestDistance = Math.abs(slideScrollLeft(slides[bestIndex]) - track.scrollLeft);
      const distance = Math.abs(slideScrollLeft(slide) - track.scrollLeft);
      return distance < bestDistance ? index : bestIndex;
    }, 0);
    const targetIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction));
    track.scrollTo({ left: slideScrollLeft(slides[targetIndex]), behavior: "smooth" });
  };

  previousButton.addEventListener("click", () => moveGallery(-1));
  nextButton.addEventListener("click", () => moveGallery(1));
  let scrollFrame = 0;
  track.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      updateControls();
    });
  }, { passive: true });

  let dragging = false;
  let pointerStart = 0;
  let scrollStart = 0;
  let pointerSlide = null;
  let pointerMoved = false;
  track.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = true;
    pointerStart = event.clientX;
    scrollStart = track.scrollLeft;
    pointerSlide = event.target.closest(".photo-slide");
    pointerMoved = false;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });
  track.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const movement = event.clientX - pointerStart;
    if (Math.abs(movement) > 6) pointerMoved = true;
    track.scrollLeft = scrollStart - movement;
  });
  const stopDragging = (event) => {
    const selectedSlide = pointerSlide;
    const shouldOpenLightbox = event?.type === "pointerup" && !pointerMoved && selectedSlide?.querySelector("img");
    dragging = false;
    pointerSlide = null;
    track.classList.remove("is-dragging");
    updateControls();
    if (shouldOpenLightbox) openSlideInLightbox(selectedSlide);
  };
  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
  window.addEventListener("resize", updateControls);
  updateControls();
});

const galleryTabs = document.querySelectorAll("[data-gallery-tab]");
const galleryPanels = document.querySelectorAll("[data-gallery-panel]");
const galleryIntroTitle = document.querySelector("[data-gallery-intro-title]");
const galleryIntroBody = document.querySelector("[data-gallery-intro-body]");
const galleryIntroKeys = {
  wedding: { title: "notesWeddingTitle", body: "notesWeddingIntro" },
  research: { title: "notesResearchTitle", body: "notesResearchIntro" },
  cats: { title: "notesCatsTitle", body: "notesCatsIntro" }
};

const updateGalleryIntro = (selected) => {
  const keys = galleryIntroKeys[selected] || galleryIntroKeys.wedding;
  const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";
  if (galleryIntroTitle) {
    galleryIntroTitle.dataset.i18n = keys.title;
    galleryIntroTitle.textContent = translations[language][keys.title];
  }
  if (galleryIntroBody) {
    galleryIntroBody.dataset.i18n = keys.body;
    galleryIntroBody.textContent = translations[language][keys.body];
  }
};

const activateGallery = (selected) => {
    updateGalleryIntro(selected);
    galleryTabs.forEach((item) => {
      const isActive = item.dataset.galleryTab === selected;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    galleryPanels.forEach((panel) => {
      const isActive = panel.dataset.galleryPanel === selected;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
      if (isActive) {
        const track = panel.querySelector(".photo-gallery-track");
        if (track) track.dispatchEvent(new Event("scroll"));
      }
    });
};

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateGallery(tab.dataset.galleryTab));
});

document.querySelectorAll("[data-gallery-open]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    activateGallery(link.dataset.galleryOpen);
    document.querySelector("#notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
