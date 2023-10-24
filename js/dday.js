const todayMonth = document.querySelector("#today_date span.today_month");
const todayDay = document.querySelector("#today_date span.today_day");
const Dday = document.querySelector("#Dday span:last-child");

function watingFotlastday(){
            const lastday = new Date(2023,12,31);
            const today = new Date();
            const daysToWaitDays = lastday.getTime() - today.getTime();

            const watingDay = String(Math.floor(daysToWaitDays/(1000*60*60*24))).padStart(3,"0");
        



            /*출력하기*/
            const theMonth = String(`${today.getMonth()}`).padStart(2,"0");
            switch(theMonth){
                case '01':
                    todayMonth.innerText = 'JAN';
                    break;
                case '02':
                    todayMonth.innerText = 'FEB';
                    break;
                case '03':
                    todayMonth.innerText = 'MAR';
                    break;
                case '04':
                    todayMonth.innerText = 'APR';
                    break;
                case '05':
                    todayMonth.innerText = 'MAY';
                    break;
                case '06':
                    todayMonth.innerText = 'JUN';
                    break;
                case '07':
                    todayMonth.innerText = 'JUL';
                    break;
                case '08':
                    todayMonth.innerText = 'AUG';
                    break;
                case '09':
                    todayMonth.innerText = 'SEP';
                    break;
                case '10':
                    todayMonth.innerText = 'OCT';
                    break;
                case '11':
                    todayMonth.innerText = 'NOV';
                    break;
                case '12':
                    todayMonth.innerText = 'DEC';
                    break;
            }

            todayDay.innerText = String(`${today.getDate()}`).padStart(2,"0");
            Dday.innerText = `${watingDay}`;
        }

        watingFotlastday();
        setInterval(watingFotlastday,1000);