import React, {useState} from 'react';


const difficulties =[1,2,3]

function Settings(props){
    const [modelDifficulty, setModelDifficulty] = useState(props.difficulty);
    const [modelMirroring, setModelMirroring] = useState(props.mirroring);


    function setBooleanModelMirroring(stringBoolean){
        switch(stringBoolean)
        {
            default:
                    setModelMirroring(false);
                    break;
            case "true":
                    setModelMirroring(true);
                    break;
            case "false":
                    setModelMirroring(false)
        }
    }

    function setNumberModelDifficulty(stringNumber)
    {
        setModelDifficulty(parseInt(stringNumber))

    }
    function submitFunction(event){
        event.stopPropagation();
        props.setDifficulty(modelDifficulty);
        props.setMirroring(modelMirroring);
        props.setShowSettings(false);

    }

    return(
        <div id="SettingsOverlay">
            <div id="SettingsMain">
                <div id="SettingsHeader">Settings</div>
                <form id="SettingsForm" onSubmit={e=> submitFunction(e)}>
                 
                        <div className="settingPart">
                            <div className="settingPartDescription">Difficulty</div>
                            <div className="">
                                <select  value={modelDifficulty} onChange={(e) => setModelDifficulty(e.target.value)}>
                                    {difficulties.map((dif,index) => {
                                        return <option key = {index} value={dif}>{dif}</option>
                                    })
                                    }
                                </select>




                            </div>
                        </div>
                    
                        <div className="settingPart">
                            <div className="settingPartDescription">Wall mirroring</div>
                            <div className="">
                                <select value={modelMirroring} onChange={(e) => setBooleanModelMirroring(e.target.value)}>
                                    <option key={1} value ={false}>false</option>
                                    <option key={2} value = {true}>true</option>
                                </select>
                            </div>
                        </div>

                        <div className="settingPart">
                            <button type="submit">Ok</button>
                        </div>
                    
                </form>
            
            
            </div>
        </div>
    )
}

export default Settings;