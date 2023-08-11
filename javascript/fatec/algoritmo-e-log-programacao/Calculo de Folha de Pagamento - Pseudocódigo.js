Calculo de Folha de Pagamento - Pseudocódigo 
  
Algoritmo valorPagamento 
  
Var  

varIDFuncionário
valorQTDHRTrabalhadas, 
varINSS, 
valorSalárioBruto, 
valorSalárioLiquido : real; 

const VALORHORASTRABALHADAS = 15.00  //R$

//INSS 2022 
//Até R$ 1.212,00 (salário-mínimo) – 7,5%
//Entre R$ 1. 212,00 e R$ 2.427,35 – 9%
//Entre R$ 2.427,36 e R$ 3.641,03 – 12%
//Entre R$ 3.641,03 e R$ 7.087,22– 14%
 
Início 
 
Escreva( “Informe o ID do funcionário.” ); 
 
Leia( varIDFuncionário );

Escreva( “Informe a quantidade de horas trabalhadas.” ); 
 
Leia( valorQTDHRTrabalhadas ); 

 
valorSalárioBruto  =  valorQTDHRTrabalhadas * VALORHORASTRABALHADAS   ; 

Se 

(valorSalárioBruto<1.212,00) ou (valorSalárioBruto=1.212,00)

então

varINSS = valorSalárioBruto * 7.5 / 100

senão
Se 

(valorSalárioBruto>1.212,00) e (valorSalárioBruto<=2.427,35)

então

varINSS = valorSalárioBruto * 9 / 100

senão
Se 

(valorSalárioBruto>2.427,35) e (valorSalárioBruto<=3.641,03)

então

varINSS = valorSalárioBruto * 12 / 100

senão
Se 

(valorSalárioBruto>3.641,03) e (valorSalárioBruto<=7.087,22)

então

varINSS = valorSalárioBruto * 14 / 100

valorSalárioLiquido = valorSalárioBruto - varINSS
  
Escreva( “ID Funcionário” , varIDFuncionário );  
Escreva( “Salário Bruto” , valorSalárioBruto  ); 
Escreva( “Desconto INSS”, varINSS ); 
Escreva( “Salário Liquido”    ,  valorSalárioLiquido); 

fimse 
fimse 
fimse 
fimse

Fim 
