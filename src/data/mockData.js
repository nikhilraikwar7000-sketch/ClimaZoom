export const panchayats=[
 {name:"Demo Panchayat",block:"Arang",district:"Raipur",rain:68,temp:31,humidity:72,risk:"Moderate"},
 {name:"Kharora",block:"Tilda",district:"Raipur",rain:42,temp:33,humidity:64,risk:"Low"},
 {name:"Abhanpur",block:"Abhanpur",district:"Raipur",rain:76,temp:30,humidity:79,risk:"High"}
];

export const forecast=[
 {day:"Today",icon:"🌦️",temp:31,rain:68,humidity:72,wind:14},
 {day:"Tomorrow",icon:"🌧️",temp:29,rain:82,humidity:81,wind:18},
 {day:"Wed",icon:"🌦️",temp:30,rain:61,humidity:76,wind:12},
 {day:"Thu",icon:"☀️",temp:33,rain:22,humidity:58,wind:10},
 {day:"Fri",icon:"⛅",temp:34,rain:28,humidity:55,wind:11},
 {day:"Sat",icon:"🌦️",temp:32,rain:54,humidity:69,wind:15},
 {day:"Sun",icon:"🌧️",temp:28,rain:88,humidity:84,wind:21}
];

export const downscale=[
 {p:"Demo Panchayat",base:31,down:31.4,delta:"+0.4°C",rainBase:62,rainDown:68,confidence:91},
 {p:"Kharora",base:32,down:32.6,delta:"+0.6°C",rainBase:39,rainDown:42,confidence:88},
 {p:"Abhanpur",base:30,down:29.7,delta:"-0.3°C",rainBase:71,rainDown:76,confidence:93},
 {p:"Mowa",base:31,down:30.8,delta:"-0.2°C",rainBase:55,rainDown:59,confidence:86}
];

export const alerts=[
 {type:"Heavy Rain",level:"High",time:"Today 17:00",text:"Rainfall probability is elevated. Avoid irrigation and postpone spraying."},
 {type:"Humidity",level:"Medium",time:"Tomorrow",text:"High humidity may increase fungal disease risk in susceptible crops."},
 {type:"Wind",level:"Low",time:"Friday",text:"Moderate wind expected. Plan pesticide application during calmer hours."}
];

export const advisory=[
 {crop:"Paddy",stage:"Tillering",icon:"🌾",priority:"High",action:"Delay irrigation; monitor standing water and fungal symptoms."},
 {crop:"Soybean",stage:"Vegetative",icon:"🌱",priority:"Medium",action:"Avoid foliar spray before expected rain; inspect fields after rainfall."},
 {crop:"Vegetables",stage:"Flowering",icon:"🥬",priority:"Medium",action:"Use protected spraying windows and improve drainage."}
];
