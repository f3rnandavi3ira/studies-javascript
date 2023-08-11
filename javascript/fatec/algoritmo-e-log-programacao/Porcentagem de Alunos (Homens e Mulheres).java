Porcentagem de Alunos (Homens e Mulheres) - Pseudocódigo 
  
Algoritmo Porcentagem de Alunos 
  
Var  
valorAlunosHomens,  
valorAlunasMulheres,  
valorPorcentagemAlunosHomens, 
valorPorcentagemAlunasMulheres, 
valorTotalAlunos : real; 

 
Início 
 
Escreva( “Qual o total de alunos homens?” );
 
Leia( valorAlunosHomens ); 

Escreva( “Qual o total de alunas mulheres?” );

Leia( valorAlunasMulheres );
 
valorTotalAlunos  =  valorAlunosHomens + valorAlunasMulheres ; 
valorPorcentagemAlunosHomens =  valorAlunosHomens / valorTotalAlunos * 100  ;  
valorPorcentagemAlunasMulheres =  valorAlunasMulheres / valorTotalAlunos * 100 ;   
  
Escreva( “Percentual de Homens em sala de aula” , valorPorcentagemAlunosHomens ); 
Escreva( “Percentual de Mulheres em sala de aula” , valorPorcentagemAlunasMulheres  );  
 
Fim 
