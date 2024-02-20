"use client";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function SignupButton() {
    return (
      <div className="mt-4 lg:mt-6 flex">
        <Link
          className="rounded-md flex gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base font-medium"
          href="/user/sign-up"
        >
          Become our partner <div className="mt-1"><HiArrowRight /></div>
        </Link>
      </div>
    );
  }