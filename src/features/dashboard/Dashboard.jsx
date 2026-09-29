import React from "react";
import { CloudRain, Thermometer, Droplets, Wind, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import StatCard from "../../components/StatCard";
import ForecastCard from "../../components/ForecastCard";
import { forecast, alerts } from "../../data/mockData";

export default function Dashboard({lang}){
 const hi=lang==="hi";
 return <div>
  <SectionHeader title={hi?"पंचायत मौसम डैशबोर्ड":"Panchayat Weather Dashboard"} subtitle={hi?"ब्लॉक पूर्वानुमान को स्थानीय पंचायत स्तर की जानकारी में बदलना":"Converting block-level forecasts into localized Panchayat intelligence"} action={<button className="primaryBtn"><MapPin size={17}/> {hi?"स्थान बदलें":"Change Location"}</button>}/>
  <div className="heroCard">
   <div><span className="eyebrow">LIVE LOCALIZED FORECAST</span><h2>Demo Panchayat</h2><p>Arang Block • Raipur, Chhattisgarh</p><div className="heroTemp">31°<span>C</span></div><div className="heroMeta">🌦️ Partly cloudy • Feels like 34°C</div></div>
   <div className="heroCloud">🌦️</div>
   <div className="confidence"><ShieldCheck size={17}/> Downscaling confidence <b>91%</b></div>
  </div>
  <div className="statsGrid">
   <StatCard icon={<CloudRain/>} label={hi?"वर्षा संभावना":"Rain Probability"} value="68" unit="%" trend="+8%" accent="teal"/>
   <StatCard icon={<Thermometer/>} label={hi?"तापमान":"Temperature"} value="31" unit="°C" trend="+0.4°C" accent="orange"/>
   <StatCard icon={<Droplets/>} label={hi?"आर्द्रता":"Humidity"} value="72" unit="%" trend="+5%" accent="blue"/>
   <StatCard icon={<Wind/>} label={hi?"हवा की गति":"Wind Speed"} value="14" unit="km/h" trend="Stable" accent="purple"/>
  </div>
  <div className="twoCol">
   <div className="panel"><div className="panelHead"><div><h3>{hi?"7-दिन का स्थानीय पूर्वानुमान":"7-Day Local Forecast"}</h3><p>Downscaled weather variables</p></div><ArrowUpRight size={18}/></div><div className="forecastRow">{forecast.map((x,i)=><ForecastCard key={i} item={x}/>)}</div></div>
   <div className="panel"><div className="panelHead"><div><h3>{hi?"कृषि अलर्ट":"Agriculture Alerts"}</h3><p>Prioritized by crop impact</p></div></div>{alerts.map((a,i)=><div className="alertMini" key={i}><span className={"level "+a.level.toLowerCase()}></span><div><b>{a.type}</b><p>{a.text}</p></div><small>{a.time}</small></div>)}</div>
  </div>
 </div>
}
