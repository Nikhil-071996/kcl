import { post } from "./axios";


export const submitRegisterForm = async (data: any) => {
    const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    const response = await post('/form-submissions', {
        "cf-turnstile-response": turnstileSiteKey,
        "formId": 2,
        "submissionData": data,
    });

    console.log(response.status);

    return response;
}

export const submitContactForm = async (data: any) => {
    const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    const response = await post('/form-submissions', {
        "cf-turnstile-response": turnstileSiteKey,
        "formId": 2,
        "submissionData": data,
    });


    return response;
}