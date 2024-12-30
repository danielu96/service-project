import React from 'react'
import { fetchProposals, deleteProposalAction } from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import EmptyList from '@/components/home/EmptyList';
import Link from 'next/link';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { StatsLoadingContainer } from '@/components/admin/Loading';
import StatsContainer from '@/components/admin/StatsContainer';

import { Suspense } from 'react';

async function AdminPage() {

    const proposals = await fetchProposals()
    if (proposals.length === 0) {
        return (
            <EmptyList
                heading='No rentals to display.'
                message="create a proposal."
            />
        );
    };


    return (
        <>
            <Suspense fallback={<StatsLoadingContainer />}>
                <StatsContainer />
            </Suspense>
            <div >

                <div className='mt-5 ml-2 flex justify-between '>
                    <h5>Proposals: {proposals.length}</h5>
                </div>
                <Table>
                    <TableCaption>All Yours Proposals</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            {/* <TableHead>Price</TableHead> */}
                            {/* <TableHead>Nights</TableHead> */}
                            {/* <TableHead>Total</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {proposals.map((proposal) => {
                            const { id: propertyId, name } = proposal;
                            // const { totalNightsSum, orderTotalSum } = rental;
                            return (
                                <TableRow key={propertyId}>
                                    <TableCell>
                                        <Link href={`/properties/${propertyId}`}>
                                            {name}</Link>
                                    </TableCell>
                                    {/* <TableCell>{price}</TableCell>
                                <TableCell>{totalNightsSum}</TableCell>
                                <TableCell>{orderTotalSum}</TableCell> */}
                                    <TableCell className='flex items-center gap-2'>
                                        <Link href={`/admin/${propertyId}/edit`}>
                                            <IconButton actionType='edit'></IconButton>
                                        </Link>
                                        <DeleteRental propertyId={propertyId} />
                                    </TableCell>

                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
function DeleteRental({ propertyId }: { propertyId: string }) {
    const deleteProposal = deleteProposalAction.bind(null, { propertyId });
    return (
        <FormContainer action={deleteProposal}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
}


export default AdminPage;