const listaArgumentos = process.argv.slice(2);

console.log('-------------- Executando um FOR --------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}