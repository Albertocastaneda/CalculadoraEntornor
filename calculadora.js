console.log('importado correctamente');

 

         var num1 ;
         var num2 ;
         var resultado="";
         var operacion;

        function suma(n1,n2){
           return n1 +  n2 ; 
            
        }
        function resta(n1, n2){
           return n1 - n2;
        }
        function multiplicación(n1 , n2) {
           return n1 * n2;
        }
        function division(n1, n2){
           return n1 / n2; 
        }
        
        function igual(){
            
            //en funcion de "operacion" y de num1 y num2, resultado va a ser una cosa u otra

            switch (operacion) {
                case '+':
                    resultado= suma(num1,num2);
                    console.log(resultado);
                    break;
                case '-':
                    resultado= resta(num1 - num2);
                    console.log(resultado);
                    break;
                case '*':
                    resultado= multiplicación(num1 * num2) ;
                    console.log(resultado);
                    break;
                case '/':
                    resultado= division(num1/num2);
                    console.log(resultado);
                    break;
                default:
                    break;
            }

            num1 = null;
            num2 = null;
            operacion = null;
            var display = document.getElementById('display');
            display.innerHTML=resultado;

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

        module.exports= new operacion;
        