/* ================================================================
   WAVIFY — script.js  (complete rewrite)
   Artists · Top 10 Songs · Hindi · English · Old Hindi
   ================================================================ */
'use strict';

/* ================================================================
   DATA
   ================================================================ */

const ARTISTS = [
  {
    id: 'a1', name: 'Arijit Singh',
    genre: 'Bollywood / Romantic', seed: 'arijit101',
    color: '#e84393', followers: '45M',
    bio: 'The voice of a generation — Arijit Singh has ruled Bollywood playback since 2013.',
    songs: [
      { id: 's101', title: 'Tum Hi Ho', album: 'Aashiqui 2', dur: '4:22', year: 2013, lang: 'hindi', seed: 's101' },
      { id: 's102', title: 'Channa Mereya', album: 'Ae Dil Hai Mushkil', dur: '4:49', year: 2016, lang: 'hindi', seed: 's102' },
      { id: 's103', title: 'Tera Yaar Hoon Main', album: 'Sonu Ke Titu Ki Sweety', dur: '3:58', year: 2018, lang: 'hindi', seed: 's103' },
      { id: 's104', title: 'Phir Bhi Tumko Chaahunga', album: 'Half Girlfriend', dur: '4:31', year: 2017, lang: 'hindi', seed: 's104' },
      { id: 's105', title: 'Raabta', album: 'Agent Sai Srinivasa', dur: '4:12', year: 2017, lang: 'hindi', seed: 's105' },
      { id: 's106', title: 'Agar Tum Saath Ho', album: 'Tamasha', dur: '5:10', year: 2015, lang: 'hindi', seed: 's106' },
      { id: 's107', title: 'Gerua', album: 'Dilwale', dur: '4:04', year: 2015, lang: 'hindi', seed: 's107' },
      { id: 's108', title: 'Kabira', album: 'Yeh Jawaani Hai Deewani', dur: '3:45', year: 2013, lang: 'hindi', seed: 's108' },
      { id: 's109', title: 'Soch Na Sake', album: 'Airlift', dur: '4:27', year: 2016, lang: 'hindi', seed: 's109' },
      { id: 's110', title: 'Dil Diyan Gallan', album: 'Tiger Zinda Hai', dur: '4:51', year: 2017, lang: 'hindi', seed: 's110' },
    ]
  },
  {
    id: 'a2', name: 'Shreya Ghoshal',
    genre: 'Bollywood / Classical', seed: 'shreya202',
    color: '#06b6d4', followers: '32M',
    bio: 'Shreya Ghoshal is one of the most celebrated playback singers with a voice that transcends genres.',
    songs: [
      { id: 's201', title: 'Teri Meri', album: 'Bodyguard', dur: '4:18', year: 2011, lang: 'hindi', seed: 's201' },
      { id: 's202', title: 'Sun Raha Hai Na Tu', album: 'Aashiqui 2', dur: '4:42', year: 2013, lang: 'hindi', seed: 's202' },
      { id: 's203', title: 'Laal Ishq', album: 'Ram-Leela', dur: '4:00', year: 2013, lang: 'hindi', seed: 's203' },
      { id: 's204', title: 'Deewani Mastani', album: 'Bajirao Mastani', dur: '4:20', year: 2015, lang: 'hindi', seed: 's204' },
      { id: 's205', title: 'Ghoomar', album: 'Padmaavat', dur: '4:28', year: 2018, lang: 'hindi', seed: 's205' },
      { id: 's206', title: 'Saibo', album: 'Shor in the City', dur: '4:14', year: 2011, lang: 'hindi', seed: 's206' },
      { id: 's207', title: 'Barso Re', album: 'Guru', dur: '7:23', year: 2007, lang: 'hindi', seed: 's207' },
      { id: 's208', title: 'Manwa Laage', album: 'Happy New Year', dur: '4:30', year: 2014, lang: 'hindi', seed: 's208' },
      { id: 's209', title: 'Jaadu Hai Nasha Hai', album: 'Jism', dur: '5:00', year: 2003, lang: 'hindi', seed: 's209' },
      { id: 's210', title: 'Chikni Chameli', album: 'Agneepath', dur: '3:30', year: 2012, lang: 'hindi', seed: 's210' },
    ]
  },
  {
    id: 'a3', name: 'Lata Mangeshkar',
    genre: 'Old Hindi / Classical', seed: 'lata303',
    color: '#f59e0b', followers: '60M',
    bio: 'The Nightingale of India — Lata Mangeshkar defined the golden era of Hindi cinema music.',
    songs: [
      { id: 's301', title: 'Lag Ja Gale', album: 'Woh Kaun Thi', dur: '3:28', year: 1964, lang: 'old-hindi', seed: 's301' },
      { id: 's302', title: 'Tere Bina Zindagi Se', album: 'Aandhi', dur: '4:02', year: 1975, lang: 'old-hindi', seed: 's302' },
      { id: 's303', title: 'Ajeeb Dastan Hai Yeh', album: 'Dil Apna Aur Preet Parayi', dur: '3:55', year: 1960, lang: 'old-hindi', seed: 's303' },
      { id: 's304', title: 'Pyar Kiya Toh Darna Kya', album: 'Mughal-E-Azam', dur: '5:10', year: 1960, lang: 'old-hindi', seed: 's304' },
      { id: 's305', title: 'Aye Mere Watan Ke Logo', album: 'Patriotic', dur: '6:03', year: 1963, lang: 'old-hindi', seed: 's305' },
      { id: 's306', title: 'Yeh Galiyan Yeh Chaubara', album: 'Prem Rog', dur: '4:45', year: 1982, lang: 'old-hindi', seed: 's306' },
      { id: 's307', title: 'Kabhi Kabhi Mere Dil Mein', album: 'Kabhi Kabhi', dur: '5:20', year: 1976, lang: 'old-hindi', seed: 's307' },
      { id: 's308', title: 'Tujhe Dekha Toh', album: 'Dilwale Dulhania Le Jayenge', dur: '4:35', year: 1995, lang: 'old-hindi', seed: 's308' },
      { id: 's309', title: 'Didi Tera Devar Deewana', album: 'Hum Aapke Hain Koun', dur: '4:18', year: 1994, lang: 'old-hindi', seed: 's309' },
      { id: 's310', title: 'Mere Mehboob Qayamat Hogi', album: 'Mr. X in Bombay', dur: '4:00', year: 1964, lang: 'old-hindi', seed: 's310' },
    ]
  },
  {
    id: 'a4', name: 'Kishore Kumar',
    genre: 'Old Hindi / Evergreen', seed: 'kishore404',
    color: '#10b981', followers: '55M',
    bio: 'Kishore Kumar — the multi-talented legend whose voice has entertained generations.',
    songs: [
      { id: 's401', title: 'Ek Ajnabee Haseena Se', album: 'Ajnabee', dur: '4:15', year: 1974, lang: 'old-hindi', seed: 's401' },
      { id: 's402', title: 'Mere Naina Sawan Bhado', album: 'Mehbooba', dur: '4:40', year: 1976, lang: 'old-hindi', seed: 's402' },
      { id: 's403', title: 'Roop Tera Mastana', album: 'Aradhana', dur: '4:05', year: 1969, lang: 'old-hindi', seed: 's403' },
      { id: 's404', title: 'Yeh Sham Mastani', album: 'Kati Patang', dur: '3:55', year: 1971, lang: 'old-hindi', seed: 's404' },
      { id: 's405', title: 'Aane Wala Pal', album: 'Gol Maal', dur: '3:30', year: 1979, lang: 'old-hindi', seed: 's405' },
      { id: 's406', title: 'Musafir Hoon Yaaron', album: 'Parichay', dur: '4:20', year: 1972, lang: 'old-hindi', seed: 's406' },
      { id: 's407', title: 'O Majhi Re', album: 'Khaiyyaam', dur: '4:50', year: 1977, lang: 'old-hindi', seed: 's407' },
      { id: 's408', title: 'Zindagi Ek Safar Hai', album: 'Andaz', dur: '3:45', year: 1971, lang: 'old-hindi', seed: 's408' },
      { id: 's409', title: 'Pal Pal Dil Ke Paas', album: 'Blackmail', dur: '4:10', year: 1973, lang: 'old-hindi', seed: 's409' },
      { id: 's410', title: 'Hum Hain Rahi Pyar Ke', album: 'Hum Hain Rahi Pyar Ke', dur: '4:00', year: 1993, lang: 'old-hindi', seed: 's410' },
    ]
  },
  {
    id: 'a5', name: 'The Weeknd',
    genre: 'R&B / Pop', seed: 'weeknd505',
    color: '#7c3aed', followers: '95M',
    bio: 'Abel Tesfaye, known as The Weeknd, redefined modern R&B with his dark, ethereal sound.',
    songs: [
      { id: 's501', title: 'Blinding Lights', album: 'After Hours', dur: '3:20', year: 2020, lang: 'english', seed: 's501' },
      { id: 's502', title: 'Starboy', album: 'Starboy', dur: '3:50', year: 2016, lang: 'english', seed: 's502' },
      { id: 's503', title: 'Save Your Tears', album: 'After Hours', dur: '3:36', year: 2020, lang: 'english', seed: 's503' },
      { id: 's504', title: 'The Hills', album: 'Beauty Behind the Madness', dur: '4:02', year: 2015, lang: 'english', seed: 's504' },
      { id: 's505', title: "Can't Feel My Face", album: 'Beauty Behind the Madness', dur: '3:35', year: 2015, lang: 'english', seed: 's505' },
      { id: 's506', title: 'Earned It', album: 'Fifty Shades of Grey OST', dur: '4:20', year: 2015, lang: 'english', seed: 's506' },
      { id: 's507', title: 'Die For You', album: 'Starboy', dur: '4:20', year: 2016, lang: 'english', seed: 's507' },
      { id: 's508', title: 'I Feel It Coming', album: 'Starboy', dur: '4:29', year: 2016, lang: 'english', seed: 's508' },
      { id: 's509', title: 'Moth To A Flame', album: 'Swedish House Mafia Collab', dur: '3:47', year: 2021, lang: 'english', seed: 's509' },
      { id: 's510', title: 'Out of Time', album: 'Dawn FM', dur: '3:37', year: 2022, lang: 'english', seed: 's510' },
    ]
  },
  {
    id: 'a6', name: 'Taylor Swift',
    genre: 'Pop / Country', seed: 'taylor606',
    color: '#ec4899', followers: '110M',
    bio: 'Taylor Swift is a record-breaking singer-songwriter who has dominated pop music for two decades.',
    songs: [
      { id: 's601', title: 'Anti-Hero', album: 'Midnights', dur: '3:20', year: 2022, lang: 'english', seed: 's601' },
      { id: 's602', title: 'Shake It Off', album: '1989', dur: '3:39', year: 2014, lang: 'english', seed: 's602' },
      { id: 's603', title: 'Blank Space', album: '1989', dur: '3:51', year: 2014, lang: 'english', seed: 's603' },
      { id: 's604', title: 'Love Story', album: 'Fearless', dur: '3:55', year: 2008, lang: 'english', seed: 's604' },
      { id: 's605', title: 'Cruel Summer', album: 'Lover', dur: '2:58', year: 2019, lang: 'english', seed: 's605' },
      { id: 's606', title: 'cardigan', album: 'folklore', dur: '3:59', year: 2020, lang: 'english', seed: 's606' },
      { id: 's607', title: 'Style', album: '1989', dur: '3:51', year: 2015, lang: 'english', seed: 's607' },
      { id: 's608', title: 'Wildest Dreams', album: '1989', dur: '3:40', year: 2015, lang: 'english', seed: 's608' },
      { id: 's609', title: 'august', album: 'folklore', dur: '4:21', year: 2020, lang: 'english', seed: 's609' },
      { id: 's610', title: 'All Too Well (10 Min)', album: 'Red (TV)', dur: '10:13', year: 2021, lang: 'english', seed: 's610' },
    ]
  },
  {
    id: 'a7', name: 'Ed Sheeran',
    genre: 'Pop / Folk', seed: 'edsheeran707',
    color: '#f97316', followers: '85M',
    bio: "Ed Sheeran's heartfelt songwriting and unique blend of pop and folk have made him a global icon.",
    songs: [
      { id: 's701', title: 'Shape of You', album: '÷ (Divide)', dur: '3:53', year: 2017, lang: 'english', seed: 's701' },
      { id: 's702', title: 'Perfect', album: '÷ (Divide)', dur: '4:23', year: 2017, lang: 'english', seed: 's702' },
      { id: 's703', title: 'Thinking Out Loud', album: 'x (Multiply)', dur: '4:41', year: 2014, lang: 'english', seed: 's703' },
      { id: 's704', title: 'Photograph', album: 'x (Multiply)', dur: '4:19', year: 2014, lang: 'english', seed: 's704' },
      { id: 's705', title: 'Happier', album: '÷ (Divide)', dur: '3:27', year: 2017, lang: 'english', seed: 's705' },
      { id: 's706', title: 'Castle on the Hill', album: '÷ (Divide)', dur: '4:21', year: 2017, lang: 'english', seed: 's706' },
      { id: 's707', title: 'Bad Habits', album: '= (Equals)', dur: '3:51', year: 2021, lang: 'english', seed: 's707' },
      { id: 's708', title: 'Shivers', album: '= (Equals)', dur: '3:27', year: 2021, lang: 'english', seed: 's708' },
      { id: 's709', title: 'Lego House', album: '+ (Plus)', dur: '3:04', year: 2011, lang: 'english', seed: 's709' },
      { id: 's710', title: 'A Team', album: '+ (Plus)', dur: '4:57', year: 2011, lang: 'english', seed: 's710' },
    ]
  },
  {
    id: 'a8', name: 'Drake',
    genre: 'Hip-Hop / Rap', seed: 'drake808',
    color: '#a855f7', followers: '90M',
    bio: "Drake is one of hip-hop's best-selling artists, known for blending rap, R&B, and pop seamlessly.",
    songs: [
      { id: 's801', title: "God's Plan", album: 'Scorpion', dur: '3:19', year: 2018, lang: 'english', seed: 's801' },
      { id: 's802', title: 'Hotline Bling', album: 'Views', dur: '4:27', year: 2015, lang: 'english', seed: 's802' },
      { id: 's803', title: 'One Dance', album: 'Views', dur: '2:53', year: 2016, lang: 'english', seed: 's803' },
      { id: 's804', title: 'In My Feelings', album: 'Scorpion', dur: '3:37', year: 2018, lang: 'english', seed: 's804' },
      { id: 's805', title: 'Passionfruit', album: 'More Life', dur: '4:58', year: 2017, lang: 'english', seed: 's805' },
      { id: 's806', title: 'Started From the Bottom', album: 'Nothing Was the Same', dur: '3:13', year: 2013, lang: 'english', seed: 's806' },
      { id: 's807', title: 'Laugh Now Cry Later', album: 'Certified Lover Boy', dur: '4:42', year: 2020, lang: 'english', seed: 's807' },
      { id: 's808', title: 'Hold On We\'re Going Home', album: 'Nothing Was the Same', dur: '3:47', year: 2013, lang: 'english', seed: 's808' },
      { id: 's809', title: 'Champagne Poetry', album: 'Certified Lover Boy', dur: '5:38', year: 2021, lang: 'english', seed: 's809' },
      { id: 's810', title: 'Crew Love', album: 'Take Care', dur: '4:42', year: 2011, lang: 'english', seed: 's810' },
    ]
  },
  {
    id: 'a9', name: 'Mohammed Rafi',
    genre: 'Old Hindi / Ghazal', seed: 'rafi909',
    color: '#14b8a6', followers: '70M',
    bio: 'Mohammed Rafi — the maestro whose versatile voice gave life to countless timeless melodies.',
    songs: [
      { id: 's901', title: 'Teri Galiyon Mein', album: 'Naukar', dur: '3:45', year: 1979, lang: 'old-hindi', seed: 's901' },
      { id: 's902', title: 'Abhi Na Jao Chhod Kar', album: 'Hum Dono', dur: '3:50', year: 1961, lang: 'old-hindi', seed: 's902' },
      { id: 's903', title: 'Dil Ke Jharoke Mein', album: 'Brahmachari', dur: '4:10', year: 1968, lang: 'old-hindi', seed: 's903' },
      { id: 's904', title: 'Baharon Phool Barsao', album: 'Suraj', dur: '3:30', year: 1966, lang: 'old-hindi', seed: 's904' },
      { id: 's905', title: 'Chaudhvin Ka Chand', album: 'Chaudhvin Ka Chand', dur: '4:20', year: 1960, lang: 'old-hindi', seed: 's905' },
      { id: 's906', title: 'Sar Jo Tera Chakraye', album: 'Pyaasa', dur: '3:55', year: 1957, lang: 'old-hindi', seed: 's906' },
      { id: 's907', title: 'Gulabi Aankhein', album: 'The Train', dur: '3:40', year: 1970, lang: 'old-hindi', seed: 's907' },
      { id: 's908', title: 'Kya Hua Tera Wada', album: 'Hum Kisise Kum Nahin', dur: '4:05', year: 1977, lang: 'old-hindi', seed: 's908' },
      { id: 's909', title: 'Tumse Achha Kaun Hai', album: 'Janwar', dur: '3:50', year: 1965, lang: 'old-hindi', seed: 's909' },
      { id: 's910', title: 'Likhe Jo Khat Tujhe', album: 'Kanyadaan', dur: '4:15', year: 1968, lang: 'old-hindi', seed: 's910' },
    ]
  },
  {
    id: 'a10', name: 'Sonu Nigam',
    genre: 'Bollywood / Pop', seed: 'sonu1010',
    color: '#f43f5e', followers: '28M',
    bio: "Sonu Nigam's golden voice has dominated Bollywood for over three decades across genres.",
    songs: [
      { id: 's1001', title: 'Kal Ho Naa Ho', album: 'Kal Ho Naa Ho', dur: '5:28', year: 2003, lang: 'hindi', seed: 's1001' },
      { id: 's1002', title: 'Abhi Mujh Mein Kahin', album: 'Agneepath', dur: '5:03', year: 2012, lang: 'hindi', seed: 's1002' },
      { id: 's1003', title: 'Main Agar Kahoon', album: 'Om Shanti Om', dur: '4:33', year: 2007, lang: 'hindi', seed: 's1003' },
      { id: 's1004', title: 'Deewana', album: 'Deewana', dur: '5:10', year: 1992, lang: 'hindi', seed: 's1004' },
      { id: 's1005', title: 'Sandese Aate Hain', album: 'Border', dur: '5:55', year: 1997, lang: 'hindi', seed: 's1005' },
      { id: 's1006', title: 'Suraj Hua Maddham', album: 'Kabhi Khushi Kabhie Gham', dur: '6:16', year: 2001, lang: 'hindi', seed: 's1006' },
      { id: 's1007', title: 'Yeh Dil Deewana', album: 'Pardes', dur: '5:02', year: 1997, lang: 'hindi', seed: 's1007' },
      { id: 's1008', title: 'Ek Pal Ka Jeena', album: 'Kaho Naa Pyaar Hai', dur: '4:41', year: 2000, lang: 'hindi', seed: 's1008' },
      { id: 's1009', title: 'Chand Sifarish', album: 'Fanaa', dur: '4:53', year: 2006, lang: 'hindi', seed: 's1009' },
      { id: 's1010', title: 'Bachna Ae Haseeno', album: 'Bachna Ae Haseeno', dur: '4:14', year: 2008, lang: 'hindi', seed: 's1010' },
    ]
  },
];

/* Flatten all songs for convenience */
const ALL_SONGS = ARTISTS.flatMap(a =>
  a.songs.map(s => ({ ...s, artist: a.name, artistId: a.id, artistColor: a.color }))
);

const PLAYLISTS = [
  { id: 'p1', name: 'Friday Night Feels', desc: 'Weekend vibes only', seed: 'pl1', color: '#7c3aed', songIds: ['s501', 's502', 's601', 's602', 's701', 's801', 's101', 's201'] },
  { id: 'p2', name: 'Bollywood Dhamaka', desc: 'Best of Hindi cinema', seed: 'pl2', color: '#e84393', songIds: ['s101', 's102', 's103', 's201', 's202', 's203', 's1001', 's1002'] },
  { id: 'p3', name: 'Old Hindi Gold', desc: 'Timeless classics forever', seed: 'pl3', color: '#f59e0b', songIds: ['s301', 's302', 's303', 's401', 's402', 's403', 's901', 's902'] },
  { id: 'p4', name: 'English Top Hits', desc: 'Global chart-toppers 2024', seed: 'pl4', color: '#10b981', songIds: ['s501', 's503', 's601', 's603', 's701', 's703', 's801', 's803'] },
  { id: 'p5', name: 'Arijit Singh Best', desc: 'The voice of a generation', seed: 'pl5', color: '#e84393', songIds: ['s101', 's102', 's103', 's104', 's105', 's106', 's107', 's108', 's109', 's110'] },
  { id: 'p6', name: 'Late Night Chill', desc: 'Slow jams for the soul', seed: 'pl6', color: '#6366f1', songIds: ['s106', 's205', 's303', 's405', 's507', 's606', 's703', 's808'] },
  { id: 'p7', name: 'Kishore Classics', desc: 'Evergreen melodies of a legend', seed: 'pl7', color: '#f97316', songIds: ['s401', 's402', 's403', 's404', 's405', 's406', 's407', 's408', 's409', 's410'] },
  { id: 'p8', name: 'Party Anthems', desc: 'Turn up the volume!', seed: 'pl8', color: '#ec4899', songIds: ['s502', 's505', 's602', 's701', 's210', 's801', 's803', 's804'] },
];

const GENRES = [
  { name: 'Bollywood', color: '#e84393', icon: 'fa-music', lang: 'hindi' },
  { name: 'English Pop', color: '#7c3aed', icon: 'fa-star', lang: 'english' },
  { name: 'Old Hindi', color: '#f59e0b', icon: 'fa-clock-rotate-left', lang: 'old-hindi' },
  { name: 'R&B', color: '#a855f7', icon: 'fa-headphones', lang: 'english' },
  { name: 'Hip-Hop', color: '#06b6d4', icon: 'fa-microphone', lang: 'english' },
  { name: 'Romantic', color: '#ec4899', icon: 'fa-heart', lang: 'hindi' },
  { name: 'Evergreen', color: '#14b8a6', icon: 'fa-record-vinyl', lang: 'old-hindi' },
  { name: 'Party', color: '#f97316', icon: 'fa-person-walking', lang: 'hindi' },
  { name: 'Focus', color: '#6366f1', icon: 'fa-brain', lang: 'english' },
  { name: 'Ghazal', color: '#84cc16', icon: 'fa-guitar', lang: 'old-hindi' },
];

/* ================================================================
   STATE
   ================================================================ */
let ST = {
  song: null,
  queue: [],
  queueIdx: -1,
  playing: false,
  shuffle: false,
  repeat: 0,       // 0=off 1=all 2=one
  volume: 70,
  muted: false,
  progress: 0,
  duration: 240,
  liked: [],
  userPls: [],
  recent: [],
  section: 'home',
  timer: null,
  langFilter: 'all',
};

function loadST() {
  try {
    const d = JSON.parse(localStorage.getItem('wavify2') || '{}');
    ST.liked = d.liked || [];
    ST.userPls = d.userPls || [];
    ST.recent = d.recent || [];
    ST.volume = d.volume ?? 70;
  } catch (e) { }
}
function saveST() {
  try { localStorage.setItem('wavify2', JSON.stringify({ liked: ST.liked, userPls: ST.userPls, recent: ST.recent, volume: ST.volume })); } catch (e) { }
}

/* ================================================================
   HELPERS
   ================================================================ */
const img = (seed, sz = 200) => `https://picsum.photos/seed/${seed}/${sz}/${sz}`;
const byId = id => document.getElementById(id);
const songById = id => ALL_SONGS.find(s => s.id === id);
const artistById = id => ARTISTS.find(a => a.id === id);
const dur2s = str => { const [m, s] = str.split(':').map(Number); return m * 60 + s; };
const s2t = s => { const m = Math.floor(s / 60), sec = Math.floor(s % 60); return `${m}:${sec.toString().padStart(2, '0')}`; };
const isLiked = id => ST.liked.includes(id);

function toast(msg) {
  const t = byId('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

/* ================================================================
   SECTION NAVIGATION
   ================================================================ */
function goSection(name) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  const sec = byId(`sec-${name}`);
  if (sec) sec.classList.remove('hidden');
  const link = document.querySelector(`.nav-link[data-section="${name}"]`);
  if (link) link.classList.add('active');
  ST.section = name;
  byId('content-area').scrollTo(0, 0);
  closeSidebar();
}

/* ================================================================
   PLAY ENGINE
   ================================================================ */
function playSong(song, queue = ALL_SONGS) {
  if (!song) return;
  ST.song = song;
  ST.queue = queue;
  ST.queueIdx = queue.findIndex(s => s.id === song.id);
  ST.playing = true;
  ST.progress = 0;
  ST.duration = dur2s(song.dur);

  byId('now-img').src = img(song.seed, 80);
  byId('now-title').textContent = song.title;
  byId('now-artist').textContent = song.artist;
  byId('ptime-tot').textContent = song.dur;
  byId('ptime-cur').textContent = '0:00';
  byId('prog-fill').style.width = '0%';
  byId('prog-thumb').style.left = '0%';
  byId('play-icon').className = 'fas fa-pause';
  byId('vis').classList.add('on');

  updateLikeNow();
  updateHighlights();
  addRecent(song.id);
  startTimer();
  toast(`▶  ${song.title} — ${song.artist}`);
}

function togglePlay() {
  if (!ST.song) return;
  ST.playing = !ST.playing;
  byId('play-icon').className = `fas fa-${ST.playing ? 'pause' : 'play'}`;
  byId('vis').classList.toggle('on', ST.playing);
  if (ST.playing) startTimer(); else clearInterval(ST.timer);
}

function playNext() {
  if (!ST.queue.length) return;
  let i = ST.isShuffle
    ? Math.floor(Math.random() * ST.queue.length)
    : ST.queueIdx + 1;
  if (i >= ST.queue.length) {
    if (ST.repeat === 1) i = 0;
    else { ST.playing = false; byId('play-icon').className = 'fas fa-play'; return; }
  }
  playSong(ST.queue[i], ST.queue);
}

function playPrev() {
  if (ST.progress > 4) { ST.progress = 0; updateProgUI(); return; }
  let i = ST.queueIdx - 1;
  if (i < 0) i = ST.repeat === 1 ? ST.queue.length - 1 : 0;
  playSong(ST.queue[i], ST.queue);
}

function startTimer() {
  clearInterval(ST.timer);
  ST.timer = setInterval(() => {
    if (!ST.playing) return;
    ST.progress++;
    if (ST.progress >= ST.duration) {
      if (ST.repeat === 2) ST.progress = 0;
      else { playNext(); return; }
    }
    updateProgUI();
  }, 1000);
}

function updateProgUI() {
  const pct = ST.duration > 0 ? (ST.progress / ST.duration) * 100 : 0;
  byId('prog-fill').style.width = `${pct}%`;
  byId('prog-thumb').style.left = `${pct}%`;
  byId('ptime-cur').textContent = s2t(ST.progress);
}

function updateHighlights() {
  document.querySelectorAll('[data-song-id]').forEach(el => {
    if (el.classList.contains('track-item')) {
      el.classList.toggle('playing', el.dataset.songId === ST.song?.id);
    }
    if (el.classList.contains('mc-play') || el.classList.contains('qi-play')) {
      const active = el.dataset.songId === ST.song?.id && ST.playing;
      el.classList.toggle('active', active);
      el.querySelector('i').className = `fas fa-${active ? 'pause' : 'play'}`;
    }
  });
}

function addRecent(id) {
  ST.recent = [id, ...ST.recent.filter(x => x !== id)].slice(0, 20);
  saveST();
  renderRecent();
}

/* ================================================================
   LIKE SYSTEM
   ================================================================ */
function toggleLike(songId) {
  if (ST.liked.includes(songId)) {
    ST.liked = ST.liked.filter(x => x !== songId);
    toast('Removed from Liked Songs');
  } else {
    ST.liked.unshift(songId);
    toast('❤️  Added to Liked Songs');
  }
  saveST();
  updateLikeNow();
  updateAllLikeBtns();
  renderLiked();
}

function updateLikeNow() {
  const btn = byId('like-now');
  if (!btn) return;
  const liked = ST.song && isLiked(ST.song.id);
  btn.classList.toggle('liked', !!liked);
  btn.querySelector('i').className = liked ? 'fas fa-heart' : 'far fa-heart';
}

function updateAllLikeBtns() {
  document.querySelectorAll('.ti-like').forEach(btn => {
    const id = btn.dataset.songId;
    const liked = isLiked(id);
    btn.classList.toggle('liked', liked);
    btn.querySelector('i').className = liked ? 'fas fa-heart' : 'far fa-heart';
  });
}

/* ================================================================
   RENDER: RECENTLY PLAYED
   ================================================================ */
function renderRecent() {
  const grid = byId('grid-recent');
  if (!grid) return;
  grid.innerHTML = '';
  const songs = ST.recent.length
    ? ST.recent.slice(0, 8).map(id => songById(id)).filter(Boolean)
    : ALL_SONGS.slice(0, 8);
  songs.forEach(s => {
    const d = document.createElement('div');
    d.className = 'quick-item'; d.dataset.songId = s.id;
    d.innerHTML = `
      <img class="qi-img" src="${img(s.seed, 80)}" alt="${s.title}" loading="lazy" />
      <span class="qi-title">${s.title}</span>
      <button class="qi-play" data-song-id="${s.id}"><i class="fas fa-play"></i></button>
    `;
    d.addEventListener('click', () => playSong(s, songs));
    d.querySelector('.qi-play').addEventListener('click', e => { e.stopPropagation(); playSong(s, songs); });
    grid.appendChild(d);
  });
}

/* ================================================================
   RENDER: LANGUAGE FILTER SONGS
   ================================================================ */
function renderLangGrid(lang = 'all') {
  ST.langFilter = lang;
  const grid = byId('grid-lang');
  if (!grid) return;
  grid.innerHTML = '';
  const songs = lang === 'all' ? ALL_SONGS.slice(0, 12)
    : ALL_SONGS.filter(s => s.lang === lang).slice(0, 12);
  songs.forEach(s => grid.appendChild(makeMusicCard(s, ALL_SONGS)));
}

/* ================================================================
   RENDER: HOME GRIDS
   ================================================================ */
function renderHome() {
  renderRecent();
  renderLangGrid('all');

  // Trending
  const tGrid = byId('grid-trending');
  if (tGrid) {
    tGrid.innerHTML = '';
    const trending = [
      ALL_SONGS.find(s => s.id === 's501'), ALL_SONGS.find(s => s.id === 's601'),
      ALL_SONGS.find(s => s.id === 's101'), ALL_SONGS.find(s => s.id === 's201'),
      ALL_SONGS.find(s => s.id === 's701'), ALL_SONGS.find(s => s.id === 's801'),
    ].filter(Boolean);
    trending.forEach(s => tGrid.appendChild(makeMusicCard(s, trending)));
  }

  // Artists home preview
  const ag = byId('grid-artists-home');
  if (ag) {
    ag.innerHTML = '';
    ARTISTS.slice(0, 6).forEach(a => ag.appendChild(makeArtistCard(a)));
  }

  // Playlists
  const pg = byId('grid-playlists');
  if (pg) {
    pg.innerHTML = '';
    PLAYLISTS.slice(0, 6).forEach(p => pg.appendChild(makePlaylistCard(p)));
  }

  // New Releases
  const ng = byId('grid-new');
  if (ng) {
    ng.innerHTML = '';
    ALL_SONGS.filter(s => s.year >= 2020).slice(0, 6).forEach(s => ng.appendChild(makeMusicCard(s, ALL_SONGS)));
  }

  // Recommended
  const rg = byId('grid-rec');
  if (rg) {
    rg.innerHTML = '';
    [...ALL_SONGS].sort(() => Math.random() - .5).slice(0, 6).forEach(s => rg.appendChild(makeMusicCard(s, ALL_SONGS)));
  }
}

/* ================================================================
   RENDER: SEARCH
   ================================================================ */
function renderGenres() {
  const g = byId('genre-grid');
  if (!g) return;
  g.innerHTML = '';
  GENRES.forEach(genre => {
    const d = document.createElement('div');
    d.className = 'genre-card';
    d.style.background = `linear-gradient(140deg,${genre.color}cc,${genre.color}44)`;
    d.innerHTML = `<span>${genre.name}</span><i class="fas ${genre.icon}"></i>`;
    d.addEventListener('click', () => {
      const songs = ALL_SONGS.filter(s => s.lang === genre.lang).slice(0, 20);
      showSearchResults(songs, genre.name);
    });
    g.appendChild(d);
  });
}

function showSearchResults(songs, label) {
  const wrap = byId('search-results-wrap');
  const list = byId('search-results-list');
  byId('results-label').textContent = label;
  list.innerHTML = '';
  wrap.classList.remove('hidden');
  if (!songs.length) {
    list.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>No results</h3><p>Try a different search term.</p></div>`;
    return;
  }
  songs.forEach((s, i) => list.appendChild(makeTrackItem(s, i, songs)));
}

function doSearch(q) {
  q = q.toLowerCase().trim();
  if (!q) return [];
  return ALL_SONGS.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.album.toLowerCase().includes(q) ||
    s.lang.toLowerCase().includes(q)
  );
}

function renderDropdown(q) {
  const box = byId('search-dropdown');
  const res = doSearch(q).slice(0, 6);
  if (!q || !res.length) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  box.innerHTML = '';
  res.forEach(s => {
    const d = document.createElement('div');
    d.className = 'sd-item';
    d.innerHTML = `<i class="fas fa-music"></i><span>${s.title}</span><small>${s.artist}</small>`;
    d.addEventListener('click', () => {
      byId('search-input').value = s.title;
      box.classList.add('hidden');
      goSection('search');
      showSearchResults([s], s.title);
      byId('genre-grid').classList.add('hidden');
    });
    box.appendChild(d);
  });
}

/* ================================================================
   RENDER: LIBRARY
   ================================================================ */
function renderLibrary(filter = 'all') {
  const list = byId('library-list');
  if (!list) return;
  list.innerHTML = '';
  const items = [];
  if (filter === 'all' || filter === 'playlists') {
    [...PLAYLISTS, ...ST.userPls].forEach(p => items.push({ type: 'playlist', d: p }));
  }
  if (filter === 'all' || filter === 'artists') {
    ARTISTS.forEach(a => items.push({ type: 'artist', d: a }));
  }
  if (filter === 'all' || filter === 'albums') {
    const seen = new Set();
    ALL_SONGS.forEach(s => {
      if (!seen.has(s.album)) { seen.add(s.album); items.push({ type: 'album', d: s }); }
    });
  }
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><i class="fas fa-book-open"></i><h3>Empty library</h3><p>Start exploring to fill it up.</p></div>`;
    return;
  }
  items.forEach(({ type, d }) => {
    const el = document.createElement('div');
    el.className = 'lib-item';
    let thumb, title, meta, round = false;
    if (type === 'playlist') { thumb = img(d.seed, 100); title = d.name; meta = `Playlist · ${d.songIds.length} songs`; }
    else if (type === 'artist') { thumb = img(d.seed, 100); title = d.name; meta = `Artist · ${d.genre}`; round = true; }
    else { thumb = img(d.seed, 100); title = d.album; meta = `Album · ${d.artist}`; }
    el.innerHTML = `
      <img class="lib-thumb${round ? ' round' : ''}" src="${thumb}" alt="${title}" loading="lazy" />
      <div class="lib-info"><div class="lib-title">${title}</div><div class="lib-meta">${meta}</div></div>
      <span class="lib-badge">${type}</span>
    `;
    if (type === 'playlist') el.addEventListener('click', () => showPlaylistView(d));
    if (type === 'artist') el.addEventListener('click', () => showArtistDetail(artistById(d.id)));
    list.appendChild(el);
  });
}

/* ================================================================
   RENDER: ALL ARTISTS PAGE
   ================================================================ */
function renderAllArtists() {
  const g = byId('grid-all-artists');
  if (!g) return;
  g.innerHTML = '';
  ARTISTS.forEach(a => g.appendChild(makeArtistCard(a)));
}

/* ================================================================
   RENDER: ARTIST DETAIL
   ================================================================ */
function showArtistDetail(artist) {
  const hero = byId('artist-hero');
  const top10 = byId('artist-top10');
  if (!hero || !top10) return;

  hero.innerHTML = `
    <div class="artist-hero-bg" style="background-image:url('${img(artist.seed, 600)}')"></div>
    <img class="artist-hero-avatar" src="${img(artist.seed, 300)}" alt="${artist.name}" />
    <div class="artist-hero-info">
      <p class="artist-hero-role">${artist.genre}</p>
      <h1 class="artist-hero-name">${artist.name}</h1>
      <p class="artist-hero-stats">${artist.followers} followers · ${artist.songs.length} songs</p>
      <p style="color:var(--t2);font-size:.875rem;max-width:480px;margin-top:8px;line-height:1.6;">${artist.bio}</p>
      <div class="artist-hero-btns">
        <button class="btn-green" id="artist-play-btn"><i class="fas fa-play"></i> Play All</button>
        <button class="btn-outline" id="artist-shuffle-btn"><i class="fas fa-shuffle"></i> Shuffle</button>
      </div>
    </div>
  `;

  top10.innerHTML = `
    <div class="top10-head">
      <h3>Top 10 Songs</h3>
      <span style="font-size:.75rem;color:var(--t3);font-weight:600;text-transform:uppercase;letter-spacing:.07em;">
        ${artist.songs.length} tracks
      </span>
    </div>
    <div class="track-list" id="artist-tracks"></div>
  `;

  const queue = artist.songs.map(s => ({ ...s, artist: artist.name, artistId: artist.id }));
  const tl = byId('artist-tracks');
  queue.forEach((s, i) => tl.appendChild(makeTrackItem(s, i, queue)));

  byId('artist-play-btn').addEventListener('click', () => playSong(queue[0], queue));
  byId('artist-shuffle-btn').addEventListener('click', () => {
    const sh = [...queue].sort(() => Math.random() - .5);
    playSong(sh[0], sh);
  });

  goSection('artist-detail');
}

/* ================================================================
   RENDER: LIKED SONGS
   ================================================================ */
function renderLiked() {
  const list = byId('liked-list');
  const cnt = byId('liked-count');
  if (!list) return;
  list.innerHTML = '';
  cnt.textContent = `${ST.liked.length} song${ST.liked.length !== 1 ? 's' : ''}`;
  if (!ST.liked.length) {
    list.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><h3>No liked songs yet</h3><p>Hit ❤️ on any song to save it here.</p></div>`;
    return;
  }
  const songs = ST.liked.map(id => songById(id)).filter(Boolean);
  songs.forEach((s, i) => list.appendChild(makeTrackItem(s, i, songs)));
}

/* ================================================================
   RENDER: PLAYLIST VIEW
   ================================================================ */
function showPlaylistView(pl) {
  const songs = pl.songIds.map(id => songById(id)).filter(Boolean);
  const hero = byId('pl-hero');
  const ctrl = byId('pl-controls');
  const tl = byId('pl-track-list');

  hero.innerHTML = `
    <img class="pl-hero-img" src="${img(pl.seed)}" alt="${pl.name}" />
    <div class="pl-hero-info">
      <p class="pl-label">Playlist</p>
      <h1>${pl.name}</h1>
      <p class="pl-desc">${pl.desc || ''}</p>
      <p class="pl-count">${songs.length} songs</p>
    </div>
  `;
  ctrl.innerHTML = `
    <button class="btn-green" id="pl-play"><i class="fas fa-play"></i> Play</button>
    <button class="btn-circle-sm" id="pl-shuffle"><i class="fas fa-shuffle"></i></button>
  `;
  tl.innerHTML = '';
  songs.forEach((s, i) => tl.appendChild(makeTrackItem(s, i, songs)));

  byId('pl-play').addEventListener('click', () => { if (songs.length) playSong(songs[0], songs); });
  byId('pl-shuffle').addEventListener('click', () => {
    const sh = [...songs].sort(() => Math.random() - .5);
    if (sh.length) playSong(sh[0], sh);
  });

  goSection('playlist');
}

/* ================================================================
   RENDER: SIDEBAR PLAYLISTS
   ================================================================ */
function renderSbPlaylists() {
  const c = byId('sb-playlists');
  if (!c) return;
  c.innerHTML = '';
  [...PLAYLISTS, ...ST.userPls].forEach(pl => {
    const d = document.createElement('div');
    d.className = 'sb-pl-item';
    d.textContent = pl.name;
    d.addEventListener('click', () => showPlaylistView(pl));
    c.appendChild(d);
  });
}

/* ================================================================
   CARD / TRACK BUILDERS
   ================================================================ */
function makeMusicCard(song, queue = ALL_SONGS) {
  const d = document.createElement('div');
  d.className = 'music-card'; d.dataset.songId = song.id;
  d.innerHTML = `
    <div class="mc-cover-wrap">
      <img class="mc-cover" src="${img(song.seed)}" alt="${song.title}" loading="lazy" />
      <button class="mc-play" data-song-id="${song.id}"><i class="fas fa-play"></i></button>
    </div>
    <div class="mc-title">${song.title}</div>
    <div class="mc-sub">${song.artist} · ${song.year}</div>
  `;
  const pb = d.querySelector('.mc-play');
  pb.addEventListener('click', e => { e.stopPropagation(); playSong(song, queue); });
  d.addEventListener('click', () => playSong(song, queue));
  return d;
}

function makeArtistCard(artist) {
  const d = document.createElement('div');
  d.className = 'artist-card';
  const queue = artist.songs.map(s => ({ ...s, artist: artist.name, artistId: artist.id }));
  d.innerHTML = `
    <div class="ac-avatar-wrap">
      <img class="ac-avatar" src="${img(artist.seed)}" alt="${artist.name}" loading="lazy" />
      <button class="mc-play" data-song-id="${queue[0]?.id}"><i class="fas fa-play"></i></button>
    </div>
    <div class="ac-name">${artist.name}</div>
    <div class="ac-genre">${artist.genre}</div>
  `;
  d.querySelector('.mc-play').addEventListener('click', e => { e.stopPropagation(); if (queue.length) playSong(queue[0], queue); });
  d.addEventListener('click', () => showArtistDetail(artist));
  return d;
}

function makePlaylistCard(pl) {
  const songs = pl.songIds.map(id => songById(id)).filter(Boolean);
  const d = document.createElement('div');
  d.className = 'music-card';
  d.innerHTML = `
    <div class="mc-cover-wrap">
      <img class="mc-cover" src="${img(pl.seed)}" alt="${pl.name}" loading="lazy" />
      <button class="mc-play"><i class="fas fa-play"></i></button>
    </div>
    <div class="mc-title">${pl.name}</div>
    <div class="mc-sub">${pl.desc}</div>
  `;
  d.querySelector('.mc-play').addEventListener('click', e => { e.stopPropagation(); if (songs.length) playSong(songs[0], songs); });
  d.addEventListener('click', () => showPlaylistView(pl));
  return d;
}

function makeTrackItem(song, index, queue) {
  const liked = isLiked(song.id);
  const playing = ST.song?.id === song.id;
  const d = document.createElement('div');
  d.className = `track-item${playing ? ' playing' : ''}`; d.dataset.songId = song.id;
  d.innerHTML = `
    <div class="ti-num">${index + 1}</div>
    <div class="ti-playing"><span></span><span></span><span></span></div>
    <img class="ti-thumb" src="${img(song.seed, 80)}" alt="${song.title}" loading="lazy" />
    <div class="ti-info">
      <div class="ti-title">${song.title}</div>
      <div class="ti-artist">${song.artist}</div>
    </div>
    <div class="ti-album">${song.album}</div>
    <button class="ti-like${liked ? ' liked' : ''}" data-song-id="${song.id}" title="${liked ? 'Unlike' : 'Like'}">
      <i class="${liked ? 'fas' : 'far'} fa-heart"></i>
    </button>
    <div class="ti-dur">${song.dur}</div>
  `;
  d.addEventListener('click', () => playSong(song, queue));
  d.querySelector('.ti-like').addEventListener('click', e => {
    e.stopPropagation(); toggleLike(song.id);
  });
  return d;
}

/* ================================================================
   PROGRESS SEEK
   ================================================================ */
function setupSeek() {
  const track = byId('prog-track');
  let dragging = false;
  function seek(e) {
    const rect = track.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    ST.progress = Math.floor(pct * ST.duration);
    updateProgUI();
  }
  track.addEventListener('mousedown', e => { dragging = true; seek(e); });
  document.addEventListener('mousemove', e => { if (dragging) seek(e); });
  document.addEventListener('mouseup', () => { dragging = false; });
  track.addEventListener('touchstart', e => { dragging = true; seek(e.touches[0]); }, { passive: true });
  document.addEventListener('touchmove', e => { if (dragging) seek(e.touches[0]); }, { passive: true });
  document.addEventListener('touchend', () => { dragging = false; });
}

/* ================================================================
   KEYBOARD
   ================================================================ */
function setupKeys() {
  document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    switch (e.code) {
      case 'Space': e.preventDefault(); togglePlay(); break;
      case 'ArrowRight': e.preventDefault(); playNext(); break;
      case 'ArrowLeft': e.preventDefault(); playPrev(); break;
      case 'KeyS': toggleShuffle(); break;
      case 'KeyR': cycleRepeat(); break;
      case 'KeyM': toggleMute(); break;
    }
  });
}

function toggleShuffle() {
  ST.shuffle = !ST.shuffle;
  byId('ctrl-shuffle').classList.toggle('active', ST.shuffle);
  toast(ST.shuffle ? 'Shuffle on' : 'Shuffle off');
}

function cycleRepeat() {
  ST.repeat = (ST.repeat + 1) % 3;
  byId('ctrl-repeat').classList.toggle('active', ST.repeat > 0);
  toast(['Repeat off', 'Repeat all', 'Repeat one'][ST.repeat]);
}

function toggleMute() {
  ST.muted = !ST.muted;
  const sl = byId('vol-slider');
  sl.value = ST.muted ? 0 : ST.volume;
  setVol(ST.muted ? 0 : ST.volume);
}

function setVol(v) {
  ST.volume = v;
  const icon = v === 0 ? 'fa-volume-xmark' : v < 40 ? 'fa-volume-low' : 'fa-volume-high';
  byId('vol-btn').querySelector('i').className = `fas ${icon}`;
  saveST();
}

/* ================================================================
   MODAL
   ================================================================ */
function openModal() {
  byId('modal-playlist').classList.remove('hidden');
  byId('pl-name-inp').focus();
}
function closeModal() {
  byId('modal-playlist').classList.add('hidden');
  byId('pl-name-inp').value = '';
  byId('pl-desc-inp').value = '';
}
function createPlaylist() {
  const name = byId('pl-name-inp').value.trim();
  if (!name) { toast('Enter a playlist name'); return; }
  const pl = {
    id: 'user_' + Date.now(),
    name,
    desc: byId('pl-desc-inp').value.trim(),
    seed: 'usr' + Date.now(),
    color: '#1db954',
    songIds: [],
  };
  ST.userPls.unshift(pl);
  saveST();
  renderSbPlaylists();
  renderLibrary();
  closeModal();
  toast(`✅  Playlist "${name}" created`);
}

/* ================================================================
   MOBILE SIDEBAR
   ================================================================ */
function closeSidebar() {
  byId('sidebar').classList.remove('open');
  byId('sidebar-overlay').classList.remove('open');
}

/* ================================================================
   EVENT LISTENERS
   ================================================================ */
function setupEvents() {

  // Nav links
  document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const sec = el.dataset.section;
      if (sec === 'artists') renderAllArtists();
      if (sec === 'library') renderLibrary();
      goSection(sec);
    });
  });

  // Liked songs btn
  byId('btn-liked').addEventListener('click', () => {
    renderLiked();
    goSection('liked');
  });

  // Create playlist
  byId('btn-create-playlist').addEventListener('click', () => { openModal(); closeSidebar(); });
  byId('modal-close').addEventListener('click', closeModal);
  byId('pl-save-btn').addEventListener('click', createPlaylist);
  byId('modal-playlist').addEventListener('click', e => {
    if (e.target === byId('modal-playlist')) closeModal();
  });

  // Player controls
  byId('ctrl-play').addEventListener('click', togglePlay);
  byId('ctrl-next').addEventListener('click', playNext);
  byId('ctrl-prev').addEventListener('click', playPrev);
  byId('ctrl-shuffle').addEventListener('click', toggleShuffle);
  byId('ctrl-repeat').addEventListener('click', cycleRepeat);
  byId('like-now').addEventListener('click', () => { if (ST.song) toggleLike(ST.song.id); });

  // Volume
  const vs = byId('vol-slider');
  vs.value = ST.volume;
  vs.addEventListener('input', () => setVol(parseInt(vs.value)));
  byId('vol-btn').addEventListener('click', toggleMute);

  // Hero play
  byId('hero-play').addEventListener('click', () => playSong(ALL_SONGS[0], ALL_SONGS));

  // Liked play
  byId('liked-play').addEventListener('click', () => {
    const songs = ST.liked.map(id => songById(id)).filter(Boolean);
    if (songs.length) playSong(songs[0], songs);
    else toast('Like some songs first!');
  });

  // Search
  const si = byId('search-input');
  const sc = byId('search-clear');
  si.addEventListener('input', () => {
    const q = si.value.trim();
    sc.classList.toggle('hidden', !q);
    if (q) {
      renderDropdown(q);
      if (ST.section !== 'search') goSection('search');
      showSearchResults(doSearch(q), `Results for "${q}"`);
      byId('genre-grid').classList.add('hidden');
    } else {
      byId('search-dropdown').classList.add('hidden');
      byId('search-results-wrap').classList.add('hidden');
      byId('genre-grid').classList.remove('hidden');
    }
  });
  sc.addEventListener('click', () => {
    si.value = ''; sc.classList.add('hidden');
    byId('search-dropdown').classList.add('hidden');
    byId('search-results-wrap').classList.add('hidden');
    byId('genre-grid').classList.remove('hidden');
    si.focus();
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.topbar-search')) byId('search-dropdown').classList.add('hidden');
  });

  // Language tabs
  document.querySelectorAll('.lang-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLangGrid(btn.dataset.lang);
    });
  });

  // Library filters
  document.querySelectorAll('.lib-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lib-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLibrary(btn.dataset.filter);
    });
  });

  // Mobile menu
  byId('mob-menu-btn').addEventListener('click', () => {
    byId('sidebar').classList.toggle('open');
    byId('sidebar-overlay').classList.toggle('open');
  });
  byId('sidebar-overlay').addEventListener('click', closeSidebar);

  // History arrows
  byId('hist-back').addEventListener('click', () => history.back());
  byId('hist-fwd').addEventListener('click', () => history.forward());

  // Seek + keyboard
  setupSeek();
  setupKeys();
}

/* ================================================================
   INIT
   ================================================================ */
function init() {
  loadST();
  renderHome();
  renderGenres();
  renderLibrary();
  renderSbPlaylists();

  // Pre-load first song in player (not playing)
  const first = ALL_SONGS[0];
  byId('now-img').src = img(first.seed, 80);
  byId('now-title').textContent = first.title;
  byId('now-artist').textContent = first.artist;
  byId('ptime-tot').textContent = first.dur;
  ST.song = first; ST.queue = ALL_SONGS; ST.queueIdx = 0;
  ST.duration = dur2s(first.dur);

  setupEvents();

  // Remove loading screen
  setTimeout(() => {
    const ls = byId('loading-screen');
    ls.classList.add('out');
    setTimeout(() => ls.remove(), 520);
  }, 1800);
}

document.addEventListener('DOMContentLoaded', init);