import { useState } from 'react'

export default function Home() {
  const [currentScript, setCurrentScript] = useState(0)

  const scripts = [
    {
      title: "The Great Pizza Heist",
      characters: ["Detective Whiskers (Cat)", "Captain Chomps (Dog)", "Professor Pepperoni (Mouse)"],
      scenes: [
        {
          scene: "Scene 1: The Crime Scene",
          dialogue: [
            { char: "Detective Whiskers", line: "*sniffing around* The pizza... it's GONE! Not even a crumb left behind!" },
            { char: "Captain Chomps", line: "*drooling* This is terrible! Who would commit such a heinous crime?!" },
            { char: "Detective Whiskers", line: "Wait... Chomps, why is there sauce on your nose?" },
            { char: "Captain Chomps", line: "*nervously* Uh... it's... evidence! Yeah, I'm collecting evidence with my face!" }
          ]
        },
        {
          scene: "Scene 2: The Investigation",
          dialogue: [
            { char: "Professor Pepperoni", line: "*bursting in wearing tiny glasses* I've analyzed the data! The pizza was last seen at 3:47 PM!" },
            { char: "Detective Whiskers", line: "That's oddly specific..." },
            { char: "Professor Pepperoni", line: "That's because I was watching it. Very closely. With binoculars." },
            { char: "Captain Chomps", line: "Okay this is getting weird now." }
          ]
        },
        {
          scene: "Scene 3: The Plot Twist",
          dialogue: [
            { char: "Detective Whiskers", line: "*dramatically pointing* I've solved it! The pizza thief is... ALL OF US!" },
            { char: "Captain Chomps", line: "What?! I would never— *burps up a pepperoni*" },
            { char: "Professor Pepperoni", line: "*cheese hanging from whiskers* This is circumstantial evidence at best!" },
            { char: "Detective Whiskers", line: "*licking paws* I may have eaten the evidence too. Case closed!" }
          ]
        }
      ]
    },
    {
      title: "Space Janitor 3000",
      characters: ["Bob (Robot Janitor)", "Captain Stella", "Alien Blob (Gloopy)"],
      scenes: [
        {
          scene: "Scene 1: Deep Space Cleaning",
          dialogue: [
            { char: "Bob", line: "*mopping floor* Beep boop. Another day, another space station to clean." },
            { char: "Captain Stella", line: "*running in* CODE RED! Alien slime on Deck 7!" },
            { char: "Bob", line: "*sighs robotically* Beep. That's just Gary from accounting after taco Tuesday." },
            { char: "Captain Stella", line: "Oh. Right. Carry on then." }
          ]
        },
        {
          scene: "Scene 2: The Alien Encounter",
          dialogue: [
            { char: "Gloopy", line: "*slithering in* BLORP! I come in peace!" },
            { char: "Bob", line: "Great. More mess. Do you know how hard it is to clean slime trails?" },
            { char: "Gloopy", line: "BLORP! *offended noises* I'm a dignified ambassador!" },
            { char: "Bob", line: "*pulling out mop* And I'm a dignified janitor. Now hold still while I polish you." }
          ]
        },
        {
          scene: "Scene 3: The Real Hero",
          dialogue: [
            { char: "Captain Stella", line: "Bob! The reactor is overheating! We need a hero!" },
            { char: "Bob", line: "*puts down mop* I literally cleaned the reactor yesterday. Did you check the filters?" },
            { char: "Captain Stella", line: "*checking* Oh... they were just dusty." },
            { char: "Bob", line: "Beep boop. The real emergency is this ship's maintenance schedule." },
            { char: "Gloopy", line: "BLORP! The janitor saves the day again!" }
          ]
        }
      ]
    },
    {
      title: "Ninja vs. Pirate: The Ultimate Showdown",
      characters: ["Shadow Steve (Ninja)", "Pegleg Patricia (Pirate)", "Referee Rabbit"],
      scenes: [
        {
          scene: "Scene 1: The Challenge",
          dialogue: [
            { char: "Shadow Steve", line: "*appearing from smoke* Your pirating days are over!" },
            { char: "Pegleg Patricia", line: "*polishing sword* Yarr! Says who?" },
            { char: "Shadow Steve", line: "Says the ancient ninja code!" },
            { char: "Pegleg Patricia", line: "Well I have a pirate code! Rule #1: Ninjas smell like old incense!" },
            { char: "Shadow Steve", line: "*sniffing himself* It's LAVENDER and it's CALMING!" }
          ]
        },
        {
          scene: "Scene 2: The Competition",
          dialogue: [
            { char: "Referee Rabbit", line: "Round 1: Stealth contest! Go!" },
            { char: "Shadow Steve", line: "*vanishes*" },
            { char: "Pegleg Patricia", line: "*pegleg clanking loudly* CLANK CLANK CLANK—" },
            { char: "Referee Rabbit", line: "Ninja wins Round 1!" },
            { char: "Pegleg Patricia", line: "This is discrimination against wooden legs! I demand a rematch!" }
          ]
        },
        {
          scene: "Scene 3: The Friendship",
          dialogue: [
            { char: "Referee Rabbit", line: "Final Round: Who can eat the most tacos!" },
            { char: "Shadow Steve", line: "Wait, this wasn't in the ninja manual..." },
            { char: "Pegleg Patricia", line: "ARR! Finally something I trained for!" },
            { char: "Shadow Steve", line: "*eating* You know... you're alright for a pirate." },
            { char: "Pegleg Patricia", line: "*mouth full* Yarr... you're pretty cool for a ninja." },
            { char: "Referee Rabbit", line: "And the winner is... FRIENDSHIP! *both groan*" }
          ]
        }
      ]
    }
  ]

  const script = scripts[currentScript]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#667eea',
          fontSize: '3em',
          marginBottom: '10px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>🎬 Funny Cartoon Scripts 🎭</h1>

        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '30px',
          fontSize: '1.2em'
        }}>Hilarious cartoon scripts for your entertainment!</p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {scripts.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentScript(idx)}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '10px',
                border: 'none',
                background: currentScript === idx ? '#667eea' : '#e0e7ff',
                color: currentScript === idx ? 'white' : '#667eea',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: currentScript === idx ? '0 4px 12px rgba(102,126,234,0.4)' : 'none'
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div style={{
          background: '#f8f9ff',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            color: '#764ba2',
            fontSize: '2.5em',
            marginBottom: '20px',
            textAlign: 'center'
          }}>"{script.title}"</h2>

          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            border: '3px solid #667eea'
          }}>
            <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🎭 Characters:</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {script.characters.map((char, idx) => (
                <li key={idx} style={{
                  fontSize: '1.1em',
                  marginBottom: '8px',
                  color: '#333'
                }}>{char}</li>
              ))}
            </ul>
          </div>

          {script.scenes.map((scene, sceneIdx) => (
            <div key={sceneIdx} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '10px',
              marginBottom: '20px',
              border: '2px solid #e0e7ff'
            }}>
              <h3 style={{
                color: '#764ba2',
                fontSize: '1.5em',
                marginBottom: '15px',
                borderBottom: '2px solid #667eea',
                paddingBottom: '10px'
              }}>🎬 {scene.scene}</h3>

              {scene.dialogue.map((line, lineIdx) => (
                <div key={lineIdx} style={{
                  marginBottom: '15px',
                  padding: '15px',
                  background: lineIdx % 2 === 0 ? '#f8f9ff' : '#fff7ed',
                  borderRadius: '8px',
                  borderLeft: '4px solid ' + (lineIdx % 2 === 0 ? '#667eea' : '#fb923c')
                }}>
                  <strong style={{
                    color: lineIdx % 2 === 0 ? '#667eea' : '#fb923c',
                    fontSize: '1.1em'
                  }}>{line.char}:</strong>
                  <p style={{
                    marginTop: '8px',
                    fontSize: '1.05em',
                    lineHeight: '1.6',
                    color: '#333'
                  }}>{line.line}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          padding: '20px',
          background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
          borderRadius: '10px',
          marginTop: '30px'
        }}>
          <p style={{
            fontSize: '1.2em',
            color: '#2d3436',
            fontWeight: 'bold'
          }}>🎉 Click the buttons above to read different cartoon scripts! 🎉</p>
        </div>
      </div>
    </div>
  )
}
