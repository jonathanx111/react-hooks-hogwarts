import React, { useState } from 'react'
import PigImage from "./PigImage"

function Hog({ name, specialty, greased, weight, highestMedal }) {
    const [extraHogInfo, setExtraHogInfo] = useState(false)
    const [hideState, setHideState ]= useState(false)
    
    function handleExtraHogInfo(e) {
        if (e.target.id !== 'btn') {
            setExtraHogInfo(!extraHogInfo)
        }
    }

    function handleHideBtn() {
        setHideState(!hideState)
    }

    function showExtraHogInfo() {
        if (extraHogInfo) {
            return (
                <ul>
                    <li>Specialty: {specialty}</li>
                    <li>Weight: {weight}</li>
                    <li>Greased?: {greased ? "Yes" : "No"}</li>
                    <li className='achievementText'>{highestMedal}</li>
                </ul>
            )
        } 
    }

    function hideFunction() {
        if (!hideState) {
            return (
                <>
                    <h3>{name}</h3>
                    {showExtraHogInfo()}
                    <PigImage name={name} />
                </>
            )
        }
    }

    return (
        <div className="ui eight wide column">
            <div className="pigTile" onClick={handleExtraHogInfo}>
                {hideFunction()}
                <p><button onClick={handleHideBtn} id='btn'>{hideState ? "Unhide Pig" : "Hide Pig"}</button></p>
            </div>
        </div>
    )
}

export default Hog