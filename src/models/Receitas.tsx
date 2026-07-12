import React from "react";

type ModeloReceita = {
    imgSrc: string;
    nome: string;
    categoria: "Lanches" | "Caldos" | "Molhos" | "Petiscos";
    descricao: string;
    mais1secaoIngredientes: boolean;
    mais1secaoModoPreparo: boolean;
    ingredientes: string[][];
    modoPreparo: string[][];
}

export class Receitas {

    private receitas = {
        taco: {
            imgSrc: "./../assets/img/tacosMexicanos.png",
            nome: "Tacos",
            categoria: "Lanches",
            descricao: "Tacos são pratos típicos da culinária mexicana, feitos com tortillas de milho ou trigo recheadas com carne, frango, peixe ou vegetais. São servidos com molhos e acompanhamentos como cebola, tomate e guacamole.",
            mais1secaoIngredientes: true,
            mais1secaoModoPreparo: false,
            ingredientes: [
                [ 'Massa',
                    '2 xícaras de farinha de milho pré-cozida da marca venezuelana PAN (branco ou amarelo)',
                    '2 xícaras de água (480 mililitros)',
                    '1 colher de sopa de manteiga (opcional)',
                    '1 colher de chá de sal (colher rasa)'
                ],
                [ 'Recheio',
                    '½ quilograma de carne de porco para grelhar ou fritar',
                    '1 colher de chá de sal grosso',
                    '1 cebola roxa picada',
                    'suco de limão',
                ]
            ],
            modoPreparo: [
                [
                    'Prepare a massa de taco caseira (que também pode ser usada como massa burrito): coloque a água e a manteiga (opcional) numa tigela e, pouco a pouco, enquanto mexe com a mão, adicione a farinha e o sal. Misture e amasse bem para desfazer os grumos.',
                    'À medida que mistura e amassa, poderá sentir que a massa de tacos está ficando mais consistente. Após amassar por 5 minutos, modele em forma de bola e reserve na geladeira por 10 minutos.',
                    'Após esse tempo pegue novamente na massa e volte a amassar. Separe porções, modele em forma de bolinhas e coloque num prato.',
                    'Coloque uma das bolinhas de massa numa tábua de cozinha forrada com plástico filme, para não grudar. Espalme a bolinha de massa com a mão, cubra com um pedaço de plástico filme e abra com a ajuda de um rolo.',
                    'Desgrude o plástico de cima e use uma tigela para cortar o disco de massa, como na foto. Coloque num prato e repita o procedimento com as restantes bolinhas de massa para tacos, empilhando os discos de massa no prato.',
                    'Para cozinhar a massa de tacos simplesmente leve ao fogo alto uma frigideira (sem untar) e coloque um disco de massa. Deixe até dourar, vire e deixe por mais uns segundinhos, para dourar desse lado também. Retire para um prato ou grade de resfriamento e repita.',
                    'Enquanto isso prepare o recheio de carne do taco mexicano! Para simplificar o preparo sugerimos simplesmente fritar ou grelhar carne de porco da sua preferência, temperando com sal e suco de limão. Depois retire e pique em pedacinhos, como na foto.',
                    'Finalmente monte os tacos mexicanos: coloque uma porção de carne no centro da massa, e adicione cebola roxa picada. Se quiser, poderá completar também com guacamole, alface, queijo cheddar ou oaxaca (queijo branco mexicano). Sirva com uma cervejinha e bom apetite!'
                ]
            ]
        },// end taco

        chiliMexicano: {
            imgSrc: "./../assets/img/Chilli-mexicano.jpg",
            nome: "Chili Mexicano",
            categoria: "Caldos",
            descricao: "O Chili Mexicano é um prato tradicional da culinária mexicana, conhecido por sua combinação de sabores picantes e reconfortantes. Ele é feito com carne moída, feijão, tomate, cebola e uma variedade de temperos, como cominho, pimenta chili e alho.",
            mais1secaoIngredientes: false,
            mais1secaoModoPreparo: false,
            ingredientes: [
                [
                    '1 ½ xícara (chá) de feijão-rosinha',
                    '1 cebola bem picada',
                    '3 colheres (sopa) de óleo',
                    '500 gramas de coração de alcatra moído',
                    '3 dentes de alho amassado',
                    '1 colher (chá) de mix d e pimentas: 1 colher (chá) de pimenta vermelha seca + 1 colher (chá) de pimenta- do- reino e pimenta branca + 1 colher (chá) de pimenta jamaicana',
                    '2 ½ tomates',
                    '2 colheres (chá) de sal',
                    '1 colher (sopa) de páprica doce',
                    '1 colher (chá) de cominho',
                    'Pimenta do reino a gosto'
                ]
            ],
            modoPreparo: [
                [
                    'Primeiramente, lave o feijão e despeje em uma panela de pressão. Cubra com água a panela.',
                    'Leve ao fogo até que pegue pressão. A partir daí, deixe no máximo por mais 20 minutos em fogo alto.',
                    'Logo em seguida, coe o feijão e reserve.',
                    'Em uma panela, coloque o óleo e refogue o alho e a cebola e acrescente a carne moída.',
                    'Mexa até que comece a dessorar a carne.',
                    'Então, acrescente uma colher ( chá) do mix de pimentas e misture. A pimenta aqui é a gosto, você pode usar na Receita de Chilli Mexicano as que mais tem costume.',
                    'Por fim, assim que a carne estiver dourada, acrescente os tomates, a páprica doce e o cominho. Deixe cozinhar por 20 minutos.',
                    'Se precisar, acrescente um pouco de água. Prove o sal e acrescente os grãos do feijão.',
                    'Deixe a Receita de Chilli Mexicano cozinhar por mais 10 minutos e desligue o fogo. Salpique salsinha ou queijo por cima, fica ótimo.',
                    'Sirva com as tortillhas e salsa mexicana, fica delicioso.'
                ]
            ]
        },// end chili Mexicano

        pozole: {
            imgSrc: "./../assets/img/pozole.jpg",
            nome: "Pozole",
            categoria: "Caldos",
            descricao: "O pozole é um prato tradicional cheio de história, sabores intensos e simbolismo cultural. Sua base é o hominy (grãos de milho tratados de forma especial) cozido por horas, combinado com carnes, temperos e acompanhamentos frescos.",
            mais1secaoIngredientes: true,
            mais1secaoModoPreparo: false,
            ingredientes: [
                [
                    'Pozole',
                    '500 g de grãos de milho nixtamalizado (hominy), disponível em lojas de produtos mexicanos',
                    '500 g de carne de porco (lombo, pernil ou costela)',
                    '2 dentes de alho',
                    '1 cebola média',
                    '2 folhas de louro',
                    '2 litros de água',
                    'Sal a gosto'
                ],
                [
                    'Molho (pozole rojo)',
                    '3 pimentas secas guajillo',
                    '2 pimentas ancho',
                    '2 tomates maduros',
                    '1 dente de alho',
                    '1 colher de chá de orégano seco',
                    '1 colher de chá de cominho em pó'
                ],
                [
                    'Acompanhamentos tradicionais',
                    'Rabanete fatiado',
                    'Alface ou repolho picado',
                    'Cebola roxa picada',
                    '1 dente de alho',
                    'Tortilhas de milho tostadas',
                    'Limão cortado em gomos',
                    'Pimenta em pó ou molho de pimenta'
                ]
            ],
            modoPreparo: [
                [
                    'Se estiver usando milho seco, lave bem e cozinhe em água com uma pitada de cal virgem (nixtamalização). Se usar hominy enlatado, basta escorrer e lavar os grãos.',
                    'Em uma panela grande, coloque a carne de porco, a cebola, o alho e as folhas de louro.',
                    'Cubra com água e cozinhe em fogo médio até a carne ficar macia (aprox. 1h30).',
                    'Retire a carne, desfie em pedaços médios e reserve o caldo.',
                    'Hidrate as pimentas secas em água quente por 20 minutos.',
                    'Bata no liquidificador com tomate, alho, orégano e cominho até formar um molho liso.',
                    'Coe para eliminar resíduos das cascas das pimentas.',
                    'Volte a carne desfiada para o caldo da panela.',
                    'Adicione o milho e o molho vermelho.',
                    'Cozinhe por mais 30 minutos em fogo baixo, ajustando sal e temperos.',
                    'Sirva o pozole quente, acompanhado de rabanete, repolho, cebola picada, limão e tortilhas tostadas. Cada pessoa pode personalizar o prato conforme o gosto.'
                ]
            ]
        },// end pozole

        guacamole: {
            imgSrc: "./../assets/img/guacamole-original.jpg",
            nome: "Guacamole",
            categoria: "Molhos",
            descricao: "Guacamole é um molho feito com abacate, tomate, cebola, alho e limão. É uma das comidas mais populares da culinária mexicana e pode ser servido como acompanhamento ou como base para outros pratos.",
            mais1secaoIngredientes: false,
            mais1secaoModoPreparo: false,
            ingredientes: [
                [
                    '2 avocados maduros (ou abacates)',
                    '3 pimentas jalapeño',
                    '2 dentes de alho com casca',
                    '1 tomate pequeno maduro (opcional)',
                    '1 cebola-roxa pequena',
                    'Caldo de 1 limão-taiti',
                    'Caldo de 1 limão-taiti',
                    '1/4 de colher de chá de sal (ou a gosto)',
                    '1/4 de colher de chá de pimenta-do-reino (ou a gosto)'
                ]
            ],
            modoPreparo: [
                [
                    'Higienize os vegetais e seque-os com papel-toalha. Retire as sementes do tomate e pique em cubos pequenos. Descasque e pique a cebola em cubinhos. Junte os ingredientes na bancada;',
                    'Em uma frigideira quente, no fogo médio-alto, coloque as pimentas jalapeño e os dentes de alho com casca. Toste levemente os ingredientes, mexendo às vezes para não queimar; ',
                    'Retire os ingredientes da frigideira. Descasque o alho e pique-o em cubos. Retire o talo das pimentas e pique-as em cubos pequenos. Se não quiser um preparo tão apimentado, retire as sementes das pimentas. Abra os avocados, descarte os caroços e extraia a polpa com uma colher. Pique o alho e a cebola;',
                    'Transfira o avocado para uma tigela e amasse com um garfo, até ficar cremoso. Adicione o tomate, a cebola, as pimentas e os dentes de alho picados, misturando bem para incorporar;',
                    'Tempere com o suco do limão, sal e pimenta-do-reino. Misture novamente;',
                    'Finalize com o coentro fresco picado e sirva. A dica é servir com tortilhas ou torradinhas, fica delicioso. Aproveite!'
                ]
            ]
        },// end guacamole

        banderillasMexicanas: {
            imgSrc: "./../assets/img/banderillas-mexicnas.jpg",
            nome: "Banderillas Mexicanas",
            categoria: "Petiscos",
            descricao: "Banderillas Mexicanas são petiscos típicos da culinária mexicana, feitos com carne de porco temperada e servidos com pimenta. São uma excelente opção para aperitivos e refeições rápidas.",
            mais1secaoIngredientes: false,
            mais1secaoModoPreparo: false,
            ingredientes: [
                [
                    '12 salsichas de cachorro-quente',
                    '12 gravetos de madeira12 gravetos de madeira',
                    '1/2 xícara de farinha',
                    '1/2 xícara de farinha de milho (maseca)',
                    '1 colher de sopa de sal',
                    '1/2 colher de sopa de pimenta',
                    '1/2 colher de sopa de pimenta',
                    '1/2 colher de sopa de pimenta',
                    '1/2 colher de sopa de pimenta',
                    'Óleo necessário para fritar'
                ]
            ],
            modoPreparo: [
                [
                    'Misture as farinhas, o sal e a pimenta em uma tigela. (você também pode usar batata cozida em vez de farinha)',
                    'Adicione o leite, o ovo e a colher de óleo.',
                    'Bata até obter uma massa lisa e homogênea.',
                    'Coloque as linguiças de cachorro-quente nos palitos e banhe-as na massa, escorra um pouco na tigela para que não pinge no óleo.',
                    'Frite as linguiças no óleo quente por 2 ou 3 minutos até que fiquem douradas.',
                    'Se o óleo não cobrir, vire para que frite igualmente de todos os lados.',
                    'Remova do óleo e escorra em um papel toalha para absorver o excesso de óleo.'
                ]
            ]
        }// end banderillas Mexicanas
    }

    getReceita(nome: keyof typeof this.receitas, conteudo: keyof ModeloReceita) {
        let retornoGet;

        switch (conteudo) {
            case "ingredientes":
                let retornoIngredientes;
                
                switch (this.receitas[nome]["mais1secaoIngredientes"]) {
                    // caso tenha mais de uma divisão dos ingredientes, retorna elas separadas.
                    case true:
                        retornoIngredientes = this.receitas[nome]["ingredientes"].map(
                            (section, sectionIndex) => (
                                <React.Fragment key={sectionIndex}>
                                    <p className="parteReceitaSemana">
                                        {section[0]}
                                    </p>

                                    <ul className="ingredientesReceitaSemana">
                                        {section.slice(1).map((ingrediente, ingredienteIndex) => (
                                            <li
                                                key={ingredienteIndex}
                                                className="itemIngredienteReceitaSemana"
                                            >
                                                {ingrediente}
                                            </li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            )
                        );
                        break;
                
                    // Se não, volta uma lista só.
                    default:
                        retornoIngredientes = (
                            <ul className="ingredientesReceitaSemana">
                                {this.receitas[nome]["ingredientes"][0].map((ingrediente, ingredienteIndex) => {
                                    return (
                                        <li
                                            key={ingredienteIndex}
                                            className="itemIngredienteReceitaSemana"
                                        >
                                            {ingrediente}
                                        </li>
                                    );
                                })}
                            </ul>
                        ); //end ingredientes
                        break;

                } // end switch case

                retornoGet = (
                    <div className="receitaReceitaSemana-container">

                        <h3 className="posSubtitleTertiary">Ingredientes:</h3>
                        {retornoIngredientes}
                    </div>
                )// retorno do Metodo
                break;

            case "modoPreparo":
                let retornoModoPreparo;
                
                switch (this.receitas[nome]["mais1secaoModoPreparo"]) {
                    // caso tenha mais de uma divisão do modo de preparo, retorna elas separadas.
                    case true:
                        retornoModoPreparo = this.receitas[nome]["modoPreparo"].map(
                            (section, sectionIndex) => (
                                <React.Fragment key={sectionIndex}>
                                    <p className="parteReceitaSemana">
                                        {section[0]}
                                    </p>

                                    <ul className="modoPreparoReceitaSemana">
                                        {section.slice(1).map((instrucao, instrucaoIndex) => (
                                            <li
                                                key={instrucaoIndex}
                                                className="itemModoPreparoReceitaSemana"
                                            >
                                                {instrucao}
                                            </li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            )
                        );
                        break;
                
                    // Se não, volta uma lista só.
                    default:
                        retornoModoPreparo = (
                            <ul className="modoPreparoReceitaSemana">
                                {this.receitas[nome]["modoPreparo"][0].map((instrucao, instrucaoIndex) => {
                                    return (
                                        <li
                                            key={instrucaoIndex}
                                            className="itemModoPreparoReceitaSemana"
                                        >
                                            {instrucao}
                                        </li>
                                    );
                                })}
                            </ul>
                        ) //end ingredientes
                        break;
                } // end switch case

                retornoGet = (
                    <div className="modoPreparoReceitaSemana-container">

                        <h3 className="posSubtitleTertiary">Ingredientes:</h3>
                        {retornoModoPreparo}
                    </div>
                )// retorno do Metodo
                break;

            default:
                retornoGet = this.receitas[nome][conteudo];
                break;
        }// end switch case

        // Retorno do metodo
        return retornoGet;

    }
}