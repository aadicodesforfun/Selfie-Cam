import "./Color.css"

export default function Color({color, onClick, isActive}) {
    return (
        <div className={`color ${isActive ? "isActive" : ""}`} style={{ background: color }} onClick={onClick}>
        </div>
    )
}