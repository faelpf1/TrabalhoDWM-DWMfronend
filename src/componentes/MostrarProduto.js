import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

function MostrarProduto(){
  const preco = 1000.00;
  const [products, setProducts] = useState([]);
  useEffect(() => { productService.getProductsSmall().then(data => setProducts(data));}, []); // eslint-disable-line react-hooks/exhaustive-deps*/


  return(
            <div className="card">
                <DataTable value='{produtos}'>
                    <Column field="nome" header="nome"></Column>
                    <Column field="preço" header="preço"></Column>
                    <Column field="tipo" header="tipo"></Column>
                </DataTable>
            </div>
  );

}

export default MostrarProduto;