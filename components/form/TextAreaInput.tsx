import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
    name: string;
    labelText?: string;
    defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>
                {labelText || name}
            </Label>
            <Textarea
                id={name}
                name={name}
                defaultValue={defaultValue || tempDefaultDescription}
                rows={5}
                required
                className='leading-loose'
            />
        </div>
    );
}

const tempDefaultDescription =
    'Best of the best and the better ';
export default TextAreaInput;