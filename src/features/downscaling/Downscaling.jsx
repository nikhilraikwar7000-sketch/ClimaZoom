import React from "react";
import SectionHeader from "../../components/SectionHeader";
import {downscale} from "../../data/mockData";
import {Layers, Cpu, Target, Info} from "lucide-react";

export default function Downscaling({lang}){
 const hi=lang==="hi";
 return <div>
  <SectionHeader title={hi?"Weather Downscaling Engine":"Weather Downscaling Engine"} subtitle={hi?"ब्लॉक डेटा से पंचायत स्तर की उच्च-रिज़ॉल्यूशन जानकारी":"Infer fine-scale Panchayat information from coarse block-level variables"}/>
  <div className="pipeline"><div className="pipeStep"><Layers/> <b>Block Forecast</b><span>Coarse weather grid</span></div><div className="pipeArrow">→</div><div className="pipeStep active"><Cpu/> <b>Downscaling Model</b><span>Spatial + temporal features</span></div><div className="pipeArrow">→</div><div className="pipeStep"><Target/> <b>Panchayat Output</b><span>Localized forecast</span></div></div>
  <div className="infoBanner"><Info size={19}/><div><b>Prototype methodology</b><p>Block-level forecast + elevation + land cover + vegetation/moisture indicators + historical observations → bias correction / ML downscaling → Panchayat-level weather variables.</p></div></div>
  <div className="panel"><div className="panelHead"><div><h3>Panchayat Downscaling Results</h3><p>Illustrative values for the prototype interface</p></div><span className="badge success">Model confidence available</span></div><div className="tableWrap"><table><thead><tr><th>Panchayat</th><th>Block temp</th><th>Downscaled temp</th><th>Δ</th><th>Block rain</th><th>Local rain</th><th>Confidence</th></tr></thead><tbody>{downscale.map((x,i)=><tr key={i}><td><b>{x.p}</b></td><td>{x.base}°C</td><td><b>{x.down}°C</b></td><td>{x.delta}</td><td>{x.rainBase}%</td><td><b>{x.rainDown}%</b></td><td><div className="confidenceBar"><span style={{width:x.confidence+"%"}}></span><b>{x.confidence}%</b></div></td></tr>)}</tbody></table></div></div>
 </div>
}
