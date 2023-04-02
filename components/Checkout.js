import { Modal } from "antd";
import { useState } from "react";
import { DatePicker, Input, Select } from "antd";
import dayjs from "dayjs";

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const monthFormat = "YYYY/MM";

  const { Option } = Select;

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={showModal}>logic</button>
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

        <form className="mt-[5%] flex flex-col">
          <input
            type="text"
            required
            placeholder="Name"
            className="lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
          />
          <br />
          <input
            type="email"
            required
            placeholder="Email address"
            className="lg:w-[460px] w-[330px] md:w-[450px] m-auto h-[32px] border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
          />
          <p className="mt-[3%] font-[600] text-x mx-3">Card details</p>
          <div className="lg:flex md:flex  place-items-start justify-start gap-3 mx-2 lg:mx-0 md:mx-0">
            <input
              type="number"
              required
              placeholder="card number"
              className="lg:w-[240px] md:w-[230px] w-[330px] h-[32px] mt-[5%] md:mt-0 lg:mt-0 m-auto border text-[14px] leading-[22px] p-[11px] rounded-[6px] outline-none"
            />
            <Input.Password
              className="lg:w-[99px] md:w-[80px] w-[150px] mr-6 md:mr-0 lg:mr-0 mt-[5%] md:mt-0 lg:mt-0"
              placeholder="cvv"
            />
            <DatePicker
              defaultValue={dayjs("2015/01", monthFormat)}
              format={monthFormat}
              picker="month"
              className="lg:w-[99px] md:w-[90px] w-[150px] outline-none m-auto mt-[5%] md:mt-0 lg:mt-0"
            />
          </div>

          <div className="gap-5 flex flex-col">
            <input
              type="address"
              placeholder="Billing address"
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
      </Modal>
    </>
  );
};

export default Checkout;
