import type { ReactNode } from "react";
import { CLINIKO_BOOKING_URL } from "./booking";

type BookAppointmentButtonProps = {
    children?: ReactNode;
    className?: string;
    size?: "small" | "default";
};

export default function BookAppointmentButton({
    children = "Book an appointment",
    className = "",
    size = "default",
}: Readonly<BookAppointmentButtonProps>) {
    const sizeClasses = size === "small" ? "min-h-9 px-3 py-1.5 text-sm" : "min-h-11 px-4 py-2";
    const combinedClassName = [
        "inline-flex items-center justify-center rounded-none bg-[#2f7b79] font-semibold text-[#f8fffe] transition-colors hover:bg-[#266866]",
        sizeClasses,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a href={CLINIKO_BOOKING_URL} data-book-appointment="true" className={combinedClassName}>
            {children}
        </a>
    );
}