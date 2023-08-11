Porcentagem de Votos por Partido - Pseudocódigo 
  
Algoritmo ValorVotosPartido   
  
Var  
N1, N2, N3
varTotaldeVotos,
varPorcentagemN1,
varPorcentagemN2,
varPorcentagemN3,

Início 
 
Escreva( “Informe o nome do partido.” );
 
Leia( N1, N2, N3 ); 

Escreva( “Informe a quantidade de votos” );
 
Leia( N1, N2, N3 );

varTotaldeVotos = N1 + N2 + N3
varPorcentagemN1 = N1 / varTotaldeVotos * 100
varPorcentagemN2 = N2 / varTotaldeVotos * 100
varPorcentagemN3 = N3 / varTotaldeVotos * 100

Escreva ("Porcentagem de votos para Prefeito: Partido N1" , varPorcentagemN1)
Escreva ("Porcentagem de votos para Prefeito: Partido N2" , varPorcentagemN2)
Escreva ("Porcentagem de votos para Prefeito: Partido N3" , varPorcentagemN3)

Fim 
