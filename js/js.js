function pasarPokemon() {
    let idPokemon = document.getElementById("buscar").value;

    fetch(`/Home/Buscar?IDoNombre==${idPokemon}`)

    alert("AAAAAAAAAA"+idPokemon)
}