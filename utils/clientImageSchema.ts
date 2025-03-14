'use client';

import * as z from 'zod';

function validateFile() {
    const maxUploadSize = 1024 * 1024;
    const acceptedFileTypes = ['image/'];
    return z
        .instanceof(File)
        .refine((file) => {
            return !file || file.size <= maxUploadSize;
        }, `File size must be less than 1 MB`)
        .refine((file) => {
            return (
                !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
            );
        }, 'File must be an image');
}

export const imageSchema = z.object({
    image: validateFile(),
});
