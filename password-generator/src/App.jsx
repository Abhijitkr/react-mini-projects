import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);
  console.log(passRef)

  const generatePass = useCallback(() => {
    var pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  const copyToClipboard = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    generatePass();
  }, [length, numAllowed, charAllowed, generatePass])

  return (
    <>
      <main>
        <header>
          <h1>Password Generator</h1>
          <img src="https://www.iconshock.com/image/Impressions/Security/password_generator" width="40" height="40" alt="" />
        </header>
        <section id='password'>
          <input type="text" placeholder='Password' value={password} ref={passRef} readOnly />
          <button onClick={copyToClipboard}>Copy</button>
        </section>
        <section id="settings">
          <div>
            <input type="range" id='length' min={6} max={50} defaultValue={8} onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" id='number' defaultChecked={numAllowed} onChange={() =>
              setNumAllowed((checked) => !checked)} />
            <label htmlFor='number'>Number</label>
          </div>
          <div>
            <input type="checkbox" id='character' defaultChecked={charAllowed} onChange={() => setCharAllowed((checked) => !checked)} />
            <label htmlFor='character'>Character</label>
          </div>
        </section >
      </main >
    </>
  )
}

export default App
