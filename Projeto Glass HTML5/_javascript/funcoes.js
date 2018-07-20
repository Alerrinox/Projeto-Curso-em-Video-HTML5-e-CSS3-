	function mudafoto(foto){
		document.getElementById("icone").src=foto;
	}
	function calc_total(){
		var qtd = parseInt(document.getElementById('Quantidade-Glass').value);
		tot = qtd * 1500;
		document.getElementById('Preco-Total-Glass').value = tot;
	}