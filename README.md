# PetShop

PetShop es una aplicación de e-commerce diseñada para la gestión de productos relacionados con mascotas. Esta aplicación permite a los usuarios agregar, leer, actualizar y eliminar productos a través de una interfaz web intuitiva.

## Características

- **Crear productos**: Agregar nuevos productos con nombre, url de la img, descripción y precio.
- **Leer productos**: Ver una lista de todos los productos existentes.
- **Actualizar productos**: Editar la información de los productos existentes.
- **Eliminar productos**: Eliminar productos de la lista.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Django, Django REST framework
- **Base de Datos**: MySQL


## Instalación

### Prerrequisitos

- Python 3.x
- MySQL

### Configuración del Backend

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/petshop.git
    cd petshop
    ```

2. Crea y activa un entorno virtual:

    ```bash
    python -m venv venv
    source venv/bin/activate # En Windows: venv\Scripts\activate
    ```

3. Instala las dependencias:

    ```bash
    pip install django djangorestframework mysqlclient
    ```

4. Configura la base de datos MySQL en `myproject/settings.py`:

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'nombre_de_tu_base_de_datos',
            'USER': 'tu_usuario',
            'PASSWORD': 'tu_contraseña',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }
    ```

5. Crea y aplica las migraciones de la base de datos:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. Inicia el servidor de desarrollo:

    ```bash
    python manage.py runserver
    ```

7. Abre tu navegador web y navega a `http://127.0.0.1:8000/`.

### Configuración del Frontend

1. Asegúrate de que tu servidor Django esté corriendo.
2. Abre los archivos HTML en la carpeta `src` en tu navegador o servidor local para interactuar con la aplicación.

## Descripción de Archivos Importantes

### Backend

- **products/models.py**: Define el modelo de datos para los productos.
- **products/serializers.py**: Define el serializador para el modelo de productos.
- **products/views.py**: Contiene las vistas para manejar las solicitudes CRUD.
- **products/urls.py**: Define las rutas específicas para la API de productos.
- **myproject/urls.py**: Incluye las rutas de la aplicación.

### Frontend

- **src/addProduct.html**: Página HTML para agregar productos.
- **index.html**: Página principal que muestra la lista de productos.
- **src/style/addProduct.css**: Estilos CSS para la página de agregar productos.
- **src/js/addProduct.js**: Lógica JavaScript para manejar las operaciones CRUD.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva característica'`).
4. Envía tus cambios a la rama principal (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.




