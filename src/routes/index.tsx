import * as React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Start from 'src/start/web/components/Start';

export default class AppRouter extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
            <Route exact={true} path="/" component={Start} />
            <Route path="/" component={Start} />
            <Route render={
                (): any => {
                    <div>
                        not found
                    </div>
                }
            } />
        </Switch>
      </div>
    )
  }
}
