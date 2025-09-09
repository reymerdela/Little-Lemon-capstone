import { useEffect, useRef, useState } from "react";
import styles from "./BookingForm.module.css";
import { useNavigate } from "react-router";
const BookingForm = ({
  formData,
  setFormData,
  availableTimes,
  dispatch,
  submitForm,
}) => {
  const [isValid, setValid] = useState(false);
  const form = useRef();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    if (form.current.checkValidity()) {
      setValid(true);
    }
  }, [formData]);

  useEffect(() => {
    if (formData.date) {
      console.log("Nueva Date");
      dispatch(new Date(formData.date));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === "number" ? (value === "" ? "" : parseInt(value, 10)) : value;
    const newData = { [name]: parsedValue };
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <form
      className={styles.bookingForm}
      onSubmit={async (e) => {
        e.preventDefault();
        submitForm(formData);
      }}
      ref={form}
      aria-labelledby="form-title"
    >
      <h1 id="form-title">Booking Form</h1>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          required
          value={formData.date}
          onChange={(e) => {
            handleChange(e);
            dispatch(new Date(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min={1}
          max={10}
          id="guests"
          name="guests"
          required
          value={formData.guests}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <input
        className="button"
        type="submit"
        value="Make Your reservation"
        disabled={!isValid}
        aria-label="On Click"
      />
    </form>
  );
};

export default BookingForm;
