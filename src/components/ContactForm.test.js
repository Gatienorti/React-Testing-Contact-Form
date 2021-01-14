import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

test('render form', ()=>{
    render(<ContactForm/>)
})

test ('fill out and submit form without error',() =>{
    act(()=>{
    render(<ContactForm/>)

    const firstNameInput = screen.getByPlaceholderText(/Edd/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const messageInput = screen.getByLabelText(/message/i)

    userEvent.type(firstNameInput,'adr')
    userEvent.type(lastNameInput,'someone')
    userEvent.type(emailInput,'email@email.com')
    userEvent.type(messageInput,'something')
    
    expect(firstNameInput.value).toEqual('adr')
    expect(lastNameInput.value).toEqual('someone')
    expect(emailInput.value).toEqual('email@email.com')
    expect(messageInput.value).toEqual('something')


    const button = screen.getByRole('button')
    async()=>{userEvent.click(button)}
    
    

    })
})