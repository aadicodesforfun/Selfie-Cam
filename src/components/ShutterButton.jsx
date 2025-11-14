import "./ShutterButton.css"

export default function ShutterButton({activeTab}){
    return (
        <>
            <button className={`shutter-button ${activeTab == 'photo' ? 'photo-btn' : 'video-btn'}`}>
            </button>
        </>
    )
}