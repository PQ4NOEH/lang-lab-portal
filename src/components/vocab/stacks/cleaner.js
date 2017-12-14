import React from 'react';

export default (props)=>{
return <ul>
  { props.data.map(w=> <li>{w.word}</li>) }
</ul>
}
