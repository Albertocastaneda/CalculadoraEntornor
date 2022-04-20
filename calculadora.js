console.log('importado correctamente');

 

         var num1 ;
         var num2 ;
         var resultado="";
         var operacion;

        function suma(){
            console.log('Suma')
            resultado= 'SUMA: ' + (num1+num2); 
            
        }
        function resta(){
            console.log('Resta');
            resultado= 'RESTA: '+ (num1-num2); 
         
        }
        function multiplicación() {
            console.log('Multiplicación');
            resultado= 'MULTPLICACIÓN: ' + (num1*num2); 
           
        }
        function division(){
            console.log('División')
            resultado= 'DIVISIÓN: ' + (num1/num2); 
            
        }
        
        function igual(igual){
            console.log(igual);
            console.log(resultado);
        }

        function conseguirNumero(num){
            console.log(num)
        }
        function obtenerOperacion(operacion) {
            console.log(operacion);
        }
        