import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import editUserReducer from './store/reducers/editUserReducer';
import editEmployerReducer from './store/reducers/editEmployeeReducer';
import editAdjustmentsReducer from './store/reducers/editAdjustmentsReducer';
import editAfterFloorAdjustmentsReducer from './store/reducers/editAfterFloorAdjustmentsReducer';
import OPCODefaultsReducer from './store/reducers/OPCODefaultsReducer';
import thunk from 'redux-thunk';
import notificationReducer from "./store/reducers/notificationReducer";
import editSubsidyReducer from "./store/reducers/editSubsidyReducer";
import editBuyOutReducer from "./store/reducers/editBuyOutReducer";
import editFloorsReducer from "./store/reducers/editFloorsReducer";
import MonthlyBonusProofReducer from './store/reducers/monthlyBonusProofReducer';
import WeeklyBonusProofReducer from './store/reducers/weeklyBonusProofReducer';
import CompensationRecapReducer from './store/reducers/compensationRecapReducer';
import unlockCASIReducer from './store/reducers/unlockCASIReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    editUsers: editUserReducer,
    editEmployee: editEmployerReducer,
    editFloors: editFloorsReducer,
    editSubsidies: editSubsidyReducer,
    editBuyOuts: editBuyOutReducer,
    editAdjustments: editAdjustmentsReducer,
    editAfterFloorAdjustments: editAfterFloorAdjustmentsReducer,
    opcoDefaults: OPCODefaultsReducer,
    notifications: notificationReducer,
    monthlyBonusProof: MonthlyBonusProofReducer,
    weeklyBonusProof: WeeklyBonusProofReducer,
    compensationRecap: CompensationRecapReducer,
    unlockCASI: unlockCASIReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
