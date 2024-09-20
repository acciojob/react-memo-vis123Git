import React, { useState } from "react";

function ReactMemo() {
  const [skills, setSkills] = useState([]);
  const handleSkill = (e) => {
    const skill = document.getElementById("input-skill");
    if (skill.trim() && skill.length > 5) {
        console.log("render in skills");
        
      setSkills([...skills, skill.value]);
    }
  };
  return (
    <div>
      <h1>React.memo</h1>
      <input type="text" placeholder="Add skill" id="input-skill" />
      <button
        onClick={() => {
          handleSkill();
        }}
      >
        Add Skill
      </button>
    </div>
  );
}

export default ReactMemo;
