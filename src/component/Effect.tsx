import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  defaultEffect: string;
  setDefaultEffect: (value: string) => void;
}

const EffectOverlay: React.FC<Props> = ({ defaultEffect, setDefaultEffect }) => {
  const [skyMode, setSkyMode] = useState<string>("sky-mode");
  const [moonMode, setMoonMode] = useState<string>("moon-mode");

  function handleSkyMode(event) {
    setSkyMode(event.target.value);
  }

  function handleMoonMode(event) {
    setMoonMode(event.target.value);
  }

  return (
    <div className="before-after effect-box">
       <div className="behind-text" onClick={handleSkyMode} defaultValue={defaultEffect}>
        {skyMode}
       </div>
       <div className="after-text" onClick={handleMoonMode} defaultValue={defaultEffect}>
        {moonMode}
       </div>
    </div>
  );
};

export default EffectOverlay;

/**
 * <input type="range" name="textsize" id="textsize" value={defaultSize} min="12" max="48" onChange={handleTextSize} />
    <span>{textSize}</span>
 */
