import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import HeaderUserSearchForm from "./HeaderUserSearchForm";
// import { notOwnerUserProfileThunkCreator } from "../../../BLL/notOwnerUserData/thunkCreators";
import { getIsSearchButtonClickedSelector } from "../../../BLL/header/selectors";
import { connect } from "react-redux";
import { RootReducerSateTSType } from "../../../BLL/redux_store/redux-store";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType, headerSearchFieldValidateErrorTSType, onHeaderSearchFormSubmit
} from "./HeaderUserSearchFormContainerTSTypes";
import { returnedHeaderSearchFormValidationObjectTSType, headerSearchFormValidate } from "../../../helpers/validate/headerSearchFormValidate";

const HeaderUserSearchFormContainer: React.FC<PropsTSType> = (props) => {

    let [ searchFieldValue, setSearchFieldValue ] = useState<any>(null);
    let [ searchFieldValidateError, setSearchFieldValidateError ] = useState<headerSearchFieldValidateErrorTSType>( {isValidate: true, message: null} );
    const history = useHistory();                           // добавляет новый УРЛ и компонент перересовывается правильно

    // const { register, handleSubmit, errors } = useForm<formDataTSType>();
    // const history = useHistory();                           // добавляет новый УРЛ и компонент перересовывается правильно

    // const onSubmit = (formData: formDataTSType) => {        // в formData все данные из заполненой формы
    //     formData.id = Number(formData.id)
    //     // действия с заполненными данными, например санки
    //     // console.log(formData.id);
    //     history.push("/profile/" + formData.id);              // добавляет новый УРЛ и компонент перересовывается правильно, роутер автоматом перекидывает на страницк найденного пользователя
    // }

    const onHeaderSearchFormSubmit = (event: React.SyntheticEvent<EventTarget>): void => {
        event.preventDefault();                                                                                                 // отменим станлартную реакцию браузера
        const validationData: returnedHeaderSearchFormValidationObjectTSType = headerSearchFormValidate(searchFieldValue);      // объект возвращаемый после валидации формы
        if(validationData.isValidate) {                                                                                         // если прошли валидацию
            history.push("/profile/" + searchFieldValue);                                                                       // добавляет новый УРЛ и компонент перересовывается правильно, роутер автоматом перекидывает на страницк найденного пользователя
            setSearchFieldValue(null);                                                                                          // сбросим информацию в поле ввода
        } else {                                                                                                                // если не прошли
            setSearchFieldValidateError(validationData);                                                                        // добавим объект в локальный стейт ошибок валидации для отображения ошибки на странице
        }
    }

    const onHeaderSearchFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setSearchFieldValue(event.target.value);                                                // вставим в локадьный стейт value из инпута, для отображения его в поле ввода (флакс)
        if(!searchFieldValidateError.isValidate) {                                              // если есть какието валидационные ошибки, записанные ранее (юзер уже что-то вводил, не прошедшее валидацию)
            setSearchFieldValidateError( {isValidate: true, message: null} );                   // сотрем ошибки валидции при начале набора в инпуте
        }
    }

    return <HeaderUserSearchForm
        // register={register}
        // handleSubmit={handleSubmit}
        // errors={errors.id}
        // onSubmit={onSubmit}
        isSearchButtonClicked={props.isSearchButtonClicked}
        searchFieldValue={searchFieldValue}
        setSearchFieldValue={setSearchFieldValue}
        onHeaderSearchFormSubmit={onHeaderSearchFormSubmit}
        headerSearchFieldValidateError={searchFieldValidateError}
        onHeaderSearchFormChange={onHeaderSearchFormChange}
    />
}


const mapStateToProps = (state: RootReducerSateTSType) => {
    return {
        isSearchButtonClicked: getIsSearchButtonClickedSelector(state)
    }
}

const mapDispatchToProps = {
    // notOwnerUserProfileThunkCreator
}

export default connect<MapStateToPropsTSType, MapDispatchToPropsTSType, OwnPropsTSType, RootReducerSateTSType>(mapStateToProps, mapDispatchToProps)(HeaderUserSearchFormContainer);