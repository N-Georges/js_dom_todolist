window.addEventListener('load', () => {
    const form = document.querySelector('#todo_form')
    const input = document.querySelector('#todo_input')
    const list_el =document.querySelector('#todos')


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert('entrez une tache')
            return;
        }
        const task_el = document.createElement('div') // div avec classe todo
        task_el.classList.add('todo')
        const task_content_el = document.createElement('div') // div avec classe content
        task_content_el.classList.add('content')
        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input') // input avec classe text
        task_input_el.classList.add('text')
        task_input_el.type = 'text'
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')
        task_content_el.appendChild(task_input_el) //ajout de l'input a la div .content

        const task_actions_el = document.createElement('div') //div avec classe action
        task_actions_el.classList.add('action')

        const task_edit_el = document.createElement('button') //button avec classe edit
        task_edit_el.classList.add('edit')
        task_edit_el.innerHTML = 'Edit'

        const task_delete_el = document.createElement('button')  //button avec classe delete
        task_delete_el.classList.add('delete')
        task_delete_el.innerHTML = 'Delete'

        const done = document.createElement('button') //button avec classe done
        done.classList.add('done')
        done.innerHTML = 'Done'


        // ajout des classe delette et edit a la div .actions
        task_actions_el.appendChild(task_edit_el)
        task_actions_el.appendChild(task_delete_el)
        task_actions_el.appendChild(done)
        

        task_el.appendChild(task_actions_el) // ajout de la div .actions a la div .todo
        list_el.appendChild(task_el) // ajout de la div .todo a la div .todos

        input.value = ''
    })
})