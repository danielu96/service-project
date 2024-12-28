import React from 'react'
import { fetchProposalDetails, updatePropertyImageAction } from '@/utils/actions'
import ImageInputContainer from '@/components/form/ImageInputContainer';
import { redirect } from 'next/navigation';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { updatePropertyAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import CategoriesInput from '@/components/form/CategoriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import PriceInput from '@/components/form/PriceInput';

async function EditProposalPage({ params }: { params: { id: string } }) {
    const property = await fetchProposalDetails(params.id);
    if (!property) redirect('/');


    return (
        <section>
            <h4 className='mb-4'>Edit</h4>
            <div>
                <ImageInputContainer
                    name={property.name}
                    text='Update Image'
                    action={updatePropertyImageAction}
                    image={property.image}
                >
                    <input type='hidden' name='id' value={property.id} />
                </ImageInputContainer>
                <FormContainer action={updatePropertyAction}>
                    <input type='hidden' name='id' value={property.id} />
                    <div className='grid md:grid-cols-2 gap-8 mb-4 mt-8'>
                        <FormInput
                            name='name'
                            type='text'
                            label='Name (20 limit)'
                            defaultValue={property.name}
                        />
                        <FormInput
                            name='tagline'
                            type='text '
                            label='Tagline (30 limit)'
                            defaultValue={property.tagline}
                        />
                        <PriceInput />
                        <CategoriesInput defaultValue={property.category} />
                    </div>
                    <TextAreaInput
                        name='description'
                        labelText='Description (10 - 100 Words)'
                        defaultValue={property.description}
                    />
                    <SubmitButton text='edit' className='mt-4' />
                </FormContainer>
            </div>

        </section>
    )
}

export default EditProposalPage