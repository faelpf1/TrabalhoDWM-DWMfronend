import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

function MostrarProduto(){
  const preco = 1000.00;
    const [products, setProducts] = useState([]);
   /* useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));}, []); // eslint-disable-line react-hooks/exhaustive-deps*/

    const formatCurrency = (value) => {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    const priceBodyTemplate = (preco) => {
        return formatCurrency(preco);
    }

  return(
            <div className="card">
                <DataTable value='{products}'>
                    <Column field="name" header="Name"></Column>
                    <Column header="Image"  ></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} ></Column>
                    <Column field="category" header="Category"></Column>
                </DataTable>
            </div>
  );

}

export default MostrarProduto;