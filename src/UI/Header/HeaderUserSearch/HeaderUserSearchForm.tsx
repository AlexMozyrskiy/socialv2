import React from "react";
import ButtonPreloader from "../../common/ButtonPreloader";
import cn from "classnames";
import {
    PropsTSType
} from "./HeaderUserSearchFormTSTypes";
// import { useForm, Resolver } from "react-hook-form";

const HeaderUserSearchForm: React.FC<PropsTSType> = (props) => {

    

    return (
        <form className="header__search">
            <input
                // ref={register}
                // ref={register({
                //     validate: {
                //         isValueInteger: value => Number.isInteger(Number(value)),
                //         isValuePositiveNumber: value => Number(value) > 0
                //         // positive: value => parseInt(value, 10) > 0,
                //         // lessThanTen: value => parseInt(value, 10) < 10 || 'should be lower than 10',
                //     }
                // })}
                name="id"
                type="text"
                className="header__search-field"
                placeholder="Search friend by id"
                value={props.searchFieldValue}
                onChange={(e) => props.onHeaderSearchFormChange(e)} />

            {/* { errors
                && errors.id
                && <p className="animate__animated animate__lightSpeedInRight error__message error_header-searchform">{errors.id.message}</p>
            } */}

            { 
                props.headerSearchFieldValidateError.isValidate ? null : <p className="animate__animated animate__lightSpeedInRight error__message error_header-searchform">{props.headerSearchFieldValidateError.message}</p>
            }

            <button className={cn("button", "button_header-search", { "displaynone": props.isSearchButtonClicked })} onClick={(e) => props.onHeaderSearchFormSubmit(e)}>Search</button>

            <ButtonPreloader displayNone={!props.isSearchButtonClicked} dotsCount={3} classes={["loader", "loader_header-searchByIdButton"]} />
        </form>
    );
}

export default HeaderUserSearchForm;