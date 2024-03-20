//imports
import NewsListing from "../models/newslisting";
//create the data to use for news app
/*1= id
  2= Type 
  3= Headline
  4= Date
  5= Author
  6= Description
  7= Image url*/
export const NEWSLISTINGS = [
  new NewsListing(
    1,
    "USA",

    "Congress announces a deal to avoid a shutdown, resolving homeland security dispute",
    "March 18, 2024",
    " Sahil Kapur, Rebecca Kaplan and Ali Vitali",
    "NBC News",
    "Congressional leaders and President Joe Biden announced a deal Tuesday morning to fund the government ahead of a weekend deadline, breaking an impasse regarding money for the Department of Homeland Security, which had held up talks.",
    "https://www.timeforkids.com/wp-content/uploads/2021/04/congress-cover-1.jpg?w=1024",
  ),
  new NewsListing(
    2,
    "USA",

    "EPA bans last form of asbestos used in United States",
    "March 18, 2024",
    "Jen Christensen",
    "CNN",
    "The US Environmental Protection Agency said Monday that it is taking a “historic” step by banning ongoing uses of asbestos, which has long been linked to multiple types of cancer",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1267659690.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
  ),
  new NewsListing(
    3,
    "USA",

    "US Economy News Today: Homebuilders Feeling The Most Optimistic Since July",
    "March 18, 2024",
    "Taylor Tompkins and Diccon Hyatt",
    "Investopedia",
    "Today, we will look at what living paycheck to paycheck actually means and homebuilders are feeling the most optimistic since last summer.",
    "https://www.investopedia.com/thmb/iJasiz5DPbhpptm1IctLhaGGfj8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1534378554-9f1a820c6c954427bf1fc68706328487.jpg",
  ),
  new NewsListing(
    4,
    "USA",

    "US Weather: Freeze Warning issued, cold waves may hit 25 million people in 11 states",
    "March 18, 2024",
    "The Feed",
    "The Economic Times",
    "Though spring officially arrives on Tuesday, March 19, more than 25 million people in 11 states from Texas to North Carolina have been warned of cold waves.",
    "https://img.etimg.com/thumb/msid-108595659,width-300,height-225,imgsize-235962,resizemode-75/us-weather-freeze-warning-issued-cold-waves-may-hit-25-million-people-in-11-states.jpg",
  ),
  new NewsListing(
    5,
    "USA",

    "Stock market today: Asian shares are mixed after Bank of Japan ups key rate for 1st time in 17 years",
    "March 18, 2024",
    "ELAINE KURTENBACH",
    "Agency",
    "ABC News",
    "https://nypost.com/wp-content/uploads/sites/2/2024/01/stock-exchange-market-chart-stock-75163613.jpg?resize=744,496&quality=75&strip=all",
  ),
  new NewsListing(
    6,
    "World",

    "Gangs unleash new attacks on upscale areas in Haiti’s capital, with at least a dozen killed nearby",
    "March 18, 2024",
    "PIERRE-RICHARD LUXAMA AND ODELYN JOSEPH",
    "AP",
    "Gangs attacked two upscale neighborhoods in Haiti’s capital early Monday in a rampage that left at least a dozen people dead in surrounding areas.",
    "https://dims.apnews.com/dims4/default/c5a514f/2147483647/strip/true/crop/4500x2992+0+0/resize/800x532!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fba%2Ff9%2F8f2622d2a17b7203d284b8d700e4%2F3044d27e9b0b496887c354a63762a0ac",
  ),
  new NewsListing(
    7,
    "World",

    "Commercial Bank of Ethiopia glitch lets customers withdraw millions",
    "March 18, 2024",
    "Kalkidan Yibeltal",
    "BBC",
    "Ethiopia's biggest commercial bank is scrambling to recoup large sums of money withdrawn by customers after a systems glitch.",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3F26/production/_132966161_gettyimages-1824607682.jpg.webp",
  ),
  new NewsListing(
    8,
    "World",

    "Abandoned slate mine in Wales now world's deepest hotel",
    "March 17, 2024",
    " Ian Lee",
    "CBS News",
    "from the Deep Sleep Hotel, you'll see none of that, but it's no less spectacular, and getting there is half the adventure. At check-in, guests receive a hard hat, head lamp, boots and a mountain guide.",
    "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/17/121298b7-148e-420a-918c-6cc4269a051a/thumbnail/620x349/afa2e8d1bc7f1fe52d02900c803e92ed/0316-wn-lee2.jpg?v=b64ebf3cd0145765e4923158152de5b1",
  ),
  new NewsListing(
    9,
    "World",

    "Australia slammed for Afghanistan cricket snub over ‘rights for women",
    "March 19, 2024",
    " Al Jazeera Staff",
    "Alijazeera",
    "Cricket Australia (CA) has been slammed after it postponed a bilateral men’s T20 cricket series against Afghanistan citing “deteriorating human rights for women and girls in the country under Taliban rule”.",
    "https://www.aljazeera.com/wp-content/uploads/2024/03/2023-11-07T000000Z_2001452573_UP1EJB711AZ54_RTRMADP_3_CRICKET-WORLDCUP-AUS-AFG-1710849376.jpg?resize=770%2C513&quality=80",
  ),
  new NewsListing(
    10,
    "World",

    "Nearly naked John Cena presents Oscar for best costume design at 2024 Academy Awards",
    "March 11, 2024",
    "Rishikesh Rajagopalan",
    "CBS News",
    "Nonetheless, the former WWE champion fulfilled his duty, sidling up to the microphone and appearing fully naked save for a prestigious and well-placed Oscars envelope. ",
    "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/11/035b65ec-f29f-49d7-8706-6a10f8b44e86/thumbnail/620x409/807bcc60993cb1c8b4872b9c30ec805e/screenshot-2024-03-10-at-10-19-36-pm.png?v=b64ebf3cd0145765e4923158152de5b1",
  ),
  new NewsListing(
    11,
    "Sports",

    "Timberwolves star Anthony Edwards throws down ridiculous dunk of the year over John Collins in win vs. Jazz",
    "Mar 19, 2024",
    "Ryan Young",
    "Yahoo Sports",
    "The Minnesota Timberwolves star threw down an absolutely ridiculous dunk in the second half of their 114-104 win over the Utah Jazz at the Delta Center on Monday night. Edwards rose up on a fast break and didn’t flinch while putting Jazz forward John Collins on a poster.",
    "https://s.yimg.com/ny/api/res/1.2/pO66kVesxzvfiicj7ClGMg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAwO2NmPXdlYnA-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/81f16b20-e59e-11ee-b7fd-68372646f2cf",
  ),
  new NewsListing(
    12,
    "Sports",

    "How Essential is the No. 1 seed for the OKC Thunder?",
    "March 19, 2024",
    "CHASE GEMES",
    "Inside the Thunder",
    "1234 Magnolia Dr",
    "https://imageio.forbes.com/specials-images/imageserve/6595d8177e11763fa4fcc171/Oklahoma-City-Thunder-v-Chicago-Bulls/960x0.jpg?format=jpg&width=1440",
  ),
  new NewsListing(
    13,
    "Sports",

    "Kentucky has one of the best football, basketball coaching tandems in college sports",
    "March 19, 2024",
    "Nick Roush",
    "KSR",
    "Kentucky has a legitimate claim for the top spot. Mark Stoops has more wins than any other Kentucky football coach and a seven-year streak of postseason appearances. On the hardwood, there aren’t many active college basketball coaches with a more impressive resume than John Calipari.",
    "https://cdn.vox-cdn.com/thumbor/4PHzrGOqCqlKBTt-Sy8YzxFZTIg=/0x0:6000x3990/920x613/filters:focal(2520x1515:3480x2475):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73191048/usa_today_22190281.0.jpg",
  ),
  new NewsListing(
    14,
    "Sports",
    "South Korean actress Jeon Jong-seo appears to steal hearts of Dodgers players before game",
    "March 18, 2024",
    "Ryan Gaydos",
    "Fox Sports",
    "South Korean actress Jeon Jong-seo threw out the first pitch before the Los Angeles Dodgers' exhibition baseball game against the Kiwoom Heroes on Sunday and appeared to make a mark.",
    "https://images.foxtv.com/static.foxla.com/www.foxla.com/content/uploads/2024/03/764/432/GettyImages-2082132023.jpg?ve=1&tl=1",
  ),
  new NewsListing(
    "Sports",

    "NIT is practically obsolete as more teams just blow it off. Blame the NCAA.",
    "March 18, 2024",
    "Author",
    "Dan Wolken",
    "After all these years, we’ve finally figured out what gets college basketball fans fired up about the NIT: The audacity of teams who don’t want to play in it. ",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/18/USAT/73022142007-stjohns.jpg?width=660&height=443&fit=crop&format=pjpg&auto=webp",
  ),
  
];