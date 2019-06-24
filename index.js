var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", append);

function append() {
var task = $('.dream').val();

  cardContainer.append(`<center> <div class="wish"> <input type="checkbox" class="checkbox"> <p>  ${task}  </p> </div> </center>`);

  var checkbox = $('.checkbox');
  checkbox.on("click", remove);

$('.dream').val("");
}

function remove() {
event.target.parentNode.remove();
}
