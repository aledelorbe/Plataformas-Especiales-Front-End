# Plataformas Especiales (Frontend)

Este proyecto consiste en una aplicación web que permite registrar transacciones mediante un formulario, cifra los datos sensibles con AES de 256 bits y se comunica con un backend para procesar la información. Fue desarrollado con **React**, **Zustand** para el manejo del estado global y **React Hook Form** para la validación de formularios.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para la creación de interfaces de usuario.
  - **Hooks utilizados**: `react-hook-form`, `useEffect` y `useMemo`.
  - **Librerías importantes**:
    - **Zustand**: Librería ligera para el manejo de estado global en React.
    - **Axios**: Para realizar peticiones HTTP al backend.
    - **CryptoJS**: Para el cifrado AES de 256 bits de los datos sensibles.
    - **React Hook Form**: Manejo y validación de formularios en React.
    - **React Toastify**: Dependencia encargada de mostrar notificaciones flotantes tras ejecutar eventos.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework CSS para construir interfaces rápidas y fácilmente personalizables.
- **Heroicons**: Íconos SVG de código abierto utilizados para una mejor experiencia visual.

## Funcionalidades

- **Registro de transacciones**: Permite añadir nuevas transacciones. La información que se incluye es: `operación`, `importe`, `cliente` y `secreto`.
- **Validación de formularios**: Utiliza `react-hook-form` para validar los datos ingresados en el formulario por el usuario.
- **Notificaciones flotantes**: Muestra notificaciones de éxito utilizando la dependencia `react-toastify` después de registrar una nueva transacción.
- **Cifrado AES-256**: Se cifra el campo `secreto` antes de enviarlo al backend para mantener la integridad y seguridad de los datos.

## Estructura

- `components/`: Contiene los componentes principales y reutilizables.
- `store/`: Define el estado global con las acciones relacionadas con el registro de transacciones.
- `services/`: Funciones para interactuar con la API externa.
- `types/`: Define los tipos de datos utilizados en la aplicación para mejorar la consistencia y evitar errores.
- `schemas/`: Define las validaciones utilizados en la aplicación para mejorar la consistencia y evitar errores.

## Demo

Puedes ver una demo del proyecto en el siguiente enlace: [Plataformas Especiales (Frontend)](url).

---

# Special Platforms (Frontend)

This project consists of a web application that allows registering transactions through a form, encrypts sensitive data with 256-bit AES, and communicates with a backend to process the information. It was developed with **React**, **Zustand** for global state management, and **React Hook Form** for form validation.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
  - **Hooks used**: `react-hook-form`, `useEffect`, and `useMemo`.
  - **Important libraries**:
    - **Zustand**: A lightweight library for global state management in React.
    - **Axios**: To perform HTTP requests to the backend.
    - **CryptoJS**: For 256-bit AES encryption of sensitive data.
    - **React Hook Form**: For form management and validation in React.
    - **React Toastify**: A dependency used to show floating notifications after events.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: A CSS framework to build fast and easily customizable interfaces.
- **Heroicons**: Open-source SVG icons used to enhance the visual experience.

## Features

- **Transaction Registration**: Allows adding new transactions. The information includes: `operation`, `amount`, `client`, and `secret`.
- **Form Validation**: Uses `react-hook-form` to validate user input data in the form.
- **Floating Notifications**: Displays success notifications using the `react-toastify` dependency after registering a new transaction.
- **AES-256 Encryption**: Encrypts the `secret` field before sending it to the backend to ensure data integrity and security.

## Structure

- `components/`: Contains the main and reusable components.
- `store/`: Defines the global state with actions related to transaction registration.
- `services/`: Functions to interact with the external API.
- `types/`: Defines the data types used in the application to improve consistency and prevent errors.
- `schemas/`: Defines validations used in the application to improve consistency and prevent errors.

## Demo

You can view a demo of the project at the following link: [Special Platforms (Frontend)](url).
