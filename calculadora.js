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
        
        function igual(){
            
            //en funcion de "operacion" y de num1 y num2, resultado va a ser una cosa u otra

            // console.log('numero 1:', num1);
            // console.log('numero 2:', num2);
            // console.log('operacion:', operacion);

            switch (operacion) {
                case suma:
                    resultado= num1 + num2;
                    console.log(resultado);
                    break;
                case resta:
                    resultado= num1 - num2;
                    console.log(resultado);
                    break;
                case multiplicación:
                    resultado= num1 * num2;
                    console.log(resultado);
                    break;
                case division:
                    resultado= num1/num2;
                    console.log(resultado);
                default:
                    break;
            }

            num1 = null;
            num2 = null;
            operacion = null;

        }

        function conseguirNumero(num){
            // console.log(num)
            if (operacion==null){
                num1= num;
            }else{
                num2=num;
            }
        }
        function obtenerOperacion(op) {
            // console.log(operacion)
            operacion = op;

        }
        