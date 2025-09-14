import {BASE_IMAGE_ULR} from '@/config';

export function validateImgUrlHelper(
    url: string,
    defaultUrl: string
): Promise<string> {
    return new Promise((resolve) => {
        if (!url) {
            return resolve(BASE_IMAGE_ULR + defaultUrl);
        }

        const img = new Image();
        img.src = BASE_IMAGE_ULR + url;

        img.onload = () => resolve(BASE_IMAGE_ULR + url);
        img.onerror = () => resolve(BASE_IMAGE_ULR + defaultUrl);
    });
}