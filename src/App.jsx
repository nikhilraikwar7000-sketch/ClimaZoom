import React, { useState } from "react";
import { LayoutDashboard, CloudSun, Map, Sprout, Bell, BarChart3, Settings, Menu, X, Languages, Moon, Sun } from "lucide-react";
import Dashboard from "./features/dashboard/Dashboard";
import Forecast from "./features/forecast/Forecast";
import Downscaling from "./features/downscaling/Downscaling";
import WeatherMap from "./features/map/WeatherMap";
import Advisory from "./features/advisory/Advisory";
import Alerts from "./features/alerts/Alerts";
import Analytics from "./features/analytics/Analytics";
import SettingsPage from "./features/settings/SettingsPage";

const labels = {
  en: { dashboard:"Dashboard", forecast:"Panchayat Forecast", downscaling:"Downscaling", map:"Weather Map", advisory:"Crop Advisory", alerts:"Alerts", analytics:"Analytics", settings:"Settings" },
  hi: { dashboard:"डैशबोर्ड", forecast:"पंचायत पूर्वानुमान", downscaling:"डाउनस्केलिंग", map:"मौसम मानचित्र", advisory:"फसल सलाह", alerts:"अलर्ट", analytics:"विश्लेषण", settings:"सेटिंग्स" }
};

export default function App(){
  const [page,setPage] = useState("dashboard");
  const [lang,setLang] = useState("en");
  const [dark,setDark] = useState(false);
  const [mobile,setMobile] = useState(false);
  const L=labels[lang];

  const nav=[
    ["dashboard",LayoutDashboard,L.dashboard],
    ["forecast",CloudSun,L.forecast],
    ["downscaling",BarChart3,L.downscaling],
    ["map",Map,L.map],
    ["advisory",Sprout,L.advisory],
    ["alerts",Bell,L.alerts],
    ["analytics",BarChart3,L.analytics],
    ["settings",Settings,L.settings]
  ];

  const content={
    dashboard:<Dashboard lang={lang}/>,
    forecast:<Forecast lang={lang}/>,
    downscaling:<Downscaling lang={lang}/>,
    map:<WeatherMap lang={lang}/>,
    advisory:<Advisory lang={lang}/>,
    alerts:<Alerts lang={lang}/>,
    analytics:<Analytics lang={lang}/>,
    settings:<SettingsPage lang={lang} setLang={setLang} dark={dark} setDark={setDark}/>
  }[page];

  return <div className={dark?"app dark":"app"}>
    <aside className={mobile?"sidebar open":"sidebar"}>
      <div className="brand">
        <div className="brandIcon"><CloudSun size={25}/></div>
        <div><b>AgroCast</b><span>Weather Intelligence</span></div>
        <button className="iconBtn mobileOnly" onClick={()=>setMobile(false)}><X size={20}/></button>
      </div>
      <div className="sideLabel">{lang==="en"?"MAIN MENU":"मुख्य मेनू"}</div>
      <nav>{nav.map(([id,Icon,text])=><button key={id} className={page===id?"navItem active":"navItem"} onClick={()=>{setPage(id);setMobile(false)}}><Icon size={19}/><span>{text}</span></button>)}</nav>
      <div className="sideFooter">
        <div className="statusDot"></div><span>{lang==="en"?"Prototype mode":"प्रोटोटाइप मोड"}</span>
      </div>
    </aside>
    {mobile && <div className="overlay" onClick={()=>setMobile(false)}></div>}
    <main className="main">
      <header className="topbar">
        <button className="iconBtn mobileOnly" onClick={()=>setMobile(true)}><Menu/></button>
        <div className="locationPill"><span className="pulse"></span><span>India • Chhattisgarh • Demo Panchayat</span></div>
        <div className="topActions">
          <button className="iconBtn" onClick={()=>setLang(lang==="en"?"hi":"en")} title="Language"><Languages size={19}/><small>{lang==="en"?"HI":"EN"}</small></button>
          <button className="iconBtn" onClick={()=>setDark(!dark)}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button>
          <div className="avatar">AK</div>
        </div>
      </header>
      <section className="page">{content}</section>
    </main>
  </div>
}
