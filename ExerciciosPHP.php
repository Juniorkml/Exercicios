<?php

$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];
$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];
$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];
$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];
$arrayDeClientes = [$cliente1, $cliente2, $cliente3];

echo("<b>Resultado exercício 1:</b><br/>");
echo("{$arrayDeClientes[1]->nome} <br/><br/>");

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
];

echo("<b>Resultado exercício 2:</b><br/>");
foreach ($arrayDeClientes as $cliente) {
    $cliente->data_nascimento = $arrayDeNascimento[$cliente->nome];
    //resultado exercício 2
    echo("$cliente->nome nascido em $cliente->data_nascimento <br/>");
}

function comparaDatasNascimento($objUm, $objDois) {
    return strtotime($objUm->data_nascimento) - strtotime($objDois->data_nascimento);
}

usort($arrayDeClientes, 'comparaDatasNascimento');

echo("<br/><b>Resultado exercício 3:</b><br/>");
foreach ($arrayDeClientes as $cliente) {
    //resultado exercício 3
    echo("$cliente->nome nascido em $cliente->data_nascimento <br/>");
}

?>