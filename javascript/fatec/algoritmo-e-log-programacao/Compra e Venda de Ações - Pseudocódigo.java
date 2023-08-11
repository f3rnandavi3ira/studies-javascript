Compra e Venda de Ações - Pseudocódigo 
  
Algoritmo valorCompraeVendaAções 
  
Var  

valorPagoAções,  
valorComissãoCompra,   
valorVendaAções, 
valorComissãoVenda,
valorTotalLiquido : real; 
  
const real  PERCComissão = 0,02;  // 2/100 
 
Início 
 
valorPagoAções  =  1000 * 32,87   ; 
valorComissãoCompra =  valorPagoAções * PERCComissão  ;  
ValorTotalCompra = valorPagoAções + valorComissãoCompra ;
valorVendaAções =  1000 * 33,92 ;  
valorComissãoVenda = valorVendaAções * PERCComissão ;
ValorTotalVenda = valorVendaAções - valorComissãoVenda ;
valorTotalLiquido  = ValorTotalCompra - ValorTotalVenda
 
Escreva( “Valor Pago Pelas Ações” , valorPagoAções ); 
Escreva( “Valor Pago em Comissão no Ato da Compra” , valorComissãoCompra ); 
Escreva( “Valor Total da Compra”, ValorTotalCompra );
Escreva( “Valor Venda das Ações”, valorVendaAções ); 
Escreva( “Valor Pago em Comissão no Ato da Venda”    ,  valorComissãoVenda); 
Escreva( “Valor Total da Venda”, ValorTotalVenda );
Escreva( “Valor Total Líquido”, valorTotalLiquido ); 

Fim
