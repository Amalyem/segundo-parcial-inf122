import React from 'react';
function Meta({texto,esClick,funcionAdd}){
    return(
        
         
        <button className={ esClick ?"btn-add":"btn-delete"}
        onClick={funcionAdd}>
           {texto}
       </button>

    );
}
export default Meta;
