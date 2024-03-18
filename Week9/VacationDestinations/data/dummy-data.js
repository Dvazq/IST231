//imports
import State from "../models/states";

import Destination from "../models/destinations";
//create state for each of 10 countries
export const COUNTIRES = [
  new State("s1", "USA", "#1100ff"), // Red
  new State("s2", "Germany", "#8b0087"), // Blue
  new State("s3", "Poland", "#2800c6"), // Green
  new State("s4", "Japan", "#ff0000"), // Orange
  new State("s5", "South Korea", "#eeff04"), // Purple
  new State("s6", "Brazil", "#226d04"), // Yellow
  new State("s7", "Russia ", "#03a9f4"), // Light Blue
  new State("s8", "Canada", "#8bc34a"), // Light Green
  new State("s9", "India", "#ff5722"), // Deep Orange
  new State("s10", "Mexico", "#673ab7"), // Deep Purple
];
//create a 2 destination spots for each country
export const DESTINATIONS = [
  new Destination(
    "c1",
    "s1",
    "The Strip, Las Vegas",
    500,
    1931,
    4.5,
    "https://images.app.goo.gl/WEZqZHfxc4LWoeQx9"
  ),
  new Destination(
    "c2",
    "s1",
    "Yellow Stone National Park",
    40,
    1872,
    4.0,
    "https://images.app.goo.gl/hi2Q3EyJce7Ys5Rb7"
  ),
  new Destination(
    "c3",
    "s2",
    "Neuschwanstein Castle",
    20,
    1869,
    4.2,
    "https://images.app.goo.gl/KK4tURC5JMm6fGDN7"
  ),
  new Destination(
    "c4",
    "s2",
    "Reichstag Building",
    0,
    1894,
    4.7,
    "https://images.app.goo.gl/wdipuqvftSJnCwWR8"
  ),
  new Destination(
    "c5",
    "s3",
    "Energylandia",
    150,
    2014,
    4.8,
    "https://images.app.goo.gl/1RjDGhRn6mmepcAT6"
  ),
  new Destination(
    "c6",
    "s3",
    "Rynek Glowny",
    100,
    1257,
    4.8,
    "https://images.app.goo.gl/GUMTSuZbEBH1s3Km7"
  ),
  new Destination(
    "c7",
    "s4",
    "Osaka Castle",
    5,
    1583,
    4.4,
    "https://images.app.goo.gl/7wK5fLakp6meK97EA"
  ),
  new Destination(
    "c8",
    "s4",
    "Senso-ji",
    0,
    628,
    4.5,
    "https://images.app.goo.gl/RL4mv1dBVKAPSY3h9"
  ),
  new Destination(
    "c9",
    "s5",
    "Gyeongbokgung Palace",
    3,
    1395,
    4.6,
    "https://images.app.goo.gl/vN6fiyM8D7pvTXJS7"
  ),
  new Destination(
    "c10",
    "s5",
    "N Seoul Tower",
    17,
    1969,
    4.5,
    "https://images.app.goo.gl/kZ34T8oyZJ2z1kfN7"
  ),
  new Destination(
    "c11",
    "s6",
    "Christ the Redeemer",
    12,
    1922,
    4.8,
    "https://images.app.goo.gl/LwyoCgLfZ6icGSBZA"
  ),
  new Destination(
    "c12",
    "s6",
    "Iguaza Falls",
    25,
    1541,
    4.9,
    "https://images.app.goo.gl/BgbdixxHEcfQ7whd9"
  ),
  new Destination(
    "c13",
    "s7",
    "St. Basils Cathedral",
    8,
    155,
    4.8,
    "https://images.app.goo.gl/qzgk2PejD1dZz6a16"
  ),
  new Destination(
    "c14",
    "s7",
    "The Moscow Kremlin",
    9,
    1147,
    4.8,
    "https://images.app.goo.gl/Giz3u38g5rdKyvhM8"
  ),
  new Destination(
    "c15",
    "s8",
    "Niagara Falls",
    0,
    1812,
    4.8,
    "https://images.app.goo.gl/1BbybLZbp2BqA98V6"
  ),
  new Destination(
    "c16",
    "s8",
    "CN Tower",
    34,
    1976,
    4.6,
    "https://images.app.goo.gl/qiDZvSFUdwsFddNm8"
  ),
  new Destination(
    "c17",
    "s9",
    "Taj Mahal",
    14,
    1631,
    4.6,
    "https://images.app.goo.gl/kLopLbD7ML2JEyDq7"
  ),
  new Destination(
    "c18",
    "s9",
    "Sri Harmandir Sahib",
    0,
    1604,
    4.9,
    "https://images.app.goo.gl/JAGJWq8SmSPLQFpT8"
  ),
  new Destination(
    "c19",
    "s10",
    "Chichen Itza",
    6,
    100,
    4.8,
    "https://images.app.goo.gl/WmwTNvBiYyxr7Hdm8"
  ),
  new Destination(
    "c20",
    "s10",
    "Palacio de Bellas Artes",
    5,
    1904,
    4.8,
    "https://images.app.goo.gl/2KkW8E3HpqmpAJF88"
  ),
];
