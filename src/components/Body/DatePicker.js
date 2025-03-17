import React, { useState, useEffect } from "react";
import "../Body/DatePicker.scss";

const DatePicker = ({ onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  // Lấy ngày và giờ hiện tại khi component mount
  useEffect(() => {
    const now = new Date();

    // Format ngày dạng yyyy-mm-dd
    const todayStr = now.toISOString().split("T")[0];
    setDate(todayStr);

    // Format giờ hiện tại dạng hh:mm (2 chữ số)
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;
    setTime(currentTime);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      setDateError("Please select a date.");
    } else {
      setDateError("");
    }

    if (!time) {
      setTimeError("Please select a time.");
    } else {
      setTimeError("");
    }

    if (date && time) {
      onSubmit?.({ date, time, additionalInfo });
    }
  };

  return (
    <div className="Date_Picker_Popup_Content">
      <div className="Popup-Inner-content">
        <div className="Drawer_Top">
          <h2 className="date">Day and time for pickup</h2>
          <button
            className="Drawer_Close"
            onClick={onClose}
            aria-label="close-date-picker"
          >
            <svg
              className="Icon Icon-close"
              role="presentation"
              viewBox="0 0 16 14"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <hr className="date-hr" />

        <p className="date-p">
          Orders will be available for pick-up from 10am until 4:30pm on the day
          specified by the customer (no pick-ups on Sundays or Mondays). We hold
          cakes for up to 48 hours, but cannot guarantee the quality of our
          products that are not picked up at the day and time desired.
        </p>

        <form onSubmit={handleSubmit} className="form-date">
          <label htmlFor="date" className="title-date">
            Pickup date:
          </label>
          <input
            className="date-submit"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="Error Date_Error">{dateError}</span>

          <label htmlFor="time" className="title-date">
            Pickup time:
          </label>
          <input
            className="date-submit"
            type="time"
            id="time"
            name="time"
            value={time}
            min="10:00"
            max="16:30"
            onChange={(e) => setTime(e.target.value)}
          />
          <span className="Error Time_Error">{timeError}</span>

          <label htmlFor="additional" className="title-date">
            Additional information:
          </label>
          <textarea
            className="date-submit"
            id="additional"
            name="additional"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />

          <div className="Form_Button Cart_Checkout_Button_Container Relative_To_Mouse">
            <button
              type="submit"
              name="checkout"
              className="Cart_Checkout_Button"
            >
              <span className="span-date">Checkout</span>
            </button>
          </div>
        </form>
      </div>
    </div>
      );
};

export default DatePicker;
