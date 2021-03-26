import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { useHistory } from 'react-router-dom';

function Menu(){
  const history = useHistory();
  const items = [
        {label: 'Pagina Incial', icon: 'pi pi-fw pi-home'},
        {label: 'Mouse', icon: 'pi pi-fw pi-calendar'},
        {label: 'Teclado', icon: 'pi pi-fw pi-pencil'},
        {label: 'Monitor', icon: 'pi pi-fw pi-file'},
    ];

    const handleOnClick = (items) => {
      if(items='Pagina Incial'){
        return '/'
      }
      if(items='Mouse'){
        return '/'
      }
      if(items='Teclado'){
        return '/'
      }
      if(items='Monitor'){
        return '/'
      }
      return '/';
    }

    return (
        <div>
            <div className="card">
                <TabMenu model={items} onClick={()=>history.push(handleOnClick(items))} />
            </div>
        </div>
    );
}
export default Menu;