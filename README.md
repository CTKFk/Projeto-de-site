# Projeto-de-site

## DOCUMENTAÇÃO: ##

**HTML**

Este arquivo HTML representa um site dedicado ao personagem "Neco-Arc" da série Type-Moon. A estrutura inclui várias seções detalhando diferentes aspectos do personagem, como histórico, personalidade, variações, habilidades, falas e informações adicionais. Abaixo está um resumo dos principais componentes:

1. **Seção Head**:
    - Define o idioma do documento como português brasileiro (`lang="pt-BR"`).
    - Inclui meta tags para codificação de caracteres, compatibilidade e configurações de viewport.
    - Linka CSS externo (`projeto.css`) para estilização e fontes do Google para tipografia.
    - Inclui ícone de atalho (`Neco-Arc-PNG-Clipart.png`) e links de espaço reservado para sons e imagens.

2. **Cabeçalho**:
    - Espaço reservado para a adição de imagem no cabeçalho (Imagem se encontra no arquivo projeto.css)
3. **Menu de Navegação**:
    - Contém links para diferentes seções da página (`#sobre`, `#variações`, `#habilidades`, `#titlevoicelines`, `#mais`).

4. **Seções**:
    - **Sobre**: Introduz Neco-Arc com um vídeo e texto descritivo.
    - **Perfil**: Fornece informações sobre as origens de Neco-Arc e outras variações.
    - **Personalidade**: Descreve os traços de personalidade de Neco-Arc e interações com outros personagens.
    - **Variações**: Exibe imagens das variações de Neco-Arc com links descritivos.
    - **Habilidades**: Detalha o moveset e habilidades de Neco-Arc em jogos, incluindo vídeo do YouTube incorporado.
    - **Falas**: Fornece clipes de áudio das falas de Neco-Arc.
    - **Produtos**: Espaço reservado para conteúdo relacionado a produtos.
    - **Mais Informações**: Inclui um formulário para os usuários enviarem informações adicionais sobre Neco-Arc.
    - **Bibliografia**: Referencia fontes externas, como a página do fandom Type-Moon.

5. **Elementos de Formulário**:
    - Coleta informações do usuário, como nome e e-mail, com validação e placeholders.
    - Inclui uma área de texto para comentários e um botão de envio.

6. **Mídia e Efeitos de Hover**:
    - Apresenta um elemento interativo com uma imagem e arquivo de áudio (seção `Pedro`).

7. **Bibliografia**:
    - Fornece um link para a página do fandom Type-Moon para leitura adicional.

**CSS**

Este arquivo CSS define o estilo para um site com diversas seções, incluindo cabeçalho, corpo, rodapé, navegação, e elementos multimídia como vídeos e áudios. Ele utiliza propriedades modernas como animações, comportamento de rolagem suave e layouts responsivos com grid e flexbox.

Estrutura:
1. Reset de margens e preenchimentos para elementos principais (header, #box1, body, footer).
2. Estilo global para o corpo, incluindo fonte padrão e imagem de fundo.
3. Definição de fontes personalizadas ("Bebas Neue" e "Anton").
4. Configuração de comportamento de rolagem suave para o HTML.
5. Estilo do cabeçalho com imagem de fundo e alinhamento centralizado.
6. Estilo para a seção #box1 com gradiente de fundo e fonte personalizada.
7. Configuração de figuras e vídeos responsivos.
8. Estilo para navegação (#Navegação e #menu), incluindo hover, focus e active.
9. Estilo para imagens e seções, garantindo responsividade.
10. Configuração de layout em grid para seções como #sobre e .listavariação.
11. Estilo para elementos multimídia como áudio e vídeos.
12. Estilo do rodapé com posição fixa e cor de fundo.
13. Definição de animações (spin e bounce) para elementos interativos como .circle e .Pedro.

Animações:
- bounce: Aplica um efeito de "pular" verticalmente.
- spin: Aplica um efeito de rotação contínua.

Notas:
- Utiliza unidades modernas como hwb para cores e propriedades CSS avançadas como grid-template-areas.
