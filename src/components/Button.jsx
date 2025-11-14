import "./Button.css"

export default function Button(props){
    return(
        <>
            <button>
                <img src={props.src} alt="" />
            </button>
        </>
    )
}