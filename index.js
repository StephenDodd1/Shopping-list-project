$(function() {

  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    let addItem = $(event.currentTarget).find('#shopping-list-entry')
    $("ul").append(
      "<li><span class='shopping-item'>" +
      addItem.val() + 
      `</span>
      <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`
    );
    addItem.val('')
  });
  
  $('ul').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).parent().parent().toggleClass('shopping-item__checked');
  });

  $('ul').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).parent().parent().remove();
  });
});
