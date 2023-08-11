Cálculo de IMC - Pseudocódigo 
  
Algoritmo ValorIMC 
  
Var  
valorPeso,  
valorAltura,  
valorIMC, 

 
Início 
 
Escreva( “Informe o valor do peso.” );
 
Leia( valorPeso ); 

Escreva( “Informe o valor da altura.” );

Leia( valorAltura );
 
valorIMC  =  valorPeso / (valorAltura * valorAltura) ;  
  
Escreva( “Valor IMC:” , valorIMC );   
 
Fim 