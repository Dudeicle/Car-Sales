export const ADD_FEATURE_PRICE_REMOVE_FEATURE = "ADD_FEATURE";
export const addFeature = newFeature => {
    return { type: ADD_FEATURE_PRICE_REMOVE_FEATURE, payload: newFeature };
};

export const X_OUT_FEATURE = "X_OUT_FEATURE";
export const removeFeature = xFeature => {
    return { type: X_OUT_FEATURE, payload: xFeature };
};