# Cat List 🐾

## Descrição do Projeto

O **CAT List** é um To-Do List personalizado, projetado com carinho para os amantes de gatos! Este projeto é uma maneira divertida e funcional de criar listas de tarefas, seja para compras ou para qualquer lista genérica, com uma pitada de fofura felina.

## [Acesse o CAT List](https://cat-list-sage.vercel.app/)

## Conteúdo do Repositório

### 1. **index.html**
   - Estrutura HTML com cabeçalho, corpo e scripts.
   - Importante: Utilização de meta tags para codificação e visualização responsiva.
   - Inclusão de um favicon (icon.ico).
   - Importação de folha de estilo (style.css).
   - Utilização de imagens: logo.png, background-image.jpg.

### 2. **style.css**
   - Design atraente e responsivo para o aplicativo.
   - Fundo personalizado com imagem de fundo e efeito de escala de cinza.
   - Estilização do logotipo com sombra e elementos de fundo.
   - Utilização de animações para um título dinâmico.
   - Design adaptativo para a seção de entrada de lista.
   - Efeitos de desfoque e estilização para uma aparência moderna.

### 3. **script.js**
   - Implementação da lógica JavaScript para manipulação da lista.
   - Adição dinâmica de itens à lista.
   - Marcação de itens como concluídos ou não.
   - Exclusão de itens da lista.
   - Atualização automática do título da página com efeito de alerta.

## Funcionalidades

- **Adicionar Item:**
  - Escolha entre "Lista de Compras" ou "Lista Genérica".
  - Inclua um item e, opcionalmente, a quantidade.
  - Pressione o botão "Adicionar" ou pressione Enter.

  ```javascript
  function addItem() {
      const listType = document.getElementById('listType').value;
      const itemName = document.getElementById('itemName').value;
      const quantity = document.getElementById('quantity').value;

      // Verifica se o campo de item não está vazio
      if (itemName.trim() === "") {
          alert("Por favor, digite um item.");
          return;
      }

      // Cria um objeto representando o item
      const item = { itemName, quantity, completed: false };

      // Adiciona o item à lista e atualiza a exibição
      todoList.push(item);
      displayList();
      adjustContainerHeight();

      // Limpa os campos de entrada
      document.getElementById('itemName').value = "";
      document.getElementById('quantity').value = "";
  }
  ```

- **Visualização da Lista:**
  - Itens são exibidos de forma clara e organizada.
  - Opção para marcar itens como concluídos ou desfazer a conclusão.
  - Opção para excluir itens da lista.

  ```javascript
  function displayList() {
      const listContainer = document.getElementById('todoList');
      listContainer.innerHTML = "";

      // Itera sobre a lista e cria elementos HTML para cada item
      todoList.forEach((item, index) => {
          const listItem = document.createElement('div');
          listItem.classList.add('list-item');

          // Cria um elemento de span para o nome do item
          const itemName = document.createElement('span');
          itemName.textContent = `${itemCounter}. ${item.itemName}`;
          itemName.style.textDecoration = item.completed ? 'line-through' : 'none';
          listItem.appendChild(itemName);

          // Adiciona a quantidade se existir
          if (item.quantity) {
              const quantity = document.createElement('span');
              quantity.textContent = `Qtd: ${item.quantity}`;
              listItem.appendChild(quantity);
          }

          // Adiciona botões para marcar como concluído e excluir
          const completeBtn = document.createElement('button');
          completeBtn.textContent = item.completed ? 'Desfazer' : 'Concluir';
          completeBtn.onclick = () => toggleComplete(index);
          listItem.appendChild(completeBtn);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Excluir';
          deleteBtn.onclick = () => deleteItem(index);
          listItem.appendChild(deleteBtn);

          // Adiciona o item à lista
          listContainer.appendChild(listItem);

          itemCounter++;
      });

      itemCounter = 1; // Reinicia o contador
  }
  ```

- **Personalização:**
  - O aplicativo se adapta dinamicamente à escolha do tipo de lista.
  - Seção de quantidade aparece apenas para a "Lista de Compras".

  ```javascript
  document.getElementById('listType').addEventListener('change', function() {
      const quantitySection = document.getElementById('quantitySection');
      if (this.value === 'shopping') {
          quantitySection.style.display = 'block';
      } else {
          quantitySection.style.display = 'none';
      }
  });
  ```

## Personalização Adicional

- **Tema Gatos:**
  - Fundo de página com imagem de gatos fofos.
  - Paleta de cores inspirada em tons de pelagem de gatos.

- **Animação de Texto:**
  - Título animado com efeito de preenchimento de texto.

## Como Contribuir

- Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir com novos recursos.
- Faça um fork do projeto, crie uma branch para sua contribuição e envie um pull request.

## Apreciadores de Gatos Unidos! 🐱

Este projeto foi criado com muito carinho por um amante de gatos para a comunidade de amantes de gatos. Aproveite a experiência do Cat List e mantenha-se sintonizado para atualizações emocionantes!

Divirta-se organizando suas tarefas com um toque felino! 😺✨
