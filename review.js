"use strict";
function review(avaliacao) {
    if (!avaliacao) {
        console.log('Você não avaliou. Obrigado mesmo assim :(');
        return;
    }
    if (typeof avaliacao === 'number') {
        if (avaliacao > 0 && avaliacao <= 5) {
            if (avaliacao === 1) {
                console.log(`${avaliacao}: muito ruim`);
            }
            else if (avaliacao === 2) {
                console.log(`${avaliacao}: ruim`);
            }
            else if (avaliacao === 3) {
                console.log(`${avaliacao}: mediano`);
            }
            else if (avaliacao === 4) {
                console.log(`${avaliacao}: bom`);
            }
            else {
                console.log(`${avaliacao}: muito bom`);
            }
        }
        else {
            console.log('Apenas notas de 1 à 5');
        }
    }
}
review(6);
review(3);
review(false);
