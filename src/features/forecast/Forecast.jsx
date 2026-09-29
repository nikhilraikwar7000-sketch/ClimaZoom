import React, {useState} from "react";
import SectionHeader from "../../components/SectionHeader";
import ForecastCard from "../../components/ForecastCard";
import {forecast} from "../../data/mockData";
import {Download, CalendarDays} from "lucide-react";

export default function Forecast({lang}){
 const hi=lang==="hi"; const [p,setP]=useState("Demo Panchayat");
 return <div>
  <SectionHeader title={hi?"पंचायत पूर्वानुमान":"Panchayat Forecast"} subtitle={hi?"उच्च-रिज़ॉल्यूशन स्थानीय मौसम पैरामीटर":"High-resolution localized weather parameters"} action={<button className="secondaryBtn"><Download size={16}/> {hi?"रिपोर्ट":"Export"}</button>}/>
  <div className="filterBar"><select value={p} onChange={e=>setP(e.target.value)}><option>Demo Panchayat</option><option>Kharora</option><option>Abhanpur</option></select><select><option>Next 7 Days</option><option>Today</option><option>Next 5 Days</option></select><span className="updated"><CalendarDays size={16}/> Updated 10:00 AM</span></div>
  <div className="forecastLarge">{forecast.map((x,i)=><ForecastCard key={i} item={x}/>)}</div>
  <div className="panel"><div className="panelHead"><div><h3>Downscaled Weather Variables</h3><p>Illustrative prototype data generated from block-level input + local features</p></div></div><div className="tableWrap"><table><thead><tr><th>Day</th><th>Rainfall probability</th><th>Temperature</th><th>Humidity</th><th>Wind</th><th>Risk</th></tr></thead><tbody>{forecast.map((x,i)=><tr key={i}><td>{x.day}</td><td>{x.rain}%</td><td>{x.temp}°C</td><td>{x.humidity}%</td><td>{x.wind} km/h</td><td><span className={"badge "+(x.rain>75?"danger":x.rain>50?"warning":"success")}>{x.rain>75?"High":x.rain>50?"Moderate":"Low"}</span></td></tr>)}</tbody></table></div></div>
 </div>
}
