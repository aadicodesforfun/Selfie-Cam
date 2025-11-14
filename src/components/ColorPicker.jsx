import { useState, useEffect } from "react"
import "./ColorPicker.css"
import Color from "./Color"

export default function ColorPicker() {
    let defaultColor = "rgb(225, 63, 133)";
    let [currentColor, setCurrentColor] = useState(defaultColor)
    useEffect(() => {
        document.body.style.backgroundColor = currentColor;
    }, [currentColor]);
    return (<div className="colorPicker-wrapper">
        <div className="colorPicker">
            <Color color={defaultColor} isActive={currentColor === defaultColor ? true : false} onClick={() => {setCurrentColor(defaultColor)}}/>
            <Color color="red" isActive={currentColor === 'red' ? true : false} onClick={() => {setCurrentColor('red')}}/>
            <Color color="orange" isActive={currentColor === 'orange' ? true : false} onClick={() => {setCurrentColor('orange')}}/>
            <Color color="green" isActive={currentColor === 'green' ? true : false} onClick={() => {setCurrentColor('green')}}/>
            <Color color="yellow" isActive={currentColor === 'yellow' ? true : false} onClick={() => {setCurrentColor('yellow')}}/>
            <Color color="mediumslateblue" isActive={currentColor === 'mediumslateblue' ? true : false} onClick={() => {setCurrentColor('mediumslateblue')}}/>
            <Color color="hotpink" isActive={currentColor === 'hotpink' ? true : false} onClick={() => {setCurrentColor('hotpink')}}/>
            <Color color="cyan" isActive={currentColor === 'cyan' ? true : false} onClick={() => {setCurrentColor('cyan')}}/>
            <Color color="deepskyblue" isActive={currentColor === 'deepskyblue' ? true : false} onClick={() => {setCurrentColor('deepskyblue')}}/>
            <Color color="maroon" isActive={currentColor === 'maroon' ? true : false} onClick={() => {setCurrentColor('maroon')}}/>
            <Color color="palegoldenrod" isActive={currentColor === 'palegoldenrod' ? true : false} onClick={() => {setCurrentColor('palegoldenrod')}}/>
            <Color color="thistle" isActive={currentColor === 'thistle' ? true : false} onClick={() => {setCurrentColor('thistle')}}/>
            <Color color="wheat" isActive={currentColor === 'wheat' ? true : false} onClick={() => {setCurrentColor('wheat')}}/>
            <Color color="white" isActive={currentColor === 'white' ? true : false} onClick={() => {setCurrentColor('white')}}/>
            <Color color="navy" isActive={currentColor === 'navy' ? true : false} onClick={() => {setCurrentColor('navy')}}/>
            <Color color="peru" isActive={currentColor === 'peru' ? true : false} onClick={() => {setCurrentColor('peru')}}/>
            <Color color="purple" isActive={currentColor === 'purple' ? true : false} onClick={() => {setCurrentColor('purple')}}/>
            <Color color="sienna" isActive={currentColor === 'sienna' ? true : false} onClick={() => {setCurrentColor('sienna')}}/>
        </div>
    </div>
    )
}