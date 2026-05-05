const code = document.getElementById("sourceCode").value;

// zobrazí kód
document.getElementById("code").textContent = code;

// vykreslí výsledek
document.getElementById("result").srcdoc = code;