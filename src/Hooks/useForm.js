import { useState } from "react"

export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial);

    const handleSubmit = (ev) => {

        ev.preventDefault();

        const loginTry = {

            email: users.email,
            password: users.password,
            done: false,
            date: new Date()
        };

        handleNewTask(newTask);

        ev.target.newTask.value = '';
        ev.target.description.value = '';

    };
    
    const handleChange = ({ target }) => {

        const { name, value } = target;

        if (form == '') return;

        setForm({
            ...form,
            [name]: value
        });

    };

    return {
        handleChange,
        handleSubmit,
        form
    };

};