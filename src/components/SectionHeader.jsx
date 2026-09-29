import React from "react";
export default function SectionHeader({title,subtitle,action}){return <div className="sectionHeader"><div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>{action}</div>}
