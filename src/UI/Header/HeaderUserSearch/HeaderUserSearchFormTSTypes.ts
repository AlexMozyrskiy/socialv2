import { IsSearchButtonClickedTSType, UserIdTSType } from '../../../BLL/commonTSTypes';
import { headerSearchFieldValidateErrorTSType } from "./HeaderUserSearchFormContainerTSTypes";


// Типизация для компонента HeaderUserSearchFormContainer
// ---------------------------------- Типизация пропсов -------------------------------------
export type MapStateToPropsTSType = {      // пропсы с данными из контекста

}

export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста

}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте
    // validate: {isValueInteger: (value: any) => boolean, isValuePositive: (value: any) => boolean}
    // register: (validate) => void
    // handleSubmit: (formData: formDataTSType) => void
    // errors: number
    // onSubmit: () => void
    isSearchButtonClicked: IsSearchButtonClickedTSType
    searchFieldValue: any
    setSearchFieldValue: (searchFieldValue: any) => void
    onHeaderSearchFormSubmit: (e: React.SyntheticEvent<EventTarget>) => void
    onHeaderSearchFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    headerSearchFieldValidateError: headerSearchFieldValidateErrorTSType
}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType
// ---------------------------------- / Типизация пропсов -----------------------------------


// --------------------------------- Типизация параметров принимаемых функциями --------------
export type FormDataTSType = {
    id: number
    validateIsNumber: number
}
// --------------------------------- / Типизация параметров принимаемых функциями ------------