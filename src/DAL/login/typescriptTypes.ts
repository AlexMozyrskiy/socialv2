export type IsAuthResponseTSType = {  // типизируем по документации API
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    message: Array<string>
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}