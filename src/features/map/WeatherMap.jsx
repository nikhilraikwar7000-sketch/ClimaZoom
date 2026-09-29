import React,{useState} from "react";
import SectionHeader from "../../components/SectionHeader";
import {Layers, ZoomIn, ZoomOut, LocateFixed} from "lucide-react";

const cells=[
 {x:13,y:20,r:68,name:"Demo Panchayat"},{x:36,y:31,r:82,name:"Kharora"},{x:58,y:18,r:42,name:"Mowa"},
 {x:73,y:48,r:76,name:"Abhanpur"},{x:30,y:63,r:54,name:"Panchayat 05"},{x:55,y:72,r:61,name:"Panchayat 06"},{x:82,y:74,r:88,name:"Panchayat 07"}
];
export default function WeatherMap({lang}){
 const hi=lang==="hi"; const [layer,setLayer]=useState("rain");
 return <div>
  <SectionHeader title={hi?"इंटरैक्टिव मौसम मानचित्र":"Interactive Weather Map"} subtitle="Panchayat-level spatial view of downscaled weather variables"/>
  <div className="mapToolbar"><div className="tabs">{["rain","temp","humidity"].map(x=><button className={layer===x?"tab active":"tab"} onClick={()=>setLayer(x)} key={x}>{x==="rain"?"Rainfall":x==="temp"?"Temperature":"Humidity"}</button>)}</div><button className="secondaryBtn"><Layers size={16}/> Layers</button></div>
  <div className="mapBox"><div className="mapGrid"></div>{cells.map((c,i)=><div key={i} className="mapPoint" style={{left:c.x+"%",top:c.y+"%"}}><span>{layer==="rain"?c.r:layer==="temp"?Math.round(26+c.r/10):Math.round(45+c.r/2)}{layer==="rain"?"%":layer==="temp"?"°":"%"}</span><small>{c.name}</small></div>)}<div className="mapControls"><button><ZoomIn/></button><button><ZoomOut/></button><button><LocateFixed/></button></div><div className="mapLegend"><b>{layer==="rain"?"Rain probability":"Localized "+layer}</b><div><i></i>Low <i></i>Medium <i></i>High</div></div></div>
 </div>
}
