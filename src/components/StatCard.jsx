import React from "react";
export default function StatCard({icon,label,value,unit,trend,accent}){return <div className={"statCard "+(accent||"")}><div className="statTop"><span className="statIcon">{icon}</span><span className="trend">{trend}</span></div><div className="statValue">{value}<small>{unit}</small></div><div className="statLabel">{label}</div></div>}
