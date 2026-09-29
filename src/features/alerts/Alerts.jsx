import React from "react";
import SectionHeader from "../../components/SectionHeader";
import {alerts} from "../../data/mockData";
import {AlertTriangle, CloudRain, Wind, Droplets, BellRing} from "lucide-react";

export default function Alerts({lang}){
 const hi=lang==="hi";
 const icons={ "Heavy Rain":<CloudRain/>,"Humidity":<Droplets/>,"Wind":<Wind/>};
 return <div>
  <SectionHeader title={hi?"मौसम एवं कृषि अलर्ट":"Weather & Agriculture Alerts"} subtitle="Early-warning signals prioritized for Panchayat-level farm decisions" action={<button className="secondaryBtn"><BellRing size={16}/> Notification settings</button>}/>
  <div className="alertSummary"><div><span>Active alerts</span><b>03</b></div><div><span>High priority</span><b>01</b></div><div><span>Last update</span><b>10:00 AM</b></div></div>
  <div className="alertList">{alerts.map((a,i)=><div className="alertCard" key={i}><div className={"alertIcon "+a.level.toLowerCase()}>{icons[a.type]||<AlertTriangle/>}</div><div className="alertBody"><div className="alertTitle"><h3>{a.type}</h3><span className={"badge "+(a.level==="High"?"danger":a.level==="Medium"?"warning":"success")}>{a.level}</span></div><p>{a.text}</p><small>{a.time} • Demo Panchayat</small></div><button className="secondaryBtn">Details</button></div>)}</div>
 </div>
}
