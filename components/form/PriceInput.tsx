import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputNumberProps = {
    defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
    return (
        <div className='mb-2'>
            <Label htmlFor='price'>
                Price (zł)
            </Label>
            <Input
                id='price'
                type='number'
                name='price'
                min={0}
                defaultValue={defaultValue || 100}
                required
            />
        </div>
    );
}
export default PriceInput;