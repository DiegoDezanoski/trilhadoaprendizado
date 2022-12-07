



var valor1, valor2, sub

valor1=prompt("Entre com um valor")
valor2=prompt("Entre com outro valor")


if(valor1>valor2)
{
    sub=valor1-valor2
    alert("O resultado"+sub)
}

else{
    alert("O programa não permite exibir resultado negativo")
}

 

sub=parseInt(valor1)-parseInt(valor2)

alert("O resultado da subtração é :"+sub)

/*alert(valor1+"-"+valor2+sub);*/
document.write("<h2>"+sub+"</h2>")





/*elabora sub sem resultado negativo*/
