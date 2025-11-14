import "./PhotoToggle.css"
import { useState } from "react"

export default function PhotoToggle({activeTab, setActiveTab}){
    
    return(<div className="photo-toggle-wrapper">
        <div className="photo-toggle">
            <div className={`photo ${activeTab === 'photo' ? "isOn" : ""}`} onClick={() => setActiveTab('photo')}>Photo</div>
            <div className={`video ${activeTab === 'video' ? "isOn" : ""}`} onClick={() => setActiveTab('video')}>Video</div>
        </div>
    </div>)
}