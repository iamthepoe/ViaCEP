window.onload = ()=>{
    const cep = document.querySelector('#inputCep');
    const buscar = document.querySelector('#searchBtn');

    buscar.addEventListener('click', ()=>{
        const opcoes = {
            method: 'GET',
            mode: 'cors',
            catch: 'default'
        }

        fetch('https://viacep.com.br/ws/11750000/json/', opcoes)
        .then((res)=>{
            res.json().then(data=>{
                document.querySelector('#cep').textContent = data.cep;
                document.querySelector('#rua').textContent = data.logradouro;
                document.querySelector('#bairro').textContent = data.bairro;
                document.querySelector('#cidade').textContent = data.localidade;
                document.querySelector('#estado').textContent = data.uf;
            });
        });
    });
}