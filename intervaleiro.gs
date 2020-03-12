function myFunction() {
  // Configuração.
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var activeSheet = ss.getActiveSheet();
  
  // Declaração.
  var contador = 0;
  var cut = -1;
  var intervalos = new Array();
  var busca = 0;
  var a = 0;
  var maior = 0;
  
  // Busca.
  for (var i = 0;i < (activeSheet.getRange("K24").getValue()-1); i++){
    busca = activeSheet.getRange(4+i,4).getValue();
    if(busca == 0){ // Caso o valor seja o esperado é adicionado ao contador.
      contador++;
      cut = 1;
    
    }else if(busca !=0 && cut == 1){ // Caso seja diferente e já tenha sido começado uma conta ele é interrompido e armazenado.
      intervalos[a] = contador;
      a++;
      contador = 0;
      cut = -1;
    
    }
    
  }
  intervalos[a] = contador; // Caso o último valor seja 0 e não seja contado pelo caso acima.
  
  activeSheet.getRange("K25").setValue(Math.max(...intervalos));
  
}
