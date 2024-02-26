/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Button from "../../ui/Button";
import { Input } from "../input/input";
import ResetImage from "../../assets/reset.svg";
import {
  confirm_password_validation,
  password_validation,
} from "../input/inputValidations";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const tokenizer = localStorage.getItem("token");
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:1985/auth/reset`,
        data,
        {
          headers: {
            Authorization: `${tokenizer}`,
          },
        }
      );
      console.log("Data sent successfully", response.data);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="w-full h-screen flex items-center justify-center gap-12 mx-auto">
      <div className="hidden w-2/3 sm:flex">
        <img
          src={ResetImage}
          className="h-full w-full object-fill"
          alt="Nigerian Native Jollof Rice Image"
        />
      </div>
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <div
          className="flex flex-col gap-6 py-10 px-6 w-full
        "
        >
          <h2 className="text-blue-500 font-crimson_pro font-bold sm:text-3xl text-center text-2xl">
            Eat Good Naija
          </h2>
          <h3 className="font-inter font-bold text-xl sm:text-2xl text-[#101828] text-center">
            Reset your password
          </h3>
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col gap-8 items-center justify-center">
                <Input {...password_validation} />
                <Input {...confirm_password_validation} />

                <Button
                  className="py-2 px-24 rounded-2xl text-white bg-blue-500 w-full"
                  onClick={onSubmit}
                >
                  Reset Password
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
