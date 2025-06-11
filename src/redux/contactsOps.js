import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://683af87043bb370a86745117.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/getAll", async () => {
  const res = await axios.get("/contacts");
  return res.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const res = await axios.post("/contacts", newContact);
    return res.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data;
  }
);
