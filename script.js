function gerar(pdf = false, print = false) {
    for (let i = 1; i <= 8; i++)
      document.getElementById(`r${i}`).textContent = document.getElementById(`c${i}`).value;
    
    const relatorio = document.getElementById('relatorio');
    relatorio.style.visibility = 'visible';
    relatorio.style.position = 'static';

    if (pdf) html2pdf().from(relatorio).save();
    else if (print) window.print();
  }

function calcular() {

  let valorUnitario = parseFloat(document.getElementById("c5").value) || 0;
  let quantidade = parseInt(document.getElementById("c4").value) || 0;

  let valorFinal = valorUnitario * quantidade;

  document.getElementById("c6").value = valorFinal;
}

document.getElementById("c5").addEventListener("input", calcular);
document.getElementById("c4").addEventListener("input", calcular);