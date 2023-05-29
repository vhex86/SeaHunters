var table = document.querySelector("#table");

var arr = [];//создаем пустой массив под генреацию таблицы

let alhabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // создаем массив с алфавитом под генерацию имен заголовков столбцов

const left = document.getElementById("left"); // находим кнопку влево и присваиваем ее константе left
const right = document.getElementById("right");// находим кнопку вправо и присваиваем ее константе left
const up = document.getElementById("up"); //находим кнопку вверх 
const down = document.getElementById("down"); // etc ///

const scan = document.getElementById("scan");

let n = 10, m = 10; //устанавливаем размерность таблицы

let amountMyShip = 10;
let amountEnemyShip = 10;


let scanMovePattern = {
    counterTarget:0,
    nearDistance: function(startCell,tableCell){ // функция обхода вверх
        let up = tableCell[startCell-1].classList.contains("up_transit");
        let right = tableCell[startCell-1].classList.contains("right_transit");
        let bottom = tableCell[startCell-1].classList.contains("down_transit");
        let left = tableCell[startCell-1].classList.contains("left_transit");
        function moveScan (amountCellTable){ 
     
            
            if (!(tableCell[startCell - amountCellTable].classList.contains("MyShip"))) {
                
                tableCell[startCell - amountCellTable].innerHTML = "⚡";
               
                setTimeout(function() {tableCell[startCell - amountCellTable].innerHTML = " ";}, 1000  );
             
                if (tableCell[startCell - amountCellTable].classList.contains("Enemy")) {
                    scanMovePattern.counterTarget++; 
                }

               
            }
           
            else {
                tableCell[startCell - amountCellTable].innerHTML = "⚡";
                setTimeout(function() {tableCell[startCell - amountCellTable].innerHTML = "🚢";}, 1000  );
                scanMovePattern.counterTarget++;
            
            }
            

        }
       

        if(!up && !right && !bottom && !left ) { // Если  начальная курсора не находится на этих позициях
            setTimeout( function(){ moveScan(12);}, 0); // спокойно проходим один круг // вверх лево
            setTimeout( function(){ moveScan(11);}, 100); // вверх
            setTimeout( function(){ moveScan(10);}, 200);  // вверх вправо
            setTimeout( function(){ moveScan(0);},  300);//вправо
            setTimeout( function(){ moveScan(-10);},  400); //право - вниз
            setTimeout( function(){ moveScan(-9);},  500);//низ
            setTimeout( function(){ moveScan(-8);},  600); // лево -низ
            setTimeout( function(){ moveScan(2);},  700); // лево
            setTimeout( function(){ counterMessage();}, 800);  //сетчик целей 
        } 
        else if ( up&&left){ // позиция левого верхнего угла
            // alert ("Работаем");
            setTimeout( function(){ moveScan(0);}, 0);
            setTimeout( function(){ moveScan(-10);},  100);
            setTimeout( function(){ moveScan(-9);},  200);
            setTimeout( function(){ counterMessage();}, 300);  
        }
        else if (up&&right ){ //позиция верхнего правого 
        
            setTimeout( function(){ moveScan(2);}, 0); // лево
            setTimeout( function(){ moveScan(-8);}, 100); // лево -низ
            setTimeout( function(){ moveScan(-9);},  200);//низ
            setTimeout( function(){ counterMessage();}, 300);  
               
            //  alert ("Работаем");
        }
        else if (bottom && right) { //позиция нижнего правого
            setTimeout( function(){ moveScan(11);}, 0); // вверх
            setTimeout( function(){ moveScan(12);}, 100); // спокойно проходим один круг // вверх лево
            setTimeout( function(){ moveScan(2);},  200); // лево
            setTimeout( function(){ counterMessage();}, 300);  
        }
        else if (bottom && left) {    //позиция нижнего левого угла
            setTimeout( function(){ moveScan(11);}, 0); // вверх
            setTimeout( function(){ moveScan(10);}, 200);  // вверх вправо
            setTimeout( function(){ moveScan(0);},  300);//вправо
            setTimeout( function(){ counterMessage();}, 300);  

        }
        else if (up) {
            setTimeout( function(){ moveScan(0);},  100);//вправо
            setTimeout( function(){ moveScan(-10);},  200); //право - вниз
            setTimeout( function(){ moveScan(-9);},  300);//низ
            setTimeout( function(){ moveScan(-8);},  600); // лево -низ
            setTimeout( function(){ moveScan(2);},  700); // лево
            setTimeout( function(){ counterMessage();}, 800);  //счетчик целей 

        }
        else if(right){
            setTimeout( function(){ moveScan(11);}, 0); // вверх
            setTimeout( function(){ moveScan(12);}, 100); // вверх лево
            setTimeout( function(){ moveScan(2);},  200); // лево
            setTimeout( function(){ moveScan(-8);},  300); // лево -низ
            setTimeout( function(){ moveScan(-9);},  400);//низ
            setTimeout( function(){ counterMessage();}, 500);  //сетчик целей 
        }
        
        else if(bottom) {
            setTimeout( function(){ moveScan(2);},  0); // лево
            setTimeout( function(){ moveScan(12);}, 100);  // вверх лево
            setTimeout( function(){ moveScan(11);}, 200); // вверх
            setTimeout( function(){ moveScan(10);}, 300);  // вверх вправо
            setTimeout( function(){ moveScan(0);},  400);//вправо
            setTimeout( function(){ counterMessage();}, 500);  //сетчик целей 

        } 
        else if(left) {
            setTimeout( function(){ moveScan(11);}, 100); // вверх
            
            setTimeout( function(){ moveScan(10);}, 200);  // вверх вправо
            setTimeout( function(){ moveScan(0);},  300);//вправо
            
            setTimeout( function(){ moveScan(-10);},  400); //право - вниз
            
            setTimeout( function(){ moveScan(-9);},  500);//низ
            setTimeout( function(){ counterMessage();}, 600);  //сетчик целей 

            // setTimeout( function(){ moveScan(12);}, 0); // спокойно проходим один круг // вверх лево
            
            
            // setTimeout( function(){ moveScan(-8);},  600); // лево -низ
            // setTimeout( function(){ moveScan(2);},  700); // лево
          
        }

        
        else {

            alert ("oops!"); 
        }
        function counterMessage() {
            console.log(scanMovePattern.counterTarget);
            switch(scanMovePattern.counterTarget) {
         
            case 0: console.log ("Ближняя дистанция, целей нет") ;
                break;
            case 1: console.log ("Ближняя дистанция, цель одиночная");   
                break;
            default: console.log ("Ближняя дистанция, цель групповая");  
                break; 
    
            }
        }
                                               
    }
    

};

fillArr();//заполняем массив
fillTable(table, arr); // генерируем таблицу из созданного массива
setClassForTransition();
fillMyShipOnField(amountMyShip); 
fillEnemyShipOnField(amountEnemyShip);
MoveCursor(); // функция обеспечивающая перемещение курсора






scan.onclick = function (){
    let i = 0;
   
    let tableCell = document.getElementsByTagName("td"); //заносим таблицу в Nodelist
    

    for (let item of tableCell) {  //обходим NodeList в цикле
        i++;
        let redDot = item.classList.contains("red_dot");
        if (redDot){ 
            scanMovePattern.counterTarget = 0;
            scanMovePattern.nearDistance(i,tableCell);
            
        }
    }   

};

function fillMyShipOnField(amount) {
    let tableCellForMyShip = document.querySelectorAll("td");
    
   
    let i = 0;
    
    do {
        let numberCell = Math.floor(Math.random() * 99);
        let candidateCellAllow =  tableCellForMyShip[numberCell].classList.contains("MyShip");
        if ( !candidateCellAllow ){
            tableCellForMyShip[numberCell].classList.add("MyShip");
            tableCellForMyShip[numberCell].innerHTML = "🚢";
            
            i++;

        }   
    }  while( i < amount);
}
function fillEnemyShipOnField(amountEnemy){
    let tableCellForEnemyShip = document.querySelectorAll("td");
    let i = 0;
    do {
        let numberCellForEnemy = Math.floor(Math.random() * 99);
        let candidateCellForEnemy = tableCellForEnemyShip[numberCellForEnemy].classList.contains("Enemy");
        let checkMyShip = tableCellForEnemyShip[numberCellForEnemy].classList.contains("MyShip");
        if (!candidateCellForEnemy && !checkMyShip ){
            tableCellForEnemyShip[numberCellForEnemy].classList.add("Enemy");
            tableCellForEnemyShip[numberCellForEnemy].innerHTML = " 0 ";
            i++;
        }   
    } while (i < amountEnemy );

   
}


function fillArr() { //заполняем двумерный массив
 
    for (var i = 0; i < m; i++) {
        arr[i] = [];

        for (var j = 0; j < n; j++) {
            arr[i][j] = " ";
        }
    }

}



function fillTable(table, arr) {
    let parent = document.querySelector(".alhabetHeader");

    for (var i = 0; i < arr.length; i++) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");

        th.innerHTML = i;
        tr.appendChild(th);
        for (var j = 0; j < arr[i].length; j++) {
            var td = document.createElement("td");

            td.innerHTML = arr[i][j];
            tr.appendChild(td);



        }
        table.appendChild(tr);

    }

    for (let k = 0; k < arr.length; k++) {
        let thh = document.createElement("th");
        let p = parent.appendChild(thh);
        p.innerHTML = alhabet[k];
    }


}







function setClassForTransition(){
    let c = document.querySelectorAll("td") ;  //собираем все ячейки таблицы в массив "c"
    
    for ( let i = 0; i < c.length; i+=9){
    
        c[i].classList.add("left_transit");  //присваиваем класс транзита для пограничных левых ячеек  
        i+=1; //поправка
    }

    for ( let k = 9; k < c.length; k+=9){
    
        c[k].classList.add("right_transit");  //присваиваем класс для пограничных правых ячеек
        k+=1; //поправка
    }
   
    for (let z = 0; z < m; z++) {

        c[z].classList.add("up_transit");
    }

    for (let z = 99; z > 89; z-- ){
        c[z].classList.add("down_transit");


    } 

}



function MoveCursor() {
    
    let leftCounter = 0;//счетчик позиции для функции left.onclick
    let rightCounter = 0;//счетчик позиции для right.onclick
    let upCounter = 0; //счетчик позиции для up.onclick
    let downCounter = 0; //счетчик позиции для down.onclick
    let tableCell = document.querySelectorAll("td");
    let NumberCellInitial =  Math.floor(Math.random()*99); //начальная тестовая позиция
    
    let leftIndicatorBorder = tableCell[NumberCellInitial].classList.contains("left_transit");
    let upIndicatorBorder = tableCell[NumberCellInitial].classList.contains("up_transit");
    let rightIndicatorBorder = tableCell[NumberCellInitial].classList.contains("right_transit"); 
    let downIndicatorBorder = tableCell[NumberCellInitial].classList.contains("down_transit"); 

    let NumberCellForRightButton = NumberCellInitial;
    let NumberCellForUpButton = NumberCellInitial;
    let NumberCellForDownButton = NumberCellInitial;
    tableCell[NumberCellInitial].classList.add("red_dot");
    tableCell[NumberCellInitial].innerHTML = " 💢";
    

    left.onclick = function(){//функция передвижения курсора влево
      
        let checkMyShipLeft = tableCell[NumberCellInitial - leftCounter].classList.contains("MyShip");//проверяем наличие нашего корабля в ячейке
        
        if (!checkMyShipLeft) {

            moveDotLeft(" "); //корабля нет 
        }
        else {
            moveDotLeft("🚢"); // корабль есть
        }



        function moveDotLeft(inputImage)  {
            if (!leftIndicatorBorder ) {   //если ячейка не содержит класс Left_transit то выполняем следующий код
          
            
                rightCounter = 0;
                upCounter = 0;
                downCounter = 0;
                leftCounter += 1; // прибавляем счетчик позиции.
          
                NumberCellForRightButton = NumberCellInitial - leftCounter;//обновляем позицию прицела для правого onclick
                NumberCellForUpButton = NumberCellInitial - leftCounter;    
                NumberCellForDownButton =  NumberCellInitial - leftCounter;
                tableCell[NumberCellInitial - leftCounter].classList.add("red_dot"); 
                
                tableCell[NumberCellInitial - leftCounter+1].classList.remove("red_dot") ;//удаляем в старой ячейке класс red_dot
                tableCell[NumberCellForRightButton+rightCounter].innerHTML = "💢";
                tableCell[NumberCellInitial-leftCounter + 1].innerHTML = inputImage;

            
             
                leftIndicatorBorder = tableCell[NumberCellInitial-leftCounter].classList.contains("left_transit");    
         
                rightIndicatorBorder = false;          
          
          
            }

        
            else  //если ячейка содержит класс Left_transit то выполняем следующий код
            {  
            
                NumberCellForRightButton = (NumberCellInitial-leftCounter) + (m-1); 
                NumberCellForUpButton =  (NumberCellInitial-leftCounter) + (m-1);
                NumberCellForDownButton = (NumberCellInitial-leftCounter) + (m-1);
                tableCell[(NumberCellInitial-leftCounter) + (m-1)].classList.add("red_dot"); // устанавливаем класс red_dot назад т.е имитируем переход на правую границу
                tableCell[(NumberCellInitial-leftCounter) + (m-1)].innerHTML = " 💢 ";    //рисуем в новой ячейке бомбу
                tableCell[NumberCellInitial-leftCounter].classList.remove("red_dot") ; //удаляем в старой ячейке класс и заполняем как было
                tableCell[NumberCellInitial-leftCounter].innerHTML = inputImage;
                leftCounter -= m-1;    //корректируем счетчик позиции
                leftIndicatorBorder = false; // переводим проверку наличия класса left_transit в режим ожидания
                rightIndicatorBorder = true;
              
                rightCounter = 0;
                upCounter = 0;
                downCounter = 0; 
          
        

            } 
        }
    
    };

    
    
  
    right.onclick = function(){
        
        let checkMyShipRight = tableCell[NumberCellForRightButton + rightCounter].classList.contains("MyShip");
        if(!checkMyShipRight){
            moveDotRight(" ");

        }        else{
            moveDotRight("🚢");

        }
        

        function moveDotRight(inputImage) {
            if (!rightIndicatorBorder){
                leftCounter = 0; //сбрасываем левый счетчик позиции.
                upCounter = 0;
                downCounter = 0;
                rightCounter += 1;
            
            
          
            
                tableCell[NumberCellForRightButton + rightCounter].classList.add("red_dot"); // устанавливаем класс ячейке больше на один т.е правой 
                tableCell[NumberCellForRightButton + rightCounter].innerHTML = " 💢 "; //рисуем в новой ячейке бомбу 
                tableCell[NumberCellForRightButton + rightCounter - 1].classList.remove("red_dot");//удаляем в старой ячейке класс red_dot
                tableCell[NumberCellForRightButton + rightCounter - 1].innerHTML = inputImage;    //рисуем в старой ячейке плюс чтобы создалась иллюзия "как было"
            
            
                rightIndicatorBorder = tableCell[NumberCellForRightButton+rightCounter].classList.contains("right_transit");
                leftIndicatorBorder = false;
                downIndicatorBorder = tableCell[NumberCellForRightButton+rightCounter].classList.contains("down_transit");       
                upIndicatorBorder = tableCell[NumberCellForRightButton+rightCounter].classList.contains("up_transit");
                NumberCellInitial = NumberCellForRightButton + rightCounter; 
                NumberCellForUpButton = NumberCellForRightButton + rightCounter;
                NumberCellForDownButton = NumberCellForRightButton + rightCounter;

            
            } 
            else{ 
                NumberCellInitial = NumberCellForRightButton + rightCounter - m + 1;
                NumberCellForUpButton = NumberCellForRightButton + rightCounter - m + 1;
                NumberCellForDownButton = NumberCellForRightButton + rightCounter - m + 1;
                tableCell[NumberCellForRightButton + rightCounter - m + 1].classList.add("red_dot"); // устанавливаем класс red_dot назад т.е имитируем переход на левую границу
                tableCell[NumberCellForRightButton + rightCounter - m + 1].innerHTML = " 💢 ";    //рисуем в новой ячейке бомбу
                tableCell[NumberCellForRightButton + rightCounter].classList.remove("red_dot") ; //удаляем в старой ячейке класс и заполняем как было
                tableCell[NumberCellForRightButton + rightCounter].innerHTML = inputImage;

                leftIndicatorBorder = true;
                downIndicatorBorder = tableCell[NumberCellForRightButton + rightCounter - m + 1].classList.contains("down_transit");
                upIndicatorBorder = tableCell[NumberCellForRightButton + rightCounter - m + 1].classList.contains("up_transit");

            
                rightIndicatorBorder = false; //устанавливаем признак правой границы в false

                rightCounter -= m - 1;    //корректируем счетчик позиции
            
                leftCounter = 0;//сбрасываем левый счетчик позиции.
                upCounter = 0; 
                downCounter = 0;



          


            }

        }
            
    };
    up.onclick = function() {
       
        let checkMyShipUp = tableCell[NumberCellForUpButton - upCounter].classList.contains("MyShip");
        if (!checkMyShipUp){
            moveDotUp(" ");
        }
        else {
            moveDotUp("🚢");

        }
        function moveDotUp(inputImage) {
            if(!upIndicatorBorder) {
           
                upCounter += 10;
                tableCell[NumberCellForUpButton - upCounter].classList.add("red_dot");
            
                tableCell[NumberCellForUpButton - upCounter].innerHTML = " 💢 "; //рисуем в новой ячейке бомбу
           
                tableCell[NumberCellForUpButton - upCounter + 10].classList.remove("red_dot");//удаляем в старой ячейке класс red_dot
                tableCell[NumberCellForUpButton - upCounter + 10].innerHTML = inputImage;    //рисуем в старой ячейке плюс чтобы создалась иллюзия "как было"
                upIndicatorBorder = tableCell[NumberCellForUpButton - upCounter].classList.contains("up_transit");//проверяем наличие верхней границы
                downIndicatorBorder = tableCell[NumberCellForUpButton - upCounter].classList.contains("down_transit");
                NumberCellForRightButton = NumberCellForUpButton - upCounter;
                NumberCellInitial = NumberCellForUpButton - upCounter;
                NumberCellForDownButton = NumberCellForUpButton - upCounter;
            
                downCounter = 0;
                leftCounter = 0; 
                rightCounter = 0; 
          
            }
            else {
            //alert("Well done");
                upIndicatorBorder = false; 
                downIndicatorBorder = true; 
                tableCell[(NumberCellForUpButton - upCounter) + 90].classList.add("red_dot");
                tableCell[(NumberCellForUpButton - upCounter) + 90].innerHTML = " 💢 ";
                tableCell[NumberCellForUpButton - upCounter ].classList.remove("red_dot");   
                tableCell[NumberCellForUpButton - upCounter].innerHTML = inputImage;   
            
                NumberCellForDownButton = NumberCellForUpButton - upCounter + 90;
             
                NumberCellForRightButton = NumberCellForUpButton - upCounter + 90 ;
                NumberCellInitial = NumberCellForUpButton - upCounter + 90;
                NumberCellForUpButton = NumberCellForUpButton - upCounter + 90; 
            
                downCounter = 0;            
                upCounter = 0;
                leftCounter = 0; 
                rightCounter = 0;
          
            }
        }

    }; 

    down.onclick = function(){
    // alert("Well done");
        let checkMyShipDown = tableCell[NumberCellForDownButton + downCounter].classList.contains("MyShip");
        if (!checkMyShipDown){
            moveDotDown(" ");

        } else {
            moveDotDown("🚢");
        }

        function moveDotDown(inputImage){ 
            if (!downIndicatorBorder){
            
            
                downCounter += 10;
                upCounter = 0;
                leftCounter = 0;
                rightCounter = 0;
                NumberCellForUpButton = NumberCellForDownButton + downCounter;
                NumberCellInitial = NumberCellForDownButton + downCounter;
                NumberCellForRightButton = NumberCellForDownButton + downCounter;
                tableCell[NumberCellForDownButton + downCounter].classList.add("red_dot");
    
                tableCell[NumberCellForDownButton + downCounter].innerHTML = " 💢 "; //рисуем в новой ячейке бомбу
                tableCell[NumberCellForDownButton + downCounter - 10].classList.remove("red_dot");//удаляем в старой ячейке класс red_dot
                tableCell[NumberCellForDownButton + downCounter - 10].innerHTML = inputImage;    //рисуем в старой ячейке плюс чтобы создалась иллюзия "как было"
                downIndicatorBorder =  tableCell[NumberCellForDownButton + downCounter].classList.contains("down_transit");
                upIndicatorBorder = tableCell[NumberCellForDownButton + downCounter].classList.contains("up_transit"); 
                // NumberCellForUpButton = NumberCellForDownButton + downCounter;
                leftIndicatorBorder = tableCell[NumberCellForDownButton + downCounter].classList.contains("left_transit"); 
                rightIndicatorBorder = tableCell[NumberCellForDownButton + downCounter].classList.contains("right_transit"); 
 
            
            
           
            }
            else{
                // alert("Well done");
                tableCell[NumberCellForDownButton + downCounter - 90].classList.add("red_dot");
    
                tableCell[NumberCellForDownButton + downCounter - 90].innerHTML = " 💢 "; //рисуем в новой ячейке бомбу
                tableCell[NumberCellForDownButton + downCounter ].classList.remove("red_dot");//удаляем в старой ячейке класс red_dot
                tableCell[NumberCellForDownButton + downCounter ].innerHTML = inputImage;    //рисуем в старой ячейке плюс чтобы создалась иллюзия "как было"
            
                downIndicatorBorder = false;
                upIndicatorBorder = true;
                leftIndicatorBorder = tableCell[NumberCellForDownButton + downCounter - 90].classList.contains("left_transit"); 
                rightIndicatorBorder = tableCell[NumberCellForDownButton + downCounter - 90].classList.contains("right_transit"); 
                NumberCellForUpButton = NumberCellForDownButton + downCounter - 90;
                NumberCellInitial = NumberCellForDownButton + downCounter - 90;
                NumberCellForRightButton = NumberCellForDownButton + downCounter - 90;
                NumberCellForDownButton = NumberCellForDownButton + downCounter - 90;
            
                downCounter = 0;
                upCounter = 0;
                leftCounter = 0;
                rightCounter = 0;
             
            }
        }

    };



}
