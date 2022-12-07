import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='Experience-container'>
        {/*Description */}

        <div className='Exp-description-container'>

            <h1>
                All the <span>Experiences</span>
            </h1>

            <p>
                I m working as a werk student.
            </p>

            <button>Hire me</button>

        </div>
        {/*list of experiences*/}
        <div className='Exp-list-container'>

            <div className='item-desc'>
                <h3>Tata Motors</h3>
            </div>

            <div className='item-desc'>
                <h3>D and G Machines and Technologies</h3>
                <p>
                •	Zwei Projekte zur Installation und Inbetriebnahme von Zahnrad-Honmaschinen von Daetwyler Industries, Schweiz, bei TATA Motors PKW-werk 
•	Präzision Fertigung von Zahnrädern für Elektrofahrzeuge
•	Innovationen zur Geräuschreduzierung im elektrischen Antriebsstrang.
•	Anforderungsanalyse und Projektmanagement.

                </p>
            </div>

            <div className='item-desc'>
                <h3>Schaffeler Automotive Gmbh</h3>
                <p>
                •	Entwicklung der Simulationsumgebung von elektrischen Antriebsystemen für Hybrid Getriebe Systeme (HEV, PHEV)
•	Optimierung und Integration von leistungselektronik-Modellen in ein Referenz-System-Model
•	Entwicklung von Software-Funktionalitäten mit MATLAB/Simulink
•	Durchführung von dynamischen Simulationen
•	Tool Entwicklung: automatische Generierung von Soll Kennlinien als Anforderungen für eine Performance Definition (Daten Verarbeitung, Interpolationsfunktion)
•	Support der Tätigkeiten im DHT Projekt
                </p>
            </div>

            
            <div className='item-desc'>
                <h3>Knorr Bremse Gmbh</h3>
            </div>

        </div>
    </div>
  )
}

export default Experience