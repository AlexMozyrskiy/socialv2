import { SET_USER_STATUS_INTO_STATE, SET_USER_INFO_INTO_STATE } from "./actionTypes";
import { InitialStateTSType ,NotOwnerUserDataTStype, ActionRedecerTSType } from "./typeScriprtTypes";

const initialState: InitialStateTSType = {
    id: null,
    status: "",
    aboutMe: "",
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
        facebook: null,
        github: null,
        instagram: null,
        mainLink: null,
        twitter: null,
        vk: null,
        website: null,
        youtube: null
    },
    photos: {
        small: null,
        large: null
    }
};

const notOwnerUserDataReducer: NotOwnerUserDataTStype = (state = initialState, action: ActionRedecerTSType) => {
    switch (action.type) {

        case SET_USER_STATUS_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                status: action.status
            };
            return superState;
        }

        case SET_USER_INFO_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                id: action.id,
                aboutMe: action.aboutMe,
                lookingForAJob: action.lookingForAJob,
                lookingForAJobDescription: action.lookingForAJobDescription,
                fullName: action.fullName,
                photos: {
                    ...state.photos,
                    small: action.photoSmall,
                    large: action.photoLarge
                },
                contacts: {
                    ...state.contacts,
                    facebook: action.facebook,
                    github: action.github,
                    instagram: action.instagram,
                    mainLink: action.mainLink,
                    twitter: action.twitter,
                    vk: action.vk,
                    website: action.website,
                    youtube: action.youtube
                }
            };
            return superState;
        }

        default: return state;
    }
};

export default notOwnerUserDataReducer;