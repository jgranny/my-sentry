import React, {Component} from 'react';
import {routerReducer} from '../reducers/index.js';
import Dashboard from './Dashboard';
import NavigationDrawer from '../components/NavigationDrawer';
import Feed from './Feed';
import Groups from './Groups';
import GroupForm from '../components/GroupForm';
import GroupView from '../components/GroupView';
import EventForm from '../components/EventForm';
import EventView from '../components/EventView';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Loading from '../components/Loading';
import Datepicker from '../components/Datepicker';
import ErrorModal from '../components/modals/Error';
import Logout from '../components/modals/Logout';
import Delete from '../components/modals/Delete';
import LocationSearch from '../components/modals/LocationSearch';
import SearchResults from '../components/modals/searchResults';

import { connect } from 'react-redux';

import {Router, Modal, Scene, Actions, ActionConst, Switch } from 'react-native-router-flux';

const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
  <Scene key='modal' component={Modal} >
  <Scene key='root' tabs={true} hideNavBar >

    <Scene key="loading" hideNavBar initial={true} component={Loading} />

    <Scene key='menu' hideNavBar component={NavigationDrawer} open={false}>
      <Scene key='events' hideNavBar tabs={true} component={Dashboard} />

      <Scene key='groups' tabs={true} component={Groups} />
      <Scene key='groupForm' tabs={true} component={GroupForm} />
      <Scene key='groupView' tabs={true} component={GroupView} />

      <Scene key='feed' tabs={true} component={Feed}/>
      <Scene key='eventForm' tabs={true} component={EventForm} />
      <Scene key='eventView' tabs={true} component={EventView} />

    </Scene>

    <Scene key='signup' hideNavBar component={Signup} />
    <Scene key='login' hideNavBar tabs={true} component={Login} />

  </Scene>
  <Scene key='logout' duration={1} component={Logout} />
  <Scene key='delete' duration={1} component={Delete} />
  <Scene key='locationSearch' duration={1} component={LocationSearch} />
  <Scene key='searchResults' duration={1} component={SearchResults} />
  <Scene key='errorModal' duration={1} component={ErrorModal} />

  </Scene>
);

export default function Routes() {
  return (
    <RouterWithRedux createReducer={routerReducer} scenes={scenes} />
  );
}
