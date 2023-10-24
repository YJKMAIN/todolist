const num1_Input = document.querySelector('.num1');
        const num2_Input = document.querySelector('.num2');
        const calcResult = document.querySelector('.calcResult');
        const btn_result = document.querySelector('.btn_result');
        const reset_btn = document.querySelector('.btn_reset');
        const buttons = document.querySelector('.operator').querySelectorAll('button[type="button"]');
        let operator = '';

        function resultShowing(){
            calcResult.innerText =`${localStorage.getItem('num1')} ${localStorage.getItem('operator')} ${localStorage.getItem('num2')} = ${localStorage.getItem('result')}` ;
        }        

        reset_btn.addEventListener('click',function(){
            calcResult.innerText ='';
            window.localStorage.clear();
        });

        buttons.forEach(function(item){
            item.addEventListener('click',function(e){
                e.preventDefault();
                operator = localStorage.setItem('operator', item.innerText);
            });
        });
        
        function savingNumber(){
            localStorage.setItem('num1', num1_Input.value);
            localStorage.setItem('num2', num2_Input.value);
            toOperate();
        };

        function toOperate(){
            switch(localStorage.getItem('operator')){
                case "+":
                    plusFunc();
                    break;
                    
                case "-":
                    minusFunc();
                    break;

                case "*":
                    multipleFunc();
                    break;

                case "/":
                    divideFunc();
                    break;
            }
        }

        function plusFunc(){
            const storageNum1 = Number(localStorage.getItem('num1'));
            const storageNum2 = Number(localStorage.getItem('num2'));

            localStorage.setItem('result', storageNum1 + storageNum2);
            resultShowing();
        }

        function minusFunc(num1, num2){
            const storageNum1 = Number(localStorage.getItem('num1'));
            const storageNum2 = Number(localStorage.getItem('num2'));

            localStorage.setItem('result', storageNum1 - storageNum2);
            resultShowing();
        }

        function multipleFunc(num1, num2){
            const storageNum1 = Number(localStorage.getItem('num1'));
            const storageNum2 = Number(localStorage.getItem('num2'));

            localStorage.setItem('result', storageNum1 * storageNum2);
            resultShowing();
        }

        function divideFunc(num1, num2){
            const storageNum1 = Number(localStorage.getItem('num1'));
            const storageNum2 = Number(localStorage.getItem('num2'));

            localStorage.setItem('result', storageNum1 / storageNum2);
            resultShowing();
        }

        btn_result.addEventListener('click',savingNumber);

        resultShowing();