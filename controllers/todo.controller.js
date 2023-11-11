// point to the home/index.js view
const todos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false,
  },
];
const renderTodoPage = (req, res) => {
  res.render('pages/todo', { 
    title: 'Todo',
    todos,
  });
};

const addTodo = (req, res) => {
  const { todo } = req.body;
  todos.push({
    id: todos.length + 1,
    title: todo,
    completed: false,
  });

  res.redirect('/todos');
}

const editTodo = (req,res) => {
  try {
    const { id, title } = req.body;
    const todo = todos.find(todo => todo.id === Number(id));
    console.log(todo);
    if (title && todo){
      todo.title = title;  
    }
  } catch (error) {
    console.log(error);
  }
  res.json({message: 'todo updated'});
}



module.exports = {
  renderTodoPage,
  addTodo,
  editTodo
};
