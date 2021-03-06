import {
    setIsModalLoginWindowActive, setIsModalLoginWindowButtonClicked,
    setCaptchaIntoState
} from "./actionCreators";
import { setIsHeaderLoginButtonClicked } from "../../BLL/header/actionCreators";
import { loginAPI } from "./../../DAL/login/api";
import { setResponseErrorTextIntoState } from "./../loginModalWindow/actionCreators";
import { initializedAppThunkCreator } from "../initializedApp/thunkCreators";
import { ResultCodesEnum } from "../../DAL/login/typescriptTypes";

type logInThunkCreatorTSType = (email: string, password: string, rememberMe: boolean, captcha: boolean) => (dispath: Function) => void;

export const logInThunkCreator: logInThunkCreatorTSType = (email, password, rememberMe = false, captcha = false) => async (dispatch) => {
    dispatch(setIsModalLoginWindowButtonClicked(true));

    const data = await loginAPI.logIn(email, password, rememberMe, captcha);

    if (data.resultCode === ResultCodesEnum.Success) {            // если пользователь залогинен
        dispatch(initializedAppThunkCreator());
        dispatch(setIsModalLoginWindowActive(false));
        dispatch(setIsHeaderLoginButtonClicked(false));
        dispatch(setCaptchaIntoState(false, null));
    } else if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {             // captcha
        loginAPI.getCaptcha()
            .then((captchaURL: string) => {
                dispatch(setCaptchaIntoState(true, captchaURL));
            })
    } else if(data.resultCode === ResultCodesEnum.Error) {
        const responseErrorText =  data.messages[0];
        dispatch(setResponseErrorTextIntoState(responseErrorText));
    } else {
        alert("Some Error");
    }

    dispatch(setIsModalLoginWindowButtonClicked(false));
}