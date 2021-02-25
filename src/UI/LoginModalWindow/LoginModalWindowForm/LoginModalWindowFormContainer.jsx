import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import LoginModalWindowForm from "./LoginModalWindowForm";
import { logInThunkCreator } from "../../../BLL/loginModalWindow/thunkCreators"
import {
    getIsLoginButtonClickedSelector, getIsCaptchActiveSelector,
    getCaptchaURLSelector, getResponseErrorTextSelector
} from "../../../BLL/loginModalWindow/selectors";
import { setResponseErrorTextIntoState, toogleIsLoginRequirement } from "../../../BLL/loginModalWindow/actionCreators";
import { setRunUseEffectAppComponent } from "../../../BLL/authUserData/actionCreators";

const LoginModalWindowFormContainer = (props) => {

    const { register, handleSubmit, errors } = useForm();

    function onSubmit(formData) {
        // тут действия которые выполнятся при сабмите формы
        props.toogleIsLoginRequirement(false);      // уберем надпись о необходимости залогиниться
        props.logInThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    function deleteErrorMessage() {             // эта функция вызывсается когда юзер печатает что-либо в полях логин или пароль
        if(props.responseErrorTextFromServer) {       // если в стейте была ошибка от сервера, то при начал5е набора она из сейта и из UI сотрется
            props.setResponseErrorTextIntoState(null);
        }
    }

    return (
        <LoginModalWindowForm
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            deleteErrorMessage={deleteErrorMessage}
            errors={errors}
            isLoginButtonClicked={props.isLoginButtonClicked}
            isCapthaActive={props.isCapthaActive}
            captchaURL={props.captchaURL}
            responseErrorTextFromServer={props.responseErrorTextFromServer}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        isLoginButtonClicked: getIsLoginButtonClickedSelector(state),
        isCapthaActive: getIsCaptchActiveSelector(state),
        captchaURL: getCaptchaURLSelector(state),
        responseErrorTextFromServer: getResponseErrorTextSelector(state)
    }
}

const mapDispatchToProps = {
    logInThunkCreator,
    setResponseErrorTextIntoState,
    setRunUseEffectAppComponent,
    toogleIsLoginRequirement
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalWindowFormContainer);