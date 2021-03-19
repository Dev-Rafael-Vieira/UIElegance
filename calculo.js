function calcular(){
    altura = document.getElementById("altura").value;
    largura = document.getElementById("largura").value;
    tinta = document.getElementById("tinta").value;

    //tratando das unidades
    largura = largura/10;
    altura = altura/1000;

    //obtendo a quantidade de impresões por papel
    P130 = Math.trunc(130 / largura);
    P160 = Math.trunc(160 / largura);
    P180 = Math.trunc(180 / largura);

    
    if(P130 == P180){
        mensagem = P130 + " impressão(ões) no papel de 130 cm";
        papel = 130;
        impressao_por_papel = P130;
        tinta = tinta * P130;

    } else if (P130 < P160 && P160 == P180){
        mensagem = P160 + " impressão(ões) no papel de 160 cm";
        papel = 160;
        impressao_por_papel = P160;
        tinta = tinta * P160;

    } else {
        mensagem = P180 + " impressão(ões) no papel de 180 cm";
        papel = 180;
        impressao_por_papel = P180;
        tinta = tinta * P180;

    }


    preco_tinta = 0.333375 * tinta;
    mao_de_obra_calandra = 0.99;
    mao_de_obra_impressao = 0.33;
    papel_protecao = 0.9085 * altura;
    depreciacao = 1;
    energia = 0.5;
    sub_total = preco_tinta + mao_de_obra_calandra + mao_de_obra_impressao + papel_protecao + depreciacao + energia;
    
    preco_p130 = 0.671;
    preco_p160 = 0.781;
    preco_p180 = 0.869;
    
    if(papel == 130){
        preco_papel = preco_p130 * altura;
        total = sub_total + preco_papel;
        total = total / impressao_por_papel;
        total = total.toFixed(2);
    }else if (papel == 160){
        preco_papel = preco_p160 * altura;
        total = sub_total + preco_papel;
        total = total / impressao_por_papel;
        total = total.toFixed(2);
    }else if (papel == 180){
        preco_papel = preco_p180 * altura;
        total = sub_total + preco_papel;
        total = total / impressao_por_papel;
        total = total.toFixed(2);   
    }else{
        total = "aconteceu algo errado na seleção do papel !"
    }
    
    preco_tinta = preco_tinta.toFixed(2);

    document.getElementById("total").innerHTML = "O preço da impressão é de R$ "+ total;
    document.getElementById("tipo_papel").innerHTML = "*Melhor aproveitamento:  " + mensagem;
    document.getElementById("preco_tinta").innerHTML = "*O preço da tinta por impressão é de R$ " + preco_tinta;
}