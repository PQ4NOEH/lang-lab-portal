import { combineReducers } from 'redux';
import AppModules  from './appModules';
import CleanerWords  from './vocab/stack/cleanerWords';
import StacksResume  from './vocab/stack/stacksResume';

const rootReducer = combineReducers({
  AppModules: AppModules,
  wordStackCleanerWords: CleanerWords,
  wordStacksStacksConfiguration: StacksResume
});

export default rootReducer;
