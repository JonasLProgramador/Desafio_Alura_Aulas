    let h1 = document.querySelector('h1');
    h1 = h1 ? h1.innerText = 'Hora do Desafio' : console.log('H1 inexistente') 
    
    const showClick = () => {
       console.log('O botão foi clicado!')
    }


    const showMessage = () => {
      alert('Eu amo js')
    }


    const askCity = () => {
      let city = prompt('Em qual cidade você esteve ?');
   
      if(!city) return alert('por favor digite uma cidade!');

      alert(`Que interessante você esteve na cidade ${city}, uma bela cidade!`);

    }

   const calculation = () => {
     let n1 = parseInt(prompt('Digite o primeiro numero!'));
     
     let n2 = parseInt(prompt('Digite o segundo numero!'));
     
     if(!n1 || !n2) return alert('Por favor digite um numero');
   
     alert(`Este é o resultado do seu calculo : ` +  (n1 + n2) )

   }

