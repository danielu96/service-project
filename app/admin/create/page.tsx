import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import React from 'react'
import { createPropertyAction } from '@/utils/actions'
import TextAreaInput from '@/components/form/TextAreaInput'
import ImageInput from '@/components/form/ImageInput'
import CategoriesInput from '@/components/form/CategoriesInput'



const page = () => {
    return (
        <section>
            <h1 className='text-3xl'>Create</h1>
            <FormContainer action={createPropertyAction}>
                <FormInput
                    name='name'
                    type='text'
                    label='Name'
                    defaultValue='some'
                />
                <FormInput
                    name='tagline'
                    type='text '
                    label='Tagline'
                    defaultValue='i have somethong'
                />
                <CategoriesInput />
                <TextAreaInput name='description' labelText='Description (10 - 1000 Words)' />
                <ImageInput />
                <SubmitButton className='mt-2' text='create property' />
            </FormContainer>
        </section>
    )
}

export default page