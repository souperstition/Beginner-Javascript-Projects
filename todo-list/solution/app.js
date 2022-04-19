let input = prompt('What would you like to do?');
const todos = ['Collect chicken eggs', 'Clean litter box'];

while(input !== 'quit' && input !== 'q') {
    if(input === 'list'){
        console.log('*************');
        for (let i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new item?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = prompt('Ok, enter an index to delete:');
        const deleted = todos.splice(index, 1);
        console.log(`Okay, deleted ${deleted}`);
    }
    input = prompt('what would you like to do?')
}

console.log('Okay, quitting...');