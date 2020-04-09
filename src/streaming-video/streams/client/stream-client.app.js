import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './components/streams/stream-create';
import StreamEdit from './components/streams/stream-edit';
import StreamDelete from './components/streams/stream-delete';
import StreamList from './components/streams/stream-list';
import StreamShow from './components/streams/stream-show';
import Header from './components/header';
import history from './history';

/**
 * @component functional
 * @name StreamClientApp
 * @description
 * @param {Object} props - properties
 * @author adam.caldwell
 */
const StreamClientApp = (props) => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default StreamClientApp;
