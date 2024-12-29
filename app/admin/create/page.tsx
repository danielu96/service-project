import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import React from 'react'
import { createPropertyAction } from '@/utils/actions'
import TextAreaInput from '@/components/form/TextAreaInput'
import ImageInput from '@/components/form/ImageInput'
import CategoriesInput from '@/components/form/CategoriesInput'
import PriceInput from '@/components/form/PriceInput'
import CountriesInput from '@/components/form/CountriesInput'
import CounterInput from '@/components/form/CounterInput'
import AmenitiesInput from '@/components/form/AmenitiesInput'


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
                    defaultValue='about it'
                />
                <PriceInput />
                <CategoriesInput />
                <CountriesInput />
                <h3 className='text-lg mt-8 mb-4 font-medium'>Accommodation Details</h3>
                <CounterInput detail='guests' />
                <CounterInput detail='bedrooms' />
                <CounterInput detail='beds' />
                <CounterInput detail='baths' />
                <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
                <AmenitiesInput />
                <TextAreaInput name='description' labelText='Description (10 - 1000 Words)' />
                <ImageInput />
                <SubmitButton className='mt-2' text='create property' />
            </FormContainer>
        </section>
    )
}

export default page