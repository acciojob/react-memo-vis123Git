import React, { useState } from "react";

function ReactMemo() {
  const [skills, setSkills] = useState([]);
  const handleSkill = (e) => {
    e.preventDefault();
    const skill = document.getElementById("skill-input");
    console.log("skill===", skill);

    if (skill?.value?.trim() && skill?.value?.length > 5) {
      console.log("render in skills");

      setSkills([...skills, skill.value]);
      skill.value = "";
    }
  };
  return (
    <div>
      <h1>React.memo</h1>
      <input type="text" placeholder="Add skill" id="skill-input" />
      <button
        onClick={() => {
          handleSkill(event);
        }}
      >
        Add Skill
      </button>

      <div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReactMemo;
