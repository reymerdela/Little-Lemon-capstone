import { BookingForm } from "@/components";
import style from "./BookingPage.module.css";
import headerImage from "../../assets/restaurant chef B.jpg";
const BookingPage = ({
  formData,
  setFormData,
  availableTimes,
  dispatch,
  submitForm,
}) => {
  return (
    <div className={style.container}>
      <div className={`container-padding ${style.header}`}>
        <h1>Reserve your table at Little Lemon</h1>
        <p>
          Enjoy a unique dining experience with the fresh and vibrant flavors of
          our Mediterranean cuisine. Book your table now and let us make your
          visit unforgettable!
        </p>
      </div>
      <div className="container-padding">
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default BookingPage;
