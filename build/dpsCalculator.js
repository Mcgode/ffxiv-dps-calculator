(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.DPSCalculator = {})));
}(this, (function (exports) { 'use strict';

    var jobModifiers = [
    	{
    		"Job ID": 1,
    		Job: "GLA",
    		HP: 110,
    		MP: 49,
    		STR: 95,
    		VIT: 100,
    		DEX: 90,
    		INT: 50,
    		MND: 95
    	},
    	{
    		"Job ID": 2,
    		Job: "PGL",
    		HP: 105,
    		MP: 34,
    		STR: 100,
    		VIT: 95,
    		DEX: 100,
    		INT: 45,
    		MND: 85
    	},
    	{
    		"Job ID": 3,
    		Job: "MRD",
    		HP: 115,
    		MP: 28,
    		STR: 100,
    		VIT: 100,
    		DEX: 90,
    		INT: 30,
    		MND: 50
    	},
    	{
    		"Job ID": 4,
    		Job: "LNC",
    		HP: 110,
    		MP: 39,
    		STR: 105,
    		VIT: 100,
    		DEX: 95,
    		INT: 40,
    		MND: 60
    	},
    	{
    		"Job ID": 5,
    		Job: "ARC",
    		HP: 100,
    		MP: 69,
    		STR: 85,
    		VIT: 95,
    		DEX: 105,
    		INT: 80,
    		MND: 75
    	},
    	{
    		"Job ID": 6,
    		Job: "CNJ",
    		HP: 100,
    		MP: 117,
    		STR: 50,
    		VIT: 95,
    		DEX: 100,
    		INT: 100,
    		MND: 105
    	},
    	{
    		"Job ID": 7,
    		Job: "THM",
    		HP: 100,
    		MP: 123,
    		STR: 40,
    		VIT: 95,
    		DEX: 95,
    		INT: 105,
    		MND: 70
    	},
    	{
    		"Job ID": 19,
    		Job: "PLD",
    		HP: 120,
    		MP: 59,
    		STR: 100,
    		VIT: 110,
    		DEX: 95,
    		INT: 60,
    		MND: 100
    	},
    	{
    		"Job ID": 20,
    		Job: "MNK",
    		HP: 110,
    		MP: 43,
    		STR: 110,
    		VIT: 100,
    		DEX: 105,
    		INT: 50,
    		MND: 90
    	},
    	{
    		"Job ID": 21,
    		Job: "WAR",
    		HP: 125,
    		MP: 38,
    		STR: 105,
    		VIT: 110,
    		DEX: 95,
    		INT: 40,
    		MND: 55
    	},
    	{
    		"Job ID": 22,
    		Job: "DRG",
    		HP: 115,
    		MP: 49,
    		STR: 115,
    		VIT: 105,
    		DEX: 100,
    		INT: 45,
    		MND: 65
    	},
    	{
    		"Job ID": 23,
    		Job: "BRD",
    		HP: 105,
    		MP: 79,
    		STR: 90,
    		VIT: 100,
    		DEX: 115,
    		INT: 85,
    		MND: 80
    	},
    	{
    		"Job ID": 24,
    		Job: "WHM",
    		HP: 105,
    		MP: 124,
    		STR: 55,
    		VIT: 100,
    		DEX: 105,
    		INT: 105,
    		MND: 115
    	},
    	{
    		"Job ID": 25,
    		Job: "BLM",
    		HP: 105,
    		MP: 129,
    		STR: 45,
    		VIT: 100,
    		DEX: 100,
    		INT: 115,
    		MND: 75
    	},
    	{
    		"Job ID": 26,
    		Job: "ACN",
    		HP: 100,
    		MP: 110,
    		STR: 85,
    		VIT: 95,
    		DEX: 95,
    		INT: 105,
    		MND: 75
    	},
    	{
    		"Job ID": 27,
    		Job: "SMN",
    		HP: 105,
    		MP: 111,
    		STR: 90,
    		VIT: 100,
    		DEX: 100,
    		INT: 115,
    		MND: 80
    	},
    	{
    		"Job ID": 28,
    		Job: "SCH",
    		HP: 105,
    		MP: 119,
    		STR: 90,
    		VIT: 100,
    		DEX: 100,
    		INT: 105,
    		MND: 115
    	},
    	{
    		"Job ID": 29,
    		Job: "ROG",
    		HP: 103,
    		MP: 38,
    		STR: 80,
    		VIT: 95,
    		DEX: 100,
    		INT: 60,
    		MND: 70
    	},
    	{
    		"Job ID": 30,
    		Job: "NIN",
    		HP: 108,
    		MP: 48,
    		STR: 85,
    		VIT: 100,
    		DEX: 110,
    		INT: 65,
    		MND: 75
    	},
    	{
    		"Job ID": 31,
    		Job: "MCH",
    		HP: 105,
    		MP: 79,
    		STR: 85,
    		VIT: 100,
    		DEX: 115,
    		INT: 80,
    		MND: 85
    	},
    	{
    		"Job ID": 32,
    		Job: "DRK",
    		HP: 120,
    		MP: 79,
    		STR: 105,
    		VIT: 110,
    		DEX: 95,
    		INT: 60,
    		MND: 40
    	},
    	{
    		"Job ID": 33,
    		Job: "AST",
    		HP: 105,
    		MP: 124,
    		STR: 50,
    		VIT: 100,
    		DEX: 100,
    		INT: 105,
    		MND: 115
    	},
    	{
    		"Job ID": 34,
    		Job: "SAM",
    		HP: 109,
    		MP: 40,
    		STR: 112,
    		VIT: 100,
    		DEX: 108,
    		INT: 60,
    		MND: 50
    	},
    	{
    		"Job ID": 35,
    		Job: "RDM",
    		HP: 105,
    		MP: 120,
    		STR: 55,
    		VIT: 100,
    		DEX: 105,
    		INT: 115,
    		MND: 110
    	},
    	{
    		"Job ID": 36,
    		Job: "BLU",
    		HP: 105,
    		MP: 120,
    		STR: 70,
    		VIT: 100,
    		DEX: 110,
    		INT: 115,
    		MND: 105
    	},
    	{
    		"Job ID": 37,
    		Job: "GNB",
    		HP: 120,
    		MP: 59,
    		STR: 100,
    		VIT: 110,
    		DEX: 95,
    		INT: 60,
    		MND: 100
    	},
    	{
    		"Job ID": 38,
    		Job: "DNC",
    		HP: 105,
    		MP: 79,
    		STR: 90,
    		VIT: 100,
    		DEX: 115,
    		INT: 85,
    		MND: 80
    	}
    ];

    var levelModifiers = [
    	{
    		"Lv.": 1,
    		MP: 10000,
    		MAIN: 20,
    		SUB: 56,
    		DIV: 56,
    		HP: 86,
    		ELMT: 52,
    		THREAT: 2
    	},
    	{
    		"Lv.": 2,
    		MP: 10000,
    		MAIN: 21,
    		SUB: 57,
    		DIV: 57,
    		HP: 101,
    		ELMT: 54,
    		THREAT: 2
    	},
    	{
    		"Lv.": 3,
    		MP: 10000,
    		MAIN: 22,
    		SUB: 60,
    		DIV: 60,
    		HP: 109,
    		ELMT: 56,
    		THREAT: 3
    	},
    	{
    		"Lv.": 4,
    		MP: 10000,
    		MAIN: 24,
    		SUB: 62,
    		DIV: 62,
    		HP: 116,
    		ELMT: 58,
    		THREAT: 3
    	},
    	{
    		"Lv.": 5,
    		MP: 10000,
    		MAIN: 26,
    		SUB: 65,
    		DIV: 65,
    		HP: 123,
    		ELMT: 60,
    		THREAT: 3
    	},
    	{
    		"Lv.": 6,
    		MP: 10000,
    		MAIN: 27,
    		SUB: 68,
    		DIV: 68,
    		HP: 131,
    		ELMT: 62,
    		THREAT: 3
    	},
    	{
    		"Lv.": 7,
    		MP: 10000,
    		MAIN: 29,
    		SUB: 70,
    		DIV: 70,
    		HP: 138,
    		ELMT: 64,
    		THREAT: 4
    	},
    	{
    		"Lv.": 8,
    		MP: 10000,
    		MAIN: 31,
    		SUB: 73,
    		DIV: 73,
    		HP: 145,
    		ELMT: 66,
    		THREAT: 4
    	},
    	{
    		"Lv.": 9,
    		MP: 10000,
    		MAIN: 33,
    		SUB: 76,
    		DIV: 76,
    		HP: 153,
    		ELMT: 68,
    		THREAT: 4
    	},
    	{
    		"Lv.": 10,
    		MP: 10000,
    		MAIN: 35,
    		SUB: 78,
    		DIV: 78,
    		HP: 160,
    		ELMT: 70,
    		THREAT: 5
    	},
    	{
    		"Lv.": 11,
    		MP: 10000,
    		MAIN: 36,
    		SUB: 82,
    		DIV: 82,
    		HP: 174,
    		ELMT: 73,
    		THREAT: 5
    	},
    	{
    		"Lv.": 12,
    		MP: 10000,
    		MAIN: 38,
    		SUB: 85,
    		DIV: 85,
    		HP: 188,
    		ELMT: 75,
    		THREAT: 5
    	},
    	{
    		"Lv.": 13,
    		MP: 10000,
    		MAIN: 41,
    		SUB: 89,
    		DIV: 89,
    		HP: 202,
    		ELMT: 78,
    		THREAT: 6
    	},
    	{
    		"Lv.": 14,
    		MP: 10000,
    		MAIN: 44,
    		SUB: 93,
    		DIV: 93,
    		HP: 216,
    		ELMT: 81,
    		THREAT: 6
    	},
    	{
    		"Lv.": 15,
    		MP: 10000,
    		MAIN: 46,
    		SUB: 96,
    		DIV: 96,
    		HP: 230,
    		ELMT: 84,
    		THREAT: 7
    	},
    	{
    		"Lv.": 16,
    		MP: 10000,
    		MAIN: 49,
    		SUB: 100,
    		DIV: 100,
    		HP: 244,
    		ELMT: 86,
    		THREAT: 7
    	},
    	{
    		"Lv.": 17,
    		MP: 10000,
    		MAIN: 52,
    		SUB: 104,
    		DIV: 104,
    		HP: 258,
    		ELMT: 89,
    		THREAT: 8
    	},
    	{
    		"Lv.": 18,
    		MP: 10000,
    		MAIN: 54,
    		SUB: 109,
    		DIV: 109,
    		HP: 272,
    		ELMT: 93,
    		THREAT: 9
    	},
    	{
    		"Lv.": 19,
    		MP: 10000,
    		MAIN: 57,
    		SUB: 113,
    		DIV: 113,
    		HP: 286,
    		ELMT: 95,
    		THREAT: 9
    	},
    	{
    		"Lv.": 20,
    		MP: 10000,
    		MAIN: 60,
    		SUB: 116,
    		DIV: 116,
    		HP: 300,
    		ELMT: 98,
    		THREAT: 10
    	},
    	{
    		"Lv.": 21,
    		MP: 10000,
    		MAIN: 63,
    		SUB: 122,
    		DIV: 122,
    		HP: "333?",
    		ELMT: 102,
    		THREAT: 10
    	},
    	{
    		"Lv.": 22,
    		MP: 10000,
    		MAIN: 67,
    		SUB: 127,
    		DIV: 127,
    		HP: 366,
    		ELMT: 105,
    		THREAT: 11
    	},
    	{
    		"Lv.": 23,
    		MP: 10000,
    		MAIN: 71,
    		SUB: 133,
    		DIV: 133,
    		HP: 399,
    		ELMT: 109,
    		THREAT: 12
    	},
    	{
    		"Lv.": 24,
    		MP: 10000,
    		MAIN: 74,
    		SUB: 138,
    		DIV: 138,
    		HP: 432,
    		ELMT: 113,
    		THREAT: 13
    	},
    	{
    		"Lv.": 25,
    		MP: 10000,
    		MAIN: 78,
    		SUB: 144,
    		DIV: 144,
    		HP: 465,
    		ELMT: 117,
    		THREAT: 14
    	},
    	{
    		"Lv.": 26,
    		MP: 10000,
    		MAIN: 81,
    		SUB: 150,
    		DIV: 150,
    		HP: "498?",
    		ELMT: 121,
    		THREAT: 15
    	},
    	{
    		"Lv.": 27,
    		MP: 10000,
    		MAIN: 85,
    		SUB: 155,
    		DIV: 155,
    		HP: 531,
    		ELMT: 125,
    		THREAT: 16
    	},
    	{
    		"Lv.": 28,
    		MP: 10000,
    		MAIN: 89,
    		SUB: 162,
    		DIV: 162,
    		HP: 564,
    		ELMT: 129,
    		THREAT: 17
    	},
    	{
    		"Lv.": 29,
    		MP: 10000,
    		MAIN: 92,
    		SUB: 168,
    		DIV: 168,
    		HP: "597?",
    		ELMT: 133,
    		THREAT: 18
    	},
    	{
    		"Lv.": 30,
    		MP: 10000,
    		MAIN: 97,
    		SUB: 173,
    		DIV: 173,
    		HP: 630,
    		ELMT: 137,
    		THREAT: 19
    	},
    	{
    		"Lv.": 31,
    		MP: 10000,
    		MAIN: 101,
    		SUB: 181,
    		DIV: 181,
    		HP: 669,
    		ELMT: 143,
    		THREAT: 20
    	},
    	{
    		"Lv.": 32,
    		MP: 10000,
    		MAIN: 106,
    		SUB: 188,
    		DIV: 188,
    		HP: 708,
    		ELMT: 148,
    		THREAT: 22
    	},
    	{
    		"Lv.": 33,
    		MP: 10000,
    		MAIN: 110,
    		SUB: 194,
    		DIV: 194,
    		HP: 747,
    		ELMT: 153,
    		THREAT: 23
    	},
    	{
    		"Lv.": 34,
    		MP: 10000,
    		MAIN: 115,
    		SUB: 202,
    		DIV: 202,
    		HP: 786,
    		ELMT: 159,
    		THREAT: 25
    	},
    	{
    		"Lv.": 35,
    		MP: 10000,
    		MAIN: 119,
    		SUB: 209,
    		DIV: 209,
    		HP: 825,
    		ELMT: 165,
    		THREAT: 27
    	},
    	{
    		"Lv.": 36,
    		MP: 10000,
    		MAIN: 124,
    		SUB: 215,
    		DIV: 215,
    		HP: 864,
    		ELMT: 170,
    		THREAT: 29
    	},
    	{
    		"Lv.": 37,
    		MP: 10000,
    		MAIN: 128,
    		SUB: 223,
    		DIV: 223,
    		HP: 903,
    		ELMT: 176,
    		THREAT: 31
    	},
    	{
    		"Lv.": 38,
    		MP: 10000,
    		MAIN: 134,
    		SUB: 229,
    		DIV: 229,
    		HP: 942,
    		ELMT: 181,
    		THREAT: 33
    	},
    	{
    		"Lv.": 39,
    		MP: 10000,
    		MAIN: 139,
    		SUB: 236,
    		DIV: 236,
    		HP: 981,
    		ELMT: 186,
    		THREAT: 35
    	},
    	{
    		"Lv.": 40,
    		MP: 10000,
    		MAIN: 144,
    		SUB: 244,
    		DIV: 244,
    		HP: 1020,
    		ELMT: 192,
    		THREAT: 38
    	},
    	{
    		"Lv.": 41,
    		MP: 10000,
    		MAIN: 150,
    		SUB: 253,
    		DIV: 253,
    		HP: 1088,
    		ELMT: 200,
    		THREAT: 40
    	},
    	{
    		"Lv.": 42,
    		MP: 10000,
    		MAIN: 155,
    		SUB: 263,
    		DIV: 263,
    		HP: 1156,
    		ELMT: 207,
    		THREAT: 43
    	},
    	{
    		"Lv.": 43,
    		MP: 10000,
    		MAIN: 161,
    		SUB: 272,
    		DIV: 272,
    		HP: 1224,
    		ELMT: 215,
    		THREAT: 46
    	},
    	{
    		"Lv.": 44,
    		MP: 10000,
    		MAIN: 166,
    		SUB: 283,
    		DIV: 283,
    		HP: 1292,
    		ELMT: 223,
    		THREAT: 49
    	},
    	{
    		"Lv.": 45,
    		MP: 10000,
    		MAIN: 171,
    		SUB: 292,
    		DIV: 292,
    		HP: "1360?",
    		ELMT: 231,
    		THREAT: 52
    	},
    	{
    		"Lv.": 46,
    		MP: 10000,
    		MAIN: 177,
    		SUB: 302,
    		DIV: 302,
    		HP: "1428?",
    		ELMT: 238,
    		THREAT: 55
    	},
    	{
    		"Lv.": 47,
    		MP: 10000,
    		MAIN: 183,
    		SUB: 311,
    		DIV: 311,
    		HP: 1496,
    		ELMT: 246,
    		THREAT: 58
    	},
    	{
    		"Lv.": 48,
    		MP: 10000,
    		MAIN: 189,
    		SUB: 322,
    		DIV: 322,
    		HP: "1564?",
    		ELMT: 254,
    		THREAT: 62
    	},
    	{
    		"Lv.": 49,
    		MP: 10000,
    		MAIN: 196,
    		SUB: 331,
    		DIV: 331,
    		HP: 1632,
    		ELMT: 261,
    		THREAT: 66
    	},
    	{
    		"Lv.": 50,
    		MP: 10000,
    		MAIN: 202,
    		SUB: 341,
    		DIV: 341,
    		HP: 1700,
    		ELMT: 269,
    		THREAT: 70
    	},
    	{
    		"Lv.": 51,
    		MP: 10000,
    		MAIN: 204,
    		SUB: 342,
    		DIV: 393,
    		HP: 1774,
    		ELMT: 270,
    		THREAT: 84
    	},
    	{
    		"Lv.": 52,
    		MP: 10000,
    		MAIN: 205,
    		SUB: 344,
    		DIV: 444,
    		HP: 1851,
    		ELMT: 271,
    		THREAT: 99
    	},
    	{
    		"Lv.": 53,
    		MP: 10000,
    		MAIN: 207,
    		SUB: 345,
    		DIV: 496,
    		HP: "1931?",
    		ELMT: 273,
    		THREAT: 113
    	},
    	{
    		"Lv.": 54,
    		MP: 10000,
    		MAIN: 209,
    		SUB: 346,
    		DIV: 548,
    		HP: 2015,
    		ELMT: 274,
    		THREAT: 128
    	},
    	{
    		"Lv.": 55,
    		MP: 10000,
    		MAIN: 210,
    		SUB: 347,
    		DIV: 600,
    		HP: 2102,
    		ELMT: 275,
    		THREAT: 142
    	},
    	{
    		"Lv.": 56,
    		MP: 10000,
    		MAIN: 212,
    		SUB: 349,
    		DIV: 651,
    		HP: 2194,
    		ELMT: 276,
    		THREAT: 157
    	},
    	{
    		"Lv.": 57,
    		MP: 10000,
    		MAIN: 214,
    		SUB: 350,
    		DIV: 703,
    		HP: 2289,
    		ELMT: 278,
    		THREAT: 171
    	},
    	{
    		"Lv.": 58,
    		MP: 10000,
    		MAIN: 215,
    		SUB: 351,
    		DIV: 755,
    		HP: 2388,
    		ELMT: 279,
    		THREAT: 186
    	},
    	{
    		"Lv.": 59,
    		MP: 10000,
    		MAIN: 217,
    		SUB: 352,
    		DIV: 806,
    		HP: 2492,
    		ELMT: 280,
    		THREAT: 200
    	},
    	{
    		"Lv.": 60,
    		MP: 10000,
    		MAIN: 218,
    		SUB: 354,
    		DIV: 858,
    		HP: 2600,
    		ELMT: 282,
    		THREAT: 215
    	},
    	{
    		"Lv.": 61,
    		MP: 10000,
    		MAIN: 224,
    		SUB: 355,
    		DIV: 941,
    		HP: 2700,
    		ELMT: 283,
    		THREAT: 232
    	},
    	{
    		"Lv.": 62,
    		MP: 10000,
    		MAIN: 228,
    		SUB: 356,
    		DIV: 1032,
    		HP: 2800,
    		ELMT: 284,
    		THREAT: 250
    	},
    	{
    		"Lv.": 63,
    		MP: 10000,
    		MAIN: 236,
    		SUB: 357,
    		DIV: 1133,
    		HP: 2900,
    		ELMT: 286,
    		THREAT: 269
    	},
    	{
    		"Lv.": 64,
    		MP: 10000,
    		MAIN: 244,
    		SUB: 358,
    		DIV: 1243,
    		HP: 3000,
    		ELMT: 287,
    		THREAT: 290
    	},
    	{
    		"Lv.": 65,
    		MP: 10000,
    		MAIN: 252,
    		SUB: 359,
    		DIV: 1364,
    		HP: 3100,
    		ELMT: 288,
    		THREAT: 313
    	},
    	{
    		"Lv.": 66,
    		MP: 10000,
    		MAIN: 260,
    		SUB: 360,
    		DIV: 1497,
    		HP: 3200,
    		ELMT: 290,
    		THREAT: 337
    	},
    	{
    		"Lv.": 67,
    		MP: 10000,
    		MAIN: 268,
    		SUB: 361,
    		DIV: 1643,
    		HP: 3300,
    		ELMT: 292,
    		THREAT: 363
    	},
    	{
    		"Lv.": 68,
    		MP: 10000,
    		MAIN: 276,
    		SUB: 362,
    		DIV: 1802,
    		HP: 3400,
    		ELMT: 293,
    		THREAT: 392
    	},
    	{
    		"Lv.": 69,
    		MP: 10000,
    		MAIN: 284,
    		SUB: 363,
    		DIV: 1978,
    		HP: 3500,
    		ELMT: 294,
    		THREAT: 422
    	},
    	{
    		"Lv.": 70,
    		MP: 10000,
    		MAIN: 292,
    		SUB: 364,
    		DIV: 2170,
    		HP: 3600,
    		ELMT: 295,
    		THREAT: 455
    	},
    	{
    		"Lv.": 71,
    		MP: 10000,
    		MAIN: 296,
    		SUB: 365,
    		DIV: 2263,
    		HP: "??",
    		ELMT: "??",
    		THREAT: 466
    	},
    	{
    		"Lv.": 72,
    		MP: 10000,
    		MAIN: 300,
    		SUB: 366,
    		DIV: 2360,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 73,
    		MP: 10000,
    		MAIN: 305,
    		SUB: 367,
    		DIV: 2461,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 74,
    		MP: 10000,
    		MAIN: 310,
    		SUB: 368,
    		DIV: 2566,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 75,
    		MP: 10000,
    		MAIN: 315,
    		SUB: 370,
    		DIV: 2676,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 76,
    		MP: 10000,
    		MAIN: 320,
    		SUB: 372,
    		DIV: 2790,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 77,
    		MP: 10000,
    		MAIN: 325,
    		SUB: 374,
    		DIV: 2910,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 78,
    		MP: 10000,
    		MAIN: 330,
    		SUB: 376,
    		DIV: 3034,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 79,
    		MP: 10000,
    		MAIN: 355,
    		SUB: 378,
    		DIV: 3164,
    		HP: "??",
    		ELMT: "??",
    		THREAT: "??"
    	},
    	{
    		"Lv.": 80,
    		MP: 10000,
    		MAIN: 340,
    		SUB: 380,
    		DIV: 3300,
    		HP: "??",
    		ELMT: "??",
    		THREAT: 569
    	}
    ];

    /**
     * @file functions.js
     * @author Max Godefroy <max@godefroy.net>
     */


    function potency(value)
    {
        return value / 100
    }

    function weaponDamage(calculator, attribute, weaponDamageValue)
    {
        return Math.floor(calculator.levelModifier.MAIN * calculator.jobModifier[attribute] / 1000 + weaponDamageValue)
    }

    function attackPower(value)
    {
        return Math.floor(125 * (value - 292) / 292 + 100) / 100
    }

    function determination(levelModifier, value)
    {
        return Math.floor(130 * (value - levelModifier.MAIN) / levelModifier.DIV + 1000) / 1000
    }

    function tenacity(levelModifier, tnc)
    {
        return Math.floor(100 * (tnc - levelModifier.SUB) / levelModifier.DIV + 1000) / 1000
    }

    function directHitProbability(levelModifier, dh)
    {
        return Math.floor(550 * (dh - levelModifier.SUB) / levelModifier.DIV) / 1000
    }

    function criticalHitProbability(levelModifier, crit)
    {
        return Math.floor(200 * (crit - levelModifier.SUB) / levelModifier.DIV + 50) / 1000
    }

    function criticalHitRate(levelModifier, crit)
    {
        return Math.floor(200 * (crit - levelModifier.SUB) / levelModifier.DIV + 1400) / 1000
    }

    function autoAttack(levelModifier, jobModifier, attribute, wd, delay)
    {
        return Math.floor(
            Math.floor(levelModifier.MAIN * jobModifier[attribute] / 1000 + wd) * delay / 3
        )
    }

    /**
     * @file classStatus.js
     * @author Max Godefroy <max@godefroy.net>
     */

    class JobStatus
    {
        constructor() {
            this._currentTime = 0;
        }

        incrementTimeByTime(time) {
            this._currentTime += time;
        }

        noticeUseOfSkill(skill) {}

        getAutoAttackPotency() { return 100; }

        getBuffs() { return [] }

        getTypeYSpeedModifier() { return 0 }

        getTypeZSpeedModifier() { return 0 }

        getHasteModifier() { return 0 }
    }

    /**
     * @file jobs/drg/status.js
     * @author Max Godefroy <max@godefroy.net>
     */


    class DragoonStatus extends JobStatus
    {
        constructor()
        {
            super();
        }

        getAutoAttackPotency()
        {
            return 110;
        }
    }

    /**
     * @file calculator.js
     * @author Max Godefroy <max@godefroy.net>
     */

    class Calculator
    {
        constructor()
        {
            this.setJob('PLD');
            this.setLevel(80);
            this.setMainStat('STR', 380);
            this.setStats(100, 380, 380, 380, 380, 380);
            this.setTraitBoost(1.);
            this._status = new JobStatus();
        }

        setJob(jobName)
        {
            for (let i = 0; i < jobModifiers.length; i++) {
                if (jobModifiers[i].Job.toLowerCase() === jobName.toLowerCase()) {
                    this._setJobAtIndex(i);
                    this._setJobStatus(jobName);
                    return
                }
            }
            throw "No such job: " + jobName
        }

        _setJobAtIndex(index)
        {
            this.jobModifier = jobModifiers[index];
        }


        _setJobStatus(jobName)
        {
            switch (jobName) {
                case 'DRG':
                    this._status = new DragoonStatus();
                    break;
                default:
                    this._status = new JobStatus();
            }
        }


        setLevel(level)
        {
            for (let i = 0; i < levelModifiers.length; i++) {
                if (levelModifiers[i]["Lv."] === level) {
                    this.setLevelAtIndex(i);
                    return
                }
            }
            throw "No such level: " + level
        }

        setLevelAtIndex(index)
        {
            this.levelModifier = levelModifiers[index];
        }

        setMainStat(attribute, value)
        {
            this.attribute = attribute;
            this._mainValue = value;
        }

        setStats(weaponDamage$$1, critical, directHit, determination$$1, speed$$1, tenacity$$1 = 380)
        {
            this._wd = weaponDamage$$1;
            this._crt = critical;
            this._dh = directHit;
            this._det = determination$$1;
            this._sks = speed$$1;
            this._tnc = tenacity$$1;
        }

        setTraitBoost(boost)
        {
            this._traitBoost = boost;
        }

        getAttackDamage(potency$$1)
        {
            let ap = attackPower(this._mainValue);
            let wd = weaponDamage(this, this.attribute, this._wd);
            let pot = potency(potency$$1);
            let det = determination(this.levelModifier, this._det);
            let tnc = tenacity(this.levelModifier, this._tnc);
            let d1 = Math.floor(pot * wd * ap * det * tnc * this._traitBoost);

            let pdh = directHitProbability(this.levelModifier, this._dh);
            let pch = criticalHitProbability(this.levelModifier, this._crt);
            let chr = criticalHitRate(this.levelModifier, this._crt);

            let avg = Math.floor(d1 * pch * (chr - 1) + d1);
            avg = Math.floor(avg + avg * pdh * 0.25);

            let max = Math.floor(Math.floor(d1 * chr) * 1.25);

            return Calculator.applyBuffs({
                min: Math.floor(d1 * 0.95),
                avg: avg,
                max: Math.floor(1.05 * max)
            }, this._status.getBuffs());
        }

        getGCD(delay = 2500)
        {
            let gcdm = Math.floor(
                (1000 - Math.floor(130 * (this._sks - this.levelModifier.SUB) / this.levelModifier.DIV)) * delay / 1000
            );

            let a = Math.floor((100 - this._status.getTypeYSpeedModifier()) * (100 - this._status.getHasteModifier()) / 100);
            let b = (100 - this._status.getTypeZSpeedModifier()) / 100;

            let gcdc = Math.floor(
                Math.floor(
                    Math.floor(Math.ceil(a * b) * gcdm / 100) * 100 / 1000
                ) * 100 / 100
            );

            return gcdc / 100
        }

        getAutoAttackDamage(delay)
        {
            let ap = attackPower(this._mainValue);
            let aa = autoAttack(this.levelModifier, this.jobModifier, this.attribute, this._wd, delay);
            let pot = potency(this._status.getAutoAttackPotency());
            let det = determination(this.levelModifier, this._det);
            let tnc = tenacity(this.levelModifier, this._tnc);
            let d1 = Math.floor(pot * aa * ap * det * tnc * this._traitBoost);

            let pdh = directHitProbability(this.levelModifier, this._dh);
            let pch = criticalHitProbability(this.levelModifier, this._crt);
            let chr = criticalHitRate(this.levelModifier, this._crt);

            let avg = Math.floor(d1 * pch * (chr - 1) + d1);
            avg = Math.floor(avg + avg * pdh * 0.25);

            let max = Math.floor(Math.floor(d1 * chr) * 1.25);

            return Calculator.applyBuffs({
                min: Math.floor(d1 * 0.95),
                avg: avg,
                max: Math.floor(1.05 * max)
            }, this._status.getBuffs());
        }

        static applyBuffs(damage, buffs)
        {
            for (let buff of buffs) {
                damage.min = Math.floor(damage.min * buff);
                damage.avg = Math.floor(damage.avg * buff);
                damage.max = Math.floor(damage.max * buff);
            }
            return damage
        }
    }

    /**
     * @file dpsCalculator.js
     * @author Max Godefroy <max@godefroy.net>
     */

    exports.Calculator = Calculator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
