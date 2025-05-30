# Veterinaria

Este proyecto es una aplicación web para gestionar pacientes de una veterinaria, desarrollada con **React**, **Zustand** para el manejo del estado global y **React Hook Form** para la validación de formularios. La aplicación permite registrar, editar, eliminar y actualizar los datos de pacientes, almacenando la información en el almacenamiento local del navegador.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para la creación de interfaces de usuario.
    - **Administrador de estados**: `Zustand`.
    - **Hooks utilizados**: `react-hook-form`, `useEffect` y `useMemo`.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework CSS para construir interfaces rápidas y fácilmente personalizables.
- **Heroicons**: Íconos SVG de código abierto utilizados para una mejor experiencia visual.
- **uuid**: Biblioteca para generar identificadores únicos para los registros.
- **React Hook Form**: Manejo y validación de formularios en React.
- **React Toastify**: Dependencia encargada de mostrar notificaciones flotantes tras ejecutar eventos.

## Funcionalidades

- **Registro de pacientes**: Puedes añadir nuevos pacientes con información como el nombre del paciente, nombre del propietario, email, fecha de ingreso y síntomas.
- **Edición de pacientes**: Los datos de los pacientes registrados se pueden editar.
- **Eliminación de pacientes**: Es posible eliminar el registro de un paciente.
- **Persistencia de datos**: Los datos se almacenan en el almacenamiento local del navegador mediante la integración con Zustand y su middleware de persistencia.
- **Validación de formularios**: Utiliza `react-hook-form` para validar los datos ingresados en el formulario por el usuario.
- **Notificaciones flotantes**: Muestra notificaciones flotantes de éxito utilizando la dependencia `react-toastify` después de registrar o actualizar la información de un paciente, o notificaciones de error después de eliminar la información de un paciente.

## Estructura

- `Components/`: Contiene los componentes principales y reutilizables, como el formulario para agregar o editar un registro, la vista de los títulos de dos apartados principales, y la lista de los pacientes.
- `Store/`: Define el estado global con las acciones relacionadas con la gestión de pacientes, como agregar, editar y eliminar pacientes.
- `Types/`: Define los tipos de datos utilizados en la aplicación para mejorar la consistencia y evitar errores.
- `Utils/`: Contiene funciones auxiliares que dan formato a ciertas cadenas.

## Demo

Puedes ver una demo del proyecto en el siguiente enlace: [Veterinaria](url).

---

# Veterinary Clinic

This project is a web application for managing veterinary clinic patients, developed with **React**, **Zustand** for global state management, and **React Hook Form** for form validation. The application allows registering, editing, deleting, and updating patient data, storing the information in the browser's local storage.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
    - **State manager**: `Zustand`.
    - **Hooks used**: `react-hook-form`, `useEffect`, and `useMemo`.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: CSS framework for quickly building and customizing user interfaces.
- **Heroicons**: Open-source SVG icons used for better visual experience.
- **uuid**: Library for generating unique identifiers for records.
- **React Hook Form**: Form handling and validation in React.
- **React Toastify**: Dependency used to show floating notifications after executing events.

## Features

- **Patient registration**: You can add new patients with information such as the patient's name, owner's name, email, admission date, and symptoms.
- **Patient editing**: The data of registered patients can be edited.
- **Patient deletion**: It is possible to delete a patient's record.
- **Data persistence**: Data is stored in the browser's local storage using Zustand's persistence middleware.
- **Form validation**: Utilizes `react-hook-form` to validate the data entered by the user in the form.
- **Floating notifications**: Shows success notifications using the `react-toastify` dependency after registering or updating patient information, or error notifications after deleting patient information.

## Structure

- `components/`: Contains the main and reusable components, such as the form to add or edit a record, the view of the titles for two main sections, and the list of patients.
- `store/`: Defines the global state with actions related to patient management, such as adding, editing, and deleting patients.
- `types/`: Defines the data types used in the application to improve consistency and prevent errors.
- `utils/`: Contains helper functions that format certain strings.

### Demo

You can view a demo of the project at the following link: [Veterinary Clinic](url).
