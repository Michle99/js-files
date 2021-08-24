function payByHour()
       {
           //Store hourly wage
           var hourlyPay = 15;
          
           //Array to hold all employees data
           var hoursPunchedIn = new Array();
           var i=0, hours;
           var totalPay = 0;
          
           //Reading number of hours
           hours = parseInt(prompt(" Number of Hours Punched In? "));
          
           //Loop till user enters -1 to stop reading
           while(hours != -1)
           {
               //Assigning values to array
               hoursPunchedIn[i] = hours;
               i++;
              
               //Reading data again
               hours = parseInt(prompt(" Number of Hours Punched In? "));
           }
          
           //Creating table header with three columns
           var payroll= "<table style='margin-left: auto; margin-right: auto; margin-top: 50px'; border=10><tr><td style='width: 100px; color: blue; text-align: center;'> ID </td>";
           payroll+= "<td style='width: 200px; color: blue; text-align: center;'> Number of Hours </td>";
           payroll+="<td style='width: 200px; color: blue; text-align: center;'> Employee Pay </td></tr>";
          
           //Loop over array and print each employee information
           for(var k=0; k<hoursPunchedIn.length; k++)
           {
               var pay = 0;
              
               //If number of hours worked greater than 40
               if(hoursPunchedIn[k] >= 40)
                   pay = parseFloat((40 * hourlyPay) + ((hoursPunchedIn[k] - 40) * 1.5 * hourlyPay));
               //If number of hours worked less than 40
               else
                   pay = parseFloat(hoursPunchedIn[k] * hourlyPay);
              
               //Accumulating total pay
               totalPay += pay;
              
               //Adding each row to table
               payroll += "<tr><td style='width: 100px; color: blue; text-align: center;'>" + (k+1) + " </td>";
               payroll += "<td style='width: 200px; color: blue; text-align: center;'> " + hoursPunchedIn[k] + " </td>";
               payroll += "<td style='width: 200px; color: blue; text-align: center;'> $ " + pay + " </td></tr>"
           }
  
           payroll += "</table>";
          
           //Adding table to html page
           document.getElementById("employeeHourlyPay").innerHTML = payroll;
          
           //Adding last summary line
           document.getElementById("totalPaid").innerHTML = "Total paid to the following employees: $ " + totalPay;
       }