import React from 'react';
import "./skill.css";

const Skills = () => {
    const skills = [{ name: "Html", width: "80%" }, { name: "Css", width: "80%" }, { name: "javaScript", width: "50%" }, { name: "React", width: "50%" }, { name: "Node", width: "25%" }]


    return (
        <div className='mt-5'>
            <h3 className='tituloDerecho'>Skills</h3>
            <div>
                {skills.map((skill, index) => {
                    const { name } = skill;
                    return <div className="box" key={index}>
                        <h4>{name}</h4>
                        <div className="porcentajeDerecho">
                            <div style={{ width: `${skill.width}` }}></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Skills;