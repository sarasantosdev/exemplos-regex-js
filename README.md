# Exemplo simples do uso de Regex em JS

As expressões regulares (regex) nos ajudam a localizar textos, números, caracteres especiais além de serem muito úteis para a validação de dados como: email e senha.

## Caracteres Básicos
<code>.</code> qualquer caractere<br>
<code>\d</code> dígito de 0-9<br>
<code>\w</code> letra e número<br>
<code>\s</code> espaço<br>
<code>\^</code> ínicio da string<br>
<code>\$</code> final da string.

## Quantificadores (nº vezes)
<code>*</code> 0 ou mais<br>
<code>+</code> 1 ou mais<br>
<code>?</code> 0 ou 1 (opcional)<br>
<code>{n}</code> nº específico de vezes<br>
<code>{n,}</code> pelo menos n vezes<br>
<code>{n,m}</code> entre n e m vezes.

## Conjuntos
<code>[abc]</code> a ou b ou c<br>
<code>[0-9]</code> qualquer número <br>
<code>[a-z]</code> qualquer letra minúscula<br>
<code>[A-Z]</code> qualquer letra maiúscula<br>
<code>[^abc]</code> qualquer letra exceto a ou b ou c<br>

## Flags
<code>g</code> todas as ocorrências<br>
<code>i</code> ignore <br>
<code>m</code> início/fim de cada linha<br>