import React from 'react';
import { Label, Icon, Flag } from 'semantic-ui-react';

export default (props)=>{
  return <div className="ui right floated basic segment">
    <Icon name='user outline' circular color="teal" size="large"/>
    <LanguageContext />
  </div>
}

function LanguageContext(){
  return <div style={{display:"inline"}}>
    <Flag name='es' />
    <Flag name='gb' />
  </div>
}
