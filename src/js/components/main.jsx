
import React from 'react';

import { AppBar, IconButton, TextField, RaisedButton } from 'material-ui';
import Checkbox from 'material-ui/lib/checkbox';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import MonochromePhotos from 'material-ui/lib/svg-icons/image/monochrome-photos';

var Main = React.createClass({
  render() {
    return (
      <div>
        <AppBar title="Sync" 
          iconElementLeft={ <IconButton><MonochromePhotos /></IconButton> }
        />
        <div id="panel">
          <form id="meta">
            <div>
              <TextField
                hintText="COSCUP"
                floatingLabelText="Event Name" />
            </div>
            <div>
              <TextField
                hintText="coscup2015"
                floatingLabelText="Event ID" />
              <span style={{padding: '0 0.5em'}}>Day</span>
              <span style={{width: '1em', display: 'inline-block'}}>
                <TextField fullWidth={true} inputStyle={{textAlign: 'right'}} />
              </span>
              <span style={{padding: '0 0.5em 12px 1em', display: 'inline-block', verticalAlign: 'bottom'}}>
                <Checkbox
                  name="sync_yesterday"
                  value="1"
                  label="Sync Yesterday"
                  labelStyle={{whiteSpace: 'nowrap'}} />
              </span>
            </div>
            <div>
              <TextField
                hintText="/tmp/"
                floatingLabelText="Path" />
            </div>
            <div>
              <DatePicker
                hintText="2015/06/12"
                floatingLabelText="Date"
                labelStyle={{zIndex: '0'}}
                mode="landscape"/>
            </div>
            <div>
              <TextField
                hintText="%a-%t-%n.%e"
                defaultValue="%a-%t-%n.%e"
                floatingLabelText="Filename" />
              <span style={{padding: '0 0.5em 12px 1em', display: 'inline-block', verticalAlign: 'bottom'}}>
                %a: author, %t: time, %n: sn, %e: ext
              </span>
            </div>
            <div className="buttons">
              <RaisedButton label="Hello World!" primary={true} />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default Main;
