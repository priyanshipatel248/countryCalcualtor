import { Dimensions } from "react-native";
import { images } from "./images";

export interface Country {
  name: string;
  code: string;
  flag: string;
  currency: string;
}

export const COUNTRIES: {[key: string]: Country[]} = {
  A: [
    {name: 'Afghanistan', code: 'AF', flag: '🇦🇫', currency: 'AFN'},
    {name: 'Argentina', code: 'AR', flag: '🇦🇷', currency: 'ARS'},
    {name: 'Australia', code: 'AU', flag: '🇦🇺', currency: 'AUD'},
    {name: 'Andorra', code: 'AD', flag: '🇦🇩', currency: 'EUR'},
  ],
  B: [
    {name: 'Bahamas', code: 'BS', flag: '🇧🇸', currency: 'BSD'},
    {name: 'Bahrain', code: 'BH', flag: '🇧🇭', currency: 'BHD'},
    {name: 'Bangladesh', code: 'BD', flag: '🇧🇩', currency: 'BDT'},
    {name: 'Barbados', code: 'BB', flag: '🇧🇧', currency: 'BBD'},
    {name: 'Brazil', code: 'BR', flag: '🇧🇷', currency: 'BRL'},
  ],
  C: [
    {name: 'Canada', code: 'CA', flag: '🇨🇦', currency: 'CAD'},
    {name: 'China', code: 'CN', flag: '🇨🇳', currency: 'CNY'},
    {name: 'Colombia', code: 'CO', flag: '🇨🇴', currency: 'COP'},
  ],
  I: [
    {name: 'India', code: 'IN', flag: '🇮🇳', currency: 'INR'},
    {name: 'Indonesia', code: 'ID', flag: '🇮🇩', currency: 'IDR'},
    {name: 'Ireland', code: 'IE', flag: '🇮🇪', currency: 'EUR'},
  ],
  U: [
    {name: 'United Kingdom', code: 'GB', flag: '🇬🇧', currency: 'GBP'},
    {name: 'United States', code: 'US', flag: '🇺🇸', currency: 'USD'},
    {name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', currency: 'AED'},
  ],
};

export  const data = [
    { label: 'IN', value: 'IN' ,image:images.country1},
    { label: 'GER', value: 'GER',image:images.country2},
    { label: 'CHINA', value: 'CHINA',image:images.country3 },
    { label: 'KOREA', value: 'KOREA',image:images.country4 },
    { label: 'USA', value: 'USA',image:images.country },
]

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
