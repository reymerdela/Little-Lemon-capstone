import { Route, Routes, useNavigate } from "react-router";
import App from "./routes/home";
import Layout from "./routes/Layout";
import { useEffect, useReducer, useState } from "react";
import BookingPage from "./routes/BookingPage";
import { fetchAPI, submitAPI } from "../api";
import CofirmedBooking from "./routes/CofirmedBooking";
import ConfirmedBooking from "../components/confirmedBooking/ConfirmedBooking";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (date, action) => {
  return fetchAPI(action);
};

const AppRouter = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const data = localStorage.getItem("formData");
    return data
      ? JSON.parse(data)
      : {
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        };
  });

  const submitForm = (formData) => {
    localStorage.removeItem("formData");
    setFormData({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
    navigate("/confirmed");
    const submited = submitAPI(formData);

    return submited;
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              formData={formData}
              setFormData={setFormData}
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
