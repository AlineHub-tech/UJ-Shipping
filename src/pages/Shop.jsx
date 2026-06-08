import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, X, Smartphone } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import '../styles/Shop.css';

import Img_1_0 from '../assets/1.jpg';
import Img_1_1 from '../assets/1 (1).jpg';
import Img_1_2 from '../assets/1 (2).jpg';
import Img_1_3 from '../assets/1 (3).jpg';
import Img_1_4 from '../assets/1 (4).jpg';
import Img_1_5 from '../assets/1 (5).jpg';
import Img_1_6 from '../assets/1 (6).jpg';
import Img_1_7 from '../assets/1 (7).jpg';
import Img_1_8 from '../assets/1 (8).jpg';
import Img_1_9 from '../assets/1 (9).jpg';
import Img_1_10 from '../assets/1 (10).jpg';
import Img_1_11 from '../assets/1 (11).jpg';

import Img_2_1 from '../assets/2 (1).jpg';
import Img_2_2 from '../assets/2 (2).jpg';
import Img_2_3 from '../assets/2 (3).jpg';
import Img_2_4 from '../assets/2 (4).jpg';
import Img_2_5 from '../assets/2 (5).jpg';
import Img_2_6 from '../assets/2 (6).jpg';
import Img_2_7 from '../assets/2 (7).jpg';
import Img_2_8 from '../assets/2 (8).jpg';
import Img_2_9 from '../assets/2 (9).jpg';

import Img_3_2 from '../assets/3 (2).jpg';
import Img_3_3 from '../assets/3 (3).jpg';

import Img_4_1 from '../assets/4 (1).jpg';
import Img_4_2 from '../assets/4 (2).jpg';
import Img_4_3 from '../assets/4 (3).jpg';
import Img_4_4 from '../assets/4 (4).jpg';

import Img_5_2 from '../assets/5 (2).jpg';
import Img_5_4 from '../assets/5 (4).jpg';
import Img_5_5 from '../assets/5 (5).jpg';

import Img_6_2 from '../assets/6 (2).jpg';
import Img_6_3 from '../assets/6 (3).jpg';
import Img_6_4 from '../assets/6 (4).jpg';

import Img_7_1 from '../assets/7 (1).jpg';
import Img_7_3 from '../assets/7 (3).jpg';
import Img_7_4 from '../assets/7 (4).jpg';

import Img_8_1 from '../assets/8 (1).jpg';

import Img_9_1 from '../assets/9 (1).jpg';
import Img_9_2 from '../assets/9 (2).jpg';
import Img_9_3 from '../assets/9 (3).jpg';
import Img_9_4 from '../assets/9 (4).jpg';
import Img_9_5 from '../assets/9 (5).jpg';
import Img_9_6 from '../assets/9 (6).jpg';


import Img_10_2 from '../assets/10 (2).jpg';

import Img_11_1 from '../assets/11 (1).jpg';
import Img_11_2 from '../assets/11 (2).jpg';


import Img_12_2 from '../assets/12 (2).jpg';


import Img_13_4 from '../assets/13 (4).jpg';

import Img_14_1 from '../assets/14 (1).jpg';
import Img_14_3 from '../assets/14 (3).jpg';

import Img_15_1 from '../assets/15 (1).jpg';


import Img_16_1 from '../assets/16 (1).jpg';
import Img_16_2 from '../assets/16 (2).jpg';
import Img_16_3 from '../assets/16 (3).jpg';
import Img_16_4 from '../assets/16 (4).jpg';
import Img_16_5 from '../assets/16 (5).jpg';
import Img_16_6 from '../assets/16 (6).jpg';

import Img_17_1 from '../assets/17 (1).jpg';
import Img_17_2 from '../assets/17 (2).jpg';
import Img_17_3 from '../assets/17 (3).jpg';
import Img_17_4 from '../assets/17 (4).jpg';


import Img_18_4 from '../assets/18 (4).jpg';
import Img_18_6 from '../assets/18 (6).jpg';

import Img_19_1 from '../assets/19 (1).jpg';
import Img_19_4 from '../assets/19 (4).jpg';

import Img_20_1 from '../assets/20 (1).jpg';
import Img_20_2 from '../assets/20 (2).jpg';

import Img_21_0 from '../assets/21.jpg';
import Img_21_1 from '../assets/21 (1).jpg';
import Img_21_3 from '../assets/21 (3).jpg';
import Img_21_4 from '../assets/21 (4).jpg';
import Img_21_5 from '../assets/21 (5).jpg';


import Img_22_5 from '../assets/22 (5).jpg';
import Img_22_10 from '../assets/22 (10).jpg';

import Img_23_0 from '../assets/23.jpeg';

const PRODUCTS_DATA = [
  {
    id: 1001,
    name: 'Premium Satchel',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_0,
    price: 23600,
    rating: 4.6,
    sizes: ['One Size'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1002,
    name: 'Boutique Crossbody',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_1,
    price: 25200,
    rating: 4.7,
    sizes: ['One Size'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  {
    id: 1003,
    name: 'Elegant Clutch',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_2,
    price: 24700,
    rating: 4.8,
    sizes: ['One Size'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
  {
    id: 1004,
    name: 'Modern Carryall',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_3,
    price: 26300,
    rating: 4.9,
    sizes: ['One Size'],
    colors: ['Charcoal', 'Rust', 'Oat']
  },
  {
    id: 1005,
    name: 'Heritage Sling',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_4,
    price: 27900,
    rating: 4.5,
    sizes: ['One Size'],
    colors: ['Cocoa', 'Mist', 'Sage']
  },
  {
    id: 1006,
    name: 'Classic Hobo',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_5,
    price: 27400,
    rating: 4.6,
    sizes: ['One Size'],
    colors: ['Chocolate', 'Champagne', 'White']
  },
  {
    id: 1007,
    name: 'Refined Messenger',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_6,
    price: 22700,
    rating: 4.7,
    sizes: ['One Size'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1008,
    name: 'Silk Bucket Bag',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_7,
    price: 24300,
    rating: 4.8,
    sizes: ['One Size'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },
  {
    id: 1009,
    name: 'Velvet Tote',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_8,
    price: 23800,
    rating: 4.9,
    sizes: ['One Size'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1010,
    name: 'Radiant Shoulder Bag',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_9,
    price: 25400,
    rating: 4.5,
    sizes: ['One Size'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1011,
    name: 'Sleek Satchel',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_10,
    price: 27000,
    rating: 4.6,
    sizes: ['One Size'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1012,
    name: 'Urban Crossbody',
    group: 'Group 1',
    category: 'bags',
    image: Img_1_11,
    price: 26500,
    rating: 4.7,
    sizes: ['One Size'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  
  {
    id: 1015,
    name: 'Soft Shift Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_1,
    price: 34900,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Chocolate', 'Champagne', 'White']
  },
  {
    id: 1016,
    name: 'Structured A-Line Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_2,
    price: 36500,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1017,
    name: 'Tailored Sheath Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_3,
    price: 38100,
    rating: 4.7,
    sizes: ['S', 'M', 'L'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },
  {
    id: 1018,
    name: 'Signature Gown',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_4,
    price: 37600,
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1019,
    name: 'Luxury Maxi Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_5,
    price: 39200,
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1020,
    name: 'Premium Midi Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_6,
    price: 40800,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1021,
    name: 'Boutique Cocktail Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_7,
    price: 34000,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  {
    id: 1022,
    name: 'Elegant Slip Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_8,
    price: 35600,
    rating: 4.7,
    sizes: ['S', 'M', 'L'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
  {
    id: 1023,
    name: 'Modern Wrap Dress',
    group: 'Group 2',
    category: 'dresses',
    image: Img_2_9,
    price: 37200,
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['Charcoal', 'Rust', 'Oat']
  },

  {
    id: 1025,
    name: 'Refined A-Line Dress',
    group: 'Group 3',
    category: 'dresses',
    image: Img_3_2,
    price: 38300,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1026,
    name: 'Silk Sheath Dress',
    group: 'Group 3',
    category: 'dresses',
    image: Img_3_3,
    price: 39900,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },

  {
    id: 1028,
    name: 'Sleek Cable Knit Sweater',
    group: 'Group 4',
    category: 'valise',
    image: Img_4_1,
    price: 19700,
    rating: 4.8,
    sizes: ['Free Size'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1029,
    name: 'Urban Ribbed Sweater',
    group: 'Group 4',
    category: 'valise',
    image: Img_4_2,
    price: 21300,
    rating: 4.9,
    sizes: ['Free Size'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  {
    id: 1030,
    name: 'Resort Oversized Sweater',
    group: 'Group 4',
    category: 'valise',
    image: Img_4_3,
    price: 20800,
    rating: 4.5,
    sizes: ['Free Size'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
  {
    id: 1031,
    name: 'Chic Knit Sweater',
    group: 'Group 4',
    category: 'valise',
    image: Img_4_4,
    price: 22400,
    rating: 4.6,
    sizes: ['Free Size'],
    colors: ['Charcoal', 'Rust', 'Oat']
  },

  {
    id: 1033,
    name: 'Structured Matching Outfit',
    group: 'Group 5',
    category: 'complete',
    image: Img_5_2,
    price: 46500,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  
  {
    id: 1035,
    name: 'Signature Structured Set',
    group: 'Group 5',
    category: 'complete',
    image: Img_5_4,
    price: 43400,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1036,
    name: 'Luxury Layered Set',
    group: 'Group 5',
    category: 'complete',
    image: Img_5_5,
    price: 42900,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },

  {
    id: 1038,
    name: 'Elegant Slip Dress',
    group: 'Group 6',
    category: 'dresses',
    image: Img_6_2,
    price: 38100,
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
  {
    id: 1039,
    name: 'Modern Wrap Dress',
    group: 'Group 6',
    category: 'dresses',
    image: Img_6_3,
    price: 37600,
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    colors: ['Charcoal', 'Rust', 'Oat']
  },
  {
    id: 1040,
    name: 'Heritage Evening Dress',
    group: 'Group 6',
    category: 'dresses',
    image: Img_6_4,
    price: 39200,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Cocoa', 'Mist', 'Sage']
  },
  {
    id: 1041,
    name: 'Refined A-Line Dress',
    group: 'Group 7',
    category: 'dresses',
    image: Img_7_1,
    price: 40800,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },

  {
    id: 1043,
    name: 'Velvet Gown',
    group: 'Group 7',
    category: 'dresses',
    image: Img_7_3,
    price: 35600,
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1044,
    name: 'Radiant Maxi Dress',
    group: 'Group 7',
    category: 'dresses',
    image: Img_7_4,
    price: 37200,
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1045,
    name: 'Urban Layered Set',
    group: 'Group 8',
    category: 'complete',
    image: Img_8_1,
    price: 44700,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  
  {
    id: 1049,
    name: 'Structured Structured Set',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_1,
    price: 42700,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1050,
    name: 'Tailored Layered Set',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_2,
    price: 44300,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },
  {
    id: 1051,
    name: 'Signature Coordinated Set',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_3,
    price: 43800,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1052,
    name: 'Luxury Two-Piece Set',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_4,
    price: 45400,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1053,
    name: 'Premium Matching Outfit',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_5,
    price: 47000,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1054,
    name: 'Boutique Resort Set',
    group: 'Group 9',
    category: 'complete',
    image: Img_9_6,
    price: 46500,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blush', 'Cream', 'Forest']
  },
 
  {
    id: 1056,
    name: 'Heritage Sling',
    group: 'Group 10',
    category: 'bags',
    image: Img_10_2,
    price: 23400,
    rating: 4.6,
    sizes: ['One Size'],
    colors: ['Cocoa', 'Mist', 'Sage']
  },
  {
    id: 1057,
    name: 'Refined Messenger',
    group: 'Group 11',
    category: 'bags',
    image: Img_11_1,
    price: 22900,
    rating: 4.7,
    sizes: ['One Size'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1058,
    name: 'Silk Bucket Bag',
    group: 'Group 11',
    category: 'bags',
    image: Img_11_2,
    price: 24500,
    rating: 4.8,
    sizes: ['One Size'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },
 
  {
    id: 1060,
    name: 'Sleek Midi Dress',
    group: 'Group 12',
    category: 'dresses',
    image: Img_12_2,
    price: 37600,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  

 
  {
    id: 1065,
    name: 'Structured A-Line Dress',
    group: 'Group 13',
    category: 'dresses',
    image: Img_13_4,
    price: 37200,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1066,
    name: 'Signature Tote',
    group: 'Group 14',
    category: 'bags',
    image: Img_14_1,
    price: 24700,
    rating: 4.6,
    sizes: ['One Size'],
    colors: ['Black', 'Bronze', 'Olive']
  },
 
  {
    id: 1068,
    name: 'Premium Satchel',
    group: 'Group 14',
    category: 'bags',
    image: Img_14_3,
    price: 27900,
    rating: 4.8,
    sizes: ['One Size'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1069,
    name: 'Elegant Oversized Sweater',
    group: 'Group 15',
    category: 'valise',
    image: Img_15_1,
    price: 24400,
    rating: 4.9,
    sizes: ['Free Size'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
 
  {
    id: 1071,
    name: 'Classic Resort Set',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_1,
    price: 44300,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Chocolate', 'Champagne', 'White']
  },
  {
    id: 1072,
    name: 'Refined Structured Set',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_2,
    price: 43800,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  {
    id: 1073,
    name: 'Silk Layered Set',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_3,
    price: 45400,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ruby', 'Graphite', 'Cream']
  },
  {
    id: 1074,
    name: 'Velvet Coordinated Set',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_4,
    price: 47000,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1075,
    name: 'Radiant Two-Piece Set',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_5,
    price: 46500,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1076,
    name: 'Sleek Matching Outfit',
    group: 'Group 16',
    category: 'complete',
    image: Img_16_6,
    price: 48100,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  {
    id: 1077,
    name: 'Resort Slip Dress',
    group: 'Group 17',
    category: 'dresses',
    image: Img_17_1,
    price: 35400,
    rating: 4.7,
    sizes: ['S', 'M', 'L'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
  {
    id: 1078,
    name: 'Chic Wrap Dress',
    group: 'Group 17',
    category: 'dresses',
    image: Img_17_2,
    price: 34900,
    rating: 4.8,
    sizes: ['S', 'M', 'L'],
    colors: ['Charcoal', 'Rust', 'Oat']
  },
  {
    id: 1079,
    name: 'Royal Evening Dress',
    group: 'Group 17',
    category: 'dresses',
    image: Img_17_3,
    price: 36500,
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    colors: ['Cocoa', 'Mist', 'Sage']
  },
  {
    id: 1080,
    name: 'Soft Shift Dress',
    group: 'Group 17',
    category: 'dresses',
    image: Img_17_4,
    price: 38100,
    rating: 4.5,
    sizes: ['S', 'M', 'L'],
    colors: ['Chocolate', 'Champagne', 'White']
  },

  
  {
    id: 1084,
    name: 'Premium Midi Dress',
    group: 'Group 18',
    category: 'dresses',
    image: Img_18_4,
    price: 34000,
    rating: 4.9,
    sizes: ['S', 'M', 'L'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  
  {
    id: 1086,
    name: 'Elegant Slip Dress',
    group: 'Group 18',
    category: 'dresses',
    image: Img_18_6,
    price: 37200,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },

  {
    id: 1089,
    name: 'Refined Messenger',
    group: 'Group 19',
    category: 'bags',
    image: Img_19_1,
    price: 27900,
    rating: 4.9,
    sizes: ['One Size'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  
  {
    id: 1092,
    name: 'Radiant Shoulder Bag',
    group: 'Group 19',
    category: 'bags',
    image: Img_19_4,
    price: 24300,
    rating: 4.7,
    sizes: ['One Size'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1093,
    name: 'Urban Layered Set',
    group: 'Group 20',
    category: 'complete',
    image: Img_20_1,
    price: 43800,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blush', 'Cream', 'Forest']
  },
  {
    id: 1094,
    name: 'Resort Coordinated Set',
    group: 'Group 20',
    category: 'complete',
    image: Img_20_2,
    price: 45400,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Maroon', 'Pearl', 'Taupe']
  },
 
  {
    id: 1096,
    name: 'Soft Resort Set',
    group: 'Group 21',
    category: 'complete',
    image: Img_21_0,
    price: 46500,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Chocolate', 'Champagne', 'White']
  },
  {
    id: 1097,
    name: 'Structured Structured Set',
    group: 'Group 21',
    category: 'complete',
    image: Img_21_1,
    price: 48100,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },

  {
    id: 1099,
    name: 'Signature Coordinated Set',
    group: 'Group 21',
    category: 'complete',
    image: Img_21_3,
    price: 42900,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Bronze', 'Olive']
  },
  {
    id: 1100,
    name: 'Luxury Two-Piece Set',
    group: 'Group 21',
    category: 'complete',
    image: Img_21_4,
    price: 44500,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Ivory', 'Stone']
  },
  {
    id: 1101,
    name: 'Premium Matching Outfit',
    group: 'Group 21',
    category: 'complete',
    image: Img_21_5,
    price: 46100,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Gold', 'Sand']
  },
  
  {
    id: 1106,
    name: 'Refined A-Line Dress',
    group: 'Group 22',
    category: 'dresses',
    image: Img_22_5,
    price: 35600,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
  
  {
    id: 1111,
    name: 'Urban Cocktail Dress',
    group: 'Group 22',
    category: 'dresses',
    image: Img_22_10,
    price: 39400,
    rating: 4.6,
    sizes: ['S', 'M', 'L'],
    colors: ['Blush', 'Cream', 'Forest']
  },
 
  {
    id: 1115,
    name: 'Structured Coordinated Set',
    group: 'Group 23',
    category: 'complete',
    image: Img_23_0,
    price: 45400,
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Inkwell', 'Moss', 'Beige']
  },
];

const FILTERS = [
  { key: 'all', label: 'All Drops' },
  { key: 'dresses', label: 'Elegant Dresses' },
  { key: 'complete', label: 'Matching Sets' },
  { key: 'valise', label: 'Valise Sweaters' },
  { key: 'bags', label: 'Handbags' },
];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", selectedSize: "", selectedColor: "" });

  const filteredByCategory = activeFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((product) => product.category === activeFilter);

  const filteredProducts = filteredByCategory.filter((product) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      (product.group || '').toLowerCase().includes(q) ||
      (product.category || '').toLowerCase().includes(q)
    );
  });

  // DOM-based fallback filter: ensure visible results update immediately when searchQuery changes
  useEffect(() => {
    try {
      const q = (searchQuery || '').toLowerCase().trim();
      const cards = Array.from(document.querySelectorAll('.uj-product-card'));
      cards.forEach((card) => {
        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const meta = (card.querySelector('.uj-sizes')?.textContent || '') + ' ' + (card.querySelector('.uj-colors')?.textContent || '');
        const combined = (card.textContent || '').toLowerCase();
        const match = !q || title.includes(q) || meta.toLowerCase().includes(q) || combined.includes(q);
        card.style.display = match ? '' : 'none';
      });
    } catch (err) {
      // silent
    }
  }, [searchQuery]);

  // Attach a native input listener so plain typing always updates React state
  useEffect(() => {
    const el = document.querySelector('.uj-shop-search-input');
    if (!el) return;
    const handler = (e) => setSearchQuery(e.target.value || '');
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, []);

  const openOrderModal = (product) => {
    setSelectedProduct(product);
    setOrderForm({
      name: "",
      phone: "",
      selectedSize: product.sizes[0] || "",
      selectedColor: product.colors[0] || ""
    });
  };

  const closeOrderModal = () => setSelectedProduct(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const trimmedName = orderForm.name.trim();
    const normalizedPhone = orderForm.phone.replace(/\D/g, "");

    if (!trimmedName || !normalizedPhone) {
      alert("Please enter your full name and phone number.");
      return;
    }

    if (normalizedPhone.length < 8) {
      alert("Please enter a complete phone number for WhatsApp checkout.");
      return;
    }

    if (!selectedProduct) {
      alert("Please choose a product before placing an order.");
      return;
    }

    const merchantWhatsAppLine = "250786257303";
    const message = `*U & J SHOP ORDER*

` +
      `*Product:* ${selectedProduct.name}
` +
      `*Group:* ${selectedProduct.group}
` +
      `*Category:* ${selectedProduct.category}
` +
      `*Price:* ${selectedProduct.price.toLocaleString()} RWF
` +
      `*Size:* ${orderForm.selectedSize}
` +
      `*Color:* ${orderForm.selectedColor}
` +
      `*Delivery:* Free Muhanga ? Kigali
` +
      `*Customer:* ${trimmedName}
` +
      `*Phone:* +${normalizedPhone}`;

    const whatsappUrl = `https://wa.me/${merchantWhatsAppLine}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    closeOrderModal();
  };

  return (
    <div className="uj-shop-container" style={{ boxSizing: "border-box", minHeight: "100vh", backgroundColor: "#ffffff", overflowX: "hidden" }}>
      <header className="uj-shop-header">
        <div className="uj-shop-heading">
          <ShoppingBag size={28} />
          <div>
            <h1>U & J Shop</h1>
            <p>Premium Muhanga ? Kigali boutique delivery, always free.</p>
          </div>
        </div>
      </header>

      <div style={{ marginBottom: '18px' }}>
        <div className="uj-shop-search-container" style={{ marginBottom: '10px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input
            type="text"
            className="uj-shop-search-input"
            placeholder="Search products, e.g. Dresses, Bag, Sweater..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
            aria-label="Search products"
          />
          <button
            type="button"
            className="uj-shop-search-clear"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            Clear
          </button>
          <div className="uj-shop-search-meta" style={{ marginLeft: '8px', color: '#6b7280', fontSize: '0.9rem' }}>
            {filteredProducts.length} results
          </div>
        </div>

        <div className="uj-filter-section" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "8px", marginBottom: "8px" }}>
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              className={`uj-filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              style={{ flex: "0 0 auto" }}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="uj-products-grid">
        {filteredProducts.map((product) => (
          <article className="uj-product-card" key={product.id}>
            <div className="uj-product-image">
              <OptimizedImage
                src={product.image}
                alt={product.name}
                className="uj-product-image-img"
              />
              <span className="uj-free-delivery-badge">Free Delivery</span>
            </div>
            <div className="uj-product-info">
              <div className="uj-shop-card-title-row">
                <div>
                  <h3>{product.name}</h3>
                  <p className="uj-sizes">Group: {product.group}</p>
                </div>
                <span className="uj-shop-rating-pill">
                  <Star size={16} fill="#FFD700" /> {product.rating}
                </span>
              </div>
              <p className="uj-sizes">Sizes: {product.sizes.join(", " )}</p>
              <p className="uj-colors">Colors: {product.colors.join(", " )}</p>
              <div className="uj-product-footer">
                <span className="uj-price">{product.price.toLocaleString()} RWF</span>
                <button
                  type="button"
                  className="uj-shop-order-action-btn"
                  onClick={() => openOrderModal(product)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProduct && (
        <div className="uj-order-modal-overlay" onClick={closeOrderModal}>
          <div className="uj-order-modal-window" onClick={(event) => event.stopPropagation()}>
            <button className="uj-modal-close" onClick={closeOrderModal} aria-label="Close order modal">
              <X size={22} />
            </button>
            <h2>Place Your Order</h2>
            <p>Review the boutique product summary below and confirm your size, color, and contact details for a smooth WhatsApp checkout.</p>

            <div className="uj-modal-product-summary">
              <h3>{selectedProduct.name}</h3>
              <p className="uj-modal-price">{selectedProduct.price.toLocaleString()} RWF</p>
              <p className="uj-sizes">Category: {selectedProduct.category}</p>
              <p className="uj-colors">Group: {selectedProduct.group}</p>
            </div>

            <form onSubmit={handleFormSubmit} className="uj-order-form">
              <label>
                Select Size
                <select name="selectedSize" value={orderForm.selectedSize} onChange={handleInputChange}>
                  {selectedProduct.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>

              <label>
                Select Color
                <select name="selectedColor" value={orderForm.selectedColor} onChange={handleInputChange}>
                  {selectedProduct.colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </label>

              <label>
                Full Name *
                <input
                  name="name"
                  type="text"
                  value={orderForm.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\s()\-]*"
                  value={orderForm.phone}
                  onChange={handleInputChange}
                  placeholder="E.g. +250786257303"
                  required
                />
              </label>

              <button type="submit" className="uj-whatsapp-submit-btn">
                <Smartphone size={18} /> Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;