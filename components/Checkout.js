import { Modal } from "antd";
import { useState } from "react";
import { DatePicker, Input, Select } from "antd";
import dayjs from "dayjs";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const monthFormat = "YYYY/MM";

  const { Option } = Select;

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Your payment has been sent`);
    toast.success("Your payment has been sent!");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <div>
        {" "}
        <div onClick={showModal}>Checkout</div>
      </div>
      <Modal
        open={open}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <h3 className="text-xl font-[700]">Payment Details</h3>
        <p className="text-sm">
          Enter details below to purchase your products.
        </p>

        <form className="mt-[5%] flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
          />
          <br />
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
          />
          <p className="mt-[3%] font-[600] text-x mx-3">Card details</p>
          <div className="lg:flex md:flex  place-items-start justify-start gap-3 mx-2 lg:mx-0 md:mx-0">
            <input
              type="number"
              required
              placeholder="card number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="lg:w-[240px] md:w-[230px] w-[330px] h-[32px] mt-[5%] md:mt-0 lg:mt-0 m-auto border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
            />
            <Input.Password
              className="lg:w-[99px] md:w-[80px] w-[150px] mr-6 md:mr-0 lg:mr-0 mt-[5%] md:mt-0 lg:mt-0"
              placeholder="cvv"
              value={cvv}
              required
              onChange={(e) => setCvv(e.target.value)}
            />
            <DatePicker
              defaultValue={dayjs("", monthFormat)}
              format={monthFormat}
              picker="month"
              required
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="lg:w-[99px] md:w-[90px] w-[150px] outline-none m-auto mt-[5%] md:mt-0 lg:mt-0"
            />
          </div>

          <div className="gap-5 flex flex-col">
            <input
              type="address"
              placeholder="Billing address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] border text-[14px] leading-[22px] p-[11px] rounded-[6px] mt-[5%] outline-none"
            />
            <Select
              placeholder="Please select a country"
              className="lg:w-[460px] w-[330px] md:w-[450px] m-auto outline-none"
            >
              <Option value="nigeria">Nigeria</Option>
              <Option value="ghana">Ghana</Option>
              <Option value="usa">U.S.A</Option>
              <Option value="south africa">South Africa</Option>
              <Option value="kenya">Kenya</Option>
            </Select>
          </div>

          <button
            type="submit"
            className="bg-[black] text-white text-x lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] rounded-[6px] mt-[5%] outline-none hover:opacity-75"
          >
            Complete Payment
          </button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </Modal>
    </>
  );
};

export default Checkout;
