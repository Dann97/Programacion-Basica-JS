var d = document.getElementById("dibujito");
var lienzo= d.getContext("2d");
//console.log(lienzo);  //provar los atributos

//ahora trazaremos varias lineas
var linea=30;
var l;
for(l=0;l<linea;l++)
{
    yinicial=10*l;
    xfinal=10*(l+1);
    dibujarLineas("red",0,yinicial,xfinal,300);
    dibujarLineas("black",300,yinicial,xfinal,0);
}

for(l=30;l>0;l--)
{
    xinicial=10*l;
    yfinal=(30-l)*10;
    dibujarLineas("blue",xinicial,0,0,yfinal);
}

function dibujarLineas(color,xinicial,yinicial,xfinal,yfinal)
{
        //trazar o empezar un camino en el papel(lienzo)
        lienzo.beginPath(); //arrancamos a dibujar 
        lienzo.strokeStyle= color;// decidimos que la linea sera de color rojo
        lienzo.moveTo(xinicial,yinicial);//nos movimos al punto 100,100
        lienzo.lineTo(xfinal,yfinal);//terminamos hasta aqui la linea
        lienzo.stroke();//dibujarla con el estilo que decidimos de color rojo
        lienzo.closePath();//cerramos y terminamos de dibujar
}
