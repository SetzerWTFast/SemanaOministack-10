import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api.js';
//Componente: Block isolado de HTML, CSS E JS o qual não interfere no restante da aplicação
//Propiedade: Informação que um componente PAI passa para o componeten FILHO
//Estado: Informações mantidas pelo componete (Lembrar: imu  tabilidade)

function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    setGithub_username('');
    setTechs('');
    setLatitude('');
    setLongitude('');
  }

  return (
    
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithub_username}/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
            </div>
          </div>

            <button type="submit">Salvar Dados</button>
        </form>
      </aside>
     
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/38281853?s=460&v=4" alt="Natã Vicente"/>
              <div className="user-info">
                <strong>Natã Vicente</strong>
                <span>ReactJS, React Native, Node,js</span>
              </div>
            </header>
            <p>Aspirante em desenvolvimento de sistemas, com maior uso na framework .NET</p>
            <a href="https://github.com/SetzerWTFast">Acessar perfil git</a>
          </li>
        </ul>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/38281853?s=460&v=4" alt="Natã Vicente"/>
              <div className="user-info">
                <strong>Natã Vicente</strong>
                <span>ReactJS, React Native, Node,js</span>
              </div>
            </header>
            <p>Aspirante em desenvolvimento de sistemas, com maior uso na framework .NET</p>
            <a href="https://github.com/SetzerWTFast">Acessar perfil git</a>
          </li>
        </ul>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/38281853?s=460&v=4" alt="Natã Vicente"/>
              <div className="user-info">
                <strong>Natã Vicente</strong>
                <span>ReactJS, React Native, Node,js</span>
              </div>
            </header>
            <p>Aspirante em desenvolvimento de sistemas, com maior uso na framework .NET</p>
            <a href="https://github.com/SetzerWTFast">Acessar perfil git</a>
          </li>
        </ul>

        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/38281853?s=460&v=4" alt="Natã Vicente"/>
              <div className="user-info">
                <strong>Natã Vicente</strong>
                <span>ReactJS, React Native, Node,js</span>
              </div>
            </header>
            <p>Aspirante em desenvolvimento de sistemas, com maior uso na framework .NET</p>
            <a href="https://github.com/SetzerWTFast">Acessar perfil git</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
