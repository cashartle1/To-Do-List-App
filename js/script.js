function newItem(){

    //add new item to list of items:
    let li = $('<li></li> ')
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }
    
    //cross out an item from list of items
    function crossOut() {
        li.classList.toggle('strike');
    }

    li.on('dblclick', function() {
        li.toggleClass('strike');
    }

    //add the delete button "X"
    let crossOutButton = $('<crosOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem)
    //add class delete (display: none) from the css
    function deleteListItem() {
        li.addClass('delete')
    }


}