import { IsSearchButtonClickedTSType, UserIdTSType } from './../../../BLL/commonTSTypes';


// Типизация для компонента HeaderUserSearchFormContainer
// ---------------------------------- Типизация пропсов -------------------------------------
export type MapStateToPropsTSType = {      // пропсы с данными из контекста
    isSearchButtonClicked: IsSearchButtonClickedTSType
}

export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста

}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте
    
}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType
// ---------------------------------- / Типизация пропсов -----------------------------------


// --------------------------------- Типизация параметров принимаемых функциями --------------
export type onHeaderSearchFormSubmit = (searchFieldValue: any) => void
// --------------------------------- / Типизация параметров принимаемых функциями ------------

// --------------------------------- Типизация useStat`s --------------
export type headerSearchFieldValidateErrorTSType = {
    isValidate: boolean
    message: null | string
}
// --------------------------------- / Типизация useStat`s ------------