import React from "react";
export default function ForecastCard({item}){return <div className="forecastCard"><span className="day">{item.day}</span><span className="weatherEmoji">{item.icon}</span><b>{item.temp}°</b><span className="rain">💧 {item.rain}%</span><small>Humidity {item.humidity}%</small></div>}
