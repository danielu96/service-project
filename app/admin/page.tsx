import React from 'react'
import { fetchProposals, deleteProposalAction, fetchStats } from '@/utils/actions'
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



async function AdminPage() {
    const data = await fetchStats();
    const proposals = await fetchProposals();
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

            <div >

                <div className='mt-5 grid md:grid-cols-3 gap-4 lg:grid-cols-4 '>
                    <h5 className='mt-5 text-lg font-bold bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>Users: {data.usersCount}</h5>
                    <h5 className='mt-5 text-lg font-bold bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>Products: {data.propertiesCount}</h5>
                    <h5 className='mt-5 text-lg font-bold bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>Bookings: {data.bookingsCount}</h5>
                    <h5 className='mt-5 text-lg font-bold bg-primary-foreground rounded-lg px-3 py-2 border-y-2 border-card-foreground'>Proposals: {proposals.length}</h5>
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