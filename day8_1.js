/*
	auteur: Chancerel Codjovi (aka codrelphi)
	date: 02.01.2022
	source: https://www.hackerrank.com/challenges/js10-create-a-button/problem
	Day 8: Create a Button
*/

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" lang="fr">
	<title>Day 8: Create a Button</title>

	<style type="text/css">

		#btn {
		    width: 96px;
		    height: 48px;
		    font-size: 24px;
		}
	</style>

</head>
<body>


	<script type="text/javascript">
	
		/*const allH1 = document.getElementsByTagName("h1");
		for (let i=0; i<allH1.length; i++) {
			allH1[i].style.color = 'blue';
			console.log(allH1[i].innerHTML);
		}*/

		var btn = document.createElement("button");
		btn.id = "btn";
		btn.innerHTML = 0;
		document.body.appendChild(btn);

		/*btn.onclick = function() {
		    var nbr = Number(this.innerHTML);
		    nbr += 1;
		    this.innerHTML = nbr.toString();
		    document.body.appendChild(this);
		    
		}*/
		btn.addEventListener('click', function(){
			var nbr = Number(this.innerHTML);
		    nbr += 1;
		    this.innerHTML = nbr.toString();
		    document.body.appendChild(this);
		});
		
	</script>

</body>

</html>