import React from "react";
import {Globe, Moon, Shield, Database, Bell} from "lucide-react";
export default function SettingsPage({lang,setLang,dark,setDark}){
 const hi=lang==="hi";
 return <div><div className="sectionHeader"><div><h1>{hi?"सेटिंग्स":"Settings"}</h1><p>Configure language, display and prototype data preferences</p></div></div>
 <div className="settingsGrid">
  <div className="settingCard"><Globe/><div><h3>Language</h3><p>Choose interface language</p></div><button className="toggleBtn" onClick={()=>setLang(lang==="en"?"hi":"en")}>{lang==="en"?"English":"हिन्दी"}</button></div>
  <div className="settingCard"><Moon/><div><h3>Appearance</h3><p>Switch dark and light interface</p></div><button className={dark?"switch on":"switch"} onClick={()=>setDark(!dark)}><span></span></button></div>
  <div className="settingCard"><Bell/><div><h3>Alerts</h3><p>Weather and crop-risk notifications</p></div><button className="switch on"><span></span></button></div>
  <div className="settingCard"><Database/><div><h3>Data source</h3><p>Prototype uses local mock data. Connect APIs in production.</p></div><span className="badge success">Mock</span></div>
  <div className="settingCard"><Shield/><div><h3>Privacy</h3><p>Location is used only to personalize the selected Panchayat in this prototype.</p></div></div>
 </div></div>
}
