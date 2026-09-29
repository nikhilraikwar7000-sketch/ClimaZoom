import React,{useState} from "react";
import SectionHeader from "../../components/SectionHeader";
import {advisory} from "../../data/mockData";
import {Sprout, Droplets, SprayCan, CalendarCheck, ChevronRight} from "lucide-react";

export default function Advisory({lang}){
 const hi=lang==="hi"; const [crop,setCrop]=useState("All");
 return <div>
  <SectionHeader title={hi?"कृषि मौसम सलाह":"Agro-Meteorological Advisory"} subtitle={hi?"फसल, अवस्था और स्थानीय मौसम के आधार पर actionable recommendations":"Actionable recommendations using localized weather, crop and growth-stage context"} action={<button className="primaryBtn"><CalendarCheck size={17}/> Generate Advisory</button>}/>
  <div className="advisoryHero"><div><span className="eyebrow">ADVISORY ENGINE</span><h2>Weather → Impact → Action</h2><p>The system translates downscaled weather signals into farm-operation guidance.</p></div><div className="advisoryFlow"><span>🌦️ Weather</span><b>→</b><span>🌱 Crop</span><b>→</b><span>⚠️ Risk</span><b>→</b><span>✅ Action</span></div></div>
  <div className="filterBar"><select value={crop} onChange={e=>setCrop(e.target.value)}><option>All</option><option>Paddy</option><option>Soybean</option><option>Vegetables</option></select><select><option>Current growth stage</option><option>Sowing</option><option>Vegetative</option><option>Flowering</option><option>Harvest</option></select></div>
  <div className="advisoryGrid">{advisory.filter(a=>crop==="All"||a.crop===crop).map((a,i)=><div className="adviceCard" key={i}><div className="adviceTop"><span className="cropIcon">{a.icon}</span><span className={"badge "+(a.priority==="High"?"danger":"warning")}>{a.priority}</span></div><h3>{a.crop}</h3><p className="stage">{a.stage}</p><div className="actionBox"><Sprout size={18}/><span>{a.action}</span></div><div className="adviceTags"><span><Droplets/> Rain-aware</span><span><SprayCan/> Farm action</span></div><button className="textBtn">View details <ChevronRight size={15}/></button></div>)}</div>
 </div>
}
