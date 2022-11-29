const router = require('express').Router();
const Todo = require('../db/Todo')

router.get('/all', async(req,res,next) => {
    try {
        const TodosList = await Todo.findAll()
        res.send(TodosList)
    } catch(err) {
        next(err)
    }
})

router.post('/add', async(req,res,next) => {
    try {
        const newTodo = await Todo.create(req.body)
        res.send(newTodo)
    } catch(err) {
        next(err)
    }
})

router.put('/checkoff/:id', async(req,res,next) => {
    try {
        const TodoUpdate = await Todo.findByPk(req.params.id)
        if (TodoUpdate.isDone === true) {
            await TodoUpdate.update({
                isDone: false
            })
        } else {
            await TodoUpdate.update({
                isDone: true
            })
        }
        const allTodos = await Todo.findAll()
        res.send(allTodos)
    } catch(err) {
        next(err)
    }
})

router.delete('/delete/:id', async(req,res,next) => {
    try {
        const TodoDelete = await Todo.findByPk(req.params.id)
        await TodoDelete.destroy()
        const allTodos = await Todo.findAll()
        res.send(allTodos)
    } catch(err) {
        next(err)
    }
})

router.put('/update/:id', async(req,res,next) => {
    try {
        const TodoEdit = await Todo.findByPk(req.params.id)
        await TodoEdit.update(req.body)
        const allTodos = await Todo.findAll()
        res.send(allTodos)
    } catch(err) {
        next(err)
    }
})



module.exports = router