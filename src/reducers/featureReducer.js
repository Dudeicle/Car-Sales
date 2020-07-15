import { ADD_FEATURE_PRICE_REMOVE_FEATURE, X_OUT_FEATURE } from '../actions/featureActions.js';


export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };



export const reducer = (state = initialState, action) => {

  function isAdded(){
    if (state.car.features === action.payload){
      
    }
  }
    console.log(state)
    switch (action.type) {
        case ADD_FEATURE_PRICE_REMOVE_FEATURE:
            return {
                // BELOW IS ADDING A FEATURE TO THE LEFT PANEL
                ...state,
                  car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                  },
                // BELOW IS ADDING THE ADDED FEATURE'S PRICE TO THE TOTAL
                  additionalPrice: state.additionalPrice + action.payload.price,
                // BELOW IS REMOVING A FEATURE FROM THE RIGHT PANEL
                  additionalFeatures: state.additionalFeatures.filter(function(el) { return el.id !== action.payload })
            };
        case X_OUT_FEATURE:
          return {
              // BELOW IS REMOVING AN ADDED FEATURE
              ...state,
                car: {
                  ...state.car,
                  features: state.features - action.paylod
                },
              // BELOW IS ADDING THE ADDED FEATURE'S PRICE TO THE TOTAL
              additionalPrice: state.additionalPrice + action.payload.price,
              // BELOW IS REMOVING A FEATURE FROM THE RIGHT PANEL
                additionalFeatures: state.additionalFeatures - action.payload  
          }
                
        
        default:
            return state;
    }
}