import React from 'react';
import '../styles/Meta.css';

function Meta({texto,esClick,funcionAdd}){
    return(
        <button className={ esClick ?"btn-add":"btn-delete"}
        onClick={funcionAdd}>
           {texto}
       </button>

    );
}
export default Meta;
""