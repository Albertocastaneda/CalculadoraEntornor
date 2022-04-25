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

            switch (operacion) {
                case '+':
                    resultado= num1 + num2;
                    console.log(resultado);
                    break;
                case '-':
                    resultado= num1 - num2;
                    console.log(resultado);
                    break;
                case '*':
                    resultado= num1 * num2;
                    console.log(resultado);
                    break;
                case '/':
                    resultado= num1/num2;
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
        