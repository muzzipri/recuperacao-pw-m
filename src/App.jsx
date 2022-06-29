import HelloWorld from './HelloWorld';
import React from 'react'
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {
	

	const lista_pessoas =[
		{
			nome: "01/06/2022 08:13",
			idade: "NOTA A COMUNIDADE: Bloqueio do orçamento da Educação", 
		},

		{
			nome: "31/05/2022/ 12:35",
			idade: "IFRO publica edital para cadastro de interesse de remoção",
			
		},
		{
			nome: "30/05/2022 09:54",
			idade: "Parceria entre ifro e UAB ira ampliar a oferta de cursos de pós graduação e pedagogia",
			
		},
		{
			nome: "25/05/2022 15:10 ",
			idade: "Matutenção do Sistema SUAP acontece nesta sexta-feira(27)",
			
		},
		{
			nome: "25/05/2022 07:44",
			idade: "Pais e responsáveis por aluno podem ter acesso a informação estudantis pelo App IFRO Mobile",
			
		},

	]

	return (
		<div>
			<HelloWorld />
			
			

			{lista_pessoas.map ((pessoa) =>{
				return <Perfil 

							nome={pessoa.nome} 
							idade={pessoa.idade}/>
			})}

		</div>
	);
}

export default App;
