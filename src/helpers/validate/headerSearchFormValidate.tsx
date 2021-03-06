export type returnedHeaderSearchFormValidationObjectTSType = {
    isValidate: boolean
    message: null | string
}

export const headerSearchFormValidate = (value: any): returnedHeaderSearchFormValidationObjectTSType => {

    if (value === "" || value === null) {
        const returnedObject: returnedHeaderSearchFormValidationObjectTSType = {
            isValidate: false,
            message: "This Field is Required"
        };
        return returnedObject;
    } else if (!Number.isInteger(Number(value))) {
        const returnedObject: returnedHeaderSearchFormValidationObjectTSType = {
            isValidate: false,
            message: "This Field must be Integer"
        };
        return returnedObject;
    } else if ((Number(value) < 1)) {
        const returnedObject: returnedHeaderSearchFormValidationObjectTSType = {
            isValidate: false,
            message: "This Field must be Positive"
        };
        return returnedObject;
    } else {
        return {
            isValidate: true,
            message: null,
        }
    }
}