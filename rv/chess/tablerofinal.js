<!doctype html>
<html lang="es">
<style>  
.boton {
    padding: 5px;
    margin: 5px;
    font-size: 1.5em;
    background-color: brown;
    border: solid 2px;
    border-color: black;
    border-radius: 7px;
    cursor: pointer; 
    cursor: hand;
   }
</style>    
<head>
    <meta charset="utf-8">
    <title>Tablero de Ajedrez</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      body { text-align:center; }
    </style>
  </head>

  <body>
      
       <div id="board" style="margin-right:auto;margin-left:auto;">
           <h1>Cargando...</h1>
        </div>
      
    <input type="button" id="flip" class="boton" value="Girar"/>
      <div id="status" style="display:none;"></div>
      <span id="fen" style="display:none;"></span>
      <span id="fen" style="display:none;"></span>
       <select id="promotion" style="display:none;"><option value="q">queens</option></select>
      
      <script src="https://luishdzupiita.github.io/rv/three.min.js"></script>
      <script src="https://luishdzupiita.github.io/rv/torre3.js"></script>
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
      <script src="https://luishdzupiita.github.io/rv/tween.min.js"></script>
      <script src="https://luishdzupiita.github.io/rv/chessboard3js-0.1.1/js/chessboard3.js"></script>
      <script src="https://luishdzupiita.github.io/chess.js"></script>
      <script src="https://luishdzupiita.github.io/rv/ejercicioTableroF.js"></script>
  </body>

</html>
