import React, { useState, useEffect } from 'react'
import api from './services/api';
import './App.css';

import Header from './components/Headers';

/**
 * Components
 * Properity
 * State & immutability
 */

function App() {
    const[projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

    //useState retorna um array com 2 posições
    //
    //1. Variável com o seu valor inicial
    //2. Função para atualizarmos esse valor

    useEffect(() => {
        api.get('/projects').then(response => {
            console.log(useEffect)
        });
    }, []);

    function handleAddProject(){
        // projects.push(`Novo projeto${Date.now()}`)

        setProjects([ ...projects, `Novo projeto${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
            <Header title="Projects"/>


            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject}>Adicionar projeto</button>

        </>
    )
}

export default App;
