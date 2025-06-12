import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async () => {});
export const logIn = createAsyncThunk("auth/login", async () => {});
export const logOut = createAsyncThunk("auth/logout", async () => {});
export const refreshUser = createAsyncThunk("auth/refresh", async () => {});

// Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

//     register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.
//     login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.
//     logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.
//     refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.
