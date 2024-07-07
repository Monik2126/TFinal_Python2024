document.addEventListener("DOMContentLoaded", function() {
    const addProductForm = document.getElementById('add-product-form');
    const productTable = document.getElementById('product-table');
    const productContainer = document.getElementById('product-container');

    if (addProductForm) {
        addProductForm.addEventListener('submit', function(event) {
            event.preventDefault();
            addProduct();
        });
    }

    if (productTable || productContainer) {
        fetchProducts();
    }
});

function fetchProducts() {
    fetch('http://127.0.0.1:8000/api/products/')
        .then(response => response.json())
        .then(data => {
            if (document.getElementById('product-table')) {
                renderTable(data);
            }
            if (document.getElementById('product-container')) {
                renderCards(data);
            }
        })
        .catch(error => console.error('Error al obtener los productos:', error));
}

function renderTable(products) {
    const tableBody = document.getElementById('product-table')?.getElementsByTagName('tbody')[0];
    if (!tableBody) return;
    tableBody.innerHTML = '';
    products.forEach(product => {
        let row = tableBody.insertRow();
        row.setAttribute('data-id', product.id);
        row.innerHTML = `
            <td><input type="text" value="${product.name}" onchange="editProduct(${product.id}, 'name', this.value)"></td>
            <td><input type="text" value="${product.description}" onchange="editProduct(${product.id}, 'description', this.value)"></td>
            <td><input type="number" step="0.01" value="${product.price}" onchange="editProduct(${product.id}, 'price', this.value)"></td>
            <td><img src="${product.image_url}" alt="Product Image" style="width: 100px;"></td>
            <td><button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button></td>
        `;
    });
}

function renderCards(products) {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) return;
    productContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image_url}" alt="Producto" />
            <div class="card-body">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-price">$${product.price}</span>
                <button class="btn-add-to-cart">Añadir al carrito</button>
            </div>
        `;

        const addToCartButton = card.querySelector('.btn-add-to-cart');
        addToCartButton.addEventListener('click', function () {
            const cartItemCount = document.querySelector('.badge');
            const currentCount = parseInt(cartItemCount.innerText);
            const newCount = currentCount + 1;

            Toastify({
                text: 'Agregado al Carrito',
                duration: 4000,
                gravity: 'bottom',
                position: 'right',
            }).showToast();

            cartItemCount.innerText = newCount;
        });

        productContainer.appendChild(card);
    });
}


function addProduct() {
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const imageUrl = document.getElementById('product-image-url').value;

    const productData = { name, description, price, image_url: imageUrl };

    fetch('http://127.0.0.1:8000/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Producto agregado");
        fetchProducts();
        resetFormFields();
    })
    .catch(error => console.error('Error al agregar el producto:', error));
}

function editProduct(id, field, value) {
    const updateData = { [field]: value };

    fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Producto editado");
        fetchProducts();
    })
    .catch(error => console.error('Error al editar el producto:', error));
}

function deleteProduct(id) {
    fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
        method: 'DELETE'
    })
    .then(response => {
        alert("Producto eliminado");
        fetchProducts();
    })
    .catch(error => console.error('Error al eliminar el producto:', error));
}

function resetFormFields() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image-url').value = '';
}
